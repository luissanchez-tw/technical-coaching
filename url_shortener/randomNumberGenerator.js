class RandomNumberGenerator{
    generate(number = Math.random()) {
        return (number * 10000).toFixed(0);
    }
}

module.exports = RandomNumberGenerator;