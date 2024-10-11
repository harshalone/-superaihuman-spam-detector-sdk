const SpamDetectorClient = require('./client');

module.exports = {
  createClient: function(apiKey) {
    return new SpamDetectorClient(apiKey);
  }
};
