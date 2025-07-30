import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { loadBookingsForUser } from '../../store/bookingsSlice';
import HotelCard from '../../components/HotelCard/HotelCard';

function MyBookingsPage() {
  const dispatch = useDispatch();
  const bookings = useSelector((state) => state.bookings.bookings); // ✅ نجيب الحجوزات من الريدكس
  const user = useSelector((state) => state.user.user);

  useEffect(() => {
    // ✅ أول ما الصفحة تتفتح، نحمل الحجوزات بتاعت اليوزر الحالي من localStorage
    if (user) {
      dispatch(loadBookingsForUser());
    }
  }, [dispatch, user]);


  useEffect(() => {
    console.log("📌 Current Bookings:", bookings);
  }, [bookings]);

  return (
    <div>

      {/* {bookings.map((hotel) => (
        <div
          key={hotel.id}
          className=""
        >
          <HotelCard key={hotel.id} hotel={hotel}
            onClick={() => details(hotel.id)}
          />                    </div>
      ))} */}
    </div>
  )
}

export default MyBookingsPage