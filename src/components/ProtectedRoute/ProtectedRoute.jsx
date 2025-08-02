// import React from "react";
// import { Navigate } from "react-router-dom";

// function ProtectedRoute({ children }) {
//   const storedUser = localStorage.getItem("user");
//   const user = storedUser ? JSON.parse(storedUser) : null;

//   if (!user) {
//     return <Navigate to="/login" replace />;
//   }

//   return children;
// }

// export default ProtectedRoute;


import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import LoginProtected from "../../assets/images/LoginProtected.png";
import NavBar from "../NavBar/NavBar";
import SideBar from "../SideBar/SideBar";
import SearchFilterBar from "../SearchFilterBar/SearchFilterBar";
import { FaRegFaceSmileBeam } from "react-icons/fa6";


function ProtectedRoute({ children }) {
  const storedUser = localStorage.getItem("user");
  const user = storedUser ? JSON.parse(storedUser) : null;
  const navigate = useNavigate();
  const handleclick = () => {
    navigate("/login");
  };

  if (!user) {
    return (
      <>
        <NavBar className="w-full" />
        <SideBar />


        <div className="content ml-80 p-4">
          <SearchFilterBar />
          <div className="loginprotected flex flex-col items-center justify-center gap-2 w-full">
            <div className="loginphoto w-1/2">
              <img src={LoginProtected} alt="Protected Route" />
            </div>
            <h2 className="flex items-center gap-4">You Should Login First <FaRegFaceSmileBeam /></h2>
            <button onClick={handleclick} className="bg-blue-600 text-white rounded-xl p-2 hover:bg-sky-500">Go Back To Login Page</button>
          </div>

        </div>
      </>)
      ;
  }

  return children;
}

export default ProtectedRoute;
