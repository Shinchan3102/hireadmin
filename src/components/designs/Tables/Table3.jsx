import { useMemo } from 'react';
import { MRT_GlobalFilterTextField, MRT_ToggleFiltersButton, MRT_TopToolbar, MaterialReactTable } from 'material-react-table';
import { Box, Button, ListItemIcon, MenuItem, lighten } from '@mui/material';
import { Delete, Edit } from '@mui/icons-material';
import { checkDateType, checkHtmlType, checkImageType } from '../../../utils/Global/main';
import { useDispatch } from 'react-redux';
import { remove } from '../../../store/userSlice';

const Table3 = ({ data, tableStructure, handleDelete }) => {

    const dispatch = useDispatch();

    const columns = useMemo(() => tableStructure.map((element) =>
        checkHtmlType(element.accessKey) ?
            {
                header: element.header,
                accessorKey: element.accessKey,
                Cell: ({ renderedCellValue }) => (
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                        }}
                    >
                        <div className='max-w-xs' dangerouslySetInnerHTML={{ __html: renderedCellValue }}>
                        </div>
                    </Box>
                )
            }
            :
            checkDateType(element.accessKey) ?
                {
                    header: element.header,
                    accessorKey: element.accessKey,
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
                        Cell: ({ renderedCellValue }) => (
                            <Box
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                }}
                            >
                                <div className='max-w-xs'>
                                    {renderedCellValue}
                                </div>
                            </Box>
                        )
                    }
                    :
                    {
                        header: element.header,
                        accessorKey: element.accessKey,
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
    ), [tableStructure]);

    return (
        <div className=' rounded-lg'>
            <MaterialReactTable
                columns={columns}
                data={data}
                enableColumnOrdering
                // enableGlobalFilter
                enableRowActions
                enableRowSelection
                renderTopToolbar={({ table }) => {
                    const handleDeactivate = () => {
                        table.getSelectedRowModel().flatRows.map((row) => {
                            dispatch(remove(row.getValue('id')));
                        });
                    };

                    return (
                        <Box
                            sx={(theme) => ({
                                // backgroundColor: lighten(theme.palette.background.default, 0.05),
                                display: 'flex',
                                gap: '0.5rem',
                                p: '8px',
                                justifyContent: 'space-between',
                            })}
                        >
                            <Box sx={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                                <MRT_TopToolbar table={table} />
                            </Box>
                            <Box>
                                <Box sx={{ display: 'flex', gap: '0.5rem' }}>
                                    <Button
                                        color="error"
                                        disabled={!table.getIsSomeRowsSelected()}
                                        onClick={handleDeactivate}
                                        variant="contained"
                                    >
                                        Delete All
                                    </Button>
                                </Box>
                            </Box>
                        </Box>
                    )
                }
                }
                renderRowActionMenuItems={({ closeMenu, row }) => [
                    <MenuItem
                        key={0}
                        onClick={() => {
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

export default Table3;