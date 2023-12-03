
import { useDispatch } from 'react-redux';
import Headers from '../components/designs/TopComponents/Headers';
import { useNavigate, useParams } from 'react-router-dom';
import AllInstitutes from '../components/Institutes/AllInstitutes';
import AddInstitute from '../components/Institutes/AddInstitute';

const Institutes = () => {

    const { type } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleClick = () => {
        navigate(`/institutes/add`);
    }
    return (
        <div className='flex-1 mr-2 rounded-2xl bg-white shadow-sm w-full overflow-hidden'>
            <div className='w-full max-w-full h-full overflow-auto'>
                {
                    type?.includes('add') ?
                        <Headers title={'Add Institute'} showAction={false} />
                        :
                        !type?.includes('all') ?
                            <Headers title={'Edit Institute'} showAction={false} />
                            :
                            <Headers title={'Institutes'} showAction={true} action={handleClick} />
                }
                <div className='px-6'>
                    {
                        !type?.includes('all') ?
                            <AddInstitute />
                            :
                            <AllInstitutes />
                    }
                </div>
            </div>
        </div>
    )
}

export default Institutes