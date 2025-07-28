import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/NavBar/NavBar'
import HomePage from './pages/HomePage/HomePage'
import { Route, Routes } from 'react-router-dom'
import Detailspage from './pages/DetailsPage/Detailspage'
import LoginPage from './pages/LoginPage/LoginPage'
import RegisterPage from './pages/RegisterPage/Register'
import BookingReview from './pages/BookingReview/BookingReview'
import { useDispatch } from 'react-redux'
import { loadUserFromStorage } from './store/userSlice'

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUserFromStorage());
  }, [dispatch]);

  return (
    <div className="App h-full w-full" style={{ backgroundColor: "#f0f4f6" }}>
      {/* <HomePage /> */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/details/:id" element={<Detailspage />} />
        <Route path="/bookingreview/:id" element={<BookingReview />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />



      </Routes>
    </div>
  )
}

export default App
