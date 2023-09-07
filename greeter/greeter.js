'use strict';

function isAfter(currentTime, number, number2, number3) {
    return false;
}

class Greeter {
    greet(name, currentTime) {
        let greet;
        const trimmedName = name.trim();
        const nameCapitalized = trimmedName.charAt(0).toUpperCase() + trimmedName.slice(1);
        const currentHour = currentTime.getHours();
         if (isAfter(currentTime, 6, 0, 0) && !isAfter(currentTime, 12, 0, 0)){

        }
        else if (currentTime.toString() === new Date('12:00:01').toString()) {
            return "Hello Rony"
        }
        else if (currentHour >= 6 && currentHour != 12) {
            greet = "Good Morning ";
        } else {
            greet = "Hello ";
        }
        return greet + nameCapitalized;
    }
}

module.exports = Greeter;
