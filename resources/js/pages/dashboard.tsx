import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import AppLayout from '@/layouts/app-layout';
import { dashboard } from '@/routes';
import { type BreadcrumbItem } from '@/types';
import { ClassNames } from '@emotion/react';
import { Head, usePage, useForm, Link } from '@inertiajs/react';
import { BookOpen,
        Folder,
        FileUser,
        Megaphone,
        ChartNoAxesCombined,
        Pencil,
        Trash2
    } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {motion, AnimatePresence, useAnimation} from "framer-motion";
import { useEffect, useState } from 'react';
import { start } from 'repl';

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

interface Announcement {
    length: number;
    id: number;
    title: string;
    startDate: string;
    endDate: string;
    description: string;
}

interface PageProps {
    accounts: Account[];
    announcements: Announcement[];
}

export default function Dashboard() {

    const { accounts, flash, announcements } = usePage<PageProps>().props;
    const today = new Date().toISOString().split('T')[0];
        
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

                {/* Announcement */}
                <div className="flex flex-row rounded-xl border p-4 gap-4">
                    <div className='flex-1'>
                        <div className="flex gap-2 items-center justify-between mb-3">
                            <div className='flex gap-2 items-center'>
                                <Megaphone />
                                <h1 className="text-xl">Announcement / Event</h1>
                            </div>
                            <Link href="/advisory/announcements">
                                <Button size="icon" className="flex gap-2 items-center bg-gray-500 hover:bg-blue-700 cursor-pointer h-10 w-20">
                                    Add Post
                                </Button>
                            </Link>
                        </div>
                        

                        {/* Table Header */}
                        <div className="grid grid-cols-16 gap-1 border-b pb-2 text-sm font-semibold text-muted-foreground whitespace-nowrap">
                            <div className="col-span-5">Title</div>
                            <div className="col-span-4">Description</div>
                            <div className="col-span-3">Start Date</div>
                            <div className="col-span-2">End Date</div>
                            <div className="col-span-1 text-right ml-4">Actions</div>
                        </div>

                        {/* Scrollable Body */}
                        <div className="max-h-[420px] overflow-y-auto divide-y">
                            {announcements.length === 0 && (
                                <div className="py-6 text-center text-muted-foreground">
                                    No announcements found
                                </div>
                            )}

                            {/* {announcements.map((announcement) => ( */}
                            {announcements
                                 .filter(({ startDate, endDate}) =>
                                        (startDate > today || endDate < today)
                                    )
                                .map(({ id, title, description, startDate, endDate }) =>(
                                <div    
                                    key={id}
                                    className="grid grid-cols-16 gap-1 border-b pb-2 pt-2 text-sm font-semibold text-muted-foreground"
                                >
                                    <div className="relative col-span-5 font-medium weight-semibold">
                                        {title}
                                        {today < startDate && (
                                            <div className='absolute top-0 right-0 bg-yellow-500 text-white text-xs px-2 py-1 rounded'>Upcomming</div>
                                        )}
                                        {startDate < today &&  endDate < today && (
                                            <div className='absolute top-0 right-0 bg-red-500 text-white text-xs px-2 py-1 rounded'>End Event</div>
                                        )}
                                    </div>

                                    <div className="flex-1 col-span-5 text-muted-foreground line-clamp-2">
                                        {description}
                                    </div>

                                    <div className="col-span-3 whitespace-nowrap text-muted-foreground">
                                        {new Date(startDate).toLocaleDateString()}
                                    </div>

                                    <div className="col-span-2 whitespace-nowrap text-muted-foreground">
                                        {new Date(endDate).toLocaleDateString()}
                                    </div>


                                    <div className="col-span-1 w-[100px] flex justify-end gap-2">
                                        <Link href="#">
                                            <Button
                                                size="icon"
                                                className="bg-green-500 hover:bg-green-700 cursor-pointer relative">
                                                <Pencil className="h-4 w-4" />
                                                <span className='absolute'></span>
                                            </Button>
                                        </Link>

                                        <Button 
                                            size="icon" 
                                            className="bg-red-500 hover:bg-red-700 cursor-pointer">
                                                <Trash2 className="h-4 w-4" />
                                        </Button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className='flex flex-1 flex-col max-h-[420px] overflow-y-auto divide-y'>
                        <div className="flex gap-2 items-center justify-between mb-3 border-none">
                            <div className='flex gap-2 items-center mt-2 mb-1'>
                                <h1 className='text-xl'>Ongoing Event</h1>
                            </div>
                        </div>
                        <div className="grid grid-cols-12 gap-4 pb-2 text-sm font-semibold text-muted-foreground">
                            <div className="col-span-4">Title</div>
                            <div className="col-span-5">Description</div>
                            <div className="col-span-2">End Date</div>
                            <div className="col-span-1 text-right">Actions</div>
                        </div>
                        {announcements.length === 0 && (
                            <div className="py-6 text-center text-muted-foreground">
                                No announcements found
                            </div>
                        )}
                        {announcements
                            .filter(({ startDate, endDate}) => 
                                    startDate <= today &&
                                    endDate >= today)
                            .map(({id,title, description, startDate, endDate}) =>  (
                            <div className="grid grid-cols-12 gap-4 border-none pb-2 pt-2 text-sm font-semibold text-muted-foreground" key={id}>
                                <div className='self-center col-span-4'>
                                    {title}
                                </div>
                                <div className="flex-1 col-span-5 text-muted-foreground line-clamp-2">
                                    {description}
                                </div>
                                <div className="self-center flex-1 col-span-2 whitespace-nowrap text-muted-foreground">
                                    {new Date(endDate).toLocaleDateString()}
                                </div>
                                <div className='self-center'>
                                    {startDate <= today && endDate >= today && (
                                        <div className='top-0 right-0 bg-green-500 text-white text-xs px-2 py-1 rounded'>Active</div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}