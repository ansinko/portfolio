'use client';

import { schoolWork } from '@/data';
import ProjectCard from './ui/ProjectCard';
import { useLanguage } from '@/contexts/LanguageContext';

const SchoolWork = () => {
    const { t } = useLanguage();

    return (
        <div className='py-20' id='projects'>
            <h1
                className='heading'
                dangerouslySetInnerHTML={{ __html: t('schoolWork.title') }}
            />
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10 px-4'>
                {schoolWork(t).map(item => (
                    <ProjectCard
                        key={item.id}
                        title={item.title}
                        description={item.des}
                        category={item.category}
                        year={item.year}
                        technologies={item.iconLists}
                        githubLink={item.link}
                        demoLink={item.demo}
                        image={item.img}
                        className='h-full'
                    />
                ))}
            </div>
        </div>
    );
};

export default SchoolWork;
