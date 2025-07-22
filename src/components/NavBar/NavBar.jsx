import React from 'react'
import headerBg from '../../assets/images/header-bg.png';
import SideBar from '../SideBar/SideBar';


function NavBar() {
  return (
    <>
      <div className="w-screen h-[325px] bg-cover bg-no-repeat bg-center"
        style={{ backgroundImage: `url(${headerBg})` }}>


        <div className="adjust-width w-screen flex justify-between pt-8">
          <SideBar className="fixed top-0 left-0 z-50" />

          <div className="links">

            <a href="#" className="text-lg  text-white hover:underline">Login</a>
            <a href="#" className="text-lg  text-white hover:underline pl-2">Sign up</a>
          </div>


        </div>

      </div>


    </>
  )
}

export default NavBar