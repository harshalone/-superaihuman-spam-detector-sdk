import axios from 'axios';

export function createClient({ apiKey, appId, baseURL = 'https://www.superaihumans.com/api' }) {
  const client = axios.create({
    baseURL,
    headers: {
      'x-api-key': apiKey,
      'x-app-id': appId,
      'Content-Type': 'application/json',
    },
  });

  return {
    async detectSpam(text) {
      try {
        const response = await client.post('/spam', { text });
        return response.data;
      } catch (error) {
        throw handleError(error);
      }
    }
  };
}

function handleError(error) {
  if (error.response) {
    return new Error(`API error: ${error.response.status} - ${error.response.data.message}`);
  } else if (error.request) {
    return new Error('No response received from the API');
  } else {
    return new Error('Error setting up the request');
  }
}
