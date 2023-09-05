'use strict';

class Greeter {
    greet(name, currentTime) {
        let greet;
        const trimmedName = name.trim();
        const nameCapitalized = trimmedName.charAt(0).toUpperCase() + trimmedName.slice(1);
        if (currentTime.getHours()>= 6 && currentTime.getHours() !=12) {
            greet ="Good Morning ";
        }else{
            greet ="Hello ";
        }
        return greet + nameCapitalized;
    }
}

module.exports = Greeter;
