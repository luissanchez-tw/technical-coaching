'use strict';

class Booking {
    constructor(start,end) {
        this.start = start;
        this.end = end;
    }
}

class Hotel {

    constructor() {
        this.bookings = [];
    }

    book(startDate, endDate) {
        if (this.isNotAllowed(startDate, endDate)) {
            return "BOOKING_NOT_ALLOWED";
        } else {
            this.previousStart = startDate;
            this.previousEnd = endDate;
            const booking = new Booking(startDate, endDate);
            this.bookings.push(booking);
            return "BOOKING CONFIRMED";
        }

    }

    isNotAllowed(startDate, endDate) {
        if (this.bookings.length === 0) {
            return false;
        }
        const booking = this.bookings[0];
        return (startDate >= booking.start && startDate < booking.end) ||
            (endDate > booking.start && endDate < booking.end) ||
            startDate < booking.start && endDate >= booking.end;
    }
}

module.exports = Hotel;
