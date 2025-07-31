import React, { useState } from 'react';
import { Sidebar, SidebarItem, SidebarItemGroup, SidebarItems, Button } from 'flowbite-react';
import { GiExplodingPlanet } from "react-icons/gi";
import { FaClipboardQuestion } from "react-icons/fa6";
import { IoMdHome } from "react-icons/io";
import { FaClipboardUser } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';

function SideBar() {
    const [collapsed, setCollapsed] = useState(false);
    const navigate = useNavigate();
    const user = useSelector((state) => state.user.user);


    const toggleSidebar = () => setCollapsed(!collapsed);

    return (
        <div className={`absolute top-4 left-4 rounded-lg h-[650px] bg-blue-600 text-white flex flex-col transition-all duration-300 ${collapsed ? 'w-[60px]' : 'w-[250px]'}`}>
            <div className=" p-5 flex justify-end">
                <button onClick={toggleSidebar} className="text-white ">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </div>

            <div className={` bg-blue-600  transition-all duration-300 ${collapsed ? 'w-[60px]' : 'w-[250px]'} overflow-hidden`}>
                <Sidebar aria-label="Sidebar"
                    className="!bg-blue-600 text-white h-full"
                    theme={{ root: { base: "!bg-blue-600 !text-white" } }}>
                    <SidebarItems className='!text-white my-[-16px] mx-[-16px]'>
                        <SidebarItemGroup className='bg-blue-600'>
                            <SidebarItem
                                onClick={() => navigate("/home")}
                                icon={() => <IoMdHome color="white" size={20} />}
                                className='text-white pl-5 cursor-pointer'>
                                {!collapsed && 'Home'}
                            </SidebarItem>

                            <SidebarItem
                                onClick={() => navigate("/mybookings")}
                                icon={() => <FaClipboardUser color="white" size={20} />}
                                className='text-white pl-5 cursor-pointer'>
                                {!collapsed && 'My Bookings'}
                            </SidebarItem>

                            <SidebarItem
                                onClick={() => navigate("/home")}
                                icon={() => <GiExplodingPlanet color="white" size={20} />}
                                className='text-white pl-5 cursor-pointer'>
                                {!collapsed && 'Explore'}
                            </SidebarItem>

                            <SidebarItem
                                onClick={() => navigate("/home")}
                                icon={() => <FaClipboardQuestion color="white" size={20} />}
                                className='text-white pl-5 cursor-pointer'>
                                {!collapsed && 'Support'}
                            </SidebarItem>
                        </SidebarItemGroup>
                    </SidebarItems>
                </Sidebar>
            </div>
            {!user ? (
                !collapsed && (
                    <div className="mt-auto p-1">
                        <Button
                            onClick={() => navigate("/register")}
                            color="light"
                            className="w-full text-red-500 border-red-500 hover:bg-red-100"
                        >
                            Sign Up Now
                        </Button>
                    </div>
                )
            ) : null}

        </div>
    );
}

export default SideBar;
