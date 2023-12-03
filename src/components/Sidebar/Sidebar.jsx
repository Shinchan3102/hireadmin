import React, { useState } from 'react';
import { menuItems } from '../../utils/Data/SidebarData';
import './Sidebar.css';
import Icon from '../designs/Icons/Icon';
import MenuItem from './MenuItem';
import MenuGroup from './MenuGroup';

const Sidebar = () => {
    const [open, setOpen] = useState(-1);

    const handleClick = (id) => {
        setOpen((prev) => prev === id ? -1 : id);
    }

    return (
        <div className='h-full w-[280px] min-w-[280px]'>
            <div className='flex rounded-lg flex-col h-full w-full grow gap-y-5 overflow-y-auto shadow-sm py-2 pt-8 px-4 bg-white text-gray-400'>

                {/* Icon Section Start */}
                <Icon />
                {/* Icon Section End */}
                <hr />

                {/* Menu Section Start */}
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