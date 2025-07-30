import React, { useEffect, useState } from 'react'
import { fetchHotelDetails } from '../../network/hotelsAPI';
import { Carousel } from "flowbite-react";
import Button from '../Button/Button'
import { useNavigate, useParams } from "react-router-dom";


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
                <div className="hoteltext">
                    <h3 className='text-base font-bold'>Hotel review</h3>
                    <h3>About</h3>
                    <p>{hotel.description}</p>
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