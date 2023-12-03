import React from 'react'

const Header = ({title}) => {
  return (
    <div className='text-4xl p-6 font-semibold text-gray-400'>
      {title}
    </div>
  )
}

export default Header