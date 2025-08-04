import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import SideBar from "../../components/SideBar/SideBar";
import SearchFilterBar from "../../components/SearchFilterBar/SearchFilterBar";
import NotDone from "../../assets/images/NotDone.png";


function NotDonePage() {
  return (
    <>
      <NavBar className="w-full" />
      <SideBar />

      <div className="content ml-80 p-4">
        <SearchFilterBar />
        <div className="loginprotected flex flex-col items-center justify-center gap-2 w-1/2 m-auto">
          <div className="loginphoto w-1/2">
            <img src={NotDone} alt="Protected Route" />
          </div>
        </div>
      </div>
    </>
  );
}

export default NotDonePage;
