const createProxyMiddleware = require('http-proxy-middleware');
const {env} = require('process');

const target = env.ASPNETCORE_HTTPS_PORT ? `https://localhost:${env.ASPNETCORE_HTTPS_PORT}` :
    env.ASPNETCORE_URLS ? env.ASPNETCORE_URLS.split(';')[0] : 'http://localhost:2707';



const context = [
    "/User",
    "/Playlist",
    "/GetImage",
    "/Recommendations",
    "/Community",
    "/hub"

];


// https://stackoverflow.com/questions/72108782/net-6-with-react-wont-connect-to-signalr
module.exports = function (app) {
    const appProxy = createProxyMiddleware(context, {
        target: target,
        secure: false,
        ws: true,
        // headers: {
        //     Connection: 'Keep-Alive'
        // },
    });

    app.use(appProxy);
};
