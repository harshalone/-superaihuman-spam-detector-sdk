const fetch = require('node-fetch');  // Using node-fetch for HTTP requests

class SpamDetectorClient {
  constructor(apiKey) {
    if (!apiKey) {
      throw new Error('API key is required to create a client');
    }
    this.apiKey = apiKey;
    this.baseUrl = 'https://www.superaihuman.com/api'; 
  }

  // Example: Method to check if content is spam
  async checkSpam(content) {
    const response = await fetch(`${this.baseUrl}/check-spam`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${this.apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ content })
    });

    const result = await response.json();
    if (!response.ok) {
      throw new Error(result.error || 'An error occurred');
    }

    return result;  // Return the response from the API
  }

  // Additional methods for other endpoints
  async getReport(id) {
    const response = await fetch(`${this.baseUrl}/spam-report/${id}`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${this.apiKey}`,
      }
    });

    const result = await response.json();
    if (!response.ok) {
      throw new Error(result.error || 'An error occurred');
    }

    return result;
  }
}

module.exports = SpamDetectorClient;
