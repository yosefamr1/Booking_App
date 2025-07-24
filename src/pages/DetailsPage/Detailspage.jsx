import React from 'react'
import HotelDetails from '../../components/HotelDetails/HotelDetails'
import NavBar from '../../components/NavBar/NavBar'
import { useParams } from "react-router-dom";
import RecomendedComponent from '../../components/RecomendedComponent/RecomendedComponent';
import SideBar from '../../components/SideBar/SideBar';


function Detailspage() {
      const { id } = useParams();

    return (
        <>
            <NavBar className="w-full" />
            <SideBar/>
            <div className="content ml-80 ">
               <HotelDetails hotelId={id} />
               {/* <RecomendedComponent/> */}

            </div>

        </>
    )
}

export default Detailspage