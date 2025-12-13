import React from 'react';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import Box from '@mui/material/Box';
import { DataGrid, GridColDef } from '@mui/x-data-grid';

const breadcrumbs = [
    {
        title: 'HR Department',
        href: '/department/hr'
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

export default function Hr({accounts} : Props) {

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
        <AppLayout breadcrumbs={breadcrumbs} >
            <Head title="HR Department" />
            <Box sx={{ height: 500, width: '100%' }}>
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