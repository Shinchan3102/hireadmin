import { useEffect, useState } from 'react'
import NewHeader from '../components/designs/TopComponents/NewHeader';
import { getUsers } from '../apis/userApis';
import { useDispatch, useSelector } from 'react-redux';
import { userTableStructure } from '../utils/Data/UsersData';

import Table3 from '../components/designs/Tables/Table3';
import { updatedDataWithoutPage } from '../utils/Global/main';
import ConfirmPopup from '../components/designs/popups/ConfirmPopup';
import { remove, update } from '../store/userSlice';
import MyModal from '../components/designs/popups/MyModal';

const Users = () => {
    const dispatch = useDispatch();

    const { users } = useSelector((state) => state.user);
    const [viewConfirm1, setViewConfirm1] = useState(false);
    const [deleteData, setDeleteData] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editData, setEditData] = useState(null);

    const openModal = (data) => {
        setEditData(data)
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setEditData(null)
        setIsModalOpen(false);
    };

    const saveChanges = (newFormData) => {
        // Handle saving changes, e.g., send data to the server
        dispatch(update(newFormData))
        console.log('New Form Data:', newFormData);
    };


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
                        handleEdit={openModal}
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

            <MyModal
                open={isModalOpen}
                onClose={closeModal}
                onSave={saveChanges}
                initialData={editData}
            />
        </div>
    )
}

export default Users
