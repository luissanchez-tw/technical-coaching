class UrlShortenerController {
    constructor(randomNumberGenerator,repository) {
        this.randomNumberGenerator = randomNumberGenerator;
        this.repository=repository;
    }

    handle(url, params, payload) {
        if (url.startsWith("/url/retrieve")) {
            const urlKey = keyFromShortenedUrl(params.shortenedUrl);
            const originalUrl = this.repository.findOriginalUrl(urlKey);
            console.log(originalUrl,"THIS IS THE ORIGINAL URL");
            return {statusCode : 200, body: {originalUrl: originalUrl}};
        }
        const randomNumber = this.randomNumberGenerator.generate();
        const shortenedUrl = `https://tw.ks/${randomNumber}`;
        this.repository.save(randomNumber,payload.url);
        return {statusCode : 201, body: {shortenedUrl: shortenedUrl}};
    }
}

function keyFromShortenedUrl(shortenedUrl) {
    const urlSplitted = shortenedUrl.split("/");
    return urlSplitted[3];
}

module.exports = {UrlShortenerController};
