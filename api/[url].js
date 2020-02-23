const options = {
  requireHeader: ['origin', 'x-requested-with'],
  removeHeaders: ['cookie', 'cookie2']
};
const cors_proxy = require('../lib/cors-anywhere').createServer(options);

module.exports = (req, res) => {
  cors_proxy.emit('request', req, res);
};
