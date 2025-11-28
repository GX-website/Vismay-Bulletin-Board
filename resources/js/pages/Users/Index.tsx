import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import AppLayout from '@/layouts/app-layout';
import { users_index } from '@/routes';
// import { users } from '@/routes';
import { type BreadcrumbItem } from '@/types';
import { Head, Link, usePage } from '@inertiajs/react';
import { Megaphone } from 'lucide-react';
import { route } from 'ziggy-js';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Users',
        href: users_index().url,
    },
];

interface PageProps{
    flash: {
        message?: string
    }
}

export default function Index() {

    const { flash } = usePage().props as PageProps;
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Users" />
            <div className='m-4'>
                <Button asChild>
                    <Link href='/users/create'>Create user</Link>
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
        </AppLayout>
    );
}
