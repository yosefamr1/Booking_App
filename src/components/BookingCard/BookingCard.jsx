import React from 'react'

export  function BookingCard({ hotel }) {
  return (
    <div className="flex items-center bg-white shadow-md rounded-lg overflow-hidden w-[800px]">
      <img
        src={hotel.images.main}
        alt={hotel.name}
        className="w-40 h-36 object-cover"
      />

      <div className="flex-1 p-4">
        <div className="flex items-start justify-between">
          <div>
            <h2 className="text-lg font-bold">{hotel.name}</h2>
            <p className="text-gray-500 text-sm">{hotel.address.street} , {hotel.address.city}</p>
          </div>

          <div className="flex items-center bg-blue-500 text-white text-xs font-bold px-2 py-1 rounded-full">
            {hotel.rating.score}
          </div>
        </div>

        <div className="flex items-center gap-4 text-gray-500 text-sm mt-2">
          <span>Parking</span>
          <span>Wifi</span>
        </div>

        <div className="flex items-center justify-between mt-2">
          <div>
            <span className="text-orange-500 text-sm font-bold">{hotel.pricing[0].discount} </span>
            <span className="text-black font-bold text-lg">${hotel.pricing[0].originalPrice}</span>
          </div>

          <div className="text-sm text-gray-600 flex gap-3">
            <span>From: {hotel.checkIn}</span>
            <span>To: {hotel.checkOut}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookingCard