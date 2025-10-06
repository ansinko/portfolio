'use client';

import Footer from '@/components/Footer';
import Grid from '@/components/Grid';
import Hero from '@/components/Hero';
import ProgrammingLanguages from '@/components/ProgrammingLanguages';
import SchoolWork from '@/components/SchoolWork';
import { FloatingNav } from '@/components/ui/FloatingNav';
import { getNavItems } from '@/data';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Home() {
    const { t } = useLanguage();

    return (
        <main
            className='relative bg-black-100 flex justify-center items-center
    flex-col overflow-hidden mx-auto sm:px-10 px-5'
        >
            <div className='max-w-7xl w-full'>
                <FloatingNav navItems={getNavItems(t)} />
                <Hero />
                <Grid />
                {/* <RecentProjects /> */}
                <SchoolWork />
                <ProgrammingLanguages />
                <Footer />
            </div>
        </main>
    );
}
