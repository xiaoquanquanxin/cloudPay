const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = function (app){
    app.use(
        createProxyMiddleware('/property-api', {
            target: 'https://cloudpay-dev.hachi-tech.com',
            changeOrigin: true,
        }),
        createProxyMiddleware('/api', {
            target: 'https://common.hachi-tech.com',
            changeOrigin: true,
        })
    );
};