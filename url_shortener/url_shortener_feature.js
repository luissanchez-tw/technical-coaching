class UrlShortenerController {
    constructor(randomNumberGenerator,repository) {
        this.randomNumberGenerator = randomNumberGenerator;
        this.repository=repository;
    }

    handle(url, params, payload) {
        const randomNumber = this.randomNumberGenerator.generate();
        const shortenedUrl = `https://tw.ks/${randomNumber}`;
        this.repository.save(randomNumber,payload.url);
        return {statusCode : 201, body: {shortenedUrl: shortenedUrl}};
    }
}

module.exports = UrlShortenerController;
