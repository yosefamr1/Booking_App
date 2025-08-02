import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { loadBookingsForUser } from '../../store/bookingsSlice';
import HotelCard from '../../components/HotelCard/HotelCard';
import SearchFilterBar from '../../components/SearchFilterBar/SearchFilterBar';
import SideBar from '../../components/SideBar/SideBar';
import NavBar from '../../components/NavBar/NavBar';
import BookingCard from '../../components/BookingCard/BookingCard';
import ProfileCard from '../../components/ProfileCard/ProfileCard';


function MyBookingsPage() {
  const dispatch = useDispatch();
  const bookings = useSelector((state) => state.bookings.bookings);
  const user = useSelector((state) => state.user.user);

  useEffect(() => {
    if (user) {
      dispatch(loadBookingsForUser());
      console.log("User loaded:", user.username);

    }
  }, [dispatch, user]);


  useEffect(() => {
    console.log("Current Bookings:", bookings);
  }, [bookings]);

  return (
    <>
      <NavBar className="w-full" />
      <SideBar />


      <div className="content ml-80 p-4">
        <SearchFilterBar />
        <div className="bookingpage flex justify-around ">
          <div className="bookings flex flex-col gap-12">
            {bookings.map((hotel) => (
              <BookingCard key={hotel.id} hotel={hotel}
                onClick={() => details(hotel.id)}
              />
            ))}
          </div>
          <ProfileCard username={user?.username || ""} />
        </div>

      </div>
    </>


  )
}

export default MyBookingsPage