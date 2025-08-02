import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchHotelDetails } from "../../network/hotelsAPI";
import { setCurrentBooking } from "../../store/bookingsSlice";

function BookingSummary({ hotelId }) {
  const dispatch = useDispatch();
  const booking = useSelector((state) => state.bookings.currentBooking);

  const [hotel, setHotel] = useState(null);

  useEffect(() => {
    const callApi = async () => {
      try {
        const res = await fetchHotelDetails(hotelId);
        setHotel(res);
      } catch (error) {
        console.error("Failed to fetch hotel details:", error);
      }
    };
    callApi();
  }, [hotelId]);

  if (!hotel) return <div>Loading...</div>;

  const calculateNights = (checkIn, checkOut) => {
    if (!checkIn || !checkOut) return 0;
    const inDate = new Date(checkIn);
    const outDate = new Date(checkOut);
    const diffTime = outDate - inDate;
    return diffTime > 0 ? diffTime / (1000 * 60 * 60 * 24) : 0;
  };

  const nights = calculateNights(booking.checkIn, booking.checkOut);
  const pricePerNight = hotel.pricing[0].originalPrice;
  const totalPrice = pricePerNight * nights;
  const discountedPrice =
    totalPrice - (totalPrice * hotel.pricing[0].discount) / 100;

  const handleCheckInChange = (e) => {
    dispatch(
      setCurrentBooking({
        checkIn: e.target.value,
        nights: calculateNights(e.target.value, booking.checkOut),
      })
    );
  };

  const handleCheckOutChange = (e) => {
    dispatch(
      setCurrentBooking({
        checkOut: e.target.value,
        nights: calculateNights(booking.checkIn, e.target.value),
      })
    );
  };

  return (
    <div className="max-w-sm border rounded-lg shadow-md p-4 bg-white transition-all duration-300 cursor-pointer
             hover:-translate-y-2 hover:scale-[1.02] hover:shadow-xl">
      <h2 className="text-xl font-bold mb-3">Summary</h2>

      <img
        src={hotel.images.main}
        alt={hotel.name}
        className="w-full h-36 object-cover rounded-lg mb-3"
      />

      <h3 className="text-lg font-semibold">{hotel.name}</h3>
      <p className="text-sm text-gray-500 mb-2">
        {hotel.address.street} , {hotel.address.city}
      </p>

      <div className="flex items-center justify-between mb-3">
        <span className="text-red-500 font-bold">
          {hotel.pricing[0].discount}%
        </span>
        <div className="text-right">
          <p className="text-2xl font-bold">${pricePerNight}</p>
          <p className="text-sm text-gray-500">Per night</p>
        </div>
      </div>

      <div className="space-y-2 mb-4">
        <div>
          <p className="text-sm font-semibold">Check In</p>
          <input
            type="date"
            value={booking.checkIn}
            onChange={handleCheckInChange}
            className="w-full border p-2 rounded bg-gray-100"
          />
        </div>
        <div>
          <p className="text-sm font-semibold">Check Out</p>
          <input
            type="date"
            value={booking.checkOut}
            onChange={handleCheckOutChange}
            className="w-full border p-2 rounded bg-gray-100"
          />
        </div>
      </div>

      <div className="space-y-1 text-sm">
        <div className="flex justify-between">
          <span>Price Per Night</span>
          <span>${pricePerNight}</span>
        </div>
        <div className="flex justify-between">
          <span>Nights</span>
          <span>{nights}</span>
        </div>
        <div className="flex justify-between font-semibold border-t pt-2">
          <span>Total Price</span>
          <span >${totalPrice}</span>
        </div>
       
      </div>
    </div>
  );
}

export default BookingSummary;
