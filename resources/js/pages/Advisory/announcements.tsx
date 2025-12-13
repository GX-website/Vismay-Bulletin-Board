import React from 'react';
import AppLayout from '@/layouts/app-layout';
import { Head } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { type BreadcrumbItem } from '@/types';
import { Textarea } from "@/components/ui/textarea"


const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Announcements',
        href: '/advisory/announcements'
    },
];

export default function Announcements() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Announcements" />
            <div className='p-6'>
                <div className='flex flex-row basis-[50% * 100%] mb-4 gap-2'>
                    <div className='w-[50%]'>
                        <h1 className='text-1xl font-bold mb-4'>Announcements</h1>
                            <form action="" className='space-y-4 w-full border p-8 rounded-xs'>
                                <div className='gap-1.5'>
                                    <Label htmlFor="fullname" className='px-1'>Title</Label>
                                    <Input placeholder="Title"></Input>
                                </div>
                                <div className='gap-1.5'>
                                    <Label htmlFor="date" className='px-1'>Date</Label>
                                    <Input  type="date" id="date" placeholder="Date"></Input>
                                </div>
                                <div className='gap-1.5'>
                                    <Label htmlFor="description" className='px-1'>Description</Label>
                                    <Textarea placeholder="Write announcement description..." />
                                </div>
                                <Button type='submit' className='cursor-pointer'>Post Announcement</Button>
                            </form>
                    </div>
                    <div className='w-[50%]'>
                        <h1 className='text-1xl font-bold mb-4'>Event</h1>
                        <form action="" className='space-y-4 w-full border p-8 rounded-xs'>
                            <div className='gap-1.5'>
                                <Label htmlFor="fullname" className='px-1'>Title</Label>
                                <Input placeholder="Title"></Input>
                            </div>
                            <div className='gap-1.5'>
                                <Label htmlFor="date" className='px-1'>Date</Label>
                                <Input  type="date" id="date" placeholder="Date"></Input>
                            </div>
                            <div className='gap-1.5'>
                                <Label htmlFor="description" className='px-1'>Description</Label>
                                <Textarea placeholder="Write event description..." />
                            </div>
                            <Button type='submit' className='cursor-pointer'>Post Event</Button>
                        </form>
                    </div>
                </div>

            </div>
        </AppLayout>
    );
}