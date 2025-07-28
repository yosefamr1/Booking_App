import React from 'react'
import HotelDetails from '../../components/HotelDetails/HotelDetails'
import NavBar from '../../components/NavBar/NavBar'
import { useParams } from "react-router-dom";
import RecomendedComponent from '../../components/RecomendedComponent/RecomendedComponent';
import SideBar from '../../components/SideBar/SideBar';
import SearchFilterBar from '../../components/SearchFilterBar/SearchFilterBar';


function Detailspage() {
    const { id } = useParams();

    return (
        <>
            <NavBar className="w-full" />
            <SideBar />
            <SearchFilterBar/>

            <div className="content ml-80 ">
                <HotelDetails hotelId={id} />
                {/* <RecomendedComponent/> */}





            </div>

        </>
    )
}

export default Detailspage