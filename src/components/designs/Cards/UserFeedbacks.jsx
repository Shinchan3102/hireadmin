import React from 'react'
import Iconname from '../Icons/Iconname'
import { BsStarFill } from 'react-icons/bs';
import { MdDelete } from 'react-icons/md';

const UserFeedbacks = ({ data }) => {

    const iconOptions2 = [
        {
            icon: <BsStarFill />,
            value: data?.stars,
            color: 'text-yellow-400',
        }
    ]

    return (
        <div className='border p-4 rounded-lg border-gray-200 w-full flex flex-col gap-3'>
            <div className='flex justify-between items-center gap-2'>
                <div className='text-gray-400 text-sm'>
                    /user/feedback
                </div>
                {/* <div className='cursor-pointer text-gray-500 hover:text-red-500 p-1.5 rounded-full hover:bg-gray-100'>
                    <MdDelete />
                </div> */}
            </div>
            <div className='flex justify-between gap-2'>
                <div className='flex flex-col'>
                    <div className='font-medium'>
                        {data?.feedbackQuery}
                    </div>
                    <div className='text-gray-500 text-sm'>
                        {new Date(data?.creationDate).toDateString()}
                    </div>
                </div>
            </div>
            <div className=''>
                {data?.description}
            </div>
            <div className='flex justify-end items-center gap-2'>
                {
                    iconOptions2?.map((item, index) =>
                        <Iconname
                            icon={item?.icon}
                            key={index}
                            name={item?.value}
                            color={item?.color}
                        />
                    )
                }
            </div>
        </div>
    )
}

export default UserFeedbacks