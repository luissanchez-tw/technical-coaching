'use strict';

const Greeter = require('./greeter.js')

const EARLY_MORNING = new Date(2020, 1, 1, 2, 0, 0);


test('Should return Hello Luis given a name Luis', () => {
    const greeter = new Greeter();
    const result = greeter.greet("Luis", EARLY_MORNING);
    expect(result).toBe("Good night Luis");
});

test('Should return trimmed result', () => {
    const greeter = new Greeter();
    const result = greeter.greet(' Luis ', EARLY_MORNING);
    expect(result).toBe("Good night Luis");
});

test('Capitalizes the first letter of the name', () => {
    const greeter = new Greeter();
    const result = greeter.greet('matteo', EARLY_MORNING);
    expect(result).toBe("Good night Matteo");
});

test('Capitalizes the first letter of the name and trims', () => {
    const greeter = new Greeter();
    const result = greeter.greet('   ariess  ', EARLY_MORNING);
    expect(result).toBe("Good night Ariess");
});

test('Returns good morning in the correct time', () => {
    const greeter = new Greeter();
    const currentTime = new Date('December 17, 1995 06:24:00');
    const result = greeter.greet('Rony', currentTime);
    expect(result).toBe("Good morning Rony");
});

test('Doesnt Returns good morning in the incorrect time', () => {
    const greeter = new Greeter();
    const currentTime = new Date('December 17, 1995 12:00:01');
    const result = greeter.greet('Rony', currentTime);
    expect(result).toBe("Hello Rony");
});

test('Returns Good evening in the correct time', () => {
    const greeter = new Greeter();
    const currentTime = new Date('December 17, 1995 18:00:00');

    const result = greeter.greet('Laura', currentTime);

    expect(result).toBe("Good evening Laura");
});
test('Doesnt return Good evening in the incorrect time', () => {
    const greeter = new Greeter();
    const currentTime = new Date('December 17, 1995 22:00:01');

    const result = greeter.greet('Laura', currentTime);

    expect(result).toBe("Good night Laura");
});

test('Returns Good night in the correct time', () => {
    const greeter = new Greeter();
    const currentTime = new Date('December 17, 1995 22:00:00');

    const result = greeter.greet('Francesca', currentTime);

    expect(result).toBe("Good night Francesca");
});

test('Returns Good night in the correct time', () => {
    const greeter = new Greeter();
    const currentTime = new Date('December 17, 1995 00:00:00');

    const result = greeter.greet('Francesca', currentTime);

    expect(result).toBe("Good night Francesca");
});

test('Returns greet in logs', () => {
    const greeter = new Greeter();
    const currentTime = new Date('December 17, 1995 00:00:00');
    const logSpy = jest.spyOn(console, 'log');
    greeter.greet('Francesca', currentTime);
    expect(logSpy).toHaveBeenCalledWith("Good night Francesca");
});