import React from 'react'
import headerBg from '../../assets/images/header_bg.png';
import LoginLinks from '../LoginLinks/LoginLinks';
import { useDispatch, useSelector } from 'react-redux';
import { Dropdown, DropdownDivider, DropdownHeader, DropdownItem } from "flowbite-react";
import { HiCog, HiCurrencyDollar, HiLogout, HiViewGrid } from "react-icons/hi";
import { logout } from '../../store/userSlice';
import NavIcons from '../NavIcons/NavIcons';



function NavBar() {
  // console.log(user?.username);

  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);

  const handleLogout = () => {
    dispatch(logout());

  };
  return (
    <>
      {user ? (
        // if there is a user logged in
        <div
          className="flex flex-col justify-between w-screen h-[117px]  bg-no-repeat bg-cover mb-4 p-4"
          style={{ backgroundImage: `url(${headerBg})` }}
        >
          <div className="flex justify-between ml-auto">
            <Dropdown
              label={
                <div className="flex items-center gap-2">
                  <img
                    src="https://i.pravatar.cc"
                    alt="user"
                    className="w-8 h-8 rounded-full"
                  />
                  <span>{user.username}</span>
                </div>
              }
            >
              <DropdownHeader>
                <span className="block text-sm">{user.username}</span>
                <span className="block truncate text-sm font-medium">{user.email}</span>
              </DropdownHeader>
              <DropdownItem icon={HiViewGrid}>Dashboard</DropdownItem>
              <DropdownItem icon={HiCog}>Settings</DropdownItem>
              <DropdownItem icon={HiCurrencyDollar}>Earnings</DropdownItem>
              <DropdownDivider />
              <DropdownItem onClick={handleLogout} icon={HiLogout}>Sign out</DropdownItem>
            </Dropdown>
          </div>
          <div className="w-fit  ml-80">
            <NavIcons />
          </div>
        </div>
      ) : (
        // if there is no user logged in
        <div
          className="flex flex-col justify-between w-screen h-[325px] bg-cover bg-no-repeat bg-center mb-4 pr-16 pt-8"
          style={{ backgroundImage: `url(${headerBg})` }}
        >
          <div className="flex justify-between ml-auto">
            <LoginLinks />
          </div>
          <div className="w-fit  ml-80">
            <NavIcons />
          </div>
        </div>
      )}

    </>
  )
}

export default NavBar