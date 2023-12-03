import { useMemo } from 'react';
import { MaterialReactTable } from 'material-react-table';
import { Box, ListItemIcon, MenuItem } from '@mui/material';
import { Delete, Edit } from '@mui/icons-material';
import { checkDateType, checkHtmlType, checkImageType } from '../../../utils/Global/main';

const Table3 = ({ data, tableStructure, handleDelete }) => {

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
                enableGlobalFilter={true}
                enableRowActions
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