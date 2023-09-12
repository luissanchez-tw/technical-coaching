'use strict';

function isAfter(currentTime, hours, minutes, seconds) {
    const comparedDate = new Date(currentTime.getFullYear(),currentTime.getMonth(),currentTime.getDate(),hours,minutes,seconds);
    return currentTime.getTime() > comparedDate.getTime();
}

function defaultLogToUserFuntion(greet){
    console.log(greet);
}


class Greeter {

    constructor(logToUserFunction  = defaultLogToUserFuntion) {
        this.logToUserFunction = logToUserFunction;
    }

    greet(name, currentTime = new Date()) {
        let greet;
        const trimmedName = name.trim();
        const nameCapitalized = trimmedName.charAt(0).toUpperCase() + trimmedName.slice(1);
        if (isAfter(currentTime, 5, 59, 59) && !isAfter(currentTime, 12, 0, 0)) {
            greet = "Good morning "+ nameCapitalized;
        }else if(isAfter(currentTime, 17, 59, 59)&& !isAfter(currentTime, 21, 59, 59)){
            greet = "Good evening "+ nameCapitalized;
        }else if(isAfter(currentTime, 21, 59, 59) || !isAfter(currentTime, 6, 0, 0)){
            greet = "Good night "+ nameCapitalized;
        } else {
            greet = "Hello "+ nameCapitalized;
        }
        this.logToUserFunction(greet);
        return greet;
    }
}

module.exports = Greeter;
