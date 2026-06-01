export type Language = 'en' | 'sk';
export type T = (key: string) => string;

export const translations = {
    en: {
        generic: {
            present: 'present',
            yearsPlural: 'years',
            beginner: 'Beginner',
            intermediate: 'Intermediate',
            advanced: 'Advanced',
            projectDesc: 'Project Description',
            usedTechnologies: 'Technologies Used',
            githubRepo: 'GitHub Repository',
            liveDemo: 'Live Demo',
            moreInfo: 'More information soon…',
        },
        hero: {
            title: 'Andrej Meliška — Software Developer',
            subtitle: 'Bc. by paper, Dev. by passion',
            description:
                'Software developer, sports enthusiast and student @ FIT CTU in Prague who brings ideas to life with code ✨',
            button: 'See my projects',
        },
        navigation: {
            about: 'About',
            projects: 'Projects',
            skills: 'Skills',
            contact: 'Contact',
        },
        about: {
            softSkills: {
                name: 'Soft skills',
                description:
                    'Team player who enjoys challenges, communicates clearly, thinks critically, comes up with new ideas, and delivers work on time.',
            },
            workExperience: {
                header: 'Work experience',
                position: 'Junior Software Developer',
                company: 'innovis, s.r.o.',
                period: '2023 — present',
            },
            education: {
                header: 'Education',
                field: 'Web Engineering',
                entries: [
                    {
                        school: 'Czech Technical University in Prague',
                        degree: 'Ing., FIT — Web Engineering',
                        period: '2025 — present',
                    },
                    {
                        school: 'Czech Technical University in Prague',
                        degree: 'Bc., FIT — Web Engineering',
                        period: '2021 — 2025',
                    },
                    {
                        school: 'Evanjelické gymnázium J. A. Komenského',
                        degree: 'Košice',
                        period: '2013 — 2021',
                    },
                ],
            },
            techStack: {
                header: 'My tech stack',
                description: 'I constantly try to improve.',
            },
            likes: {
                header: 'Do you like what you see so far?',
                description: 'Show some love',
                button: 'Give it a like',
                thankYou: 'Thank you!',
            },
            domain: {
                description:
                    'I love automating workflows and writing scripts in Python and Node.js to boost productivity and eliminate repetitive manual tasks.',
            },
            linkedin: {
                title: 'Connect with me on LinkedIn',
                visit: 'Visit my LinkedIn →',
            },
        },
        schoolWork: {
            title: 'My <span class="text-purple">School</span> and <span class="text-purple">Work</span> Projects',
            archiveShow: 'Show older projects',
            archiveHide: 'Hide older projects',
            archiveHint: 'Early coursework from my first years at FIT',
        },
        programmingLanguages: {
            title: '<span class="text-purple">Programming Languages</span> and Skills',
            experience: 'Experience',
        },
        projects: {
            project1: {
                title: 'Classroom Reservation System',
                des: 'A classroom reservation system implemented in PHP focusing on managing rooms and reservations.',
            },
            project2: {
                title: "Bachelor's Thesis — Decomposition of a Monolithic Information System",
                des: "This bachelor's thesis analyzes a monolithic information system with modular business logic to select a suitable module for decomposition and transform it into an independently deployable microservice. The new service is integrated back into the original system over REST, with JWT-secured user verification. The result is a fully functional eDocuments microservice, improving the system's flexibility, scalability, and extensibility, and laying the foundation for further decomposition.",
            },
            project3: {
                title: 'Java Project Dependency Generator',
                des: 'A tool that analyzes the source code of a Java project, identifies dependencies for each class, and generates a Mermaid diagram for easy visualization.',
            },
            project4: {
                title: 'Modern Data Formats in Practice',
                des: 'Project for BI-MDF focused on modeling data and representing it in various formats (RDF, SPARQL, JSON, CSV, XML), including querying and transformations.',
            },
            project5: {
                title: 'Big Data Analytics',
                des: 'Semester project on processing and analyzing Big Data using MongoDB, Elasticsearch, and Kibana — exploring relationships and correlations on selected datasets visualized in Kibana.',
            },
            project6: {
                title: 'About Me Website',
                des: 'A personal website from BI-ZWU where I learned the basics of user-centric web design and practiced HTML and CSS.',
            },
            project7: {
                title: 'The Drake',
                des: 'Java implementation of the board game The Drake (inspired by The Duke) for two players — a simplified version with smaller board and adapted rules.',
            },
            project8: {
                title: 'PHP Mini-Projects',
                des: 'Collection of PHP projects where I practiced OOP, Composer, REST APIs, ORM, persistence, scraping, and unit testing.',
            },
            project9: {
                title: 'Product Recommendation App',
                des: 'Web app recommending products to users based on collaborative filtering and similarity to other users.',
            },
            project10: {
                title: 'Goodgame Empire Mini',
                des: 'A strategy-building game in C++ where the player competes against AI to acquire the most buildings or resources.',
            },
            project11: {
                title: 'C++ Projects',
                des: 'Repository containing all my C++ code — from ProgTest homework to exam preparation.',
            },
            project12: {
                title: 'C Projects',
                des: 'Repository with my C code — from ProgTest homework to small programs that helped me learn programming basics.',
            },
            project13: {
                title: 'Prague Office Menu App',
                des: 'A lunch menu discovery app that scrapes and displays daily restaurant menus for offices in Prague. Users vote on their preferred restaurant, with results shared in real time via Redis. Multi-office support secured per office. Built with Next.js 16, React 19, Tailwind 4, Vercel Blob, Upstash Redis, Leaflet maps, and GitHub Actions/Vercel cron jobs.',
            },
        },
        programmingLanguagesSection: {
            frontend: 'Frontend development',
            backendMicroservices: 'Backend & microservices',
            backend: 'Backend development',
            persistence: 'Persistence',
            containerization: 'Containerization',
            dynamic: 'Dynamic web apps',
            static: 'Static websites',
            scripting: 'Scripting & automation',
            versionControl: 'Version control & project management',
            nosql: 'NoSQL databases',
        },
        footer: {
            title: "Looking for a <span class='text-purple'>motivated developer</span> to join your team?",
            description:
                "I'm always open to new opportunities where I can learn, grow, and contribute. <br />If my profile caught your attention, I'd be glad to discuss how I can bring value to your company.",
            button: 'Get in touch',
        },
    },
    sk: {
        generic: {
            present: 'súčasnosť',
            yearsPlural: 'roky',
            beginner: 'Začiatočník',
            intermediate: 'Pokročilý',
            advanced: 'Expert',
            projectDesc: 'Popis projektu',
            usedTechnologies: 'Použité technológie',
            githubRepo: 'GitHub repozitár',
            liveDemo: 'Live demo',
            moreInfo: 'Ďalšie informácie čoskoro…',
        },
        hero: {
            title: 'Andrej Meliška — Softvérový vývojár',
            subtitle: 'Bc. na papieri, Dev. z vášne',
            description:
                'Softvérový vývojár, športový nadšenec a študent @ FIT ČVUT v Prahe, ktorý privádza nápady k životu pomocou kódu ✨',
            button: 'Pozri moje projekty',
        },
        navigation: {
            about: 'O mne',
            projects: 'Projekty',
            skills: 'Zručnosti',
            contact: 'Kontakt',
        },
        about: {
            softSkills: {
                name: 'Soft skills',
                description:
                    'Tímový hráč, ktorý má rád výzvy, komunikuje jasne, kriticky premýšľa, prichádza s novými nápadmi a vždy odovzdá prácu načas.',
            },
            workExperience: {
                header: 'Pracovné skúsenosti',
                position: 'Junior softvérový vývojár',
                company: 'innovis, s.r.o.',
                period: '2023 — súčasnosť',
            },
            education: {
                header: 'Vzdelanie',
                field: 'Webové inžinierstvo',
                entries: [
                    {
                        school: 'České vysoké učení technické v Prahe',
                        degree: 'Ing., FIT — Webové inžinierstvo',
                        period: '2025 — súčasnosť',
                    },
                    {
                        school: 'České vysoké učení technické v Prahe',
                        degree: 'Bc., FIT — Webové inžinierstvo',
                        period: '2021 — 2025',
                    },
                    {
                        school: 'Evanjelické gymnázium J. A. Komenského',
                        degree: 'Košice',
                        period: '2013 — 2021',
                    },
                ],
            },
            techStack: {
                header: 'Môj tech stack',
                description: 'Neustále sa snažím zlepšovať.',
            },
            likes: {
                header: 'Páči sa ti, čo zatiaľ vidíš?',
                description: 'Daj like',
                button: 'Daj like',
                thankYou: 'Ďakujem!',
            },
            domain: {
                description:
                    'Rád automatizujem pracovné postupy a píšem skripty v Pythone a Node.js, aby som zvýšil produktivitu a eliminoval opakované manuálne úlohy.',
            },
            linkedin: {
                title: 'Spoj sa so mnou na LinkedIne',
                visit: 'Navštív môj LinkedIn →',
            },
        },
        schoolWork: {
            title: 'Moje <span class="text-purple">školské</span> a <span class="text-purple">pracovné</span> projekty',
            archiveShow: 'Zobraziť staršie projekty',
            archiveHide: 'Skryť staršie projekty',
            archiveHint: 'Začiatky štúdia z prvých rokov na FIT',
        },
        programmingLanguages: {
            title: '<span class="text-purple">Programovacie jazyky</span> a zručnosti',
            experience: 'Skúsenosti',
        },
        projects: {
            project1: {
                title: 'Rezervačný systém učební',
                des: 'Rezervačný systém učební implementovaný v PHP s dôrazom na správu miestností a rezervácií.',
            },
            project2: {
                title: 'Bakalárska práca — Dekompozícia monolitického informačného systému',
                des: 'V tejto bakalárskej práci je analyzovaný monolitický informačný systém s modulárnou biznis logikou za účelom výberu vhodného modulu na dekompozíciu a jeho transformáciu na samostatne nasaditeľnú mikroslužbu. Mikroslužba je integrovaná späť do pôvodného systému prostredníctvom REST architektúry s overením používateľa cez JWT. Výsledkom je plne funkčná mikroslužba eDokumenty, ktorá zvyšuje flexibilitu, škálovateľnosť a rozšíriteľnosť systému a vytvára základ pre budúcu dekompozíciu ďalších modulov.',
            },
            project3: {
                title: 'Generátor závislostí v Java projekte',
                des: 'Nástroj, ktorý analyzuje zdrojový kód Java projektu, identifikuje závislosti pre každú triedu a generuje Mermaid diagram na vizualizáciu.',
            },
            project4: {
                title: 'Moderné dátové formáty v praxi',
                des: 'Projekt v rámci BI-MDF zameraný na modelovanie dát a ich reprezentáciu v rôznych formátoch (RDF, SPARQL, JSON, CSV, XML), vrátane dotazovania a transformácií.',
            },
            project5: {
                title: 'Big Data analytika',
                des: 'Semestrálna práca zameraná na spracovanie a analýzu Big Data s využitím MongoDB, Elasticsearch a Kibany. Na vybraných datasetoch som skúmal prepojenia a korelácie, ktoré som vizualizoval v Kibane.',
            },
            project6: {
                title: 'Stránka o mne',
                des: 'Stránka o mne z predmetu BI-ZWU, kde som sa naučil základné koncepty návrhu webového rozhrania z pohľadu používateľa a osvojil si HTML a CSS.',
            },
            project7: {
                title: 'The Drake',
                des: 'Implementácia stolnej hry The Drake (inšpirovanej hrou The Duke) pre dvoch hráčov v Jave — zjednodušená verzia s menším hracím plánom a prispôsobenými pravidlami.',
            },
            project8: {
                title: 'PHP mini-projekty',
                des: 'Súbor PHP projektov, na ktorých som si prakticky vyskúšal OOP, Composer, REST API, ORM, perzistenciu dát, scraping a unit testing.',
            },
            project9: {
                title: 'Aplikácia na odporúčanie produktov',
                des: 'Webová aplikácia odporúčajúca produkty používateľovi na základe kolaboratívneho filtrovania a podobnosti s inými používateľmi.',
            },
            project10: {
                title: 'Goodgame Empire Mini',
                des: 'Strategická budovateľská hra v C++, kde hráč súťaží proti AI. Cieľom je získať čo najviac budov alebo zdrojov.',
            },
            project11: {
                title: 'C++ projekty',
                des: 'Repozitár obsahujúci všetky moje C++ kódy — od domácich úloh z ProgTestu až po prípravu na skúšky.',
            },
            project12: {
                title: 'C projekty',
                des: 'Repozitár s mojimi C kódmi — od domácich úloh z ProgTestu až po menšie programy, ktoré mi pomohli osvojiť si základy programovania.',
            },
            project13: {
                title: 'Prague Office Menu App',
                des: 'Aplikácia na zisťovanie obedového menu, ktorá scrapuje a zobrazuje denné menu reštaurácií v okolí kancelárií v Prahe. Používatelia hlasujú za svoju obľúbenú reštauráciu, výsledky sa zdieľajú v reálnom čase cez Redis. Podpora viacerých kancelárií, každá chránená heslom. Postavené na Next.js 16, React 19, Tailwind 4, Vercel Blob, Upstash Redis, Leaflet a GitHub Actions/Vercel cron jobs.',
            },
        },
        programmingLanguagesSection: {
            frontend: 'Frontend vývoj',
            backend: 'Backend vývoj',
            backendMicroservices: 'Backend a mikroslužby',
            persistence: 'Perzistencia',
            containerization: 'Kontajnerizácia',
            dynamic: 'Dynamické web aplikácie',
            static: 'Statické webové stránky',
            scripting: 'Skriptovanie a automatizácia',
            versionControl: 'Správa verzií a projektov',
            nosql: 'NoSQL databázy',
        },
        footer: {
            title: "Hľadáte <span class='text-purple'>motivovaného vývojára</span> do svojho tímu?",
            description:
                'Vždy som otvorený novým príležitostiam, kde sa môžem učiť, rásť a prispievať svojimi schopnosťami. <br />Ak vás môj profil zaujal, rád sa s vami spojím a porozprávame sa, ako môžem priniesť hodnotu vašej spoločnosti.',
            button: 'Kontaktujte ma',
        },
    },
} as const;
