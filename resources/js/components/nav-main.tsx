import {
    SidebarGroup,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from '@/components/ui/sidebar';
import { resolveUrl } from '@/lib/utils';
import { type NavItem } from '@/types';
import { Link, usePage } from '@inertiajs/react';
import { ChevronRight } from 'lucide-react';
import { useState } from 'react';   

export function NavMain({ items = [] }: { items: NavItem[] }) {
    const page = usePage();
    return (
        <SidebarGroup className="px-2 py-0">
            <SidebarGroupLabel>Platform</SidebarGroupLabel>
            <SidebarMenu>
                {items.map((item) => (
                    <MenuItem key={item.title} item={item} pageUrl={page.url} />
                ))}

                {/* {items.map((item) => (
                    <SidebarMenuItem key={item.title}>
                        <SidebarMenuButton
                            asChild
                            isActive={page.url.startsWith(
                                resolveUrl(item.href),
                            )}
                            tooltip={{ children: item.title }}
                        >
                            <Link href={item.href} prefetch>
                                {item.icon && <item.icon />}
                                <span>{item.title}</span>
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                ))} */}
            </SidebarMenu>
        </SidebarGroup>
    );
}

function MenuItem({ item, pageUrl }: { item: NavItem; pageUrl: string }) {
    const [open, setOpen] = useState(false);

    if (!item.children) {
        return (
            <SidebarMenuItem>
                <SidebarMenuButton
                    asChild
                    // isActive={pageUrl.startsWith(resolveUrl(item.href))}
                    tooltip={{ children: item.title }}
                >
                    <Link href={item.href!} prefetch>
                        {item.icon && <item.icon  className="h-2 w-2" />}
                        <span className="text-sm">{item.title}</span>
                    </Link>
                </SidebarMenuButton>
            </SidebarMenuItem>
        );
    }

    return (
        <SidebarMenuItem>
            <button
                onClick={() => setOpen(!open)}
                className="flex w-full items-center justify-between p-2 rounded-md hover:bg-sidebar-accent"
            >
                <div className="flex items-center gap-2">
                    {item.icon && <item.icon className="h-4 w-4"/>}
                    <span className='text-sm'>{item.title}</span>
                </div>
                <ChevronRight
                    className={`h-4 w-4 transition-transform ${open ? "rotate-90" : ""}`}
                />
            </button>

            {open && (
                <div className="ml-6 mt-1 space-y-1">
                    {item.children.map((child) => (
                        <SidebarMenuButton
                            key={child.title}
                        >
                            <Link href={child.href!} className="text-sm flex items-center gap-2 ">
                                {child.icon && <child.icon  className="h-4 w-4" />}
                                {child.title}
                            </Link>
                        </SidebarMenuButton>
                    ))}
                </div>
            )}
        </SidebarMenuItem>
    );
}
