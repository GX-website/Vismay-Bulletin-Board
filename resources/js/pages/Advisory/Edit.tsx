import React from 'react';
import AppLayout from '@/layouts/app-layout';
import { Head, useForm } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { type BreadcrumbItem } from '@/types';
import { Textarea } from "@/components/ui/textarea"
import { route } from 'ziggy-js';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { CircleAlert  } from 'lucide-react';


// const breadcrumbs: BreadcrumbItem[] = [
//     {
//         title: 'Create an Announcements & Events',
//         href: '/advisory/announcements'
//     },
// ];

interface Announcement {
    id: number,
    title: string,
    startDate: string,
    endDate: string,
    description: string
}

interface Props {
    announcements: Announcement
}


export default function Edit({announcements} : Props) {

    const {data, setData , put, processing, errors} = useForm({
        title: announcements.title,
        startDate: announcements.startDate,
        endDate: announcements.endDate,
        description: announcements.description,
    });

    const handleUpdate = (e: React.FormEvent) => {
        e.preventDefault();
        put(route('advisory_update', announcements.id));
    }

    return (
        <AppLayout breadcrumbs={[
            {
                title: 'Update Announcement Post',
                href: `/advisory/${announcements.id}/edit`
            }]}>
            <Head title="Announcements" />
            <div className='p-6'>
                <div className='flex flex-row basis-[50% * 100%] mb-4 gap-2'>
                    <div className='flex-1'>
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
                        <h1 className='text-1xl font-bold mb-4'>Announcements / Events</h1>
                        <form onSubmit={handleUpdate} action="" className='space-y-4 w-full border p-8 rounded-xs'>
                            <div className='gap-1.5'>
                                <Label htmlFor="title" className='px-1'>Title</Label>
                                <Input placeholder="Title" value={data.title} onChange={e => setData('title', e.target.value)}></Input>
                            </div>
                            <div className='flex flex-row gap-1.5'>
                                <div className='flex-1'>
                                    <Label htmlFor="startDate" className='px-1'>Start Date</Label>
                                    <Input  type="date" id="startDate" value={data.startDate} onChange={e => setData('startDate', e.target.value)}></Input>
                                </div>
                                <div className='flex-1'>
                                    <Label htmlFor="endDate" className='px-1'>End Date</Label>
                                    <Input  type="date" id="eSndDate" value={data.endDate} onChange={e => setData('endDate', e.target.value)}></Input>
                                </div>
                            </div>
                            <div className='gap-1.5'>
                                <Label htmlFor="description" className='px-1'>Description</Label>
                                <Textarea placeholder="Write announcement description..." value={data.description} onChange={e => setData('description', e.target.value)}/>
                            </div>
                            <Button type='submit' className='cursor-pointer'>Update Post</Button>
                        </form>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}