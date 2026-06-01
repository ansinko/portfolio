'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { FaGithub } from 'react-icons/fa6';
import { FaExternalLinkAlt, FaTimes } from 'react-icons/fa';
import Image from 'next/image';

import { cn } from '@/lib/utils';
import { useLanguage } from '@/contexts/LanguageContext';
import TechIconStack from './TechIconStack';

interface ProjectCardProps {
    title: string;
    description: string;
    category: string;
    year: string;
    technologies: string[];
    githubLink?: string;
    demoLink?: string;
    image?: string;
    className?: string;
}

const setNavVisibility = (visible: boolean) => {
    const nav = document.querySelector<HTMLElement>('[data-floating-nav]');
    if (nav) nav.style.visibility = visible ? 'visible' : 'hidden';
};

const ProjectCard = ({
    title,
    description,
    category,
    year,
    technologies,
    githubLink,
    demoLink,
    image,
    className,
}: ProjectCardProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const { t } = useLanguage();

    const open = () => {
        setIsOpen(true);
        setNavVisibility(false);
    };

    const close = () => {
        setIsOpen(false);
        setNavVisibility(true);
    };

    useEffect(() => {
        if (!isOpen) return;
        const onKey = (e: KeyboardEvent) => {
            if (e.key === 'Escape') close();
        };
        document.addEventListener('keydown', onKey);
        return () => document.removeEventListener('keydown', onKey);
    }, [isOpen]);

    return (
        <>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5 }}
                className={cn('group relative cursor-pointer', className)}
                onClick={open}
            >
                <div className='absolute -inset-1 bg-gradient-to-r from-purple to-blue-500 rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-700' />

                <div className='relative bg-black-100 rounded-3xl border border-white/[0.1] p-6 h-full flex flex-col'>
                    <div className='relative my-6 overflow-hidden rounded-2xl'>
                        <div
                            className='relative w-full h-48 overflow-hidden rounded-2xl bg-[#13162D]'
                        >
                            {image && (
                                <Image
                                    src={image}
                                    alt={title}
                                    fill
                                    sizes='(min-width: 1024px) 400px, (min-width: 768px) 50vw, 100vw'
                                    className='object-cover transition-transform duration-500 group-hover:scale-105'
                                />
                            )}
                        </div>
                    </div>

                    <div className='absolute top-3 left-5 flex gap-2'>
                        <span className='px-3 py-1 rounded-full bg-purple/20 text-purple border border-purple/30 text-xs font-medium'>
                            {category}
                        </span>
                        <span className='px-2 py-1 rounded-full bg-white/10 text-white-100 border border-white/20 text-xs'>
                            {year}
                        </span>
                    </div>

                    <div className='flex-1 flex flex-col'>
                        <h3 className='text-xl font-bold text-white mb-3 line-clamp-2 group-hover:text-purple transition-colors'>
                            {title}
                        </h3>

                        <p className='text-[#BEC1DD] text-sm leading-relaxed mb-4 flex-1 line-clamp-4'>
                            {description}
                        </p>

                        <TechIconStack icons={technologies} />

                        <div className='flex gap-3 pt-4 mt-2 border-t border-white/10'>
                            {githubLink ? (
                                <a
                                    href={githubLink}
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    className='flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-white-100 hover:bg-purple/20 hover:border-purple/30 hover:text-purple transition-all duration-200 flex-1 text-sm font-medium'
                                    onClick={e => e.stopPropagation()}
                                >
                                    <FaGithub size={14} />
                                    GitHub
                                </a>
                            ) : (
                                <div className='flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-white-100 flex-1 text-sm font-medium'>
                                    {t('generic.moreInfo')}
                                </div>
                            )}

                            {demoLink && (
                                <a
                                    href={demoLink}
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    className='flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-blue-500/20 border border-blue-500/30 text-blue-400 hover:bg-blue-500/30 hover:border-blue-500/50 transition-all duration-200 flex-1 text-sm font-medium'
                                    onClick={e => e.stopPropagation()}
                                >
                                    <FaExternalLinkAlt size={12} />
                                    Demo
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            </motion.div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className='fixed inset-0 bg-black/80 backdrop-blur-sm z-[5500] flex items-center justify-center p-4'
                        onClick={close}
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            transition={{ duration: 0.3 }}
                            className='relative bg-black-100 rounded-3xl border border-white/[0.1] max-w-2xl w-full max-h-[90vh] overflow-y-auto'
                            onClick={e => e.stopPropagation()}
                        >
                            <div className='p-6'>
                                <div className='flex justify-between items-start mb-6'>
                                    <div className='flex gap-2'>
                                        <span className='px-3 py-1 rounded-full bg-purple/20 text-purple border border-purple/30 text-sm font-medium'>
                                            {category}
                                        </span>
                                        <span className='px-2 py-1 rounded-full bg-white/10 text-white-100 border border-white/20 text-sm'>
                                            {year}
                                        </span>
                                    </div>
                                    <button
                                        type='button'
                                        onClick={close}
                                        aria-label='Close'
                                        className='p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors'
                                    >
                                        <FaTimes className='w-5 h-5 text-white-100' />
                                    </button>
                                </div>

                                {image && (
                                    <div className='relative w-full h-64 overflow-hidden rounded-2xl bg-[#13162D] mb-6'>
                                        <Image
                                            src={image}
                                            alt={title}
                                            fill
                                            sizes='(min-width: 768px) 600px, 100vw'
                                            className='object-cover'
                                        />
                                    </div>
                                )}

                                <div className='space-y-6'>
                                    <h2 className='text-2xl font-bold text-white'>
                                        {title}
                                    </h2>

                                    <div className='space-y-2'>
                                        <h3 className='text-lg font-semibold text-purple'>
                                            {t('generic.projectDesc')}
                                        </h3>
                                        <p className='text-[#BEC1DD] leading-relaxed'>
                                            {description}
                                        </p>
                                    </div>

                                    <div className='space-y-3'>
                                        <h3 className='text-lg font-semibold text-purple'>
                                            {t('generic.usedTechnologies')}
                                        </h3>
                                        <TechIconStack
                                            icons={technologies}
                                            size='lg'
                                            overlap={false}
                                            className='flex-wrap gap-3'
                                        />
                                    </div>

                                    <div className='flex flex-col sm:flex-row gap-4 pt-4 border-t border-white/10'>
                                        {githubLink && (
                                            <a
                                                href={githubLink}
                                                target='_blank'
                                                rel='noopener noreferrer'
                                                className='flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white/5 border border-white/10 text-white-100 hover:bg-purple/20 hover:border-purple/30 hover:text-purple transition-all duration-200 font-medium'
                                            >
                                                <FaGithub size={16} />
                                                {t('generic.githubRepo')}
                                            </a>
                                        )}
                                        {demoLink && (
                                            <a
                                                href={demoLink}
                                                target='_blank'
                                                rel='noopener noreferrer'
                                                className='flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-blue-500/20 border border-blue-500/30 text-blue-400 hover:bg-blue-500/30 hover:border-blue-500/50 transition-all duration-200 font-medium'
                                            >
                                                <FaExternalLinkAlt size={14} />
                                                {t('generic.liveDemo')}
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default ProjectCard;
