import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { setPaymentData } from "../../store/paymentSlice";
import { loadUserFromStorage } from "../../store/userSlice";
import { addBooking } from "../../store/bookingsSlice";
import { fetchHotelDetails } from "../../network/hotelsAPI";
import { useNavigate } from "react-router-dom";

export default function PaymentDetails({ hotelId }) {
    const dispatch = useDispatch();
    const booking = useSelector((state) => state.bookings.currentBooking);
    const user = useSelector((state) => state.user.user);
    const navigate = useNavigate();


    useEffect(() => {
        dispatch(loadUserFromStorage());
    }, [dispatch]);



    const isDisabled = !booking.checkIn || !booking.checkOut;

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm({
        defaultValues: {
            title: "Mr",
            firstName: user?.username || "",
            lastName: "",
            email: user?.email || "",
            country: "Egypt",
            mobile: "",
            cardNumber: "",
            cvv: "",
            expiryDate: "",
            cardHolder: "",
        },
    });

    useEffect(() => {
        // console.log({hotelId});

        if (user) {
            const [first, ...rest] = user.username?.split(" ") || ["", ""];
            const last = rest.join(" ");

            reset({
                title: "Mr",
                firstName: first,
                lastName: last,
                email: user.email || "",
                country: user.country || "Egypt",
                mobile: user.phone || "",
                cardNumber: "",
                cvv: "",
                expiryDate: "",
                cardHolder: "",
            });
        }
    }, [user, reset]);

    const onSubmit = async (data) => {
        try {
            const hotel = await fetchHotelDetails(hotelId);

            const bookingData = {
                ...hotel, 
                checkIn: booking.checkIn,
                checkOut: booking.checkOut,
            };

            dispatch(addBooking(bookingData));

            alert("Booking added!");
            navigate(`/mybookings`);
        } catch (error) {
            console.error("Error fetching hotel:", error);
        }
    };



    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="max-w-3xl p-8 border rounded-lg shadow-md bg-white"
        >
            <h2 className="text-2xl font-bold mb-1">Your Details</h2>
            <p className="text-gray-500 text-sm mb-6">
                Whether you are in town for business or leisure, please provide your
                details below.
            </p>

            <div className="grid grid-cols-3 gap-4 mb-4">
                <select {...register("title")} className="border p-3 rounded-lg w-full">
                    <option>Mr</option>
                    <option>Mrs</option>
                    <option>Ms</option>
                </select>

                <input
                    {...register("firstName", { required: "First name is required" })}
                    className="border p-3 rounded-lg w-full"
                />
                <input
                    placeholder="Last Name"
                    {...register("lastName", { required: "Last name is required" })}
                    className="border p-3 rounded-lg w-full"
                />
            </div>

            {errors.firstName && (
                <p className="text-red-500 text-sm">{errors.firstName.message}</p>
            )}
            {errors.lastName && (
                <p className="text-red-500 text-sm">{errors.lastName.message}</p>
            )}

            <input
                placeholder="Email"
                {...register("email", { required: "Email is required" })}
                className="border p-3 rounded-lg w-full mb-4"
            />

            <div className="grid grid-cols-2 gap-4 mb-6">
                <select {...register("country")} className="border p-3 rounded-lg">
                    <option>Egypt</option>
                    <option>USA</option>
                    <option>Morocco</option>
                    <option>Greece</option>
                </select>
                <input
                    placeholder="Mobile"
                    {...register("mobile")}
                    className="border p-3 rounded-lg"
                />
            </div>

            <hr className="my-4" />

            <h2 className="text-2xl font-bold mb-4">Payment Details</h2>

            <div className="mb-4">
                <input
                    placeholder="Card Number"
                    {...register("cardNumber", {
                        required: "Card number is required",
                        pattern: {
                            value: /^[0-9]{14}$/,
                            message: "Card number must be 14 digits",
                        },
                    })}
                    className="border p-3 rounded-lg w-full"
                />
                {errors.cardNumber && (
                    <p className="text-red-500 text-sm">{errors.cardNumber.message}</p>
                )}
            </div>

            <div className="grid grid-cols-2 gap-4 mb-4">
                <input
                    placeholder="CVV"
                    {...register("cvv", {
                        required: "CVV is required",
                        pattern: {
                            value: /^[0-9]{3,4}$/,
                            message: "CVV must be 3 or 4 digits",
                        },
                    })}
                    className="border p-3 rounded-lg w-full"
                />
                <input
                    type="month"
                    {...register("expiryDate", { required: "Expiry date is required" })}
                    className="border p-3 rounded-lg w-full"
                />
            </div>

            <input
                placeholder="Card Holder"
                {...register("cardHolder", { required: "Card holder is required" })}
                className="border p-3 rounded-lg w-full mb-6"
            />

            <button
                type="submit"
                className={`p-3 w-full rounded-lg text-white ${isDisabled
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-blue-600 hover:bg-blue-700"
                    }`}
            >
                PAY NOW
            </button>
        </form>
    );
}
