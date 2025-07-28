import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaHotel, FaHome, FaTaxi, FaPlane } from "react-icons/fa";
import { MdHotel } from "react-icons/md";

export default function NavIcons() {
    const [active, setActive] = useState("hotel");
    const navigate = useNavigate();

    const items = [
        { id: "hotel", label: "HOTEL", icon: <MdHotel />, path: "/home" },
        { id: "villa", label: "VILLA", icon: <FaHome />, path: "/home" },
        { id: "taxi", label: "TAXI", icon: <FaTaxi />, path: "/home" },
        { id: "flights", label: "FLIGHTS", icon: <FaPlane />, path: "/home" },
    ];

    const handleClick = (id, path) => {
        setActive(id);
        navigate(path);
    };

    return (
        <div className="flex gap-4">
            {items.map((item) => (
                <div
                    key={item.id}
                    onClick={() => handleClick(item.id, item.path)}
                    className={`flex flex-col items-center cursor-pointer px-4 py-2 rounded-lg text-white ${active === item.id ? "bg-blue-600" : "hover:bg-blue-500"
                        }`}
                >
                    <div className="text-2xl">{item.icon}</div>
                    <span className="text-sm mt-1">{item.label}</span>
                </div>
            ))}
        </div>
    );
}
