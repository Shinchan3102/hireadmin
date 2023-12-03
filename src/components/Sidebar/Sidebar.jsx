import React, { Fragment, useEffect, useState } from 'react';
import { menuItems } from '../../utils/Data/SidebarData';
import './Sidebar.css';
import Icon from '../designs/Icons/Icon';
import MenuItem from './MenuItem';
import MenuGroup from './MenuGroup';
import { Transition, Dialog } from '@headlessui/react'
import { Menu, X } from 'lucide-react'
import { Link } from 'react-router-dom';

const Sidebar = () => {
    const [open, setOpen] = useState(false);
    const [open1, setOpen1] = useState(false);

    const handleClick = (id) => {
        setOpen((prev) => prev === id ? -1 : id);
    }

    useEffect(() => {
        setOpen(false);
    }, [])

    return (
        <div className='h-full w-[280px] min-w-[280px]'>
            <div className='flex rounded-lg flex-col h-full w-full grow gap-y-5 overflow-y-auto shadow-sm py-2 pt-8 px-4 bg-white text-gray-400'>


                <Icon />

                <hr />


                <nav className='flex flex-1 flex-col sidebar overflow-y-auto'>
                    <ul role='list' className='flex flex-1 flex-col gap-y-2'>
                        {
                            menuItems.map((item, index) =>
                                <li key={index}>
                                    {
                                        item.type === 'item' ?
                                            <MenuItem item={item} />
                                            :
                                            <MenuGroup item={item} index={index} handleClick={handleClick} open={open} />
                                    }
                                </li>
                            )
                        }
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Sidebar


{/* <div className='h-full w-[280px] min-w-[280px]'>
<div className='flex rounded-lg flex-col h-full w-full grow gap-y-5 overflow-y-auto shadow-sm py-2 pt-8 px-4 bg-white text-gray-400'>

    
    <Icon />
    
    <hr />

    
    <nav className='flex flex-1 flex-col sidebar overflow-y-auto'>
        <ul role='list' className='flex flex-1 flex-col gap-y-2'>
            {
                menuItems.map((item, index) =>
                    <li key={index}>
                        {
                            item.type === 'item' ?
                                <MenuItem item={item} />
                                :
                                <MenuGroup item={item} index={index} handleClick={handleClick} open={open} />
                        }
                    </li>
                )
            }
        </ul>
    </nav>
</div>
</div> */}