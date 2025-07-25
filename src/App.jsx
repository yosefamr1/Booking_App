import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/NavBar/NavBar'
import HomePage from './pages/HomePage/HomePage'
import { Route, Routes } from 'react-router-dom'
import Detailspage from './pages/DetailsPage/Detailspage'
import LoginPage from './pages/LoginPage/LoginPage'
import RegisterPage from './pages/RegisterPage/Register'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App h-full" style={{ backgroundColor: "#f0f4f6" }}>
      {/* <HomePage /> */}
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/home" element={<HomePage />} />
        <Route path="/details/:id" element={<Detailspage />} />
        <Route path="/login" element={<LoginPage />} />

        <Route path="/register" element={<RegisterPage />} />



      </Routes>
    </div>
  )
}

export default App
