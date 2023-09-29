class UrlShortenerController {
    constructor(randomNumberGenerator) {
        this.randomNumberGenerator = randomNumberGenerator
    }

    handle(url, params, payload) {
        console.log("We arrived before randomnumber!")
        const randomNumber = this.randomNumberGenerator.generate();
        console.log("We arrived after randomnumber: "+randomNumber)
        const shortenedUrl = `https://tw.ks/${randomNumber}`;
        return {statusCode : 201, body: {shortenedUrl: shortenedUrl}};
    }
}

module.exports = UrlShortenerController;
