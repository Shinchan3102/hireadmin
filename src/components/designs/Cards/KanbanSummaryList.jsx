import React from 'react'
import { FiArrowRight } from 'react-icons/fi'
import { useNavigate } from 'react-router-dom'

const KanbanSummaryList = ({ title, background, tasks, icon }) => {
    const navigate = useNavigate();
    return (
        <div className='flex flex-col justify-between gap-3 py-3 shadow-lg hover:shadow-none duration-300 transition-all px-5 rounded-xl cursor-pointer' onClick={() => navigate('/kanban')} style={{ background }}>
            <div className='flex justify-between items-center'>
                <span className='flex w-12 h-12 rounded-full bg-white items-center justify-center text-2xl shrink-0' style={{ color: background }} >
                    {icon}
                </span>
                <span className='text-2xl text-white w-8 h-8 flex justify-center items-center shrink-0'>
                    <FiArrowRight fontWeight={'900'} />
                </span>
            </div>

            <div className='text-3xl font-medium text-white'>
                {tasks} <span className='text-sm font-normal'>{tasks > 1 ? 'Tasks' : 'Task'}</span>
            </div>

            <div className='text-white font-medium'>
                {title}
            </div>
        </div>
    )
}

export default KanbanSummaryList
