import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import SideBar from "../../components/SideBar/SideBar";
import SearchFilterBar from "../../components/SearchFilterBar/SearchFilterBar";
import NotFound from "../../assets/images/NotFound.png";

function NotFoundPage() {
  return (
    <>
      <NavBar className="w-full" />
      <SideBar />

      <div className="content ml-80 p-4">
        <SearchFilterBar />
        <div className="loginprotected flex flex-col items-center justify-center gap-2 w-1/2 m-auto">
          <div className="loginphoto w-1/2">
            <img src={NotFound} alt="Protected Route" />
          </div>
          <h2 className="font-bold">Page Not Found</h2>
        </div>
      </div>
    </>
  );
}

export default NotFoundPage;
