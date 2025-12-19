import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import AppLayout from '@/layouts/app-layout';
import { users_index } from '@/routes';
// import { users } from '@/routes';
import { type BreadcrumbItem } from '@/types';
import { Head, Link, useForm, usePage } from '@inertiajs/react';
import { Megaphone, Trash2, Pencil, Plus } from 'lucide-react';
import { route } from 'ziggy-js';

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Users',
        href: users_index().url,
    },
];

interface Account {
    id: number,
    fullname: string,
    email: string,
    position: string,
    department: string,
}

interface PageProps{
    flash: {
        message?: string
    },

    accounts: Account[];
}

export default function Index() {

    const { accounts, flash } = usePage().props as PageProps;

    const {processing, delete: destroy} = useForm();
    
    const handleDelete = (id: number, fullname: string) => {
        if(confirm(`Do you want to delete employee ${id}. ${fullname}`)) {
            destroy(`/users/${id}`);
            // destroy(route("users_destroy", id));
        }
    }

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Users" />
            <div className='m-4'>
                <Button asChild>
                    <Link href='/users/create'>
                        <Plus></Plus>
                        Add Employee
                    </Link>
                </Button>
            </div>
            <div className='m-4'>
                <div>
                    {flash.message && (
                        <Alert variant="default">
                        <Megaphone className='h-4 w-4' />
                        <AlertTitle>Notification!</AlertTitle>
                        <AlertDescription>
                            {flash.message}
                        </AlertDescription>
                    </Alert>
                    )}
                </div>
            </div>
            {accounts.length > 0 && (
                <Table className='m-4'>
                    <TableCaption>A list of your employees. {accounts.length}</TableCaption>
                    <TableHeader>
                        <TableRow>
                        <TableHead className="w-[100px]">ID</TableHead>
                        <TableHead>Fullname</TableHead>
                        <TableHead>Email</TableHead>
                        <TableHead>Position</TableHead>
                        <TableHead>Department</TableHead>
                        <TableHead className="text-left">Action</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody> 
                        {accounts.map(({id, fullname, email, position, department}) => (
                            <TableRow>
                                <TableCell className="font-medium">{ id }</TableCell>
                                <TableCell className="font-medium">{ fullname }</TableCell>
                                <TableCell className="font-medium">{ email }</TableCell>
                                <TableCell className="font-medium">{ position }</TableCell>
                                <TableCell className="font-medium">{ department }</TableCell>
                                <TableCell className="text-left space-x-2">
                                    <Link href={route('users_edit', id)}>
                                        <Button className="bg-green-500 hover:bg-green-700 text-white-500 cursor-pointer">
                                            <Pencil/>
                                        </Button>
                                    </Link>
                                    <Button disabled={processing} onClick={() => handleDelete(id, fullname)} className="bg-red-500 hover:bg-red-700 text-white-500 cursor-pointer">
                                        <Trash2/>
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            )}
        </AppLayout>
    );
}
