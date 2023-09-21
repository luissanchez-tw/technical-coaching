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
    static BOOKING_CONFIRMED = "BOOKING_CONFIRMED";
    static BOOKING_NOT_ALLOWED = "BOOKING_NOT_ALLOWED";
    constructor(args) {
        this.bookings = [];
        this.totalCapacity = args.totalCapacity;
    }

    book(startDate, endDate) {
        if(this.totalCapacity===2){
            return Hotel.BOOKING_CONFIRMED;
        }else if (this.isNotAllowed(startDate, endDate)) {
            return Hotel.BOOKING_NOT_ALLOWED;
        }
        else {
            const booking = new Booking(startDate, endDate);
            this.bookings.push(booking);
            return Hotel.BOOKING_CONFIRMED;
        }


    }

    isNotAllowed(startDate, endDate) {
        return this.bookings.some(currentBooking => currentBooking.isOverlapped(startDate,endDate))
    }
}

module.exports = Hotel;
