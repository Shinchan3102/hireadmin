import NewHeader from '../components/designs/TopComponents/NewHeader';
import { useDispatch, useSelector } from 'react-redux';
import { getFilteredQuery, getGlobalFilterQuery, getOverviewsData, getSortingQuery, postTableStructure } from '../utils/Data/PostData';
import FeaturedTable from '../components/designs/Tables/FeaturedTable';
import { useEffect, useState } from 'react';
import { updatedData } from '../utils/Global/main';
import { getPosts, removePost } from '../apis/postApis';
import PopupCard from '../components/designs/popups/PopupCard';
import { Delete } from '@mui/icons-material';
import ConfirmPopup from '../components/designs/popups/ConfirmPopup';

const Posts = () => {
    const dispatch = useDispatch();
    const { categories } = useSelector((state) => state.category);
    const { isLoading, totalElements, posts } = useSelector((state) => state.post);

    const [pagination, setPagination] = useState({
        pageIndex: 0,
        pageSize: 5,
    });
    const [columnFilters, setColumnFilters] = useState([]);
    const [sorting, setSorting] = useState([]);
    const [globalFilter, setGlobalFilter] = useState();
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
            await removePost(dispatch, deleteData?.id);
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
            const query = getSortingQuery(sorting) + getFilteredQuery(columnFilters, categories) + getGlobalFilterQuery(globalFilter);
            await getPosts(dispatch, pagination.pageIndex, pagination.pageSize, query);
        }
        getData();

        return () => {

        }
    }, [dispatch, pagination, sorting, columnFilters, globalFilter]);

    return (
        <div className='bg-white rounded-xl flex-1 overflow-auto gap-8 flex flex-col'>
            <NewHeader title={'Posts'} />
            <div className='px-8 flex-1 overflow-auto pb-6'>
                {
                    posts &&
                    <FeaturedTable
                        tableStructure={postTableStructure}
                        data={updatedData(posts, pagination.pageIndex, pagination.pageSize)}
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
                    description={detailPopupData?.title}
                    overviews={getOverviewsData(detailPopupData)}
                    handleToggleConfirmPopup={() => { }}
                    handleCancel={handleToggleDetailPopup}
                    handleEdit={() => { }}
                    popupType={'/posts'}
                    title={detailPopupData?.user?.userId}
                    image={detailPopupData?.imageUrl}
                />
            }
            {
                viewConfirm1 &&
                <ConfirmPopup
                    handleCancel={handleToggleConfirmView1}
                    handleDelete={handleDelete}
                    type={'Delete'}
                    text={'Are you sure you want to delete the post?'}
                />
            }
        </div>
    )
}

export default Posts