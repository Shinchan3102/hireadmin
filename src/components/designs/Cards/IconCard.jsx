import React from 'react';

const IconCard = ({ item }) => {
    return (
        <div className='rounded-lg w-full shadow-sm bg-indigo-100 p-4 flex gap-4 items-center'>
            <div className='text-3xl rounded-lg p-2 bg-gray-50 text-indigo-600'>
                {item?.icon}
            </div>
            <div className='flex-1'>
                <div className='text-2xl font-semibold text-indigo-600'>
                    {item?.value}
                </div>
                <div className='text-xs text-gray-500 font-medium'>
                    {item?.title}
                </div>
            </div>
        </div>
    )
}

export default IconCard
