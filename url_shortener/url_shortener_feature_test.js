const {UrlShortenerController, keyFromShortenedUrl} = require('./url_shortener_feature.js');

const randomNumberGenerator = {
    generate: jest.fn(),
}

const repository = {
    save: jest.fn(),
    findOriginalUrl:jest.fn(),
}

const controller = new UrlShortenerController(randomNumberGenerator,repository);

beforeEach(() => {
    jest.clearAllMocks();
});

describe('Shortening the url', () => {
    test('it returns 201', () => {
        const {statusCode} = controller.handle('/url/shorten', {}, {url: 'https://www.google.com'});

        expect(statusCode).toBe(201);
    });

    test('it shortens the url', () => {
        randomNumberGenerator.generate.mockReturnValue('6789');

        const {body} = controller.handle('/url/shorten', {}, {url: 'https://www.google.com'});

        expect(body.shortenedUrl).toMatch('https://tw.ks/6789');
    });

    test('it saves the url in the database', () => {
        randomNumberGenerator.generate.mockReturnValue('1234');

        const {body} = controller.handle('/url/shorten', {}, {url: 'https://www.google.com'});

        expect(repository.save.mock.calls.length).toEqual(1);
        expect(repository.save.mock.calls[0]).toEqual(['1234', 'https://www.google.com']);
    });
});

describe('Retrieving the url', () => {
    test('it returns 200', () => {
        const {statusCode} = controller.handle('/url/retrieve', {shortenedUrl: 'http://tw.ks/2345'}, {});

        expect(statusCode).toBe(200);
    });

    test('it returns the original url', () => {
        const originalUrl = 'https://www.google.com';
        const shortenedUrl ='http://tw.ks/2345';
        const urlKey = '2345';
        repository.findOriginalUrl.mockReturnValue(originalUrl);

        const {body} = controller.handle('/url/retrieve?shortenedUrl=whatever', {shortenedUrl: shortenedUrl}, {});

        expect(repository.findOriginalUrl.mock.calls.length).toEqual(1);
        expect(repository.findOriginalUrl.mock.calls[0]).toEqual([urlKey]);
        expect(body.originalUrl).toBe(originalUrl);
    });
});
