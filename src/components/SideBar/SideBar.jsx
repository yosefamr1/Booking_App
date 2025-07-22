import React, { useState } from 'react';
import {
    Sidebar,
    SidebarItem,
    SidebarItemGroup,
    SidebarItems,
    Button,
} from 'flowbite-react';

import {
    HiChartPie,
    HiClipboard,
    HiCollection,
    HiInformationCircle,
    HiLogin,
    HiPencil,
    HiShoppingBag,
    HiUsers,
} from 'react-icons/hi';

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
                    <SidebarItems className='my-[-16px] mx-[-16px]  ' >
                        <SidebarItemGroup className='bg-blue-600' >
                            <SidebarItem href="/" icon={HiChartPie}>
                                {!collapsed && 'Dashboard'}
                            </SidebarItem>
                            <SidebarItem href="/products" icon={HiShoppingBag}>
                                {!collapsed && 'Products'}
                            </SidebarItem>
                            <SidebarItem href="/users" icon={HiUsers}>
                                {!collapsed && 'Users'}
                            </SidebarItem>
                            <SidebarItem href="/login" icon={HiLogin}>
                                {!collapsed && 'Sign In'}
                            </SidebarItem>
                            <SidebarItem href="/signup" icon={HiPencil}>
                                {!collapsed && 'Sign Up'}
                            </SidebarItem>
                        </SidebarItemGroup>

                        {/* <SidebarItemGroup className='bg-blue-600 '>
                            <SidebarItem href="https://github.com/" icon={HiClipboard}>
                                {!collapsed && 'Docs'}
                            </SidebarItem>
                            <SidebarItem href="https://flowbite-react.com/" icon={HiCollection}>
                                {!collapsed && 'Components'}
                            </SidebarItem>
                            <SidebarItem href="https://github.com/issues" icon={HiInformationCircle}>
                                {!collapsed && 'Help'}
                            </SidebarItem>
                        </SidebarItemGroup> */}
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


