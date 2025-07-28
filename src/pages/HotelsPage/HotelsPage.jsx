import React, { useEffect, useState } from 'react'
import HotelCard from '../../components/HotelCard/HotelCard'
import SearchFilterBar from '../../components/SearchFilterBar/SearchFilterBar'
import SideBar from '../../components/SideBar/SideBar'
import NavBar from '../../components/NavBar/NavBar'
import { fetchHotels } from '../../network/hotelsAPI'
import { useNavigate } from 'react-router-dom'

function HotelsPage() {
  const [hotels, setsotels] = useState([]);

  const callApi = async () => {
    let res = await fetchHotels();
    setsotels(res);
    console.log(res);
  };

  useEffect(() => {
    callApi();
  }, []);


  const navigate = useNavigate();
  const details = (hotelid) => {
    navigate(`/details/${hotelid}`);
  };

  return (
    <>
      <NavBar className="w-full" />
      <SideBar />


      <div className="content ml-80 p-4">
        <SearchFilterBar />

        <div className="hotels flex flex-wrap gap-6 justify-center">
          {hotels.map((hotel) => (
            <div
              key={hotel.id}
              className=""
            >
              <HotelCard key={hotel.id} hotel={hotel}
                onClick={() => details(hotel.id)}
              />                    </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default HotelsPage