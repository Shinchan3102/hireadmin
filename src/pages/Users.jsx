import { useEffect, useState } from 'react'
import NewHeader from '../components/designs/TopComponents/NewHeader';
import { getUsers } from '../apis/userApis';
import { useDispatch, useSelector } from 'react-redux';
import { userTableStructure } from '../utils/Data/UsersData';

import Table3 from '../components/designs/Tables/Table3';
import { updatedDataWithoutPage } from '../utils/Global/main';
import ConfirmPopup from '../components/designs/popups/ConfirmPopup';
import { remove } from '../store/userSlice';

const Users = () => {
    const dispatch = useDispatch();

    const { users } = useSelector((state) => state.user);
    const [viewConfirm1, setViewConfirm1] = useState(false);
    const [deleteData, setDeleteData] = useState(null);


    const handleToggleConfirmView1 = (data) => {
        setDeleteData(data);
        setViewConfirm1((prev) => !prev);
    }

    const handleDelete = () => {
        dispatch(remove(deleteData));
        handleToggleConfirmView1(null);
    }

    useEffect(() => {
        const getData = async () => {
            await getUsers(dispatch)
        }
        getData();
    }, [dispatch]);

    return (
        <div className='bg-white rounded-xl flex-1 overflow-auto gap-8 flex flex-col'>
            <NewHeader title={'Users'} />
            <div className='px-8 flex-1 overflow-auto pb-6'>
                {
                    users &&
                    <Table3
                        data={updatedDataWithoutPage(users)}
                        tableStructure={userTableStructure}
                        handleDelete={handleToggleConfirmView1}
                    />
                }
            </div>
            {
                viewConfirm1 &&
                <ConfirmPopup
                    handleCancel={handleToggleConfirmView1}
                    handleDelete={handleDelete}
                    type={'Delete'}
                    text={'Are you sure you want to delete the user?'}
                />
            }
        </div>
    )
}

export default Users
