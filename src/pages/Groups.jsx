import { useDispatch, useSelector } from 'react-redux';
import NewHeader from '../components/designs/TopComponents/NewHeader';
import { getFilteredQuery, getGlobalFilterQuery, getOverviewsData, getSortingQuery, groupTableStructure } from '../utils/Data/GroupData';
import FeaturedTable from '../components/designs/Tables/FeaturedTable';
import { updatedData } from '../utils/Global/main';
import { useEffect, useState } from 'react';
import { getGroups, removeGroup } from '../apis/groupApis';
import PopupCard from '../components/designs/popups/PopupCard';
import { Delete } from '@mui/icons-material';
import ConfirmPopup from '../components/designs/popups/ConfirmPopup';

const Groups = () => {
    const dispatch = useDispatch();
    const { groups, isLoading, totalElements } = useSelector((state) => state.group);

    const [pagination, setPagination] = useState({
        pageIndex: 0,
        pageSize: 5,
    });
    const [columnFilters, setColumnFilters] = useState([]);
    const [sorting, setSorting] = useState([]);
    const [globalFilter, setGlobalFilter] = useState('');
    const [viewDetailPopup, setViewDetailPopup] = useState(false);
    const [detailPopupData, setDetailPopupData] = useState(null);
    const [viewConfirm1, setViewConfirm1] = useState(false);
    const [deleteData, setDeleteData] = useState(null);

    const handleToggleConfirmView1 = (data) => {
        setDeleteData(data);
        setViewConfirm1((prev) => !prev);
    }

    const handleToggleDetailPopup = (data) => {
        setViewDetailPopup((prev) => !prev);
        setDetailPopupData(() => data ? data : null);
    }


    const handleDelete = async () => {
        try {
            await removeGroup(dispatch, deleteData?.id);
            handleToggleConfirmView1(null);
        } catch (error) {
            console.log(error);
        }
    }

    const handleEdit = (id) => {
    }

    const actions = [
        {
            title: 'Delete',
            icon: <Delete />,
            handleClick: handleToggleConfirmView1,
        }
    ]

    useEffect(() => {
        const getData = async () => {
            const query = getSortingQuery(sorting) + getFilteredQuery(columnFilters) + getGlobalFilterQuery(globalFilter);
            await getGroups(dispatch, pagination.pageIndex, pagination.pageSize, query);
        }
        getData();

        return () => {

        }
    }, [dispatch, pagination, sorting, columnFilters, globalFilter]);

    return (
        <div className='bg-white rounded-xl flex-1 overflow-auto gap-8 flex flex-col'>
            <NewHeader title={'Groups'} />
            <div className='px-8 flex-1 overflow-auto pb-6'>
                {
                    groups &&
                    <FeaturedTable
                        tableStructure={groupTableStructure}
                        data={updatedData(groups, pagination.pageIndex, pagination.pageSize)}
                        isLoading={isLoading}
                        rowCount={totalElements}
                        setPagination={setPagination}
                        pagination={pagination}
                        sorting={sorting}
                        setSorting={setSorting}
                        columnFilters={columnFilters}
                        setColumnFilters={setColumnFilters}
                        globalFilter={globalFilter}
                        setGlobalFilter={setGlobalFilter}
                        enableGlobalFilter={true}
                        handleToggleDetailPopup={handleToggleDetailPopup}
                        actions={actions}
                    />
                }
            </div>
            {
                viewDetailPopup &&
                <PopupCard
                    description={detailPopupData?.description}
                    overviews={getOverviewsData(detailPopupData)}
                    handleToggleConfirmPopup={() => { }}
                    handleCancel={handleToggleDetailPopup}
                    handleEdit={() => { }}
                    popupType={'/groups'}
                    title={detailPopupData?.name}
                />
            }
            {
                viewConfirm1 &&
                <ConfirmPopup
                    handleCancel={handleToggleConfirmView1}
                    handleDelete={handleDelete}
                    type={'Delete'}
                    text={'Are you sure you want to delete the group?'}
                />
            }
        </div>
    )
}

export default Groups