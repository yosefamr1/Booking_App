import React from 'react'
import HotelDetails from '../../components/HotelDetails/HotelDetails'
import NavBar from '../../components/NavBar/NavBar'
import { useParams } from "react-router-dom";


function Detailspage() {
      const { id } = useParams();

    return (
        <>
            <NavBar className="w-full" />
            <div className="content ml-80 ">
               <HotelDetails hotelId={id} />

            </div>

        </>
    )
}

export default Detailspage