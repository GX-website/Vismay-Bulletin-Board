import { Button } from '@/components/ui/button';
import AppLayout from '@/layouts/app-layout';
import { dashboard } from '@/routes';
import { type BreadcrumbItem } from '@/types';
import { Head, Link, useForm } from '@inertiajs/react';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { route } from 'ziggy-js';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Create a New Account',
        href: '/users/create',
    },
];

const { data, setData, post, processing, errors } = useForm ({
    fullname: '',
    email: '',
    department: ''
})

const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(data);
    post(route('users.store'));
}

export default function Index() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Create a New Account" />
            <div className='w-8/12 p-4'>
                    <form onSubmit={handleSubmit} action="" className='space-y-4'>
                        <div className='gap-1.5'>
                            <Label htmlFor="fullname" className='px-1'>Fullname</Label>
                            <Input placeholder="Fullname" value={data.fullname} onChange={e => setData('fullname', e.target.value)}></Input>
                        </div>
                        <div className='gap-1.5'>
                            <Label htmlFor="email" className='px-1'>Email</Label>
                            <Input placeholder="Email" value={data.email} onChange={e => setData('email', e.target.value)}></Input>
                        </div>
                        <div className='gap-1.5'>
                            <Label htmlFor="department" className='px-1'>Department</Label>
                            <Input placeholder="Department" value={data.department} onChange={e => setData('department', e.target.value)}></Input>
                        </div>
                        <Button type='submit'>Add Account</Button>
                    </form>
            </div>
        </AppLayout>
    );
}
