import Stripe from 'stripe';
import { db } from "./db";
import { users } from "@shared/schema";
import { eq } from "drizzle-orm";

if (!process.env.STRIPE_SECRET_KEY) {
    console.warn("STRIPE_SECRET_KEY is not set. Stripe features will not work.");
}

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || "", {
    apiVersion: '2025-01-27.acacia',
    typescript: true,
});

// Configure your price IDs here
// In a real app, you might fetch these from Stripe or store in DB
const PRO_PRICE_ID = process.env.STRIPE_PRO_PRICE_ID || "price_pro_placeholder";

export async function createCheckoutSession(userId: string, userEmail: string) {
    if (!stripe) throw new Error("Stripe not initialized");

    // Get or create customer
    let user = await db.query.users.findFirst({
        where: eq(users.id, userId),
    });

    if (!user) throw new Error("User not found");

    let customerId = user.stripeCustomerId;

    if (!customerId) {
        const customer = await stripe.customers.create({
            email: userEmail,
            metadata: { userId },
        });
        customerId = customer.id;

        await db.update(users)
            .set({ stripeCustomerId: customerId })
            .where(eq(users.id, userId));
    }

    const session = await stripe.checkout.sessions.create({
        customer: customerId,
        mode: 'subscription',
        payment_method_types: ['card'],
        line_items: [
            {
                price: PRO_PRICE_ID,
                quantity: 1,
            },
        ],
        success_url: `${process.env.REPL_SLUG ? `https://${process.env.REPL_SLUG}.${process.env.REPL_OWNER}.repl.co` : 'http://localhost:5000'}/dashboard?success=true`,
        cancel_url: `${process.env.REPL_SLUG ? `https://${process.env.REPL_SLUG}.${process.env.REPL_OWNER}.repl.co` : 'http://localhost:5000'}/pricing?canceled=true`,
        metadata: {
            userId,
        },
    });

    return session;
}

export async function createPortalSession(userId: string) {
    if (!stripe) throw new Error("Stripe not initialized");

    const user = await db.query.users.findFirst({
        where: eq(users.id, userId),
    });

    if (!user || !user.stripeCustomerId) {
        throw new Error("User has no Stripe customer ID");
    }

    const session = await stripe.billingPortal.sessions.create({
        customer: user.stripeCustomerId,
        return_url: `${process.env.REPL_SLUG ? `https://${process.env.REPL_SLUG}.${process.env.REPL_OWNER}.repl.co` : 'http://localhost:5000'}/dashboard`,
    });

    return session;
}

export async function handleWebhook(body: any, signature: string) {
    if (!process.env.STRIPE_WEBHOOK_SECRET) {
        throw new Error("Webhook secret not confirmed");
    }

    let event: Stripe.Event;

    try {
        event = stripe.webhooks.constructEvent(
            body,
            signature,
            process.env.STRIPE_WEBHOOK_SECRET
        );
    } catch (err: any) {
        throw new Error(`Webhook signature verification failed: ${err.message}`);
    }

    switch (event.type) {
        case 'checkout.session.completed': {
            const session = event.data.object as Stripe.Checkout.Session;
            const userId = session.metadata?.userId;
            const subscriptionId = session.subscription as string;

            if (userId && subscriptionId) {
                await db.update(users)
                    .set({
                        stripeSubscriptionId: subscriptionId,
                        subscriptionStatus: 'active',
                        subscriptionTier: 'pro'
                    })
                    .where(eq(users.id, userId));
            }
            break;
        }
        case 'customer.subscription.updated': {
            const subscription = event.data.object as Stripe.Subscription;
            const customerId = subscription.customer as string;

            // Find user by customer ID
            const user = await db.query.users.findFirst({
                where: eq(users.stripeCustomerId, customerId),
            });

            if (user) {
                await db.update(users)
                    .set({
                        subscriptionStatus: subscription.status,
                        subscriptionTier: subscription.status === 'active' ? 'pro' : 'free'
                    })
                    .where(eq(users.id, user.id));
            }
            break;
        }
        case 'customer.subscription.deleted': {
            const subscription = event.data.object as Stripe.Subscription;
            const customerId = subscription.customer as string;

            const user = await db.query.users.findFirst({
                where: eq(users.stripeCustomerId, customerId),
            });

            if (user) {
                await db.update(users)
                    .set({
                        subscriptionStatus: 'canceled',
                        subscriptionTier: 'free'
                    })
                    .where(eq(users.id, user.id));
            }
            break;
        }
    }

    return { received: true };
}
