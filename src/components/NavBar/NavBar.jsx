// import React from 'react'
// import headerBg from '../../assets/images/header-bg.png';
// import SideBar from '../SideBar/SideBar';


// function NavBar() {
//   return (
//     <>
//       <div className="w-screen h-[325px] bg-cover bg-no-repeat bg-center mb-4"
//         style={{ backgroundImage: `url(${headerBg})` }}>


//         <div className="adjust-width w-screen flex justify-between pt-8">
//           <SideBar className="fixed top-0 left-0 z-50" />

//           <div className="links">
//             <div className="login_links">
//               <a href="#" className="text-lg  text-white hover:underline">Login</a>
//               <a href="#" className="text-lg  text-white hover:underline pl-2">Sign up</a>
//             </div>
//             <div className="page_Links">
//               <a href="#" className="text-lg  text-white hover:underline">Login</a>
//               <a href="#" className="text-lg  text-white hover:underline pl-2">Sign up</a>
//             </div>
//           </div>


//         </div>

//       </div>


//     </>
//   )
// }

// export default NavBar



import React from 'react'
import headerBg from '../../assets/images/header-bg.png';
import SideBar from '../SideBar/SideBar';
import LoginLinks from '../LoginLinks/LoginLinks';


function NavBar() {
  return (
    <>
      <div className="flex flex-col justify-between  w-screen h-[325px] bg-cover bg-no-repeat bg-center mb-4"
        style={{ backgroundImage: `url(${headerBg})` }}>

        <div className='flex justify-between  ml-auto'>
          {/* <SideBar className="fixed top-0 left-0 z-50" /> */}
          
          <LoginLinks />
        </div>

        <div className='flex justify-between  ml-auto'>
          <LoginLinks />
          
        </div>


      </div>

    </>
  )
}

export default NavBar