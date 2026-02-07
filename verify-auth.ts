import axios from 'axios';

// 1. Dynamic URL: This lets you hop between localhost, 127.0.0.1, and your IP
export const BASE_URL = window.location.hostname.includes("vercel.app")
  ? "https://debation.onrender.com/api" 
  : `http://${window.location.hostname}:5000/api`;

// 2. Create the client: Browser handles cookies automatically with withCredentials
const client = axios.create({
    baseURL: BASE_URL,
    withCredentials: true 
});

async function testAuth() {
    const username = `testuser_${Date.now()}`;
    const password = 'password123';
    const email = `${username}@example.com`;

    try {
        console.log(`--- STARTING AUTH TEST ON: ${BASE_URL} ---`);
        
        // 1. Register
        console.log(`1. Registering: ${username}`);
        const regRes = await client.post(`/register`, {
            username,
            password,
            email
        });
        console.log('Registration Status:', regRes.status);

        // 2. Login
        console.log('2. Logging in...');
        const loginRes = await client.post(`/login`, {
            username,
            password
        });
        console.log('Login Status:', loginRes.status);

        // 3. Access Protected Route (The "Persistence" Test)
        console.log('3. Testing session persistence (/api/user)...');
        const userRes = await client.get(`/user`);
        console.log('User Route Status:', userRes.status);
        
        if (userRes.data.username === username) {
            console.log('✅ SUCCESS: You are logged in and recognized!');
        } else {
            console.error('❌ FAILURE: Session was not saved.');
        }

    } catch (error: any) {
        console.error('❌ ERROR:', error.response ? error.response.data : error.message);
    }
}

// Run the test
testAuth();