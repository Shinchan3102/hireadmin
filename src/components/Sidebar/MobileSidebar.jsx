import React, { Fragment, useEffect, useState } from 'react';
import { menuItems } from '../../utils/Data/SidebarData';
import './Sidebar.css';
import Icon from '../designs/Icons/Icon';
import MenuItem from './MenuItem';
import MenuGroup from './MenuGroup';
import { Transition, Dialog } from '@headlessui/react'
import { Menu, X } from 'lucide-react'
import { Link } from 'react-router-dom';

const MobileSidebar = () => {
    const [open, setOpen] = useState(false);
    const [open1, setOpen1] = useState(false);

    const handleClick = (id) => {
        setOpen((prev) => prev === id ? -1 : id);
    }

    useEffect(() => {
        setOpen(false);
    }, [])

    return (
        <div className='fixed bg-zinc-50 border-b border-zinc-200 top-0 inset-x-0 py-2 px-4'>
            <div className='w-full flex justify-between items-center'>
                <Link href={'/dashboard'} >
                    {/* <UserPlus className='h-6 w-auto text-indigo-600' /> */}
                </Link>
                <div onClick={() => setOpen(true)} className='gap-4'>
                    <Menu className='h-6 w-6' />
                </div>
            </div>
            <Transition.Root show={open} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={setOpen}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-in-out duration-500"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in-out duration-500"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-hidden">
                        <div className="absolute inset-0 overflow-hidden">
                            <div className="pointer-events-none fixed inset-y-0 left-0 flex max-w-full pr-10">
                                <Transition.Child
                                    as={Fragment}
                                    enter="transform transition ease-in-out duration-500 sm:duration-700"
                                    enterFrom="-translate-x-full"
                                    enterTo="translate-x-0"
                                    leave="transform transition ease-in-out duration-500 sm:duration-700"
                                    leaveFrom="translate-x-0"
                                    leaveTo="-translate-x-full"
                                >
                                    <Dialog.Panel className="pointer-events-auto relative w-screen max-w-md">
                                        <Transition.Child
                                            as={Fragment}
                                            enter="ease-in-out duration-500"
                                            enterFrom="opacity-0"
                                            enterTo="opacity-100"
                                            leave="ease-in-out duration-500"
                                            leaveFrom="opacity-100"
                                            leaveTo="opacity-0"
                                        >
                                            <div className="absolute right-0 top-0 -mr-8 flex pl-2 pt-4 sm:-mr-10 sm:pl-4">
                                                <button
                                                    type="button"
                                                    className="rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                                                    onClick={() => setOpen(false)}
                                                >
                                                    <span className="sr-only">Close panel</span>
                                                    <X className="h-6 w-6" aria-hidden="true" />
                                                </button>
                                            </div>
                                        </Transition.Child>
                                        <div className="flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl">
                                            <div className="px-4 sm:px-6">
                                                <Dialog.Title className="text-base font-semibold leading-6 text-gray-900">
                                                    <Icon />
                                                </Dialog.Title>
                                            </div>
                                            <div className="relative mt-6 flex flex-col flex-1 px-4 sm:px-6">{/* Your content */}
                                                <div className='flex rounded-lg flex-col h-full w-full grow gap-y-5 overflow-y-auto shadow-sm py-2 pt-8 px-4 bg-white text-gray-400'>

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
                                        </div>
                                    </Dialog.Panel>
                                </Transition.Child>
                            </div>
                        </div>
                    </div>
                </Dialog>
            </Transition.Root>
        </div>
    )
}

export default MobileSidebar


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