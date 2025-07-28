import React from 'react'
import SideBar from '../../components/SideBar/SideBar'
import NavBar from '../../components/NavBar/NavBar'
import PaymentDetails from '../../components/PaymentDetails/PaymentDetails'
import BookingSummary from '../../components/BookingSummary/BookingSummary'
import SearchFilterBar from '../../components/SearchFilterBar/SearchFilterBar'

function BookingReview() {
    return (
        <>
            <NavBar className="w-full" />
            <SideBar />
            <div className="content ml-80">
                <SearchFilterBar />
                <div className="booking flex justify-around m-4">

                    <PaymentDetails />
                    <BookingSummary />
                </div>




            </div>

        </>)
}

export default BookingReview