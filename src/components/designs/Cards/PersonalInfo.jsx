import React from 'react'
import { CiEdit } from 'react-icons/ci';

const ProfileInfo = ({ data }) => {

    return (
        <div className='border p-4 rounded-lg border-gray-200 w-full flex flex-col gap-6'>
            <div className='flex justify-between gap-2'>
                <div className='font-medium'>
                    Personal Information
                </div>
                <div className='flex border border-gray-200 items-center gap-2 px-3 py-1 text-gray-500 rounded-full'>
                    <div className=''>
                        Edit
                    </div>
                    <CiEdit />
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4'>
                {
                    data?.map((item, index) =>
                        <div className='flex flex-col' key={index}>
                            <div className='text-sm text-gray-400'>
                                {item?.name}
                            </div>
                            <div className=''>
                                {item?.value}
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default ProfileInfo