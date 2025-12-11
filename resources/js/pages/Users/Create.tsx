import { Button } from '@/components/ui/button';
import AppLayout from '@/layouts/app-layout';
import { dashboard } from '@/routes';
import { type BreadcrumbItem } from '@/types';
import { Head, Link, useForm } from '@inertiajs/react';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { route } from 'ziggy-js';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { CircleAlert  } from 'lucide-react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Create a New Account',
        href: '/users/create',
    },
];


export default function Create() {

    const { data, setData, post, processing, errors } = useForm({
        fullname: '',
        email: '',
        position: '',
        department: '',
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        post(route('users_store'));
    };
    
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Create a New Account" />
            <div className='flex items-center justify-center w-[100%] p-4 mx-auto'>

                {/* Display Errors */}

                {Object.keys(errors).length > 0 && (
                    <Alert variant="default">
                        <CircleAlert className='h-4 w-4' />
                        <AlertTitle>Heads up!</AlertTitle>
                        <AlertDescription>
                           <ul>
                                {Object.entries(errors).map(([key, message]) => (
                                    <li key={key}>{message as string}</li>
                                ))}
                           </ul>
                        </AlertDescription>
                    </Alert>
                )}

                    <form onSubmit={handleSubmit} action="" className='space-y-4 w-[500px] border p-8 rounded-xs'>
                        <div className='gap-1.5'>
                            <Label htmlFor="fullname" className='px-1'>Fullname</Label>
                            <Input placeholder="Fullname" value={data.fullname} onChange={e => setData('fullname', e.target.value)}></Input>
                        </div>
                        <div className='gap-1.5'>
                            <Label htmlFor="email" className='px-1'>Email</Label>
                            <Input placeholder="Email" value={data.email} onChange={e => setData('email', e.target.value)}></Input>
                        </div>
                        <div className='gap-1.5'>
                            <Label htmlFor="position" className='px-1'>Position</Label>
                            <Input placeholder="Position" value={data.position} onChange={e => setData('position', e.target.value)}></Input>
                        </div>
                        <div className='gap-1.5'>
                            <Label htmlFor="department" className='px-1'>Department</Label>
                            <Input placeholder="Department" value={data.department} onChange={e => setData('department', e.target.value)}></Input>
                        </div>
                        <Button type='submit'>Submit</Button>
                    </form>
            </div>
        </AppLayout>
    );
}
