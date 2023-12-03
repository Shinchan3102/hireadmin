import React, { useEffect, useState } from 'react'
import NewHeader from '../components/designs/TopComponents/NewHeader'
import { useDispatch, useSelector } from 'react-redux'
import { updatedData } from '../utils/Global/main';
import { getTalks } from '../apis/talksApis';
import { getOverviewsData, getSortingQuery, talkTableStructure } from '../utils/Data/talksData';
import FeaturedTable from '../components/designs/Tables/FeaturedTable';
import PopupCard from '../components/designs/popups/PopupCard';
import { Delete } from '@mui/icons-material';

const Talks = () => {
    const { talks, isLoading, totalElements } = useSelector((state) => state.talk);
    const dispatch = useDispatch();

    const [pagination, setPagination] = useState({
        pageIndex: 0,
        pageSize: 5,
    });
    const [sorting, setSorting] = useState([]);
    const [viewDetailPopup, setViewDetailPopup] = useState(false);
    const [detailPopupData, setDetailPopupData] = useState(null);
    const [viewConfirm1, setViewConfirm1] = useState(false);
    const [deleteData, setDeleteData] = useState(null);

    const handleToggleConfirmView1 = (data) => {
        setBlockData(data);
        setViewConfirm1((prev) => !prev);
    }

    const handleToggleDetailPopup = (data) => {
        setViewDetailPopup((prev) => !prev);
        setDetailPopupData(() => data ? data : null);
    }

    const handleDelete=()=>{
        
    }

    const handleEdit=()=>{

    }

    const actions = [
        {
            title: 'Delete',
            icon: <Delete />,
            handleClick: handleDelete
        }
    ]

    useEffect(() => {
        const getData = async () => {
            const query = getSortingQuery(sorting);
            await getTalks(dispatch, pagination.pageIndex, pagination.pageSize, query);
        }
        getData();
    }, [dispatch, pagination, sorting]);

    return (
        <div className='bg-white rounded-xl flex-1 overflow-auto gap-8 flex flex-col'>
            <NewHeader title={'Talks'} />
            <div className='px-8 flex-1 overflow-auto pb-6'>
                <FeaturedTable
                    tableStructure={talkTableStructure}
                    data={updatedData(talks, pagination.pageIndex, pagination.pageSize)}
                    isLoading={isLoading}
                    rowCount={totalElements}
                    setPagination={setPagination}
                    pagination={pagination}
                    sorting={sorting}
                    setSorting={setSorting}
                    enableGlobalFilter={false}
                    handleToggleDetailPopup={handleToggleDetailPopup}
                />
            </div>
            {
                viewDetailPopup &&
                <PopupCard
                    description={detailPopupData?.description}
                    overviews={getOverviewsData(detailPopupData)}
                    handleToggleConfirmPopup={() => { }}
                    handleCancel={handleToggleDetailPopup}
                    handleEdit={() => { }}
                    popupType={'/talks'}
                    title={detailPopupData?.name}
                    image={detailPopupData?.imageUrl}
                />
            }
        </div>
    )
}

export default Talks