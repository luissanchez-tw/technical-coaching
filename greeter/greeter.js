'use strict';

class Greeter {
    greet(name){
        const trimmedName = name.trim();
        const nameCapitalized = trimmedName.charAt(0).toUpperCase() + trimmedName.slice(1);
        return "Hello " + nameCapitalized;
    }
}

module.exports = Greeter;
