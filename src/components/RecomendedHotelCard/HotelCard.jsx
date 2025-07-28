import { Card } from "flowbite-react";

export function RecomendedHotelCard({ hotel, onClick }) {
    
    return (

        <Card imgSrc={hotel.images.main} horizontal onClick={onClick} className="max-w-md mx-auto m-12">
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                <p className="text-sm">hotel</p>
                {hotel.name}
            </h5>
            {/* <p className="font-normal text-gray-700 dark:text-gray-400">
                Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
            </p> */}
        </Card>
    );
}

export default RecomendedHotelCard
