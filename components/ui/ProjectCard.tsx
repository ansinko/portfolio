'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub } from 'react-icons/fa6';
import { FaExternalLinkAlt, FaTimes } from 'react-icons/fa';
import { cn } from '@/lib/utils';
import { useState, useEffect } from 'react';

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
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleCardClick = () => {
        setIsModalOpen(true);
        // Hide floating navbar when modal opens
        const floatingNav = document.querySelector('[data-floating-nav]');
        if (floatingNav) {
            floatingNav.style.visibility = 'hidden';
        }
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        // Show floating navbar when modal closes
        const floatingNav = document.querySelector('[data-floating-nav]');
        if (floatingNav) {
            floatingNav.style.visibility = 'visible';
        }
    };

    // Handle ESC key to close modal
    useEffect(() => {
        const handleEscKey = (event: KeyboardEvent) => {
            if (event.key === 'Escape' && isModalOpen) {
                handleCloseModal();
            }
        };

        if (isModalOpen) {
            document.addEventListener('keydown', handleEscKey);
        }

        return () => {
            document.removeEventListener('keydown', handleEscKey);
        };
    }, [isModalOpen]);

    return (
        <>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className={cn('group relative cursor-pointer', className)}
                onClick={handleCardClick}
            >
                {/* Background Glow Effect */}
                <div className='absolute -inset-1 bg-gradient-to-r from-purple to-blue-500 rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200'></div>

                {/* Main Card */}
                <div className='relative bg-black-100 rounded-3xl border border-white/[0.1] p-6 h-full flex flex-col'>
                    {/* Image Section */}
                    <div className='relative my-6 overflow-hidden rounded-2xl'>
                        <div
                            className='relative w-full h-48 overflow-hidden rounded-2xl'
                            style={{ backgroundColor: '#13162D' }}
                        >
                            <img
                                src={image}
                                alt={title}
                                className='w-full h-full object-cover'
                            />
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

                    {/* Content Section */}
                    <div className='flex-1 flex flex-col'>
                        {/* Title */}
                        <h3 className='text-xl font-bold text-white mb-3 line-clamp-2 group-hover:text-purple transition-colors'>
                            {title}
                        </h3>

                        {/* Description */}
                        <p
                            className='text-white-100 text-sm leading-relaxed mb-4 flex-1 line-clamp-4'
                            style={{ color: '#BEC1DD' }}
                        >
                            {description}
                        </p>

                        {/* Technologies */}

                        <div className='flex items-center'>
                            {technologies.map((icon, index) => (
                                <div
                                    key={index}
                                    className='border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center'
                                    style={{
                                        transform: `translateX(-${5 * index + 2}px)`,
                                    }}
                                >
                                    <img
                                        src={icon}
                                        alt='icon5'
                                        className='p-2'
                                    />
                                </div>
                            ))}
                        </div>

                        {/* Action Buttons */}
                        <div className='flex gap-3 pt-4 border-t border-white/10'>
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
                                    More information soon...
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

            {/* Modal Dialog */}
            <AnimatePresence>
                {isModalOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className='fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4'
                        onClick={handleCloseModal}
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            transition={{ duration: 0.3 }}
                            className='relative bg-black-100 rounded-3xl border border-white/[0.1] max-w-2xl w-full max-h-[90vh] overflow-y-auto'
                            onClick={e => e.stopPropagation()}
                        >
                            {/* Modal Content */}
                            <div className='p-6'>
                                {/* Top Section - Tags and Close Button */}
                                <div className='flex justify-between items-start mb-6'>
                                    {/* Tags */}
                                    <div className='flex gap-2'>
                                        <span className='px-3 py-1 rounded-full bg-purple/20 text-purple border border-purple/30 text-sm font-medium'>
                                            {category}
                                        </span>
                                        <span className='px-2 py-1 rounded-full bg-white/10 text-white-100 border border-white/20 text-sm'>
                                            {year}
                                        </span>
                                    </div>

                                    {/* Close Button */}
                                    <button
                                        onClick={handleCloseModal}
                                        className='p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors'
                                    >
                                        <FaTimes className='w-5 h-5 text-white-100' />
                                    </button>
                                </div>

                                {/* Image Section */}
                                <div className='relative mb-6 overflow-hidden rounded-2xl'>
                                    <div
                                        className='relative w-full h-64 overflow-hidden rounded-2xl'
                                        style={{ backgroundColor: '#13162D' }}
                                    >
                                        <img
                                            src={image}
                                            alt={title}
                                            className='w-full h-full object-cover'
                                        />
                                    </div>
                                </div>

                                {/* Content */}
                                <div className='space-y-6'>
                                    {/* Title */}
                                    <h2 className='text-2xl font-bold text-white group-hover:text-purple transition-colors'>
                                        {title}
                                    </h2>

                                    {/* Full Description */}
                                    <div className='space-y-2'>
                                        <h3 className='text-lg font-semibold text-purple'>
                                            Popis projektu
                                        </h3>
                                        <p
                                            className='text-white-100 leading-relaxed'
                                            style={{ color: '#BEC1DD' }}
                                        >
                                            {description}
                                        </p>
                                    </div>

                                    {/* Technologies */}
                                    <div className='space-y-3'>
                                        <h3 className='text-lg font-semibold text-purple'>
                                            Použité technológie
                                        </h3>
                                        <div className='flex flex-wrap gap-3'>
                                            {technologies.map((icon, index) => (
                                                <div
                                                    key={index}
                                                    className='border border-white/[.2] rounded-full bg-black w-12 h-12 flex justify-center items-center'
                                                >
                                                    <img
                                                        src={icon}
                                                        alt={`tech-${index}`}
                                                        className='p-2'
                                                    />
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Action Buttons */}
                                    <div className='flex gap-4 pt-4 border-t border-white/10'>
                                        {githubLink && (
                                            <a
                                                href={githubLink}
                                                target='_blank'
                                                rel='noopener noreferrer'
                                                className='flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white/5 border border-white/10 text-white-100 hover:bg-purple/20 hover:border-purple/30 hover:text-purple transition-all duration-200 font-medium'
                                            >
                                                <FaGithub size={16} />
                                                GitHub Repository
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
                                                Live Demo
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
