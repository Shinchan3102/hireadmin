import React from 'react';
import { MdWatchLater } from 'react-icons/md';
import OutlineButton from '../designs/Buttons/OutlineButton';

const TopBar = () => {
    return (
        <div className='w-full bg-white p-4 rounded-xl shadow-sm flex justify-between gap-2 items-center transition-all duration-300 ease-linear'>
            <div></div>
            <div className='text-gray-500 bg-gray-100 px-4 py-2 rounded-full text-sm flex items-center gap-1.5'>
                <div className='flex justify-center items-center'>
                    <MdWatchLater />
                </div>
                <div className=''>
                    {new Date().toDateString()}
                </div>
            </div>
            <div className=''>
                <OutlineButton
                    text={'Sign In'}
                    extendedClasses={'text-gray-500 bg-gray-100 rounded-full py-2 px-4 text-sm font-medium hover:bg-indigo-200 hover:text-indigo-600'}
                />
            </div>
        </div>
    )
}

export default TopBar
