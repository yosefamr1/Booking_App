import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import SearchFilterBar from "../../components/SearchFilterBar/SearchFilterBar";
import HotelCard from "../../components/HotelCard/HotelCard";
import SideBar from "../../components/SideBar/SideBar";
import NavBar from "../../components/NavBar/NavBar";

function HotelSearchPage() {
    const location = useLocation();
    const [hotels, setHotels] = useState([]);

    const params = new URLSearchParams(location.search);
    const search = params.get("q") || "";
    const country = params.get("country") || "";

    useEffect(() => {
        const fetchHotels = async () => {
            try {
                let url = `https://booking-app-db.vercel.app/hotels`;
                const queryParams = [];
                if (search) queryParams.push(`q=${search}`);
                if (country) queryParams.push(`address.countryIsoCode=${country}`);
                if (queryParams.length > 0) url += `?${queryParams.join("&")}`;

                const res = await axios.get(url);
                setHotels(res.data);
            } catch (error) {
                console.error("Error fetching hotels:", error);
            }
        };

        fetchHotels();
    }, [search, country]);
    return (
        <>
            <NavBar className="w-full" />
            <SideBar />


            <div className="content ml-80 p-4">
                <SearchFilterBar />
                <div className="hotels flex flex-wrap gap-6 justify-center">

                    {hotels.map((hotel) => (

                        <HotelCard hotel={hotel} />
                    ))}



                </div>

            </div>
        </>




    );
}

export default HotelSearchPage;
