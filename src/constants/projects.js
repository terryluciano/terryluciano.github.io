import rustyLootImg from '@/assets/projects/rustyloot.png';

// quetzil, rustyloot (main site), rustyloot (dashboard), powerlines (maybe), rutgers, gammabets

export const Techs = Object.freeze({
    Solid: 'solid',
    Heroku: 'heroku',
    Vue: 'vue',
    TypeScript: 'typescript',
    Git: 'git',
    Python: 'python',
    JavaScript: 'javascript',
    NodeJS: 'nodejs',
    HTML: 'html',
    CSS: 'css',
    Express: 'express',
    Go: 'go',
    MongoDB: 'mongodb',
    React: 'react',
    Figma: 'figma',
    CloudFlare: 'cloudflare',
    Redis: 'redis',
    SocketIO: 'socketio',
    Tailwind: 'tailwind',
    PostgreSQL: 'postgresql',
    MySQL: 'mysql',
    Zod: 'zod',
    DigitalOcean: 'digitalocean',
    Vite: 'vite',
    DrizzleORM: 'drizzleorm',
});

// export interface Project {
//     projectImage: string;
//     projectName: string;
//     companyName?: string;
//     yearStart: number;
//     yearEnd?: number;
//     position?: string;
//     description: string;
//     github?: string;
//     externalLink?: string;
//     techStack: Techs[];
// }

export const projects = [
    {
        projectName: 'Quetzil',
        yearStart: 2024,
        monthStart: 'September',
        yearEnd: 2024,
        monthEnd: 'October',
        position: 'Full-Stack Developer',
        description:
            "Quetzil is a community-driven food discovery platform that helps you find the best versions of specific dishes in your area. Simply search for a particular food item, and you'll get a ranked list of local restaurants serving it, tailored to your preferences and dietary needs. Users contribute by rating dishes and adding new restaurants, building a comprehensive database. Quetzil aims to provide clear insights into each dish, offering a fresh approach to food discovery beyond general restaurant reviews.",
        techStack: [
            Techs.TypeScript,
            Techs.React,
            Techs.Tailwind,
            Techs.NodeJS,
            Techs.Express,
            Techs.PostgreSQL,
            Techs.Zod,
            Techs.Vite,
            Techs.DigitalOcean,
            Techs.CloudFlare,
            Techs.CSS,
            Techs.HTML,
        ],
        github: 'https://github.com/terryluciano/quetzil',
        externalLink: 'https://quetzil.com/',
    },
    {
        projectName: 'Dashboard',
        companyName: 'RustyLoot',
        yearStart: 2024,
        monthStart: 'October',
        yearEnd: 2024,
        position: 'Full-Stack Web Developer',
        description: 'I did it',
        techStack: [
            Techs.TypeScript,
            Techs.React,
            Techs.Tailwind,
            Techs.Zod,
            Techs.NodeJS,
            Techs.Express,
            Techs.MySQL,
            Techs.Redis,
            Techs.Vite,
            Techs.CSS,
            Techs.HTML,
        ],
    },
    {
        projectImage: rustyLootImg,
        projectName: 'RustyLoot.GG',
        companyName: 'RustyLoot',
        yearStart: 2024,
        monthStart: 'October',
        yearEnd: 2024,
        position: 'Frontend Web Developer',
        description: 'I did it kinda',
        techStack: [
            Techs.JavaScript,
            Techs.Solid,
            Techs.Tailwind,
            Techs.SocketIO,
            Techs.CSS,
            Techs.HTML,
            Techs.Zod,
            Techs.NodeJS,
            Techs.Express,
            Techs.MySQL,
            Techs.Redis,
            Techs.Vite,
            Techs.CloudFlare,
        ],
    },
];
