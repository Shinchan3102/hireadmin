import React from 'react'
import OutlineButton from '../Buttons/OutlineButton'

const ConfirmPopup = ({ handleCancel, handleDelete, text, type }) => {
    return (
        <div className='absolute z-10 top-0 left-0 flex items-center justify-center w-full h-full bg-gray-800 bg-opacity-50'>
            <div className="bg-white shadow-lg w-full max-w-xs">
                <div className='text-gray-100 text-center font-medium tracking-wide p-2 text-sm uppercase bg-indigo-600'>
                    Confirm
                </div>
                <div className='p-4 text-sm text-gray-600'>
                    {
                        text ?
                            text
                            :
                            'Are you sure you want to delete the data?'
                    }
                </div>
                <div className='grid grid-cols-2'>
                    <OutlineButton
                        text={'Cancel'}
                        action={() => handleCancel(null)}
                        extendedClasses={'bg-gray-200 text-gray-500 p-2 border-r border-gray-300 text-sm font-medium hover:bg-green-500 hover:text-white'}
                    />
                    {
                        type ?
                            <OutlineButton
                                text={type}
                                action={handleDelete}
                                extendedClasses={'bg-gray-200 text-gray-500 p-2 border-l border-gray-300 text-sm font-medium hover:bg-indigo-600 hover:text-white'}
                            />
                            :
                            <OutlineButton
                                text={'Delete'}
                                action={handleDelete}
                                extendedClasses={'bg-gray-200 text-gray-500 p-2 border-l border-gray-300 text-sm font-medium hover:bg-red-500 hover:text-white'}
                            />
                    }
                </div>
            </div>
        </div>
    )
}

export default ConfirmPopup