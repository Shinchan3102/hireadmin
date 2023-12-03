import React from 'react'
import Iconname from '../Icons/Iconname'
import { PiArrowFatDownFill, PiArrowFatUpFill } from 'react-icons/pi';
import { FaUsers } from 'react-icons/fa';
import { BsPostcardFill, BsStarFill } from 'react-icons/bs';
import { MdDelete } from 'react-icons/md';
import { removeGroup } from '../../../apis/groupApis';
import { useDispatch } from 'react-redux';

const UserGroup = ({ data }) => {
    const dispatch = useDispatch();

    const deleteGroup = async () => {
        await removeGroup(dispatch, data?.id);
    }

    const iconOptions2 = [
        {
            icon: <FaUsers />,
            value: data?.noOfMembers,
            color: 'text-indigo-400',
        },
        {
            icon: <BsPostcardFill />,
            value: data?.noOfPosts,
            color: 'text-teal-400',
        },
    ]

    return (
        <div className='border p-4 rounded-lg border-gray-200 w-full flex flex-col gap-3'>
            <div className='flex justify-between items-center gap-2'>
                <div className='text-gray-400 text-sm'>
                    /user/group
                </div>
                <div className='cursor-pointer text-gray-500 hover:text-red-500 p-1.5 rounded-full hover:bg-gray-100' onClick={deleteGroup}>
                    <MdDelete />
                </div>
            </div>
            <div className='flex justify-between gap-2'>
                <div className='flex flex-col'>
                    <div className='font-medium'>
                        {data?.name} ({data?.chatGroupType})
                    </div>
                    <div className='text-gray-500 text-sm'>
                        {new Date(data?.createdDate).toDateString()}
                    </div>
                </div>
                {/* <div className='flex gap-2 items-center'>
                    {
                        iconOptions1?.map((item, index) =>
                            <Iconname
                                icon={item?.icon}
                                key={index}
                                name={item?.value}
                                color={item?.color}
                            />
                        )
                    }
                </div> */}
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

export default UserGroup
