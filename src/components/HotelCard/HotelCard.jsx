import { Card } from "flowbite-react";

export function HotelCard({ hotel, onClick }) {
    
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

export default HotelCard


// import { Link } from "react-router-dom";

// function RecommendedCard({ recHotel }) {
//   return (
//     <Link to={/hotelDetails/${recHotel.id}}>
//       <div className="max-w-md mx-auto">
//         <div className="flex bg-white rounded-2xl shadow-xl p-4 md:p-6 items-center gap-4">
//           <img
//             src={recHotel?.images?.main}
//             alt="Hotel"
//             className="w-28 h-36 object-cover rounded-xl shadow-sm"
//           />

//           <div className="flex-1">
//             <p className="text-[12px] pb-2 font-semibold uppercase text-gray-400 tracking-wide">
//               Hotel
//             </p>
//             <h3 className="text-lg font-bold text-gray-800 leading-tight">
//               {recHotel?.name}
//             </h3>
//             <p className="text-[12px] text-gray-500 pt-2">
//               {${recHotel?.address.street},${recHotel?.address.country}}
//             </p>
//             <div className="flex justify-between items-center gap-4 pt-8">
//               <p className="text-[12px] text-gray-500">
//                 Cupon: <span className="font-bold">DHSHJAB09D</span>
//               </p>
//               <button className="bg-[#fdf1f3] hover:bg-red-100 text-[#DF142D] text-sm font-medium px-4 py-2 rounded-full shadow-sm transition-colors cursor-pointer">
//                 Book Now
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </Link>
//   );
// }

// export default RecommendedCard;