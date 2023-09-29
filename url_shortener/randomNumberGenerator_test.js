const RandomNumberGenerator = require('./randomNumberGenerator.js');

test('tests randomNumber!', () => {
    const randomNumberGenerator = new RandomNumberGenerator();

    const result= randomNumberGenerator.generate(0.1);

    expect(result).toBe('1000');
});

test('tests randomNumber with a more realistic Math.random', () => {
    const randomNumberGenerator = new RandomNumberGenerator();

    const result= randomNumberGenerator.generate(0.5678784675);

    expect(result).toBe('5679');
});