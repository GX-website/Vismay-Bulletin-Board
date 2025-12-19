import React from 'react';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import Box from '@mui/material/Box';
import { DataGrid, GridColDef } from '@mui/x-data-grid';


const breadcrumbs = [
    {
        title: 'Digital Sales Department',
        href: '/department/digital'
    },
];

interface Account {
    id: number;
    fullname: string;
    email: string;
    position: string;
    department: string;
}

interface Props {
    accounts: Account[];
}

export default function Digital({accounts} : Props) {

    const columns: GridColDef<(typeof accounts)[number]>[] = [
        { field: 'id', headerName: 'ID', flex: .3 },
        {
            field: 'fullname',
            headerName: 'Fullname',
            flex: 1,
            editable: true,
        },
        {
            field: 'email',
            headerName: 'Email',
            flex: 1,
            editable: true,
        },
        {
            field: 'position',
            headerName: 'Position',
            flex: 1,
            editable: true,
        },
        {
            field: 'department',
            headerName: 'Department',
            description: 'This column has a value getter and is not sortable.',
            sortable: false,
            flex: 1,
            valueGetter: (value, row) => `${row.department || ''} `,
        },
    ];

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Digital Sales Department" />
            <Box sx={{ height: 'auto', width: '100%' }}
                >
                <DataGrid
                rows={accounts}
                columns={columns}
                initialState={{
                pagination: {
                paginationModel: {
                pageSize: 10,
                },
                },
                }}
                pageSizeOptions={[5]}
                checkboxSelection
                disableRowSelectionOnClick
                />
            </Box>
        </AppLayout>
    );
}