import { NavFooter } from '@/components/nav-footer';
import { NavMain } from '@/components/nav-main';
import { NavUser } from '@/components/nav-user';
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from '@/components/ui/sidebar';
import { advisory_announcements, dashboard, department_digital, department_finance, department_hr, department_itdepartment, users_index } from '@/routes';
import { type NavItem } from '@/types';
import { Link } from '@inertiajs/react';
import { BookOpen,
        Folder,
        LayoutGrid,
        UserPlus,
        BookOpenText,
        HandCoins,
        MonitorCog,
        FileUser,
        BrainCircuit,
        Megaphone,
        FileText 
    } from 'lucide-react';
import AppLogo from './app-logo';
import { route } from 'ziggy-js';

const mainNavItems: NavItem[] = [
    {
        title: 'Dashboard',
        href: dashboard(),
        icon: LayoutGrid,
    },
    {
        title: 'Employees',
        href: users_index(),
        icon: UserPlus, 
    },
    {
        title: 'Department',
        href: '',
        icon: BookOpenText,
        children: [
            {title: 'Finance', href: department_finance(), icon: HandCoins },
            {title: 'IT Department', href: department_itdepartment(), icon: MonitorCog },
            {title: 'HR', href: department_hr(), icon: FileUser},
            {title: 'Digital Sale', href: department_digital(), icon: BrainCircuit},
        ]
    },
    {
        title: 'Company Updates',
        href: advisory_announcements(),
        icon: Megaphone,
    },
    {
        title: 'Reports',
        href: '',
        icon: FileText,
    },
];

const footerNavItems: NavItem[] = [
    {
        title: 'Repository',
        href: 'https://github.com/laravel/react-starter-kit',
        icon: Folder,
    },
    {
        title: 'Documentation',
        href: 'https://laravel.com/docs/starter-kits#react',
        icon: BookOpen,
    },
];

export function AppSidebar() {
    return (
        <Sidebar collapsible="icon" variant="inset">
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton size="lg" asChild>
                            <Link href={dashboard()} prefetch>
                                <AppLogo />
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>

            <SidebarContent>
                <NavMain items={mainNavItems} />
            </SidebarContent>

            <SidebarFooter>
                <NavFooter items={footerNavItems} className="mt-auto" />
                <NavUser />
            </SidebarFooter>
        </Sidebar>
    );
}
