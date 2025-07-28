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
            <SearchFilterBar/>
            <div className="content ml-80  flex justify-around">

                <PaymentDetails />
                <BookingSummary/>




            </div>

        </>)
}

export default BookingReview