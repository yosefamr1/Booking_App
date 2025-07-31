import React, { useEffect, useState } from 'react'
import { fetchHotelDetails } from '../../network/hotelsAPI';
import { Carousel } from "flowbite-react";
import Button from '../Button/Button'
import { useNavigate, useParams } from "react-router-dom";
import { FaStar } from 'react-icons/fa6';
import { FaMapMarkerAlt } from 'react-icons/fa';


function HotelDetails({ hotelId }) {

    const id = hotelId;
    const [hotel, setHotel] = useState(null);
    const navigate = useNavigate();


    useEffect(() => {
        const callApi = async () => {
            try {
                const res = await fetchHotelDetails(id);
                setHotel(res);
            } catch (error) {
                console.error("Failed to fetch hotel datails:", error);
            }
        };

        callApi();
    }, [id]);

    if (!hotel) return <div>Loading...</div>;




    return (
        <div className="hoteldeatails bg-white p-4 rounded-lg shadow-md mr-4 gap-4">

            <h1 className='text-3xl font-bold mb-2'>{hotel.name}</h1>
            <div className="content flex gap-2">
                <div className="hotelimages w-1/2">
                    {hotel.images.gallery.length > 0 && (
                        <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
                            <Carousel slide={false}>
                                {hotel.images.gallery.map((img, index) => (
                                    <img key={index} src={img} alt={`hotel-img-${index}`} />
                                ))}
                            </Carousel>
                        </div>
                    )}
                </div>
              

                <div className="w-1/2 flex flex-col justify-between">
                    <div>
                        <h2 className="text-2xl font-bold">{hotel.name}</h2>

                        <div className="flex items-center gap-2 mt-1">
                            <span className="bg-blue-600 text-white px-2 py-1 rounded-md text-sm font-bold">
                                {hotel.rating.score}
                            </span>
                            <span className="text-gray-500">{hotel.rating.score} Reviews</span>
                            <FaStar className="text-yellow-500" />
                        </div>

                        <div className="mt-2 text-xl">
                            <span className="text-red-500 font-bold">{hotel.pricing.discount}% OFF</span>
                            <span className="font-bold ml-3">${hotel.pricing[0].originalPrice}</span>
                            <span className="text-gray-500 text-sm"> / per night</span>
                        </div>

                        <p className="mt-3 text-gray-600">{hotel.description}</p>

                        <div className="flex items-center gap-2 mt-3 text-gray-700">
                            <FaMapMarkerAlt />
                            <span>{hotel.address.street}</span>
                        </div>
                    </div>

                    <Button
                        label="Pay Now"
                        color="blue"
                        onClick={() => navigate(`/bookingreview/${id}`, { state: { hotel } })}
                    />
                </div>
            </div>
        </div>
    )
}

export default HotelDetails