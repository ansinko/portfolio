'use client';

import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { FaHeart } from 'react-icons/fa6';
import Lottie from 'react-lottie';
import Image from 'next/image';

import { cn } from '@/lib/utils';
import type { T } from '@/data/translations';
import { useLanguage } from '@/contexts/LanguageContext';
import { Meteors } from './Meteors';
import { BackgroundGradientAnimation } from './GradientBg';
import GridGlobe from './GridGlobe';
import MagicButton from './MagicButton';
import animationData from '@/data/hearts-feedback.json';

interface EducationEntry {
    school: string;
    degree: string;
    period: string;
}

const CARD_BG: React.CSSProperties = {
    backgroundImage:
        'linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)',
};

const TECH_LEFT = ['ReactJS', 'NextJS', 'Angular'];
const TECH_RIGHT = ['Java', 'MySQL', 'Python'];

export const BentoGrid = ({
    className,
    children,
}: {
    className?: string;
    children?: React.ReactNode;
}) => (
    <div
        className={cn(
            'grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto',
            className
        )}
    >
        {children}
    </div>
);

interface BentoGridItemProps {
    className?: string;
    id: number;
    title?: string | React.ReactNode;
    description?: string | React.ReactNode;
    img?: string;
    imgClassName?: string;
    titleClassName?: string;
    spareImg?: string;
    link?: string;
    t: T;
}

export const BentoGridItem = ({
    className,
    id,
    title,
    description,
    img,
    imgClassName,
    titleClassName,
    spareImg,
    link,
    t,
}: BentoGridItemProps) => {
    const { tx } = useLanguage();
    const [liked, setLiked] = useState(false);
    const [mounted, setMounted] = useState(false);

    useEffect(() => setMounted(true), []);

    const lottieOptions = {
        loop: false,
        autoplay: true,
        animationData,
        rendererSettings: { preserveAspectRatio: 'xMidYMid meet' },
    };

    const educationEntries = tx<EducationEntry[]>('about.education.entries');

    return (
        <div
            className={cn(
                'row-span-1 relative overflow-hidden rounded-3xl border border-white/[0.1] group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4',
                className
            )}
            style={CARD_BG}
        >
            <div className={cn('h-full', id === 6 && 'flex justify-center')}>
                <div className='w-full h-full absolute'>
                    {img && (
                        <Image
                            src={img}
                            alt=''
                            width={100}
                            height={100}
                            className={cn(
                                imgClassName,
                                'object-cover object-center'
                            )}
                        />
                    )}
                </div>

                {spareImg && (
                    <div
                        className={cn(
                            'absolute right-0 -bottom-5',
                            id === 5 && 'w-full opacity-80'
                        )}
                    >
                        <Image
                            src={spareImg}
                            alt=''
                            width={100}
                            height={100}
                            className='object-cover object-center w-full h-full'
                        />
                    </div>
                )}

                {id === 6 && (
                    <BackgroundGradientAnimation>
                        <div className='absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl' />
                    </BackgroundGradientAnimation>
                )}

                <div
                    className={cn(
                        titleClassName,
                        'group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10'
                    )}
                >
                    <div className='font-sans font-extralight md:max-w-32 md:text-xs lg:text-base text-sm text-[#C1C2D3] z-10'>
                        {description}
                    </div>
                    <div className='font-sans text-lg lg:text-2xl max-w-96 font-bold z-10'>
                        {title}
                    </div>

                    {id === 4 && educationEntries && (
                        <div className='flex flex-col space-y-3 font-sans text-sm lg:text-base max-w-80 z-10 mt-4'>
                            {educationEntries.map(entry => (
                                <div
                                    key={`${entry.school}-${entry.period}`}
                                    className='bg-[#10132E]/50 rounded-lg p-3 border border-white/10'
                                >
                                    <div className='font-bold text-white mb-1'>
                                        {entry.school}
                                    </div>
                                    <div className='text-[#C1C2D3] text-xs'>
                                        {entry.degree}
                                    </div>
                                    <div className='text-blue-400 text-xs'>
                                        {entry.period}
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}

                    {id === 3 && (
                        <div className='flex gap-1 lg:gap-5 w-fit absolute -right-3 lg:-right-2'>
                            <div className='flex flex-col gap-3 md:gap-3 lg:gap-8'>
                                {TECH_LEFT.map(item => (
                                    <span
                                        key={item}
                                        className='lg:py-4 lg:px-3 py-2 px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132E]'
                                    >
                                        {item}
                                    </span>
                                ))}
                                <span className='lg:py-4 lg:px-3 py-4 px-3 rounded-lg text-center bg-[#10132E]' />
                            </div>
                            <div className='flex flex-col gap-3 md:gap-3 lg:gap-8'>
                                <span className='lg:py-4 lg:px-3 py-4 px-3 rounded-lg text-center bg-[#10132E]' />
                                {TECH_RIGHT.map(item => (
                                    <span
                                        key={item}
                                        className='lg:py-4 lg:px-3 py-2 px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132E]'
                                    >
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </div>
                    )}

                    {id === 7 && (
                        <a
                            href={link}
                            target='_blank'
                            rel='noopener noreferrer'
                            className='cursor-pointer'
                        >
                            <div className='text-blue-400 hover:text-blue-300 transition-colors duration-200 underline pt-4'>
                                {t('about.linkedin.visit')}
                            </div>
                            <GridGlobe />
                        </a>
                    )}

                    {id === 6 && (
                        <div className='mt-2 relative'>
                            <MagicButton
                                title={
                                    liked
                                        ? t('about.likes.thankYou')
                                        : t('about.likes.button')
                                }
                                icon={<FaHeart />}
                                position='left'
                                handleClick={() => !liked && setLiked(true)}
                                otherClasses='!bg-[#161A31]'
                            />
                            {liked &&
                                mounted &&
                                createPortal(
                                    <div className='pointer-events-none fixed inset-0 z-[6000] flex items-center justify-center'>
                                        <Lottie
                                            options={lottieOptions}
                                            height={Math.min(
                                                typeof window !== 'undefined'
                                                    ? window.innerHeight
                                                    : 800,
                                                900
                                            )}
                                            width={Math.min(
                                                typeof window !== 'undefined'
                                                    ? window.innerWidth
                                                    : 1200,
                                                1600
                                            )}
                                            eventListeners={[
                                                {
                                                    eventName: 'complete',
                                                    callback: () =>
                                                        setLiked(false),
                                                },
                                            ]}
                                        />
                                    </div>,
                                    document.body
                                )}
                        </div>
                    )}

                    {id === 2 && (
                        <div className='flex flex-col space-y-4 font-sans text-sm lg:text-base max-w-80 z-10 mt-4'>
                            <div className='bg-[#10132E]/50 rounded-lg p-3 border border-white/10'>
                                <div className='font-bold text-white mb-1'>
                                    {t('about.workExperience.position')}
                                </div>
                                <div className='text-[#C1C2D3] text-xs'>
                                    {t('about.workExperience.company')}
                                </div>
                                <div className='text-blue-400 text-xs'>
                                    {t('about.workExperience.period')}
                                </div>
                            </div>
                            <Meteors number={20} />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};
