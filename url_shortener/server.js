const http = require('http');
const GreetController = require('./greet_feature.js');
const {UrlShortenerController} = require('./url_shortener_feature.js');
const RandomNumberGenerator = require("./randomNumberGenerator");
const Repository = require("./repository");
const hostname = '127.0.0.1';
const port = 8080;

const server = http.createServer(async (req, res) => {
    const payload = await parsePayload(req)
    const query = parseQueryString(req);
    const controller = findController(req);
    console.log("url:", req.url, "\tquery:", query, "\tpayload:", payload);

    const {statusCode, body} = controller.handle(req.url, query, payload);

    res.setHeader('Content-Type', 'application/json');
    res.statusCode = statusCode;
    res.end(JSON.stringify(body));
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});

function findController(req) {
    if (req.url.startsWith('/greet')) {
        return greetController;
    } else if(req.url.startsWith('/url/shorten') || req.url.startsWith('/url/retrieve')){
        return urlShortenerController;
    }else {
        return notFoundController;
    }
}

class NotFoundController {
    handle(url, query, payload) {
        const body = {message: "Not found"};
        return {statusCode: 404, body: body}
    }
}
const notFoundController = new NotFoundController();

const greetController = new GreetController();

const urlShortenerController = new UrlShortenerController(new RandomNumberGenerator(), new Repository());

function parseQueryString(req) {
    const parsed_url = new URL(req.url, `http://${hostname}:${port}`);
    return Object.fromEntries(parsed_url.searchParams);
}

function parsePayload(req) {
    return new Promise((resolve) => {
        if (req.method !== 'POST') {
            resolve({});
            return;
        }

        let requestBody = [];
        req.on('data', (chunks) => {
            requestBody.push(chunks);
        });
        req.on('end', () => {
            resolve(JSON.parse(Buffer.concat(requestBody).toString()));
        });
    })
}

