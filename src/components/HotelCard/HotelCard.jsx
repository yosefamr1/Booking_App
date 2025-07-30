import React, { useEffect, useState } from 'react'
import { FaParking, FaStar, FaWifi } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom';

function HotelCard({ hotel, onClick }) {
    const navigate = useNavigate();

    const amenities = hotel.amenities;
    console.log(amenities);
    const details = (hotelid) => {
        navigate(`/details/${hotelid}`);
    };


    return (
        <>
            <div className="flex bg-white rounded-lg shadow-md overflow-hidden w-[600px] h-[175px]">
                <div className="w-1/3">
                    <img
                        src={hotel.images.main}
                        alt="hotel"
                        className="w-full h-full object-cover"
                    />
                </div>

                <div className="w-2/3 p-4 flex flex-col justify-between">
                    <div className="flex justify-between items-start">
                        <div>
                            <h2 className="text-lg font-bold">
                                {hotel.name}
                            </h2>
                            <p className="text-gray-500 text-sm">{hotel.address.street} , {hotel.address.city}</p>
                        </div>
                        <div className="flex items-center bg-blue-500 text-white text-sm px-2 py-1 rounded-full">
                            {hotel.rating.score} <FaStar className="ml-1 text-yellow-300" />
                        </div>
                    </div>

                    <div className="flex gap-6 text-gray-600 text-sm mt-2">
                        <span className="flex items-center gap-1">
                            <FaParking /> Parking
                        </span>
                        <span className="flex items-center gap-1">
                            <FaWifi /> Wifi
                        </span>
                    </div>

                    <div className="flex justify-between items-center mt-3">
                        <div>
                            <span className="text-orange-500 font-bold text-sm">{hotel.pricing[0].discount}</span>
                            <p className="text-xl font-bold">${hotel.pricing[0].originalPrice}</p>
                        </div>
                        <div className="flex gap-2">
                            <button onClick={()=>navigate(`/details/${hotel.id}`)} className="px-3 py-1 border rounded-md text-gray-700">
                                View Details
                            </button>
                            <button className="px-3 py-1 bg-blue-500 text-white rounded-md"
                                onClick={() => navigate(`/bookingreview/${hotel.id}`, { state: { hotel } })}
                            >
                                BOOK NOW
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HotelCard