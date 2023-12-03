import React from 'react'

const ImageInput2 = ({ setData, label, name, setUrl }) => {
    const handleImageChange = (event) => {
        const file = event.target.files[0];

        if (file) {
            const reader = new FileReader();

            reader.onload = (e) => {
                setUrl(e.target.result);
            };

            reader.readAsDataURL(file);
        }
    };
    return (
        <div className='flex flex-col justify-start text-xs gap-1'>
            <div className=''>
                <label className='text-xs font-normal' htmlFor={name}>
                    {label}
                </label>
            </div>
            <div className='flex-1'>
                <input
                    className='w-full py-2 rounded-sm outline-none p-1 border text-black bg-[rgba(255,255,255,0.17)] focus-within:border-indigo-600'
                    name={name}
                    id={name}
                    onChange={(e) => { handleImageChange(e); setData((prev) => { return { ...prev, [name]: e.target.files[0] } }) }}
                    type={'file'}
                />
            </div>
        </div>
    )
}

export default ImageInput2