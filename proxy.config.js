const proxy = [
    {
      context: '/api',
      target: 'http://localhost:8000',
      pathRewrite: { '^/api': '' }
    }
  ];
  module.exports = proxy