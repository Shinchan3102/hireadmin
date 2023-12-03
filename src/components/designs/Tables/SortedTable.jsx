import { useMemo } from 'react';
import { MaterialReactTable } from 'material-react-table';
import { Box, ListItemIcon, MenuItem } from '@mui/material';
import { Delete, Edit } from '@mui/icons-material';
import { checkDateType, checkImageType, checkVisibilityType } from '../../../utils/Global/main';
import { useSelector } from 'react-redux';
import { BiHide, BiShow } from 'react-icons/bi';

const SortedTable = ({ data, tableStructure, pagination, setPagination, rowCount, isLoading, sorting, setSorting, columnFilters, setColumnFilters, globalFilter, setGlobalFilter, handleDelete, handleEdit }) => {

    const { categories } = useSelector((state) => state.category);

    const categoryItems = categories?.map((item) => item?.name);


    const columns = useMemo(() => tableStructure.map((element) =>
        checkVisibilityType(element.accessKey) ?
            {
                header: element.header,
                accessorKey: element.accessKey,
                Cell: ({ renderedCellValue }) => (
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '1rem',
                            justifyContent: 'center'
                        }}
                        className='text-2xl w-32 text-gray-500 text-left'
                    >
                        {!renderedCellValue ? <BiHide /> : <BiShow />}
                    </Box>
                )
            }
            :
            checkDateType(element.accessKey) ?
                {
                    header: element.header,
                    accessorKey: element.accessKey,
                    enableSorting: element.enableSorting,
                    enableColumnFilter: element.enableColumnFilter,
                    filterVariant: element?.filterVariant ? element.filterVariant : 'text',
                    filterSelectOptions: element?.filterSelectOptions ? element.filterSelectOptions : categoryItems,
                    Cell: ({ renderedCellValue }) => (
                        <Box
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '1rem',
                            }}
                        >
                            {new Date(renderedCellValue).toDateString()}
                        </Box>
                    )
                }
                :
                !checkImageType(element.accessKey) ?
                    {
                        header: element.header,
                        accessorKey: element.accessKey,
                        enableSorting: element.enableSorting,
                        enableColumnFilter: element.enableColumnFilter,
                        filterVariant: element?.filterVariant ? element.filterVariant : 'text',
                        filterSelectOptions: element?.filterSelectOptions ? element.filterSelectOptions : categoryItems,
                        Cell: ({ renderedCellValue }) => (
                            <Box
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                }}
                            >
                                <div className='max-w-xs max-h-[200px] overflow-y-auto'>
                                    {renderedCellValue}
                                </div>
                            </Box>
                        )
                    }
                    :
                    {
                        header: element.header,
                        accessorKey: element.accessKey,
                        enableSorting: element.enableSorting,
                        enableColumnFilter: element.enableColumnFilter,
                        filterVariant: element?.filterVariant ? element.filterVariant : 'text',
                        filterSelectOptions: element?.filterSelectOptions ? element.filterSelectOptions : categoryItems,
                        Cell: ({ renderedCellValue }) => (
                            <Box
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '1rem',
                                }}
                            >
                                {
                                    renderedCellValue ?
                                        <img src={renderedCellValue} alt='banner' className='w-32 h-20 rounded-lg object-cover' />
                                        :
                                        <div className='w-32 h-20 rounded-lg bg-gray-400 flex items-center justify-center text-sm'>No Image</div>
                                }
                            </Box>
                        )
                    }
    ), [tableStructure, categoryItems]);

    return (
        <div className=''>
            <MaterialReactTable
                columns={columns}
                data={data}
                enableColumnOrdering
                enableGlobalFilter={true}
                enableRowActions
                manualPagination
                manualSorting
                manualFiltering
                onPaginationChange={setPagination}
                rowCount={rowCount}
                onSortingChange={setSorting}
                onColumnFiltersChange={setColumnFilters}
                onGlobalFilterChange={setGlobalFilter}
                state={{
                    pagination,
                    isLoading,
                    sorting,
                    columnFilters,
                    globalFilter
                }}
                renderRowActionMenuItems={({ closeMenu, row }) => [
                    <MenuItem
                        key={0}
                        onClick={() => {
                            handleEdit(row?.original?.id);
                            closeMenu();
                        }}
                        sx={{ m: 0 }}
                    >
                        <ListItemIcon>
                            <Edit />
                        </ListItemIcon>
                        Edit
                    </MenuItem>,
                    <MenuItem
                        key={1}
                        onClick={() => {
                            handleDelete(row?.original?.id);
                            closeMenu();
                        }}
                        sx={{ m: 0 }}
                    >
                        <ListItemIcon>
                            <Delete />
                        </ListItemIcon>
                        Delete
                    </MenuItem>,
                ]}
            />
        </div>
    )
}

export default SortedTable;