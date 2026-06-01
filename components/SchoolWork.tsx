'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { FaChevronDown } from 'react-icons/fa6';

import { schoolWork } from '@/data';
import { useLanguage } from '@/contexts/LanguageContext';
import ProjectCard from './ui/ProjectCard';
import { cn } from '@/lib/utils';

const SchoolWork = () => {
    const { t } = useLanguage();
    const items = schoolWork(t);
    const main = items.filter(item => !item.archived);
    const archived = items.filter(item => item.archived);
    const [showArchive, setShowArchive] = useState(false);

    return (
        <section className='py-20' id='projects'>
            <h2
                className='heading'
                dangerouslySetInnerHTML={{ __html: t('schoolWork.title') }}
            />
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10 px-4'>
                {main.map(item => (
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

            {archived.length > 0 && (
                <div className='mt-16 px-4'>
                    <div className='flex flex-col items-center gap-2'>
                        <button
                            type='button'
                            onClick={() => setShowArchive(v => !v)}
                            aria-expanded={showArchive}
                            className='group inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 text-white-100 hover:bg-purple/10 hover:border-purple/30 hover:text-purple transition-all duration-200 text-sm font-medium'
                        >
                            {showArchive
                                ? t('schoolWork.archiveHide')
                                : t('schoolWork.archiveShow')}
                            <FaChevronDown
                                className={cn(
                                    'transition-transform duration-300',
                                    showArchive && 'rotate-180'
                                )}
                            />
                        </button>
                        <p className='text-xs text-white-100/60'>
                            {t('schoolWork.archiveHint')}
                        </p>
                    </div>

                    <AnimatePresence initial={false}>
                        {showArchive && (
                            <motion.div
                                key='archive'
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.35, ease: 'easeOut' }}
                                className='overflow-hidden'
                            >
                                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10 opacity-90'>
                                    {archived.map(item => (
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
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            )}
        </section>
    );
};

export default SchoolWork;
