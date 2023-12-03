import React from 'react'
import Iconname from '../Icons/Iconname'
import { PiArrowFatDownFill, PiArrowFatUpFill } from 'react-icons/pi';
import { BsFillChatLeftTextFill, BsStarFill } from 'react-icons/bs';
import { MdDelete, MdRocketLaunch } from 'react-icons/md';
import { removePost } from '../../../apis/postApis';
import { useDispatch } from 'react-redux';

const UserPost = ({ data }) => {
    const iconOptions1 = [
        {
            icon: <PiArrowFatUpFill />,
            value: data?.noOfUpVotes,
            color: 'text-blue-500',
        },
        {
            icon: <PiArrowFatDownFill />,
            value: data?.noOfDownVotes,
            color: 'text-blue-500',
        },
    ];

    const iconOptions2 = [
        {
            icon: <MdRocketLaunch />,
            value: data?.boost,
            color: 'text-blue-400',
        },
        {
            icon: <BsFillChatLeftTextFill />,
            value: data?.noOfComments,
            color: 'text-green-500',
        },
    ]

    const dispatch = useDispatch();

    const deletePost = async () => {
        await removePost(dispatch, data.id);
    }

    return (
        <div className='border p-4 rounded-lg border-gray-200 w-full flex flex-col gap-3'>
            <div className='flex justify-between items-center gap-2'>
                <div className='text-gray-400 text-sm'>
                    /user/post
                </div>
                <div className='cursor-pointer text-gray-500 hover:text-red-500 p-1.5 rounded-full hover:bg-gray-100' onClick={deletePost}>
                    <MdDelete />
                </div>
            </div>
            <div className='flex justify-between gap-2'>
                <div className='flex flex-col'>
                    <div className='font-medium'>
                        @{data?.user?.userId} ({data?.contestCategory?.name})
                    </div>
                    <div className='text-gray-500 text-sm'>
                        {new Date(data?.createdDate).toDateString()}
                    </div>
                </div>
                <div className='flex gap-2 items-center'>
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
                </div>
            </div>
            <div className=''>
                {data?.title}
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

export default UserPost