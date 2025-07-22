export default defineAppConfig({
    ui: {
        colors: {
            primary: 'fuchsia',
            gray: 'neutral',
        }
    },
    global: {
        picture: {
            light: 'https://r2.qbtech.dev/boa_images/BOA_1.jpg',
            dark:
                'https://r2.qbtech.dev/boa_images/BOA.png',
            alt: 'Bridget Osei Agyemang picture',
        },
        meetingLink: 'https://cal.com/',
        email: 'me@cybandy.com',
        available: true,
    },
    footer: {
        credits: `Copyright © ${new Date().getFullYear()}`,
        colorMode: false,
        links: [
            {
                icon: 'i-qb-qbtech',
                to: 'https://qbtech.dev',
                target: '_blank',
                'aria-label': 'QB-Tech Website',
            },
            {
                icon: 'i-simple-icons-linkedin',
                to: 'https://www.linkedin.com/in/andrews-okyere/"',
                target: '_blank',
                'aria-label': 'Andrews on Linkedin',
            },
            {
                icon: 'i-simple-icons-discord',
                to: 'https://discord.com/users/476206884089495593',
                target: '_blank',
                'aria-label': 'Andrews on Discord',
            },
            {
                icon: 'i-simple-icons-youtube',
                to: 'https://www.youtube.com/@cybandy',
                target: '_blank',
                'aria-label': 'Cybandy on youtube',
            },
            {
                icon: 'i-simple-icons-github',
                to: 'https://github.com/cybandy',
                target: '_blank',
                'aria-label': 'Andrews on GitHub',
            },
        ],
    },
});
