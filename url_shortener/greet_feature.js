class GreetController {
    handle(url, query, payload) {
        const name = query.name || 'world';
        const body = {message: `Hello, ${name}!`};
        return {statusCode: 200, body: body};
    }
}

module.exports = GreetController;
