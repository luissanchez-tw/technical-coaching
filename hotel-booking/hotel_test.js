'use strict';

const Hotel = require('./hotel.js')

let hotel;
beforeEach(() => {
    hotel = new Hotel();
})

function date(month, day) {
    return new Date(2023, month, day);
}

describe("check that we don't allow overlapping bookings", () => {

    test('booking without previous bookings', () => {
        const startDate = date(10, 1);
        const endDate = date(10, 2);

        const result = hotel.book(startDate, endDate);

        expect(result).toBe("BOOKING CONFIRMED");
    });

    test('booking when date is taken', () => {
        hotel.book(date(10, 1), date(10, 2));

        const result = hotel.book(date(10, 1), date(10, 2));

        expect(result).toBe("BOOKING_NOT_ALLOWED");
    });

    test('booking then new booking right after', () => {
        hotel.book(date(10, 1), date(10, 2));

        const result = hotel.book(date(10, 2), date(10, 3));

        expect(result).toBe("BOOKING CONFIRMED");
    });

    test('booking then new booking right before', () => {
        hotel.book(date(10, 1), date(10, 2));

        const result = hotel.book(date(9, 30), date(10, 1));

        expect(result).toBe("BOOKING CONFIRMED");
    });

    test('booking overlapping the first night', () => {
        hotel.book(date(10, 1), date(10, 4));

        const result = hotel.book(date(10, 1), date(10, 2));

        expect(result).toBe("BOOKING_NOT_ALLOWED");
    });

    test('booking overlapping the middle night', () => {
        hotel.book(date(10, 1), date(10, 4));

        const result = hotel.book(date(10, 2), date(10, 3));

        expect(result).toBe("BOOKING_NOT_ALLOWED");
    });

    test('booking overlapping the last night', () => {
        hotel.book(date(10, 1), date(10, 4));

        const result = hotel.book(date(10, 3), date(10, 4));

        expect(result).toBe("BOOKING_NOT_ALLOWED");
    });

    test('booking before and after old booking', () => {
        hotel.book(date(10, 5), date(10, 6));

        const result = hotel.book(date(10, 4), date(10, 7));

        expect(result).toBe("BOOKING_NOT_ALLOWED");
    });

    test('booking before and equal end to an old booking', () => {
        hotel.book(date(10, 5), date(10, 6));

        const result = hotel.book(date(10, 4), date(10, 6));

        expect(result).toBe("BOOKING_NOT_ALLOWED");
    });
});

describe("when we have many bookings", () => {

    xtest('booking when date is taken', () => {
        hotel.book(date(10, 1), date(10, 2));
        hotel.book(date(11, 1), date(11, 2));

        const result = hotel.book(date(10, 1), date(10, 2));

        expect(result).toBe("BOOKING_NOT_ALLOWED");
    });

});
