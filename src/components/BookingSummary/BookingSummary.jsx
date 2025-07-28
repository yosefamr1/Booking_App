import React from "react";

function BookingSummary({
    hotelImage,
    hotelName,
    hotelAddress,
    pricePerNight,
    nights,
    checkIn,
    checkOut,
    discount,
}) {
    const totalPrice = pricePerNight * nights;
    const discountedPrice = totalPrice - (totalPrice * discount) / 100;

    return (
        <div className="max-w-sm border rounded-lg shadow-md p-4 bg-white">
            <h2 className="text-xl font-bold mb-3">Summary</h2>

            {/* Hotel Image */}
            <img
                src={hotelImage}
                alt={hotelName}
                className="w-full h-36 object-cover rounded-lg mb-3"
            />

            {/* Hotel Info */}
            <h3 className="text-lg font-semibold">{hotelName}</h3>
            <p className="text-sm text-gray-500 mb-2">{hotelAddress}</p>

            {/* Price Section */}
            <div className="flex items-center justify-between mb-3">
                <span className="text-red-500 font-bold">{discount}% OFF</span>
                <div className="text-right">
                    <p className="text-2xl font-bold">${pricePerNight}</p>
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
