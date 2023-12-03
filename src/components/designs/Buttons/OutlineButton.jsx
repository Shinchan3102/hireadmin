import React from 'react'

const OutlineButton = ({ text, icon, extendedClasses, action }) => {
    return (
        <div className={`flex items-center transition-all duration-250 justify-center gap-2 cursor-pointer ${extendedClasses}`} onClick={action}>
            {
                icon &&
                <div className=''>
                    {icon}
                </div>
            }
            <div className=''>
                {text}
            </div>
        </div>
    )
}

export default OutlineButton
