const GreetController = require('./greet_feature.js');

test('tests greeter Controller returns hello,World!', () => {
    const greeterController = new GreetController();

    const {body,statusCode} =greeterController.handle('/greet',{}, {});

    expect(body.message).toBe("Hello, world!");
    expect(statusCode).toBe(200);
});

test('tests greeter Controller with query parameter', () => {
    const greeterController = new GreetController();

    const {body,statusCode} =greeterController.handle('/greet',{name:'Joe'},{});

    expect(body.message).toBe("Hello, Joe!");
    expect(statusCode).toBe(200);
});

