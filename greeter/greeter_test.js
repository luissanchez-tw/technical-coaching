'use strict';

const Greeter = require('./greeter.js')

const EARLY_MORNING = new Date(2020, 1, 1, 2, 0 , 0);

test('Should return Hello Luis given a name Luis', () => {
    const greeter = new Greeter();

    const result = greeter.greet("Luis", EARLY_MORNING);

    expect(result).toBe("Hello Luis");
});

test('Should return trimmed result',()=>{
    const greeter = new Greeter();

    const result = greeter.greet(' Luis ', EARLY_MORNING);

    expect(result).toBe("Hello Luis");
});

test('Capitalizes the first letter of the name',()=>{
    const greeter = new Greeter();

    const result = greeter.greet('matteo', EARLY_MORNING);

    expect(result).toBe("Hello Matteo");
});

test('Capitalizes the first letter of the name and trims',()=>{
    const greeter = new Greeter();

    const result = greeter.greet('   ariess  ', EARLY_MORNING);

    expect(result).toBe("Hello Ariess");
});

test('Returns good morning in the correct time',()=>{
    const greeter = new Greeter();
    const currentTime = new Date('December 17, 1995 06:24:00');

    const result = greeter.greet('Rony',currentTime);

    expect(result).toBe("Good Morning Rony");
});

test('Doesnt Returns good morning in the incorrect time',()=>{
    const greeter = new Greeter();
    const currentTime = new Date('December 17, 1995 12:00:01');

    const result = greeter.greet('Rony',currentTime);

    expect(result).toBe("Hello Rony");
});

test('Returns good morning and trims and capitalizes',()=>{
    const greeter = new Greeter();
    const currentTime = new Date('December 17, 1995 06:24:00');

    const result = greeter.greet('   ariess  ',currentTime);

    expect(result).toBe("Good Morning Ariess");
});

