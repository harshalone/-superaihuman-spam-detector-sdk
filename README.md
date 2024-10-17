# @superaihuman/spam-detector-sdk

This SDK allows you to interact with SuperAIHuman's Spam Detection API.

## Installation

```bash
npm install @superaihuman/spam-detector-sdk
```
# @superaihuman/spam-detector-sdk

A JavaScript SDK for interacting with the Spam Detector API.

## Installation

```bash
npm install @superaihuman/spam-detector-sdk
```

## Usage

### CommonJS

```javascript
const { createClient } = require('@superaihuman/spam-detector-sdk');

const client = createClient({
  apiKey: 'your-api-key',
  appId: 'your-app-id'
});

async function checkSpam() {
  try {
    const result = await client.detectSpam("Check out this amazing product; I've heard great things about it");
    console.log(result);
  } catch (error) {
    console.error(error);
  }
}

checkSpam();
```

### ES Modules (NEXTJS or ReactJS)

```javascript
import { createClient } from '@superaihuman/spam-detector-sdk';

const client = createClient({
  apiKey: 'your-api-key',
  appId: 'your-app-id'
});

async function checkSpam() {
  try {
    const result = await client.detectSpam("Check out this amazing product; I've heard great things about it");
    console.log(result);
  } catch (error) {
    console.error(error);
  }
}

checkSpam();
```


## API Reference

### `createClient(options)`

Creates a new client instance.

Options:
- `apiKey`: Your API key
- `appId`: Your App ID
- `baseURL`: (Optional) The base URL of the API. Defaults to 'https://www.superaihumans.com/api'

Returns a client object with the following method:

### `client.detectSpam(text)`

Detects spam in the provided text.

- `text`: The text to analyze for spam

Returns a promise that resolves to an object containing:
- `text`: The original text
- `score`: The spam score for the text

## License

MIT

