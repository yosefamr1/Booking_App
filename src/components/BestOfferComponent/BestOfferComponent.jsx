import React, { useEffect, useState } from 'react'
import { fetchBestOffers } from '../../network/hotelsAPI';
import { useNavigate } from 'react-router-dom';

function BestOfferComponent() {

    const [Bestoffers, setBestoffers] = useState([]);
    const navigate = useNavigate();
    const details = (hotelid) => {
        navigate(`/details/${hotelid}`);
    };

    const callApi = async () => {
        let res = await fetchBestOffers();
        setBestoffers(res);
        console.log(res);
    };

    useEffect(() => {
        callApi();
    }, []);


    return (

        <>
            <div className="bestoffercomponent w-full bg-white p-8 rounded-2xl m-auto
            transition-all duration-300 cursor-pointer
             hover:-translate-y-2 hover:scale-[1.02] hover:shadow-xl">
                <h1>Best Offers</h1>
                <div className="hotels flex flex-wrap rounded-2xl p-3 gap-3">

                    {Bestoffers.map((hotel) => (
                        <div onClick={() => details(hotel.id)} key={hotel.id} className="hotel bg-[#ECEDF5] rounded-2xl p-3 flex flex-wrap w-[32%] transition-all duration-300 cursor-pointer
             hover:-translate-y-2 hover:scale-[1.02] hover:shadow-xl" >
                            <div className="hotel_img w-1/5">
                                <img className='w-12 h-12 rounded-full object-cover' src={hotel.image} alt="" />

                            </div>
                            <div className="hotel_text">
                                <h2>{hotel.name}</h2>
                                <p>{hotel.location}</p>
                            </div>
                        </div>

                    ))}



                </div>
            </div>
        </>


    )
}

export default BestOfferComponent