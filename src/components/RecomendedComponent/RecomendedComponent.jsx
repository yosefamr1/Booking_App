import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { fetchRecommendedHotels } from '../../network/hotelsAPI';
import HotelCard from '../HotelCard/HotelCard';
import { IoChevronBack, IoChevronForward } from 'react-icons/io5';




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
    const [startIndex, setStartIndex] = useState(0);

    const handlePrev = () => {
        setStartIndex((prev) =>
            prev === 0 ? Math.max(recommendedHotels.length - 2, 0) : prev - 1
        );
    };

    const handleNext = () => {
        setStartIndex((prev) => (prev + 2 >= recommendedHotels.length ? 0 : prev + 1));
    };
    const visibleCards = recommendedHotels.slice(startIndex, startIndex + 2);



    return (
        <>
            <h1>Recommended Hotels</h1>
            <div className="relative flex justify-center items-center">

                <button
                    onClick={handlePrev}
                    className="
            absolute
            right-[95%]
            bg-white shadow rounded-full p-2
            hover:bg-gray-100 transition-colors cursor-pointer
          "
                >
                    <IoChevronBack size={24} />
                </button>




                <div className="flex gap-6 px-8">
                    {visibleCards.map((hotel) => (
                        <div
                            key={hotel.id}
                            className="min-w-[280px] md:min-w-[300px] transition-transform duration-500 ease-in-out"
                        >
                            <HotelCard key={hotel.id} hotel={hotel}
                                onClick={() => details(hotel.id)}
                            />                    </div>
                    ))}
                </div>

                <button
                    onClick={handleNext}
                    className="
            absolute
            left-[95%]
           bg-white shadow rounded-full p-2
            hover:bg-gray-100 transition-colors cursor-pointer
          "
                >
                    <IoChevronForward size={24} />
                </button>
            </div>

        </>
    )
}

export default RecomendedComponent;
