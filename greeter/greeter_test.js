'use strict';

const Greeter = require('./greeter.js')

const HELLO_TIME = new Date(2020, 1, 1, 14 ,0, 0);
test('Should return trimmed result', () => {
    const greeter = new Greeter();
    const result = greeter.greet(' Luis ', HELLO_TIME);
    expect(result).toBe("Hello Luis");
});

test('Capitalizes the first letter of the name', () => {
    const greeter = new Greeter();
    const result = greeter.greet('matteo', HELLO_TIME);
    expect(result).toBe("Hello Matteo");
});

test('Capitalizes the first letter of the name and trims', () => {
    const greeter = new Greeter();
    const result = greeter.greet('   ariess  ', HELLO_TIME);
    expect(result).toBe("Hello Ariess");
});


test('Returns greet in logs', () => {
    let argumentToLogToUser;
    function logToUser(greet){
        return argumentToLogToUser = greet;
    }
    const greeter = new Greeter(logToUser);
    greeter.greet("Luis", HELLO_TIME);
    expect(argumentToLogToUser).toBe("Hello Luis");
});

[
    {currentTime: "5:59:59", expectedGreet: "Good night"},
    {currentTime: "6:00:00", expectedGreet: "Good morning"},
    {currentTime: "12:00:00", expectedGreet: "Good morning"},
    {currentTime: "12:00:01", expectedGreet: "Hello"},
    {currentTime: "12:01:00", expectedGreet: "Hello"},
    {currentTime: "17:59:59", expectedGreet: "Hello"},
    {currentTime: "18:00:00", expectedGreet: "Good evening"},
    {currentTime: "21:59:59", expectedGreet: "Good evening"},
    {currentTime: "22:00:00", expectedGreet: "Good night"},

].forEach( (it)=>{
        test(`Returns ${it.expectedGreet} for the time ${it.currentTime}`, () => {
            const greeter = new Greeter();
            const currentDate= new Date('December 17, 1995 '+it.currentTime);
            const result = greeter.greet('Matteo', currentDate);
            expect(result).toBe(it.expectedGreet+" Matteo");
        })
})
