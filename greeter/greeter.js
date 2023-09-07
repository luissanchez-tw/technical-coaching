'use strict';

function isAfter(currentTime, hours, minutes, seconds) {
    const comparedDate = new Date(currentTime.getFullYear(),currentTime.getMonth(),currentTime.getDate(),hours,minutes,seconds);
    return currentTime.getTime() > comparedDate.getTime();
}

class Greeter {
    greet(name, currentTime) {
        let greet;
        const trimmedName = name.trim();
        const nameCapitalized = trimmedName.charAt(0).toUpperCase() + trimmedName.slice(1);
        if (isAfter(currentTime, 6, 0, 0) && !isAfter(currentTime, 12, 0, 0)) {
            greet = "Good Morning ";
        } else {
            greet = "Hello ";
        }
        return greet + nameCapitalized;
    }
}

module.exports = Greeter;
