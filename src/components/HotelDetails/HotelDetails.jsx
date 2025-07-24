import React, { useEffect, useState } from 'react'
import { fetchHotelDetails } from '../../network/hotelsAPI';

function HotelDetails({ hotelId }) {

    const  id  = hotelId;
  const [hotel, setHotel] = useState(null); 

  useEffect(() => {
    const callApi = async () => {
      try {
        const res = await fetchHotelDetails(id);
        setHotel(res); 
      } catch (error) {
        console.error("Failed to fetch hotel datails:", error);
      }
    };

    callApi();
  }, [id]); 

    if (!hotel) return <div>Loading...</div>;

  return (
    <>
        <h1>{hotel.name}</h1>
     </>
  )
}

export default HotelDetails