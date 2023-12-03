import React from 'react'
import { CiEdit } from 'react-icons/ci';
import { MdVerified } from 'react-icons/md';
import Avatar from 'react-avatar';

const BriefProfile = ({ email, username, userId, isVerified }) => {
    return (
        <div className='border p-4 rounded-lg border-gray-200 w-full flex justify-between gap-2 items-start'>
            <div className='flex gap-4 items-start'>
                <div className='w-24 h-24'>
                    <div className='bg-gray-200 rounded-full w-full h-full'>
                        <Avatar name={userId} />
                    </div>
                </div>
                <div className='flex flex-col py-2'>
                    <div className='text-lg flex items-center gap-2'>
                        {username} {isVerified && <MdVerified className='text-blue-500 text-base' />}
                    </div>
                    <div className='text-gray-500'>
                        @{userId}
                    </div>
                    <div className='text-gray-400'>
                        {email}
                    </div>
                </div>
            </div>
            <div className='flex border border-gray-200 items-center gap-2 px-3 py-1 text-gray-500 rounded-full'>
                <div className=''>
                    Edit
                </div>
                <CiEdit />
            </div>
        </div>
    )
}

export default BriefProfile
