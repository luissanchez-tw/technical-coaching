'use strict';

class Hotel {

    constructor() {
        this.previousBookingStart = undefined;
        this.previousBookingEnd = undefined;
    }

    book(startDateOfBooking, endDateOfBooking) {
        if ((startDateOfBooking > this.previousBookingStart && startDateOfBooking < this.previousBookingEnd) ||
            (endDateOfBooking > this.previousBookingStart && endDateOfBooking < this.previousBookingEnd) ||
            (startDateOfBooking === this.previousBookingStart && endDateOfBooking === this.previousBookingEnd)) {
            return "BOOKING_NOT_ALLOWED";
        } else {
            this.previousBookingStart = startDateOfBooking;
            this.previousBookingEnd = endDateOfBooking;
            return "BOOKING CONFIRMED";
        }

    }
}

module.exports = Hotel;
