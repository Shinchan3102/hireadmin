import React from 'react'

const Iconname = ({ icon, name, color }) => {
    return (
        <div className='flex items-center gap-1'>
            <div className={`${color}`}>
                {icon}
            </div>
            <div className=''>
                {name}
            </div>
        </div>
    )
}

export default Iconname
