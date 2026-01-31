
import http from 'http';

const options = {
    hostname: 'localhost',
    port: 5000,
    path: '/api/user',
    method: 'PATCH',
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json' // Explicitly ask for JSON
    }
};

const req = http.request(options, (res) => {
    console.log(`STATUS: ${res.statusCode}`);
    console.log(`HEADERS: ${JSON.stringify(res.headers)}`);

    let data = '';
    res.on('data', (chunk) => {
        data += chunk;
    });

    res.on('end', () => {
        console.log(`BODY START: ${data.substring(0, 200)}`); // First 200 chars
        if (data.includes('<!DOCTYPE html>')) {
            console.log("VERDICT: Server returned HTML (likely 404 loopback to index.html)");
        } else {
            console.log("VERDICT: Non-HTML response received.");
        }
    });
});

req.on('error', (e) => {
    console.error(`problem with request: ${e.message}`);
});

req.write(JSON.stringify({ firstName: "Test" }));
req.end();
