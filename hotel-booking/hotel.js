'use strict';

class Booking {
    constructor(start, end) {
        this.start = start;
        this.end = end;
    }

    isOverlapped(startDate, endDate) {
        return (startDate >= this.start && startDate < this.end) ||
            (endDate > this.start && endDate < this.end) ||
            startDate < this.start && endDate >= this.end
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
        if (this.getFreeCapacityForThisRange(startDate, endDate) > 0) {
            const booking = new Booking(startDate, endDate);
            this.bookings.push(booking);
            return Hotel.BOOKING_CONFIRMED;
        } else {
            return Hotel.BOOKING_NOT_ALLOWED;
        }
    }


    getFreeCapacityForThisRange(startDate, endDate) {
        return this.totalCapacity - this.getRoomsBookedInRange(startDate, endDate);
    }

    getRoomsBookedInRange(startDate, endDate) {
        return this.bookings.filter(b => b.isOverlapped(startDate, endDate)).length;
    }
}

module.exports = Hotel;
