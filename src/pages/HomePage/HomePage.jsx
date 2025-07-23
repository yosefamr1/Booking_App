import React, { useEffect, useState } from 'react'
import NavBar from '../../components/NavBar/NavBar'
import SideBar from '../../components/SideBar/SideBar'
import './HomePage.css'
import HotelCard from '../../components/HotelCard/HotelCard'
import { fetchBestOffers, fetchRecommendedHotels } from '../../network/hotelsAPI';

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




    return (
        <>

            <NavBar className="w-full" />
            <div className="content ml-80 ">
                <div className="recomended flex flex-wrap  gap-4 p-4">

                    {recommendedHotels.length > 0
                        ? recommendedHotels.map((hotel) => (
                            <HotelCard  key={hotel.id} hotel={hotel}
                            // onClick={() => details(product.id)}
                            />
                        ))
                        : ""}
                </div>



            </div>
        </>
    )
}

export default HomePage