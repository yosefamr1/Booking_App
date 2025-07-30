import React from "react";
import { useSelector } from "react-redux";

function MyBookings() {
  const bookings = useSelector((state) => state.bookings.bookings); // ✅ كل الحجوزات

  if (bookings.length === 0) {
    return <p className="text-center mt-5">No bookings yet!</p>;
  }

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">My Bookings</h2>

      <div className="space-y-4">
        {bookings.map((booking, index) => (
          <div
            key={index}
            className="border p-4 rounded-lg bg-white shadow-md"
          >
            <h3 className="text-lg font-semibold">{booking.hotelName}</h3>
            <p>Check-in: {booking.checkIn}</p>
            <p>Check-out: {booking.checkOut}</p>
            <p>Nights: {booking.nights}</p>
            <p className="font-bold">Total: ${booking.totalPrice}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MyBookings;
