import { FaPerson, FaDiagramProject, FaGraduationCap } from 'react-icons/fa6';

export const getNavItems = (t: (key: string) => string) => [
    {
        name: t('navigation.about'),
        link: '#about',
        icon: <FaPerson />,
    },
    {
        name: t('navigation.projects'),
        link: '#projects',
        icon: (
            <FaDiagramProject className='h-4 w-4 text-neutral-500 dark:text-white' />
        ),
    },
    {
        name: t('navigation.skills'),
        link: '#skills',
        icon: (
            <FaGraduationCap className='h-4 w-4 text-neutral-500 dark:text-white' />
        ),
    },
    {
        name: t('navigation.contact'),
        link: '#contact',
        icon: (
            <FaGraduationCap className='h-4 w-4 text-neutral-500 dark:text-white' />
        ),
    },
];

export const gridItems = (t: (key: string) => string) => [
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
        link: 'https://www.linkedin.com/in/andrej-meliska-15278026b/',
    },
];

export const schoolWork = [
    {
        id: 1,
        title: 'Rezervačný systém učební',
        des: 'Rezervačný systém učební implementovaný v PHP s dôrazom na správu miestností a rezervácií.',
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
        title: 'Analýza a dekompozícia monolitického informačného systému',
        des: `V tejto bakalárskej práci je analyzovaný monolitický informačný systém s 
                modulárnou biznis logikou za účelom výberu vhodného modulu na dekompozíciu
                a jeho transformáciu na samostatne nasaditeľný modul. Následne je tento modul 
                oddelený, prepracovaný do podoby samostatnej mikroslužby a integrovaný
                späť do pôvodného systému prostredníctvom architektonického štýlu REST.
                Pri komunikácii s používateľským rozhraním je overenie používateľa zabezpečené 
                pomocou JWT. Výsledkom práce je plne funkčná a nasaditeľná mikroslužba eDokumenty. 
                Prínosom práce je zvýšenie flexibility, škálovateľnosti
                a rozšíriteľnosti informačného systému, pričom práca zároveň vytvára základ
                pre budúcu dekompozíciu ďalších modulov systému.`,
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
        title: 'Nástroj na generovanie závislostí v Java projekte',
        des: `This tool analyzes the source code of a Java project, identifies dependencies for each class, and generates a list in Mermaid format for visualization.`,
        iconLists: [
            '/icons/python/python-original.svg',
            '/icons/java/java-original.svg',
            '/Mermaid.svg',
        ],
        link: 'https://github.com/ansinko/java_dependency_gen_tool',
        category: 'innovis',
        year: '2025',
        img: '/school-projects/edocumentsDepDiagramExample.png',
    },
    {
        id: 4,
        title: 'Moderné dátové formáty v praxi',
        des: 'Projekt v rámci predmetu BI-MDF zameraný na modelovanie dát a ich reprezentáciu v rôznych formátoch (RDF, SPARQL, JSON, CSV, XML), vrátane dotazovania a transformácií.',
        iconLists: [
            '/icons/html5/html5-original.svg',
            'csv-svgrepo-com.svg',
            'xml-svgrepo-com.svg',
            '/icons/json/json-original.svg',
        ],
        link: 'https://github.com/fit-school-projects/modern-data-formats',
        category: 'BI-MDF',
        year: '2022',
        img: '/school-projects/json-code-example.png',
    },
    {
        id: 5,
        title: 'Big Data Analytika',
        des: 'Semestrálna práca zameraná na spracovanie a analýzu Big Data s využitím MongoDB, Elasticsearch a Kibany. Na vybraných datasetoch som skúmal prepojenia a korelácie, ktoré som vizualizoval v Kibane.',
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
        title: 'Stránka o mne',
        des: 'Stránka o mne z predmetu BI-ZWU, kde som sa naučil základné koncepty návrhu webového rozhrania z pohľadu používateľa a osvojil si HTML a CSS.',
        iconLists: [
            '/icons/html5/html5-original.svg',
            '/icons/css3/css3-original.svg',
        ],
        link: 'https://github.com/fit-school-projects/my-first-web',
        category: 'BI-ZWU',
        year: '2023',
        img: '/school-projects/about-me-web.png',
        demo: 'https://andrej.meliska.sk/',
    },
    {
        id: 7,
        title: 'The Drake',
        des: 'Implementácia stolnej hry The Drake (inšpirovanej hrou The Duke) pre dvoch hráčov v Jave. Zjednodušená verzia s menším hracím plánom a prispôsobenými pravidlami.',
        iconLists: [
            '/icons/java/java-original.svg',
            '/icons/git/git-original.svg',
        ],
        link: 'https://github.com/fit-school-projects/java-drake-game',
        category: 'BI-PJV',
        year: '2023',
        img: '/school-projects/drake.png',
    },
    {
        id: 8,
        title: 'PHP projekty',
        des: 'Súbor PHP projektov, na ktorých som si prakticky vyskúšal OOP, Composer, REST API, ORM, perzistenciu dát, scraping a unit testing.',
        iconLists: [
            '/icons/php/php-original.svg',
            '/icons/symfony/symfony-original.svg',
        ],
        link: 'https://github.com/fit-school-projects/php',
        category: 'BI-PHP',
        year: '2024',
        img: '/school-projects/php.png',
    },
    {
        id: 9,
        title: 'Aplikácia na odporúčanie relevantných produktov',
        des: 'Webová aplikácia odporúčajúca produkty používateľovi na základe kolaboratívneho filtrovania a podobnosti s inými používateľmi.',
        iconLists: [
            '/icons/php/php-original.svg',
            '/icons/symfony/symfony-original.svg',
            '/icons/postgresql/postgresql-original.svg',
            'icons/javascript/javascript-original.svg',
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
        title: 'Goodgame Empire Mini',
        des: 'Strategická budovateľská hra v C++, kde hráč súťaží proti AI. Cieľom je získať čo najviac budov alebo zdrojov.',
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
    },
    {
        id: 11,
        title: 'C++ projekty',
        des: 'Repozitár obsahujúci všetky moje C++ kódy – od domácich úloh z ProgTestu až po prípravu na skúšky.',
        iconLists: ['/icons/cplusplus/cplusplus-original.svg'],
        link: 'https://github.com/fit-school-projects/Cpp',
        category: 'BI-PA2',
        year: '2023',
        img: '/school-projects/cpp.png',
    },
    {
        id: 12,
        title: 'C projekty',
        des: 'Repozitár s mojimi C kódmi – od domácich úloh z ProgTestu až po menšie programy, ktoré mi pomohli osvojiť si základy programovania.',
        iconLists: ['/icons/c/c-original.svg'],
        link: 'https://github.com/fit-school-projects/C',
        category: 'BI-PA1',
        year: '2021',
        img: '/school-projects/c.png',
    },
];

export const programmingLanguages = [
    {
        name: ['Angular'],
        icon: ['/icons/angular/angular-original.svg'],
        proficiency: 60,
        experience: '2+ years',
        skillLevel: 'Intermediate',
        description: 'Frontend development',
    },
    {
        name: ['Java'],
        icon: ['/icons/java/java-original.svg'],
        proficiency: 80,
        experience: '3+ years',
        skillLevel: 'Advanced',
        description: 'Backend development & microservices',
    },
    {
        name: ['PostgreSQL', 'MySQL'],
        icon: [
            '/icons/postgresql/postgresql-original.svg',
            '/icons/mysql/mysql-original.svg',
            '/Liquibase.svg',
        ],
        proficiency: 85,
        experience: '4+ years',
        skillLevel: 'Advanced',
        description: 'Persistence',
    },
    {
        name: ['Python', 'Node.js'],
        icon: [
            '/icons/python/python-original.svg',
            '/icons/nodejs/nodejs-original.svg',
        ],
        proficiency: 45,
        skillLevel: 'Intermediate',
        description: 'Scripting and automation',
    },
    {
        name: ['React', 'Next.js'],
        icon: [
            '/icons/react/react-original.svg',
            '/icons/nextjs/nextjs-original.svg',
        ],
        proficiency: 50,
        experience: '3+ years',
        skillLevel: 'Intermediate',
        description: 'Dynamic websites',
    },
    {
        name: ['JavaScript', 'TypeScript'],
        icon: [
            '/icons/javascript/javascript-original.svg',
            '/icons/typescript/typescript-original.svg',
        ],
        proficiency: 90,
        experience: '4+ years',
        skillLevel: 'Advanced',
        description: 'Frontend development',
    },
    {
        name: ['C++', 'C'],
        icon: [
            '/icons/cplusplus/cplusplus-original.svg',
            '/icons/c/c-original.svg',
        ],
        proficiency: 35,
        experience: '2 years',
        skillLevel: 'Intermediate',
        description: 'Backend development',
    },
    {
        name: ['PHP'],
        icon: ['/icons/php/php-original.svg'],
        proficiency: 40,
        skillLevel: 'Beginner',
        description: 'Backend development',
    },
    {
        name: ['HTML', 'CSS'],
        icon: [
            '/icons/html5/html5-original.svg',
            '/icons/css3/css3-original.svg',
        ],
        proficiency: 95,
        experience: '4 years',
        skillLevel: 'Advanced',
        description: 'Static websites',
    },
    {
        name: ['Docker'],
        icon: ['/icons/docker/docker-original.svg'],
        proficiency: 60,
        experience: '3+ years',
        skillLevel: 'Intermediate',
        description: 'Containerization',
    },
    {
        name: ['Git', 'Jira'],
        icon: ['/icons/git/git-original.svg', '/icons/jira/jira-original.svg'],
        proficiency: 90,
        experience: '3+ years',
        skillLevel: 'Advanced',
        description: 'Version control and project management',
    },
    {
        name: ['MongoDB'],
        icon: ['/icons/mongodb/mongodb-original.svg'],
        proficiency: 20,
        experience: '1 year',
        skillLevel: 'Beginner',
        description: 'NoSQL databases',
    },
];

export const socialMedia = [
    {
        id: 1,
        img: '/git.svg',
        link: 'https://github.com/orgs/fit-school-projects/repositories',
        name: 'GitHub',
    },
    {
        id: 2,
        img: '/facebook.svg',
        link: 'https://www.facebook.com/andrej.meliska',
        name: 'Facebook',
    },
    {
        id: 3,
        img: '/link.svg',
        link: 'https://www.linkedin.com/in/andrej-meliska-15278026b/',
        name: 'LinkedIn',
    },
];
