import React from 'react'

const KanbanCard1 = ({ item, color, background }) => {
    return (
        <div className='bg-[var(--light-300)] rounded-lg shadow-sm py-2 px-3 flex items-center gap-[1rem]'>
            <div className={`p-3 font-[500] rounded-lg bg-[var(--light-200)]`} style={{ color: color, background: background }}>{item.icon}</div>
            <div className='flex flex-col gap-[0.1rem]'>
                <div className='font-[500]' style={{ color }}>{item.title}</div>
                <div className='text-[0.8rem] text-[var(--gray-2)]'>{item.task} tasks</div>
            </div>
        </div>
    )
}

export default KanbanCard1;