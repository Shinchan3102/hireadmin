import React, { useMemo } from 'react';
import { MaterialReactTable } from 'material-react-table';
import { Box, ListItemIcon, MenuItem } from '@mui/material';
import { Delete, Edit } from '@mui/icons-material';
import { BiShow, BiHide } from 'react-icons/bi';

const BannerTable = ({ data, tableStructure, handleEdit, handleDelete, isLoading, sorting, setSorting }) => {

    const columns = useMemo(() => tableStructure.map((element) =>
        element.accessKey === 'isVisible' ?
            {
                header: element.header,
                accessorKey: element.accessKey,
                enableSorting: element.enableSorting ? element.enableSorting : false,
                Cell: ({ renderedCellValue }) => (
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '1rem',
                            justifyContent: 'center'
                        }}
                        className='text-2xl'
                    >
                        {!renderedCellValue ? <BiHide /> : <BiShow />}
                    </Box>
                )
            }
            :
            element.accessKey === 'creationDate' ?
                {
                    header: element.header,
                    accessorKey: element.accessKey,
                    enableSorting: element.enableSorting ? element.enableSorting : false,
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
                element.header !== 'IMAGE' ?
                    {
                        header: element.header,
                        accessorKey: element.accessKey,
                        enableSorting: element.enableSorting ? element.enableSorting : false,
                        size: 250,
                    }
                    :
                    {
                        header: element.header,
                        accessorKey: element.accessKey,
                        enableSorting: element.enableSorting ? element.enableSorting : false,
                        Cell: ({ renderedCellValue }) => (
                            <Box
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '1rem',
                                }}
                            >
                                <img src={renderedCellValue} alt='banner' className='w-32 h-20 rounded-lg object-cover' />
                            </Box>
                        )
                    }
    ), []);

    return (
        <div className='p-4'>
            <MaterialReactTable
                columns={columns}
                data={data}
                enableColumnOrdering
                enableGlobalFilter={false}
                enableRowActions
                manualSorting
                onSortingChange={setSorting}
                state={{
                    isLoading,
                    sorting
                }}
                renderRowActionMenuItems={({ closeMenu, row }) => [
                    <MenuItem
                        key={0}
                        onClick={() => {
                            // View profile logic...
                            handleEdit(row.original.id)
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
                            handleDelete(row.original.id)
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

export default BannerTable