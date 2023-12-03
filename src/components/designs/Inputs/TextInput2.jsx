import React from 'react'

const TextInput2 = ({ setData, label, onChange, value, name, type }) => {
    return (
        <div className='flex flex-col justify-start text-xs gap-1'>
            <div className=''>
                <label className='text-xs font-normal' htmlFor={name}>
                    {label}
                </label>
            </div>
            <div className='flex-1'>
                {
                    type === 'textarea' ?
                        <textarea
                            className='w-full rounded-sm outline-none p-1 border text-black bg-[rgba(255,255,255,0.17)] focus-within:border-indigo-600 min-h-[100px]'
                            name={name}
                            id={name}
                            onChange={(e) => onChange(e, setData)}
                            value={value}
                            type={type}
                        />
                        :
                        <input
                            className='w-full p-2 rounded-sm outline-none border text-black bg-[rgba(255,255,255,0.17)] focus-within:border-indigo-600'
                            name={name}
                            id={name}
                            onChange={(e) => onChange(e, setData)}
                            value={value}
                            type={type}
                        />
                }
            </div>
        </div>
    )
}

export default TextInput2