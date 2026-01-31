
import axios from 'axios';
import { wrapper } from 'axios-cookiejar-support';
import { CookieJar } from 'tough-cookie';

const jar = new CookieJar();
const client = wrapper(axios.create({ jar }));

const BASE_URL = 'http://localhost:5000/api';

async function testAuth() {
    const username = `testuser_${Date.now()}`;
    const password = 'password123';
    const email = `${username}@example.com`;

    try {
        console.log(`1. Registering user: ${username} with email ${email}`);
        const regRes = await client.post(`${BASE_URL}/register`, {
            username,
            password,
            email
        });
        console.log('Registration Status:', regRes.status);
        console.log('Registration Data:', regRes.data);

        if (regRes.data.email !== email) {
            console.error('FAILURE: Email was not saved correctly.');
        } else {
            console.log('SUCCESS: Email saved matches input.');
        }

        console.log('\n2. Logging in');
        const loginRes = await client.post(`${BASE_URL}/login`, {
            username,
            password
        });
        console.log('Login Status:', loginRes.status);

        console.log('\n3. Accessing Protected Route (/api/user)');
        const userRes = await client.get(`${BASE_URL}/user`);
        console.log('User Route Status:', userRes.status);
        console.log('User Data:', userRes.data);

        if (userRes.data.username === username && userRes.data.email === email) {
            console.log('\nSUCCESS: Auth flow with email verified!');
        } else {
            console.error('\nFAILURE: User data mismatch.');
        }

    } catch (error: any) {
        console.error('\nERROR:', error.response ? error.response.data : error.message);
    }
}

testAuth();
