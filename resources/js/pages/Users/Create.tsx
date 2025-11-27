import { Button } from '@/components/ui/button';
import AppLayout from '@/layouts/app-layout';
import { dashboard } from '@/routes';
import { type BreadcrumbItem } from '@/types';
import { Head, Link } from '@inertiajs/react';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Create a New Account',
        href: '/users/create',
    },
];

export default function Index() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Create a New Account" />
            <div className='w-8/12 p-4'>
                    <form action="" className='space-y-4'>
                        <div className='gap-1.5'>
                            <Label htmlFor="fullname" className='px-1'>Fullname</Label>
                            <Input placeholder="Fullname"></Input>
                        </div>
                        <div className='gap-1.5'>
                            <Label htmlFor="email" className='px-1'>Email</Label>
                            <Input placeholder="Email"></Input>
                        </div>
                        <div className='gap-1.5'>
                            <Label htmlFor="department" className='px-1'>Department</Label>
                            <Input placeholder="Department"></Input>
                        </div>
                        <Button type='submit'>Add Account</Button>
                    </form>
            </div>
        </AppLayout>
    );
}
