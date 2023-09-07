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
        if (isAfter(currentTime, 5, 59, 59) && !isAfter(currentTime, 12, 0, 0)) {
            greet = "Good Morning ";
        }else if(isAfter(currentTime, 17, 59, 59)&& !isAfter(currentTime, 22, 0, 0)){
            greet = "Good Evening ";
        } else {
            greet = "Hello ";
        }
        return greet + nameCapitalized;
    }
}

module.exports = Greeter;
