const UrlShortenerController = require('./url_shortener_feature.js');

const randomNumberGenerator = {
    generate: jest.fn(),
}

const controller = new UrlShortenerController();

beforeEach(() => {
    jest.clearAllMocks();
});

describe('Shortening the url', () => {
    test('it returns 201', () => {
        const {statusCode} = controller.handle('/url/shorten', {}, {url: 'https://www.google.com'});

        expect(statusCode).toBe(201);
    });

    test('it shortens the url', () => {
        randomNumberGenerator.generate.mockReturnValue(6789)

        const {body} = controller.handle('/url/shorten', {}, {url: 'https://www.google.com'});

        expect(body.shortenedUrl).toMatch('https://tw.ks/6789');
    });

    xtest('it saves the url in the database', () => {
    });
});

describe('Retrieving the url', () => {
    xtest('it returns 200', () => {
        const {statusCode} = controller.handle('/url/retrieve', {shortenedUrl: 'http://tw.ks/2345'}, {});

        expect(statusCode).toBe(200);
    });

    xtest('it returns the original url', () => {
    });
});
