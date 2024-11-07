// quetzil, rustyloot (main site), rustyloot (dashboard), powerlines, rutgers, gammabets

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
        description: 'I did it',
        techStack: [
            Techs.CSS,
            Techs.HTML,
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
        ],
    },
    {
        projectName: 'Dashboard',
        companyName: 'RustyLoot',
        yearStart: 2023,
        yearEnd: 2024,
        description: 'I did it',
        techStack: [
            Techs.CSS,
            Techs.HTML,
            Techs.JavaScript,
            Techs.React,
            Techs.Tailwind,
            Techs.NodeJS,
            Techs.Express,
            Techs.PostgreSQL,
            Techs.Zod,
            Techs.Vite,
            Techs.DigitalOcean,
        ],
    },
];
