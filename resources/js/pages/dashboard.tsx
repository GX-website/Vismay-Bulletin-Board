import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import AppLayout from '@/layouts/app-layout';
import { dashboard } from '@/routes';
import { type BreadcrumbItem } from '@/types';
import { Head, usePage, useForm } from '@inertiajs/react';
import { BookOpen,
        Folder,
        FileUser,
        Megaphone,
        ChartNoAxesCombined 
    } from 'lucide-react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: dashboard().url,
    },
];

interface Account {
    id: number;
    fullname: string;
    email: string;
    position: string;
    department: string;
}

interface PageProps {
    accounts: Account[];
}

export default function Dashboard() {

    const { accounts, flash } = usePage<PageProps>().props;
        
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Dashboard" />
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                <div className="grid auto-rows-min gap-4 md:grid-cols-3">
                    <div className="relative aspect-video overflow-hidden rounded-xl border border-sidebar-border/70 dark:border-sidebar-border p-2">
                        {/* <PlaceholderPattern className="absolute inset-0 size-full stroke-neutral-900/20 dark:stroke-neutral-100/20" /> */}
                        <div className='flex inline-flex gap-2 pl-2 pt-2'>
                            <FileUser/> <h1 className='text-xl'>Total Employees</h1>
                        </div>
                        <div className="relative z-10 p-4 text-7xl font-bold flex items-center justify-center w-[100%] h-[100%] mt-[-20px]">
                            {accounts.length}
                        </div>
                    </div>
                    <div className="relative aspect-video overflow-hidden rounded-xl border border-sidebar-border/70 dark:border-sidebar-border">
                        {/* <PlaceholderPattern className="absolute inset-0 size-full stroke-neutral-900/20 dark:stroke-neutral-100/20" /> */}
                        <div className='flex inline-flex gap-2 pl-2 pt-2'>
                            <ChartNoAxesCombined/><h1 className='text-xl'>Sales</h1>
                        </div>
                    </div>
                    <div className="relative aspect-video overflow-hidden rounded-xl border border-sidebar-border/70 dark:border-sidebar-border">
                        <PlaceholderPattern className="absolute inset-0 size-full stroke-neutral-900/20 dark:stroke-neutral-100/20" />
                    </div>
                </div>
                <div className="relative min-h-[100vh] flex-1 overflow-hidden rounded-xl border border-sidebar-border/70 md:min-h-min dark:border-sidebar-border">
                    <div className='flex inline-flex gap-2 pl-2 pt-2'>
                        <Megaphone/> <h1 className='text-xl'>Announcement / Event</h1>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}
