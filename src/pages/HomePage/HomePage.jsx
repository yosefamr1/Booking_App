import React, { useEffect, useState, useRef } from 'react'

import NavBar from '../../components/NavBar/NavBar'
import './HomePage.css'
import HotelCard from '../../components/HotelCard/HotelCard'
import { fetchBestOffers, fetchRecommendedHotels } from '../../network/hotelsAPI';
import { Navigate, useNavigate } from 'react-router-dom'

function HomePage() {

    const [bestOffers, setBestOffers] = useState([]);
    const [recommendedHotels, setRecommendedHotels] = useState([]);

    const callApi = async () => {
        let res = await fetchRecommendedHotels();
        setRecommendedHotels(res);
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
            <div className="content ml-80 ">
                <div className="recomended flex flex-wrap  gap-4 p-4">

                    {recommendedHotels.length > 0
                        ? recommendedHotels.map((hotel) => (
                            <HotelCard key={hotel.id} hotel={hotel}
                                onClick={() => details(hotel.id)}
                            />
                        ))
                        : ""}
                </div>



            </div>
        </>
    )
}

export default HomePage