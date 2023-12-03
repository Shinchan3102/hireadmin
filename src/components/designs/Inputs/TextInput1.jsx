import React from 'react'

const TextInput1 = ({ setData, label, onChange, value, name, type }) => {
    return (
        <div className='flex items-start gap-4 mb-4'>
            <div className='w-32'>
                <label className='font-medium text-lg' htmlFor={name}>
                    {label}:
                </label>
            </div>
            <div className='flex-1'>
                <input
                    className='w-full rounded-lg outline-none shadow py-3 text-black p-2 bg-[rgba(255,255,255,0.17)] border focus-within:border-indigo-600 border-[rgba(255,255,255,0.45)]'
                    name={name}
                    id={name}
                    onChange={(e) => onChange(e, setData)}
                    value={value}
                    type={type}
                />
            </div>
        </div>
    )
}

export default TextInput1
