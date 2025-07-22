import React, { useState } from 'react';
import {
    Sidebar,
    SidebarItem,
    SidebarItemGroup,
    SidebarItems,
    Button,
} from 'flowbite-react';

import { GiExplodingPlanet } from "react-icons/gi";
import { FaClipboardQuestion } from "react-icons/fa6";
import { IoMdHome } from "react-icons/io";
import { FaClipboardUser } from "react-icons/fa6";


function SideBar() {
    const [collapsed, setCollapsed] = useState(false);

    const toggleSidebar = () => setCollapsed(!collapsed);

    return (
        <div className={`rounded-lg h-[650px] bg-blue-600 text-white flex flex-col transition-all duration-300 ${collapsed ? 'w-[60px]' : 'w-[250px]'}`}>

            <div className=" p-2 flex justify-end">
                <button onClick={toggleSidebar} className="text-white">

                    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </div>

            <div className={` bg-blue-600  transition-all duration-300 ${collapsed ? 'w-[60px]' : 'w-[250px]'} overflow-hidden`}>
                <Sidebar aria-label="Sidebar"
                    className="!bg-blue-600 text-white h-full"
                    theme={{
                        root: {
                            base: "!bg-blue-600 !text-white"
                        }
                    }}>
                    <SidebarItems className='!text-white my-[-16px] mx-[-16px]  ' >
                        <SidebarItemGroup className='bg-blue-600 '  >
                            <SidebarItem href="/home" icon={() => <IoMdHome color="white" size={20} />} className='text-white' >
                                {!collapsed && 'Home'}
                            </SidebarItem>
                            <SidebarItem href="/home" icon={() => <FaClipboardUser color="white" size={20} />} className='text-white' >
                                {!collapsed && 'My Bookings'}
                            </SidebarItem>
                            <SidebarItem href="/home" icon={() => <GiExplodingPlanet color="white" size={20} />} className='text-white' >
                                {!collapsed && 'Explore'}
                            </SidebarItem>
                            <SidebarItem href="/home" icon={() => <FaClipboardQuestion color="white" size={20} />} className='text-white' >
                                {!collapsed && 'Support'}
                            </SidebarItem>


                          
                        </SidebarItemGroup>

                    </SidebarItems>
                </Sidebar>
            </div>


            <div className="mt-auto p-1">
                <Button color="light" className="w-full text-red-500 border-red-500 hover:bg-red-100">
                    {!collapsed && 'Sign Up Now'}
                </Button>
            </div>
        </div>
    );
}

export default SideBar;


