import type { NavigationMenuItem } from '@nuxt/ui';

export const navLinks: NavigationMenuItem[] = [
    {
        label: 'Home',
        icon: 'i-lucide-home',
        to: '/',
    },
    {
        label: 'Research',
        icon: 'i-lucide-folder',
        to: '/research',
    },
    {
        label: 'Blog',
        icon: 'i-lucide-file-text',
        to: '/blog',
    },
    //   {
    //     label: 'Speaking',
    //     icon: 'i-lucide-mic',
    //     to: '/speaking',
    //   },
    {
        label: 'About',
        icon: 'i-lucide-user',
        to: '/about',
    },
];
