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
                'Software developer, sports enthusiast and FIT CTU graduate in Prague who brings ideas to life with code ✨',
            button: 'See my projects',
        },
        navigation: {
            about: 'About',
            projects: 'Projects',
            steward: 'Steward',
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
                    "Actively exploring AI, vibe coding and modern dev workflows — and shipping my own SaaS and side projects on the side.",
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
        steward: {
            tag: 'Live · in beta',
            title: '<span class="text-purple">Steward</span> — my personal OS',
            tagline:
                'What started as an Excel expense tracker is now my personal operating system, running daily at steward.ixy.sk — finance and Slovak taxes, habits, health and sport straight from a Garmin watch, AI sleep insights and Bible reading, all in one place.',
            aiCalloutTitle: 'AI-driven workflow',
            aiCalloutBody:
                'Built solo with Claude Code as my pair-programmer — every feature shipped, every bug squashed, every refactor reviewed together. A real playground for vibe coding and modern AI dev workflows.',
            featuresTitle: 'What it does today',
            stackTitle: 'Built with',
            galleryTitle: 'See the app up close',
            galleryHint: 'Click any screen to open',
            galleryClose: 'Close',
            galleryPrev: 'Previous',
            galleryNext: 'Next',
            liveBadge: 'Live with beta testers',
            openButton: 'Open steward.ixy.sk',
            screens: {
                dashboard: 'Dashboard',
                finance: 'Finance',
                budget: 'Monthly budget',
                planner: 'Monthly planner',
                taxes: 'Taxes & levies',
                habits: 'Habits',
                health: 'Health · Garmin',
                sport: 'Sport · Garmin',
                review: 'Check-in review',
                word: 'Bible reading plan',
            },
            stats: {
                modules: 'Modules',
                solo: 'Solo build',
                ai: 'AI-paired',
                daily: 'Daily driver',
            },
            features: {
                dashboard:
                    'Customisable dashboard — pick your widgets: cash flow, check-in, habits, sleep, body battery, sport, trips and the daily verse',
                finance:
                    'Finance — expenses, income, accounts and budgets, CZK → EUR at the rate of the expense date, eKasa receipts from a QR code, invoices',
                taxes:
                    'Monthly planner of fixed payments that never rewrites past months, plus a Slovak sole-trader (SZČO) tax and health / social insurance calculator',
                habits:
                    'Habits with streaks, daily check-in (mood / energy / stress / focus) and a weekly-to-quarterly review',
                health:
                    'Health from a Garmin watch — sleep stages and score, body battery, HRV, resting heart rate, steps and stress',
                sport:
                    'Sport synced from Garmin — weekly and monthly totals, 12-week trend, breakdown by activity; habits like "run" tick themselves after a workout',
                insights:
                    'AI insights on what drives my sleep — bedtime, training, steps, stress and the gap between the last meal and sleep',
                bible: 'Bible reading plans, Spurgeon\'s Morning & Evening devotional and a daily verse',
                integrations:
                    'MCP server so Claude can read and log my data, plus Google Calendar, Spotify, NHL and Prague transit widgets',
                auth: 'Multi-user and mobile-ready — Google or email sign-in, onboarding for new testers and an in-app "report a problem" button',
            },
        },
        programmingLanguages: {
            title: '<span class="text-purple">Programming Languages</span> and Skills',
            experience: 'Experience',
            tier: {
                coreTitle: 'Core stack',
                coreDesc: 'Tools I reach for daily at work and in personal projects.',
                comfortableTitle: 'Comfortable with',
                comfortableDesc: 'Solid working knowledge — used regularly in projects.',
                familiarTitle: 'Familiar / Learning',
                familiarDesc: 'Used occasionally or actively learning more.',
            },
            context: {
                workInnovis: 'Daily at innovis',
                sideProjects: 'Side projects',
                coursework: 'University coursework',
                learning: 'Actively learning',
            },
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
            intermediate: 'Stredne pokročilý',
            advanced: 'Pokročilý',
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
                'Softvérový vývojár, športový nadšenec a absolvent FIT ČVUT v Prahe, ktorý privádza nápady k životu pomocou kódu ✨',
            button: 'Pozri moje projekty',
        },
        navigation: {
            about: 'O mne',
            projects: 'Projekty',
            steward: 'Steward',
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
                    'Aktívne sa zaujímam o AI, vibe coding a moderné dev workflowy — popri tom si staviam vlastný SaaS a rôzne side projekty.',
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
        steward: {
            tag: 'Beží naživo · beta',
            title: '<span class="text-purple">Steward</span> — môj osobný OS',
            tagline:
                'Z pôvodného Excel trackera výdavkov je dnes môj osobný operačný systém, ktorý denne beží na steward.ixy.sk — financie a dane, návyky, zdravie a šport priamo z Garmin hodiniek, AI insighty o spánku a Biblia, všetko na jednom mieste.',
            aiCalloutTitle: 'AI-driven workflow',
            aiCalloutBody:
                'Staviam sám s Claude Code ako pair-programmerom — každý nový feature, fix aj refactor riešený spolu. Reálne pieskovisko pre vibe coding a moderné AI dev workflowy.',
            featuresTitle: 'Čo už vie',
            stackTitle: 'Postavené na',
            galleryTitle: 'Pozri si aplikáciu zblízka',
            galleryHint: 'Klikni na ľubovoľnú obrazovku pre otvorenie',
            galleryClose: 'Zavrieť',
            galleryPrev: 'Predchádzajúci',
            galleryNext: 'Ďalší',
            liveBadge: 'Naživo s beta testermi',
            openButton: 'Otvoriť steward.ixy.sk',
            screens: {
                dashboard: 'Dashboard',
                finance: 'Financie',
                budget: 'Mesačný budget',
                planner: 'Mesačný plánovač',
                taxes: 'Dane a odvody',
                habits: 'Návyky',
                health: 'Zdravie · Garmin',
                sport: 'Šport · Garmin',
                review: 'Review check-inov',
                word: 'Biblický plán',
            },
            stats: {
                modules: 'Modulov',
                solo: 'Solo build',
                ai: 'AI pair-programmed',
                daily: 'Daily driver',
            },
            features: {
                dashboard:
                    'Dashboard na mieru — vyberieš si widgety: cashflow, check-in, návyky, spánok, body battery, šport, cesty a verš dňa',
                finance:
                    'Financie — výdavky, príjmy, účty a budget, koruny prepočítané kurzom ku dňu výdavku, bločky z eKasy cez QR, faktúry',
                taxes:
                    'Mesačný plánovač povinných platieb, ktorý neprepisuje históriu, a kalkulačka dane, zdravotného a sociálneho poistenia pre SZČO',
                habits:
                    'Návyky so streakmi, denný check-in (nálada / energia / stres / focus) a review za týždeň až štvrťrok',
                health:
                    'Zdravie z Garmin hodiniek — fázy a skóre spánku, body battery, HRV, pokojový tep, kroky a stres',
                sport:
                    'Šport z Garminu — týždeň a mesiac, 12-týždňový trend, rozpad podľa druhu; návyk „beh“ sa po tréningu odškrtne sám',
                insights:
                    'AI insighty o tom, čo ovplyvňuje môj spánok — čas zaspatia, tréning, kroky, stres a odstup posledného jedla',
                bible: 'Biblické čítacie plány, Spurgeonov ranný a večerný devotional a verš dňa',
                integrations:
                    'MCP server, cez ktorý Claude číta a zapisuje moje dáta, plus Google kalendár, Spotify, NHL a PID odjazdy',
                auth: 'Multi-user a mobilná verzia — prihlásenie cez Google aj e-mail, onboarding pre testerov a tlačidlo „Nahlásiť problém“ priamo v appke',
            },
        },
        programmingLanguages: {
            title: '<span class="text-purple">Programovacie jazyky</span> a zručnosti',
            experience: 'Skúsenosti',
            tier: {
                coreTitle: 'Hlavný stack',
                coreDesc: 'Nástroje, ktoré používam denne v práci aj na vlastných projektoch.',
                comfortableTitle: 'Komfortne ovládam',
                comfortableDesc: 'Solídna pracovná znalosť — pravidelne používam v projektoch.',
                familiarTitle: 'Mám prehľad / Učím sa',
                familiarDesc: 'Občasne používam alebo sa aktívne učím.',
            },
            context: {
                workInnovis: 'Denne v innovis',
                sideProjects: 'Side projekty',
                coursework: 'Univerzitné kurzy',
                learning: 'Aktívne sa učím',
            },
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
