'use strict';

class Booking {
    constructor(start,end) {
        this.start = start;
        this.end = end;
    }

    isOverlapped(startDate,endDate){
        return (startDate >= this.start && startDate < this.end) ||
        (endDate > this.start && endDate < this.end) ||
        startDate < this.start && endDate >= this.end
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
            const booking = new Booking(startDate, endDate);
            this.bookings.push(booking);
            return "BOOKING CONFIRMED";
        }

    }

    isNotAllowed(startDate, endDate) {
        return this.bookings.some(currentBooking => currentBooking.isOverlapped(startDate,endDate))
    }
}

module.exports = Hotel;
