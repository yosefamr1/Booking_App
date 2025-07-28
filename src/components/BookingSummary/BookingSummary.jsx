import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchHotelDetails } from "../../network/hotelsAPI";

function BookingSummary({
    hotelImage,
    hotelName,
    hotelAddress,
    pricePerNight,
    nights,
    checkIn,
    checkOut,
    discount,
    hotelId
}) {


    const id = hotelId;
    const [hotel, setHotel] = useState(null);
    const navigate = useNavigate();

    const totalPrice = pricePerNight * nights;
    const discountedPrice = totalPrice - (totalPrice * discount) / 100;


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
        <div className="max-w-sm border rounded-lg shadow-md p-4 bg-white">
            <h2 className="text-xl font-bold mb-3">Summary</h2>

            {/* Hotel Image */}
            <img
                src={hotel.images.main}
                alt={hotel.name}
                className="w-full h-36 object-cover rounded-lg mb-3"
            />

            {/* Hotel Info */}
            <h3 className="text-lg font-semibold">{hotel.name}</h3>
            <p className="text-sm text-gray-500 mb-2">{hotel.address.street} , {hotel.address.city}</p>

            {/* Price Section */}
            <div className="flex items-center justify-between mb-3">
                <span className="text-red-500 font-bold">{hotel.pricing[0].discount}</span>
                <div className="text-right">
                    <p className="text-2xl font-bold">${hotel.pricing[0].originalPrice}</p>
                    <p className="text-sm text-gray-500">Per night</p>
                </div>
            </div>

            {/* Check-in/out */}
            <div className="space-y-2 mb-4">
                <div>
                    <p className="text-sm font-semibold">Check In</p>
                    <input
                        type="text"
                        value={checkIn}
                        readOnly
                        className="w-full border p-2 rounded bg-gray-100"
                    />
                </div>
                <div>
                    <p className="text-sm font-semibold">Check Out</p>
                    <input
                        type="text"
                        value={checkOut}
                        readOnly
                        className="w-full border p-2 rounded bg-gray-100"
                    />
                </div>
            </div>

            {/* Price Details */}
            <div className="space-y-1 text-sm">
                <div className="flex justify-between">
                    <span>Price Per Night</span>
                    <span>${pricePerNight}</span>
                </div>
                <div className="flex justify-between">
                    <span>Nights</span>
                    <span>{nights}</span>
                </div>
                <div className="flex justify-between font-semibold border-t pt-2">
                    <span>Total Price</span>
                    <span className="line-through text-gray-400">${totalPrice}</span>
                </div>
                <div className="flex justify-between font-bold text-lg text-green-600">
                    <span>Final Price</span>
                    <span>${discountedPrice}</span>
                </div>
            </div>
        </div>
    );
}

export default BookingSummary;
