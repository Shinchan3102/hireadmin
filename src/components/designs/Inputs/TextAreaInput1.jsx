import React from 'react'

const TextAreaInput1 = ({ setData, label, onChange, value, name }) => {
    return (
        <div className='flex items-start gap-4 mb-4'>
            <div className='w-32'>
                <label className='font-medium text-lg' htmlFor={name}>
                    {label}:
                </label>
            </div>
            <div className='flex-1'>
                <textarea
                    className='w-full rounded-lg h-32 outline-none text-black px-2 py-1'
                    name={name}
                    id={name}
                    onChange={(e) => onChange(e, setData)}
                    value={value}
                >
                </textarea>
            </div>
        </div>
    )
}

export default TextAreaInput1