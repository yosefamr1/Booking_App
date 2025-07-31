import React from 'react'
import headerBg from '../../assets/images/header.png';
import LoginLinks from '../LoginLinks/LoginLinks';
import { useDispatch, useSelector } from 'react-redux';
import { Dropdown, DropdownDivider, DropdownHeader, DropdownItem } from "flowbite-react";
import { HiCog, HiCurrencyDollar, HiLogout, HiViewGrid } from "react-icons/hi";
import { logout } from '../../store/userSlice';
import NavIcons from '../NavIcons/NavIcons';
import { PiUserCircleBold } from "react-icons/pi";
import { useNavigate } from 'react-router-dom';
import { FaClipboardUser } from 'react-icons/fa6';
import { MdHotel } from 'react-icons/md';




function NavBar() {
  // console.log(user?.username);

  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());

  };
  return (
    <>
      {user ? (
        // if there is a user logged in
        <div
          className="flex flex-col justify-between h-[117px] w-full bg-no-repeat bg-cover mb-4 p-4"
          style={{ backgroundImage: `url(${headerBg})` }}
        >
          <div className="flex justify-between rounded-3xl ml-auto bg-[#6C86B1]">
            <Dropdown
              label={
                <div className="flex items-center gap-2">
                  <PiUserCircleBold className='text-3xl' />
                  <span>{user.username}</span>
                </div>
              }
            >
              <DropdownHeader>
                <span className="block text-sm">{user.username}</span>
                <span className="block truncate text-sm font-medium">{user.email}</span>
              </DropdownHeader>
              <DropdownItem onClick={() => navigate("/mybookings")} icon={() => <FaClipboardUser color="black" size={20} />}
              >Bookings</DropdownItem>
              <DropdownItem onClick={() => navigate("/hotels")} icon={() => <MdHotel color="black" size={20} />}
              >Hotels</DropdownItem>
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
          className="flex flex-col justify-between w-full h-[325px] bg-cover bg-no-repeat bg-center mb-4 pr-16 pt-8"
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