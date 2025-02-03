import React, { useEffect, useState } from "react";
import { getBookings } from "../../services/bookingService";

const BookingList = () => {
    const [bookings, setBookings] = useState([]);

    useEffect(() => {
        loadBookings();
    }, []);

    const loadBookings = async () => {
        try {
            const response = await getBookings();
            setBookings(response.data);
        } catch (error) {
            console.error("Error fetching bookings:", error);
        }
    };

    return (
        <div>
            <h2>Booking List</h2>
            <ul>
                {bookings.map(booking => (
                    <li key={booking.id}>
                        {booking.customerName} booked {booking.workerName} on {booking.date}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default BookingList;
