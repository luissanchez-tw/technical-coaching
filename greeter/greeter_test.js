'use strict';

const Greeter = require('./greeter.js')

test('Should return Hello Luis given a name Luis', () => {
    const greeter = new Greeter();

    const result = greeter.greet("Luis");

    expect(result).toBe("Hello Luis");
});

test('Should return trimmed result',()=>{
    const greeter = new Greeter();

    const result = greeter.greet(' Luis ');

    expect(result).toBe("Hello Luis");
});

test('Capitalizes the first letter of the name',()=>{
    const greeter = new Greeter();

    const result = greeter.greet('matteo');

    expect(result).toBe("Hello Matteo");
});

test('Capitalizes the first letter of the name and trims',()=>{
    const greeter = new Greeter();

    const result = greeter.greet('   ariess  ');

    expect(result).toBe("Hello Ariess");
});


