# @superaihuman/spam-detector-sdk

This SDK allows you to interact with SuperAIHuman's Spam Detection API.

## Installation

```bash
npm install @superaihuman/spam-detector-sdk
```

## Usage
```
const { createClient } = require('@superaihuman/spam-detector-sdk');

// Initialize the client with your API key
const client = createClient('your-api-key-here');

// Example: Check if content is spam
client.checkSpam('This is a test message')
  .then(result => {
    console.log('Spam Detection Result:', result);
  })
  .catch(error => {
    console.error('Error:', error);
  });

```
