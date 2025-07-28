import React from "react";

function Button({ label, onClick, color = "blue" }) {
    const colors = {
        blue: "bg-blue-600 hover:bg-blue-700 text-white",
        red: "bg-red-600 hover:bg-red-700 text-white",
        green: "bg-green-600 hover:bg-green-700 text-white",
    };

    return (
        <button
            onClick={onClick}
            className={`px-6 py-2 rounded-lg transition ${colors[color]}`}
        >
            {label}
        </button>
    );
}

export default Button;
