import React, { useState } from 'react'
import { AiOutlineDelete } from 'react-icons/ai'
import { FiEdit2 } from 'react-icons/fi'
import { RxCross2 } from 'react-icons/rx'
import { useDispatch } from 'react-redux'

const PopupCard = ({
    popupType,
    title,
    handleCancel,
    handleEdit,
    handleToggleConfirmPopup,
    overviews,
    description,
    image
}) => {
    // const [confirmView, setConfirmView] = useState(false);

    // const dispatch = useDispatch();

    // const handleToggleConfirmView = () => {
    //     setConfirmView((prev) => !prev);
    // }

    // const handleDeleteTask = async () => {
    //     await deleteTask(dispatch, data);
    //     handleToggleConfirmView();
    //     handleCancel();
    // }

    return (
        <div className="absolute z-10 top-0 left-0 flex items-center justify-center w-full h-full bg-gray-800 bg-opacity-50">
            <div className="bg-white p-6 shadow-lg rounded-xl w-full max-w-xl mx-8 max-h-[90vh] overflow-y-auto">
                <div className='w-full flex items-center gap-5 justify-between mb-3'>
                    <div className='w-8/12 text-sm text-gray-400'>
                        {popupType}
                    </div>
                    <div className='text-gray-400 border-gray-300 hover:text-indigo-600 hover:border-indigo-500 cursor-pointer p-1 rounded-lg border' onClick={handleCancel}>
                        <RxCross2 />
                    </div>
                </div>
                <div className='flex items-start gap-6'>
                    <div className='w-8/12 text-lg font-semibold text-gray-700'>
                        {title}
                    </div>
                    <div className='flex-1 flex items-center justify-end gap-2 text-gray-400'>
                        <div className='text-sm rounded-lg w-6 h-6 flex justify-center items-center border border-gray-300 hover:text-green-600 cursor-pointer hover:border-green-400' onClick={handleEdit}>
                            <FiEdit2 />
                        </div>
                        <div className='rounded-lg w-6 h-6 flex justify-center items-center border hover:text-red-600 border-gray-300 cursor-pointer hover:border-red-400' onClick={handleToggleConfirmPopup}>
                            <AiOutlineDelete />
                        </div>
                    </div>
                </div>
                {/* image section start  */}
                {
                    image &&
                    <div className='relative p-2'>
                        <img src={image} alt='' className='w-full rounded-lg' />
                    </div>
                }
                {/* overviews section start  */}
                {
                    overviews ?
                        <div className='mt-4 text-sm text-gray-500 font-medium flex flex-col gap-2'>
                            <div className='mb-1 font-semibold text-gray-600'>
                                Overviews
                            </div>
                            <div className='flex gap-3 flex-col max-h-[300px] overflow-y-auto'>
                                {
                                    overviews?.map((item, index) =>
                                        <div className='flex gap-4' key={index}>
                                            <div className='w-[100px]'>
                                                {item?.name}
                                            </div>
                                            <div className='flex-1'>
                                                {item?.value}
                                            </div>
                                        </div>
                                    )
                                }
                            </div>
                        </div>
                        :
                        <></>
                }
                {/* description section start  */}
                {
                    description ?
                        <div className='mt-4 text-gray-600 text-sm'>
                            <div className='my-3 font-semibold'>
                                Description
                            </div>
                            <div className='max-h-[200px] overflow-auto text-gray-500' dangerouslySetInnerHTML={{ __html: description?.length > 0 ? description : 'No description here' }}>
                            </div>
                        </div>
                        :
                        <></>
                }
            </div>
            {/* {
                confirmView &&
                <ConfirmModal handleCancel={handleToggleConfirmView} handleDelete={handleDeleteTask} />
            } */}
        </div>
    )
}

export default PopupCard