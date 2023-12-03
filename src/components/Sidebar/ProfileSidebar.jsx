import React from 'react'
import { profileOptions } from '../../utils/Data/ProfileData'
import { blockUser } from '../../apis/userApis'
import { useDispatch } from 'react-redux'

const ProfileSidebar = ({ handleClick, activeTab, data }) => {
    const dispatch = useDispatch();

    const handleBlock = async () => {
        const query = `userId=${data?.userId}&block=${data?.activated}`
        await blockUser(dispatch, query);
    }

    return (
        <div className='flex flex-col gap-3 text-gray-500'>
            {
                profileOptions?.map((item, index) =>
                    <div
                        onClick={() => handleClick(index)}
                        className={`w-fit px-3 cursor-pointer hover:text-indigo-600 hover:bg-indigo-100 rounded-full py-1.5 ${index === activeTab ? 'text-indigo-600 bg-indigo-100' : ''}`}
                        key={index}
                    >
                        {item?.name}
                    </div>
                )
            }
            <div className={`w-fit px-3 cursor-pointer ${data?.activated ? 'hover:bg-red-600 text-red-500' : 'hover:bg-green-600 text-green-500'} hover:text-white rounded-full py-1.5 `} onClick={handleBlock}>
                {data?.activated ? 'Block' : 'Unblock'} Account
            </div>
        </div>
    )
}

export default ProfileSidebar
