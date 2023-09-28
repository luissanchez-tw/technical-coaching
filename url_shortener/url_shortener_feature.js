class UrlShortenerController {
    constructor() {
    }

    handle(url, params, payload) {
        const shortenedUrl = `https://tw.ks/1234`
        return {statusCode : 201, body: {shortenedUrl: shortenedUrl}};
    }
}

module.exports = UrlShortenerController;
