import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/NavBar/NavBar'
import HomePage from './pages/HomePage/HomePage'
import { Route, Routes } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <HomePage /> */}
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/home" element={<HomePage />} />
      </Routes>
    </>
  )
}

export default App
