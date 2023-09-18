'use strict';

class Hotel {

    constructor() {
        this.previousStart = undefined;
        this.previousEnd = undefined;
    }

    book(startDate, endDate) {
        if ((startDate > this.previousStart     && startDate < this.previousEnd) ||
            (endDate > this.previousStart       && endDate < this.previousEnd) ||
            (startDate === this.previousStart   && endDate === this.previousEnd) ||
            startDate < this.previousStart      && endDate > this.previousEnd) {
            return "BOOKING_NOT_ALLOWED";
        } else {
            this.previousStart = startDate;
            this.previousEnd = endDate;
            return "BOOKING CONFIRMED";
        }

    }
}

module.exports = Hotel;
