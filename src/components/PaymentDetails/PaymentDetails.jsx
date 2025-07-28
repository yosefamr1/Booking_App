import React, { useState } from "react";

function PaymentDetails() {
    const [formData, setFormData] = useState({
        title: "Mr",
        firstName: "",
        lastName: "",
        email: "",
        country: "Egypt",
        mobile: "",
        cardNumber: "",
        cvv: "",
        expiryDate: "",
        cardHolder: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handlePay = () => {
        localStorage.setItem("bookingData", JSON.stringify(formData));
        alert("Booking Saved in LocalStorage ✅");
    };

    return (
        <div className=" bg-white p-6 rounded-lg shadow-md space-y-6">
            <h2 className="text-xl font-bold">Your Details</h2>

            {/* ===== Your Details Section ===== */}
            <div className="grid grid-cols-3 gap-4">
                <select
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    className="border p-2 rounded"
                >
                    <option>Mr</option>
                    <option>Mrs</option>
                    <option>Ms</option>
                </select>

                <input
                    name="firstName"
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="border p-2 rounded col-span-1"
                />

                <input
                    name="lastName"
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="border p-2 rounded col-span-1"
                />
            </div>

            <input
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="border p-2 rounded w-full"
            />

            <div className="grid grid-cols-2 gap-4">
                <select
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    className="border p-2 rounded"
                >
                    <option>Egypt</option>
                    <option>USA</option>
                    <option>Morocco</option>
                    <option>Greece</option>
                </select>

                <input
                    name="mobile"
                    placeholder="Mobile"
                    value={formData.mobile}
                    onChange={handleChange}
                    className="border p-2 rounded"
                />
            </div>

            <hr className="my-4" />

            {/* =====Payment Details Section ===== */}


            <h2 className="text-xl font-bold">Payment Details</h2>

            <input
                name="cardNumber"
                placeholder="Card Number"
                value={formData.cardNumber}
                onChange={handleChange}
                className="border p-2 rounded w-full"
            />

            <div className="grid grid-cols-2 gap-4">
                <input
                    name="cvv"
                    placeholder="CVV"
                    value={formData.cvv}
                    onChange={handleChange}
                    className="border p-2 rounded"
                />

                <input
                    name="expiryDate"
                    placeholder="Expiry Date"
                    value={formData.expiryDate}
                    onChange={handleChange}
                    className="border p-2 rounded"
                />
            </div>

            <input
                name="cardHolder"
                placeholder="Card Holder"
                value={formData.cardHolder}
                onChange={handleChange}
                className="border p-2 rounded w-full"
            />

            <button
                onClick={handlePay}
                className="bg-blue-600 text-white p-3 w-full rounded-lg hover:bg-blue-700"
            >
                PAY NOW
            </button>
        </div>
    );
}

export default PaymentDetails;
