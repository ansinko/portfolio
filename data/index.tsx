import {
    FaPerson,
    FaDiagramProject,
    FaGraduationCap,
    FaEnvelope,
} from 'react-icons/fa6';
import type { T } from './translations';

export const getNavItems = (t: T) => [
    { name: t('navigation.about'), link: '#about', icon: <FaPerson /> },
    {
        name: t('navigation.projects'),
        link: '#projects',
        icon: <FaDiagramProject />,
    },
    {
        name: t('navigation.skills'),
        link: '#skills',
        icon: <FaGraduationCap />,
    },
    {
        name: t('navigation.contact'),
        link: '#contact',
        icon: <FaEnvelope />,
    },
];

export const gridItems = (t: T) => [
    {
        id: 1,
        title: t('about.softSkills.description'),
        description: t('about.softSkills.name'),
        className: 'lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]',
        imgClassName: 'w-full h-full',
        titleClassName: 'justify-end',
        img: '/b1.svg',
        spareImg: '',
    },
    {
        id: 2,
        title: '',
        description: t('about.workExperience.header'),
        className: 'lg:col-span-2 md:col-span-3 md:row-span-2',
        imgClassName: '',
        titleClassName: 'justify-start',
        img: '',
        spareImg: '',
    },
    {
        id: 3,
        title: t('about.techStack.header'),
        description: t('about.techStack.description'),
        className: 'lg:col-span-2 md:col-span-3 md:row-span-2',
        imgClassName: '',
        titleClassName: 'justify-center',
        img: '',
        spareImg: '',
    },
    {
        id: 4,
        title: '',
        description: t('about.education.header'),
        className: 'lg:col-span-2 md:col-span-3 md:row-span-1',
        imgClassName: '',
        titleClassName: 'justify-start',
        img: '/grid.svg',
        spareImg: '/b4.svg',
    },
    {
        id: 5,
        title: t('about.domain.description'),
        description: '',
        className: 'md:col-span-3 md:row-span-1',
        imgClassName: 'absolute right-0 bottom-0 md:w-96 w-60',
        titleClassName: 'justify-center md:justify-start lg:justify-center',
        img: '/b5.svg',
        spareImg: '/grid.svg',
    },
    {
        id: 6,
        title: t('about.likes.header'),
        description: t('about.likes.description'),
        className: 'lg:col-span-3 md:col-span-3 md:row-span-1',
        imgClassName: '',
        titleClassName: 'justify-center md:max-w-full max-w-60 text-center',
        img: '',
        spareImg: '',
    },
    {
        id: 7,
        title: t('about.linkedin.title'),
        description: '',
        className: 'lg:col-span-2 md:col-span-3 md:row-span-1',
        imgClassName: '',
        titleClassName: 'justify-start',
        img: '',
        spareImg: '',
        link: 'https://www.linkedin.com/in/andrej-meli%C5%A1ka-15278026b/',
    },
];

interface SchoolWorkItem {
    id: number;
    title: string;
    des: string;
    iconLists: string[];
    link?: string;
    demo?: string;
    category: string;
    year: string;
    img: string;
    archived?: boolean;
}

export const schoolWork = (t: T): SchoolWorkItem[] => {
    const items: SchoolWorkItem[] = [
        {
            id: 1,
            title: t('projects.project1.title'),
            des: t('projects.project1.des'),
            iconLists: [
                '/icons/php/php-original.svg',
                '/icons/symfony/symfony-original.svg',
                '/icons/javascript/javascript-original.svg',
                '/icons/postgresql/postgresql-original.svg',
                '/icons/docker/docker-original.svg',
                '/icons/postman/postman-original.svg',
                '/icons/git/git-original.svg',
            ],
            link: 'https://github.com/fit-school-projects/room-reservations-app',
            category: 'BI-TWA',
            year: '2023',
            img: '/school-projects/reservations-app.png',
        },
        {
            id: 2,
            title: t('projects.project2.title'),
            des: t('projects.project2.des'),
            iconLists: [
                '/icons/angular/angular-original.svg',
                '/icons/java/java-original.svg',
                '/Liquibase.svg',
            ],
            category: 'innovis',
            year: '2025',
            img: '/school-projects/dependencyOverviewDiagram.png',
        },
        {
            id: 3,
            title: t('projects.project3.title'),
            des: t('projects.project3.des'),
            iconLists: [
                '/icons/python/python-original.svg',
                '/icons/java/java-original.svg',
                '/Mermaid.svg',
            ],
            link: 'https://github.com/ansinko/java_dependency_gen_tool',
            category: 'innovis',
            year: '2025',
            img: '/school-projects/edocumentsDepDiagramExample.png',
            archived: true,
        },
        {
            id: 4,
            title: t('projects.project4.title'),
            des: t('projects.project4.des'),
            iconLists: [
                '/icons/html5/html5-original.svg',
                '/csv-svgrepo-com.svg',
                '/xml-svgrepo-com.svg',
                '/icons/json/json-original.svg',
            ],
            link: 'https://github.com/fit-school-projects/modern-data-formats',
            category: 'BI-MDF',
            year: '2022',
            img: '/school-projects/json-code-example.png',
            archived: true,
        },
        {
            id: 5,
            title: t('projects.project5.title'),
            des: t('projects.project5.des'),
            iconLists: [
                '/icons/python/python-original.svg',
                '/icons/mongodb/mongodb-original.svg',
                '/icons/elasticsearch/elasticsearch-original.svg',
                '/icons/kibana/kibana-original.svg',
                '/icons/json/json-original.svg',
                '/icons/docker/docker-original.svg',
            ],
            link: 'https://github.com/fit-school-projects/big-data',
            category: 'BI-BIG',
            year: '2024',
            img: '/school-projects/bigdata-overview.png',
        },
        {
            id: 6,
            title: t('projects.project6.title'),
            des: t('projects.project6.des'),
            iconLists: [
                '/icons/html5/html5-original.svg',
                '/icons/css3/css3-original.svg',
            ],
            link: 'https://github.com/fit-school-projects/my-first-web',
            category: 'BI-ZWU',
            year: '2023',
            img: '/school-projects/about-me-web.png',
        },
        {
            id: 7,
            title: t('projects.project7.title'),
            des: t('projects.project7.des'),
            iconLists: [
                '/icons/java/java-original.svg',
                '/icons/git/git-original.svg',
            ],
            link: 'https://github.com/fit-school-projects/java-drake-game',
            category: 'BI-PJV',
            year: '2023',
            img: '/school-projects/drake.png',
            archived: true,
        },
        {
            id: 8,
            title: t('projects.project8.title'),
            des: t('projects.project8.des'),
            iconLists: [
                '/icons/php/php-original.svg',
                '/icons/symfony/symfony-original.svg',
            ],
            link: 'https://github.com/fit-school-projects/php',
            category: 'BI-PHP',
            year: '2024',
            img: '/school-projects/php.png',
            archived: true,
        },
        {
            id: 9,
            title: t('projects.project9.title'),
            des: t('projects.project9.des'),
            iconLists: [
                '/icons/php/php-original.svg',
                '/icons/symfony/symfony-original.svg',
                '/icons/postgresql/postgresql-original.svg',
                '/icons/javascript/javascript-original.svg',
                '/icons/react/react-original.svg',
                '/icons/docker/docker-original.svg',
            ],
            link: 'https://github.com/fit-school-projects/product-recommendation-app',
            category: 'BI-VWM',
            year: '2023',
            img: '/school-projects/recommendation-app.png',
        },
        {
            id: 10,
            title: t('projects.project10.title'),
            des: t('projects.project10.des'),
            iconLists: [
                '/icons/cplusplus/cplusplus-original.svg',
                '/icons/c/c-original.svg',
                '/icons/cmake/cmake-original.svg',
                '/icons/clion/clion-original.svg',
                '/icons/git/git-original.svg',
            ],
            link: 'https://github.com/fit-school-projects/goodgame-empire-mini',
            category: 'BI-PA2',
            year: '2023',
            img: '/school-projects/goodgame-empire-mini.png',
            archived: true,
        },
        {
            id: 11,
            title: t('projects.project11.title'),
            des: t('projects.project11.des'),
            iconLists: ['/icons/cplusplus/cplusplus-original.svg'],
            link: 'https://github.com/fit-school-projects/Cpp',
            category: 'BI-PA2',
            year: '2023',
            img: '/school-projects/cpp.png',
            archived: true,
        },
        {
            id: 12,
            title: t('projects.project12.title'),
            des: t('projects.project12.des'),
            iconLists: ['/icons/c/c-original.svg'],
            link: 'https://github.com/fit-school-projects/C',
            category: 'BI-PA1',
            year: '2021',
            img: '/school-projects/c.png',
            archived: true,
        },
        {
            id: 13,
            title: t('projects.project13.title'),
            des: t('projects.project13.des'),
            iconLists: [
                '/icons/nextjs/nextjs-original.svg',
                '/icons/react/react-original.svg',
                '/icons/typescript/typescript-original.svg',
                '/icons/css3/css3-original.svg',
                '/icons/git/git-original.svg',
            ],
            link: 'https://github.com/ansinko/prague-office-menu-app',
            demo: 'https://menu-picker-three.vercel.app/',
            category: 'side-project',
            year: '2025',
            img: '/school-projects/prague-office-menu.png',
        },
    ];

    return items.sort((a, b) => Number(b.year) - Number(a.year));
};

export type SkillTier = 'core' | 'comfortable' | 'familiar';

export interface ProgLang {
    name: string[];
    icon: string[];
    tier: SkillTier;
    topic: string;
    experience?: string;
    context?: string;
}

export const programmingLanguages = (t: T): ProgLang[] => {
    const years = (n: number) => `${n}+ ${t('generic.yearsPlural')}`;

    return [
        // Core — daily use at work / personal projects
        {
            name: ['Java'],
            icon: ['/icons/java/java-original.svg'],
            tier: 'core',
            topic: t('programmingLanguagesSection.backendMicroservices'),
            experience: years(2),
            context: t('programmingLanguages.context.workInnovis'),
        },
        {
            name: ['Angular'],
            icon: ['/icons/angular/angular-original.svg'],
            tier: 'core',
            topic: t('programmingLanguagesSection.frontend'),
            experience: years(2),
            context: t('programmingLanguages.context.workInnovis'),
        },
        {
            name: ['JavaScript', 'TypeScript'],
            icon: [
                '/icons/javascript/javascript-original.svg',
                '/icons/typescript/typescript-original.svg',
            ],
            tier: 'core',
            topic: t('programmingLanguagesSection.frontend'),
            experience: years(3),
            context: t('programmingLanguages.context.workInnovis'),
        },
        {
            name: ['PostgreSQL', 'MySQL'],
            icon: [
                '/icons/postgresql/postgresql-original.svg',
                '/icons/mysql/mysql-original.svg',
                '/Liquibase.svg',
            ],
            tier: 'core',
            topic: t('programmingLanguagesSection.persistence'),
            experience: years(2),
            context: t('programmingLanguages.context.workInnovis'),
        },
        {
            name: ['Git', 'Jira'],
            icon: ['/icons/git/git-original.svg', '/icons/jira/jira-original.svg'],
            tier: 'core',
            topic: t('programmingLanguagesSection.versionControl'),
            experience: years(2),
            context: t('programmingLanguages.context.workInnovis'),
        },
        {
            name: ['HTML', 'CSS'],
            icon: [
                '/icons/html5/html5-original.svg',
                '/icons/css3/css3-original.svg',
            ],
            tier: 'core',
            topic: t('programmingLanguagesSection.static'),
            experience: years(3),
        },

        // Comfortable — solid working knowledge from projects
        {
            name: ['React', 'Next.js'],
            icon: [
                '/icons/react/react-original.svg',
                '/icons/nextjs/nextjs-original.svg',
            ],
            tier: 'comfortable',
            topic: t('programmingLanguagesSection.dynamic'),
            experience: years(1),
            context: t('programmingLanguages.context.sideProjects'),
        },
        {
            name: ['Docker'],
            icon: ['/icons/docker/docker-original.svg'],
            tier: 'comfortable',
            topic: t('programmingLanguagesSection.containerization'),
            experience: years(1),
            context: t('programmingLanguages.context.sideProjects'),
        },
        {
            name: ['Python', 'Node.js'],
            icon: [
                '/icons/python/python-original.svg',
                '/icons/nodejs/nodejs-original.svg',
            ],
            tier: 'comfortable',
            topic: t('programmingLanguagesSection.scripting'),
            experience: years(1),
            context: t('programmingLanguages.context.sideProjects'),
        },

        // Familiar / Learning — coursework or occasional
        {
            name: ['C++', 'C'],
            icon: [
                '/icons/cplusplus/cplusplus-original.svg',
                '/icons/c/c-original.svg',
            ],
            tier: 'familiar',
            topic: t('programmingLanguagesSection.backend'),
            context: t('programmingLanguages.context.coursework'),
        },
        {
            name: ['PHP'],
            icon: ['/icons/php/php-original.svg'],
            tier: 'familiar',
            topic: t('programmingLanguagesSection.backend'),
            context: t('programmingLanguages.context.coursework'),
        },
        {
            name: ['MongoDB'],
            icon: ['/icons/mongodb/mongodb-original.svg'],
            tier: 'familiar',
            topic: t('programmingLanguagesSection.nosql'),
            context: t('programmingLanguages.context.coursework'),
        },
    ];
};

export const socialMedia = [
    {
        id: 1,
        img: '/git.svg',
        link: 'https://github.com/orgs/fit-school-projects/repositories',
        name: 'GitHub',
    },
    {
        id: 2,
        img: '/link.svg',
        link: 'https://www.linkedin.com/in/andrej-meli%C5%A1ka-15278026b/',
        name: 'LinkedIn',
    },
    {
        id: 3,
        img: '/facebook.svg',
        link: 'https://www.facebook.com/andrej.meliska',
        name: 'Facebook',
    },
];
