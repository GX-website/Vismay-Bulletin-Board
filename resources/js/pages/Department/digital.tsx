import React from 'react';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';

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

    return (
        <AppLayout breadcrumbs={breadcrumbs} >
            <Head title="Digital Sales Department" />
            <div className='p-6'>
                <h1 className='text-2xl font-bold mb-4'>Digital Sales Department</h1>

                <table className='w-full border'>
                    <thead>
                        <tr className='border-b'>
                            <th className='p-2'>ID</th>
                            <th className='p-2'>Full Name</th>
                            <th className='p-2'>Email</th>
                            <th className='p-2'>Position</th>
                        </tr>
                    </thead>
                    <tbody>
                        {accounts.map((acc) => (
                            <tr key={acc.id} className='border-b text-center'>
                                <td className='p-2'>{acc.id}</td>
                                <td className='p-2'>{acc.fullname}</td>
                                <td className='p-2'>{acc.email}</td>
                                <td className='p-2'>{acc.position}</td> 
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </AppLayout>
    );
}