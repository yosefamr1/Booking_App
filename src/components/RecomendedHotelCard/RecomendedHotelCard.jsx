import { Card } from "flowbite-react";

export function RecomendedHotelCard({ hotel, onClick }) {

    return (


        <div className="flex items-center bg-white shadow-lg rounded-2xl p-4 gap-5 w-[27rem] mb-8" onClick={onClick}>
            <img
                src={hotel.images.main}
                alt={hotel.name}
                className="w-28 h-28 rounded-xl object-cover"
            />

            <div className="flex flex-col gap-1">
                <span className="text-xs text-gray-400 font-semibold">HOTEL</span>
                <h2 className="text-lg font-bold text-gray-800">{hotel.name}</h2>
                <p className="text-gray-500 text-sm">{hotel.address.street} , {hotel.address.city}</p>
                <p className="text-sm text-gray-600">
                    {/* Cupon: <span className="font-bold">{coupon}</span> */}
                </p>
                <button className="mt-2 bg-red-100 text-red-500 font-medium px-4 py-1 rounded-full hover:bg-red-200 transition">
                    Book Now
                </button>
            </div>
        </div>


    );
}

export default RecomendedHotelCard;

