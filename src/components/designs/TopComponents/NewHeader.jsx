import React from 'react'

const NewHeader = ({ title }) => {
    return (
        <div className='py-4 px-6 text-indigo-600 bg-indigo-200 rounded-t-xl font-semibold text-4xl' style={{ fontFamily: "'Baloo 2', cursive" }}>
            {title}
        </div>
    )
}

export default NewHeader
