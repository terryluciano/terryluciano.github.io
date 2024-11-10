import rustyLootImg from '@/assets/projects/rustyloot.png';
import quetzilImg from '@/assets/projects/quetzil.png';
import dashboardImg from '@/assets/projects/rlDashboard.png';
import powerlinesImg from '@/assets/projects/powerlines.png';
import jjiHeatImg from '@/assets/projects/jji-heat.png';
import gammaBetsImg from '@/assets/projects/gammabets.png';

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
        projectImage: quetzilImg,
        projectName: 'Quetzil',
        yearStart: 2024,
        monthStart: 'September',
        yearEnd: 2024,
        monthEnd: 'November',
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
            Techs.Figma,
            Techs.DigitalOcean,
            Techs.CloudFlare,
            Techs.Git,
            Techs.HTML,
            Techs.CSS,
        ],
        github: 'https://github.com/terryluciano/quetzil',
        externalLink: 'https://quetzil.com/',
    },
    {
        projectImage: dashboardImg,
        projectName: 'Dashboard',
        companyName: 'RustyLoot',
        yearStart: 2024,
        monthStart: 'March',
        yearEnd: 'Current',
        position: 'Full-Stack Web Developer',
        description:
            'To enhance support ticket management and staff efficiency, I contributed significantly to the development of a custom admin dashboard. I led the front-end development, creating an intuitive and responsive interface, and also assisted with backend routes and controllers. Running parallel to the main site, this dashboard streamlined our support operations and improved overall productivity.',
        techStack: [
            Techs.TypeScript,
            Techs.React,
            Techs.Tailwind,
            Techs.NodeJS,
            Techs.Express,
            Techs.MySQL,
            Techs.Redis,
            Techs.Git,
            Techs.CSS,
            Techs.HTML,
        ],
    },
    {
        projectImage: rustyLootImg,
        projectName: 'RustyLoot.GG',
        companyName: 'RustyLoot',
        yearStart: 2023,
        monthStart: 'October',
        yearEnd: 'Current',
        position: 'Frontend Web Developer',
        description:
            'At RustyLoot, I focused primarily on front-end development, implementing key features and enhancements for the website. My contributions included developing new game modes, creating pages such as user profiles, and integrating multilingual support. Additionally, I optimized the existing codebase to ensure scalability and maintainability as the platform expanded to accommodate tens of thousands of daily users.',
        techStack: [
            Techs.JavaScript,
            Techs.Solid,
            Techs.Tailwind,
            Techs.SocketIO,
            Techs.NodeJS,
            Techs.Express,
            Techs.MySQL,
            Techs.Redis,
            Techs.CloudFlare,
            Techs.Git,
            Techs.HTML,
            Techs.CSS,
        ],
        externalLink: 'https://rustyloot.gg/',
    },
    {
        projectImage: powerlinesImg,
        projectName: 'Powerlines',
        companyName: 'Powerlines (Non-Profit Organization)',
        yearStart: 2023,
        monthStart: 'July',
        yearEnd: 2023,
        monthEnd: 'October',
        position: 'Full-Stack Developer',
        description:
            'PowerLines is an organization dedicated to modernizing the utility regulatory system by focusing on people, policy, and process to ensure public utilities commissions advance the public interest, update outdated regulations, and enhance public participation. In the early planning stages, my brother and I assembled a team to create mockups for the original designs and planned the application architecture. We developed both the front-end and back-end of the website, helping to launch the first version of the project.',
        techStack: [
            Techs.JavaScript,
            Techs.Vue,
            Techs.Python,
            Techs.NodeJS,
            Techs.Express,
            Techs.PostgreSQL,
            Techs.HTML,
            Techs.CSS,
        ],
        externalLink: 'https://powerlines.org/',
    },
    {
        projectImage: jjiHeatImg,
        projectName: 'Health Equity Assessment Tool',
        companyName: 'Rutgers Data Science Consulting',
        yearStart: 2022,
        monthStart: 'June',
        yearEnd: 2022,
        monthEnd: 'November',
        position: 'Computer Science Project Lead',
        description:
            "As the Computer Science Project Lead at Rutgers Data Science Consulting, we collaborated with Johnson & Johnson Innovations on a grant to develop a system for generating personalized survey results in PDF format. Our team's overarching goal was to streamline the survey result generation process for innovators who had taken the Health Equity Assessment Tool survey. My key responsibilities on the project included designing a visually appealing mockup of the report, developing a robust system capable of generating personalized reports, and leveraging SFTP to upload the PDF reports seamlessly to J&J Innovation's server. This project required close collaboration with key stakeholders, including technical and non-technical teams, to ensure a smooth and effective implementation of the solution.",
        techStack: [Techs.Python, Techs.HTML, Techs.CSS, Techs.Figma],
    },
    {
        projectImage: gammaBetsImg,
        projectName: 'GammaBets',
        yearStart: 2021,
        monthStart: 'October',
        yearEnd: 2022,
        monthEnd: 'June',
        position: 'Lead Developer',
        description:
            'As the Lead Developer at GammaBets, I developed a comprehensive backend system that efficiently managed various aspects of the website, including mini-games, trades, transactions, and more. Additionally, I was responsible for designing the front end of the website based on a mockup, ensuring a user-friendly and intuitive interface. GammaBets provided Rust players with a platform to engage in thrilling mini-games and trade valuable in-game items with other players. Although GammaBets never launched, the project greatly enhanced my experience as a full-stack web developer.',
        techStack: [
            Techs.Vue,
            Techs.NodeJS,
            Techs.Express,
            Techs.SocketIO,
            Techs.MongoDB,
            Techs.Heroku,
            Techs.HTML,
            Techs.CSS,
            Techs.Git,
            Techs.Figma,
        ],
        github: 'https://github.com/terryluciano/GammaBets',
    },
];
