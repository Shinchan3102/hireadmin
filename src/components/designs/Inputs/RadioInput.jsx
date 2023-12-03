import React from 'react'

const RadioInput = ({ setData, label, onChange, value, name, type }) => {
    return (
        <div className='flex items-start gap-4 mb-4'>
            <div className='w-32'>
                <label className='font-medium text-lg' htmlFor={name}>
                    {label}:
                </label>
            </div>
            <div className='flex-1 flex items-center gap-2'>
                <input
                    name={name}
                    id={"True"}
                    onChange={(e) => onChange(e, setData)}
                    value={'True'}
                    checked={value === 'True'}
                    type={'radio'}

                />
                <label htmlFor='True' className='mr-6'>Visible</label>
                <input
                    name={name}
                    id={'False'}
                    onChange={(e) => onChange(e, setData)}
                    value={'False'}
                    checked={value === 'False'}
                    type={'radio'}
                />
                <label htmlFor='False'>Not Visible</label>
            </div>
        </div>
    )
}

export default RadioInput
