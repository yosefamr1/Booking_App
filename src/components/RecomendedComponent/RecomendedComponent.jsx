import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { fetchRecommendedHotels } from '../../network/hotelsAPI';
import HotelCard from '../HotelCard/HotelCard';

function RecomendedComponent() {
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
        <div className="recomended flex flex-wrap  gap-4 p-4">

            {recommendedHotels.length > 0
                ? recommendedHotels.map((hotel) => (
                    <HotelCard key={hotel.id} hotel={hotel}
                        onClick={() => details(hotel.id)}
                    />
                ))
                : ""}
        </div>)
}

export default RecomendedComponent

