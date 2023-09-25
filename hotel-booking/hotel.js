'use strict';
const Range = require('./range.js')

class Booking {
    constructor(range) {
        this.range = range;
    }

    isOverlapped(range) {
        return this.range.isOverlapped(range);
    }
}


class Hotel {
    static BOOKING_CONFIRMED = "BOOKING_CONFIRMED";
    static BOOKING_NOT_ALLOWED = "BOOKING_NOT_ALLOWED";

    constructor(args) {
        this.bookings = [];
        this.totalCapacity = args.totalCapacity;
    }

    book(startDate, endDate) {
        const range = new Range(startDate, endDate);
        if (this.getFreeCapacityForThisRange(range) > 0) {
            const booking = new Booking(range);
            this.bookings.push(booking);
            return Hotel.BOOKING_CONFIRMED;
        } else {
            return Hotel.BOOKING_NOT_ALLOWED;
        }
    }

    getFreeCapacityForThisRange(range) {
        return this.totalCapacity - this.getRoomsBookedInRange(range);
    }

    getRoomsBookedInRange(range) {
        return this.bookings.filter(b => b.isOverlapped(range)).length;
    }
}

module.exports = Hotel;