import React from 'react'
import { getListBorder } from '../../../utils/Data/KanbanData'
import { BiCalendar } from 'react-icons/bi'
import { IoIosPeople } from 'react-icons/io'
import { AiFillEdit } from 'react-icons/ai';
import { MdDelete } from 'react-icons/md'
import OutlineButton from '../Buttons/OutlineButton';

const KanbanBoardList = ({ data }) => {
    return (
        <div className={`bg-white flex flex-col gap-3 shadow-lg hover:shadow-none duration-300 transition-all p-3 border-l-4 ${getListBorder(data.priority)}`}>
            {/* ------------------------------------------- */}
            {/* heading section start  */}
            {/* ------------------------------------------- */}
            <div className='font-medium truncate'>
                {data?.title}
            </div>
            {/* ------------------------------------------- */}
            {/* heading section end  */}
            {/* ------------------------------------------- */}

            <div className='flex flex-col gap-2 px-1'>
                {/* ------------------------------------------- */}
                {/* date section start */}
                {/* ------------------------------------------- */}
                <div className='text-xs flex items-center gap-2 text-gray-600'>
                    <div className='flex items-center text-sm'>
                        <BiCalendar />
                    </div>
                    <div className=''>
                        {data?.date} - {data?.date}
                    </div>
                </div>
                {/* ------------------------------------------- */}
                {/* date section end */}
                {/* ------------------------------------------- */}

                {/* ------------------------------------------- */}
                {/* assignees section start */}
                {/* ------------------------------------------- */}
                <div className='text-xs flex items-center gap-2 text-gray-600'>
                    <div className='flex items-center text-sm'>
                        <IoIosPeople />
                    </div>
                    <div className=''>
                        {data?.assignees}
                    </div>
                </div>
                {/* ------------------------------------------- */}
                {/* assignees section end */}
                {/* ------------------------------------------- */}
            </div>

            {/* ------------------------------------------- */}
            {/* actions section */}
            {/* ------------------------------------------- */}
            <div className='flex items-center justify-between'>
                <OutlineButton
                    text={'Edit'}
                    icon={<AiFillEdit />}
                    colors={'hover:bg-green-600 hover:text-white text-green-600'}
                    action={null}
                />
                <OutlineButton
                    text={'Delete'}
                    icon={<MdDelete />}
                    colors={'hover:bg-red-600 hover:text-white text-red-600'}
                    action={null}
                />
            </div>
        </div>
    )
}

export default KanbanBoardList
