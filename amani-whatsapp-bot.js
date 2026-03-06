const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse incoming requests
app.use(bodyParser.json());

// Main endpoint for the Express server
app.get('/', (req, res) => {
    res.send('Welcome to the Amani WhatsApp Bot!');
});

// Webhook handler for WhatsApp Business API
app.post('/webhook', (req, res) => {
    const message = req.body;
    // Handle the incoming message from WhatsApp
    console.log('Received message:', message);

    // Respond with a 200 OK status
    res.status(200).send('Webhook received!');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});