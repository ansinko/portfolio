'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { AnimatePresence, motion } from 'motion/react';
import { cn } from '@/lib/utils';

export interface ShowcaseSlide {
    src: string;
    label: string;
}

interface Props {
    slides: ShowcaseSlide[];
    onSlideClick?: (index: number) => void;
    autoIntervalMs?: number;
    domain?: string;
    className?: string;
}

const BrowserShowcase = ({
    slides,
    onSlideClick,
    autoIntervalMs = 4000,
    domain = 'steward.app',
    className,
}: Props) => {
    const [active, setActive] = useState(0);
    const [paused, setPaused] = useState(false);

    useEffect(() => {
        if (paused || slides.length <= 1) return;
        const id = window.setInterval(
            () => setActive(i => (i + 1) % slides.length),
            autoIntervalMs
        );
        return () => window.clearInterval(id);
    }, [paused, slides.length, autoIntervalMs]);

    const current = slides[active];

    return (
        <div
            className={cn('flex flex-col gap-4', className)}
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
        >
            {/* Browser frame */}
            <div className='relative overflow-hidden rounded-2xl border border-white/10 bg-[#0a0c1f] shadow-[0_30px_80px_-30px_rgba(0,0,0,0.7)]'>
                {/* Title bar */}
                <div className='flex items-center gap-2 px-4 py-3 border-b border-white/10 bg-gradient-to-b from-[#10132E] to-[#0a0c1f]'>
                    <span className='w-3 h-3 rounded-full bg-[#ff5f57]' />
                    <span className='w-3 h-3 rounded-full bg-[#febc2e]' />
                    <span className='w-3 h-3 rounded-full bg-[#28c840]' />
                    <div className='flex-1 flex justify-center'>
                        <span className='inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white/5 border border-white/5 text-white-100/60 text-xs font-mono'>
                            <span className='w-1 h-1 rounded-full bg-emerald-400' />
                            {domain}
                            {current && (
                                <span className='text-white-100/40'>
                                    / {current.label}
                                </span>
                            )}
                        </span>
                    </div>
                    <span className='w-3 h-3' />
                    <span className='w-3 h-3' />
                    <span className='w-3 h-3' />
                </div>

                {/* Screenshot area */}
                <button
                    type='button'
                    onClick={() => onSlideClick?.(active)}
                    className='block w-full relative aspect-[2436/930] cursor-zoom-in group bg-[#0a0c1f]'
                    aria-label={current?.label}
                >
                    <AnimatePresence mode='wait'>
                        <motion.div
                            key={current?.src}
                            initial={{ opacity: 0, scale: 1.02 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.98 }}
                            transition={{ duration: 0.45, ease: 'easeOut' }}
                            className='absolute inset-0'
                        >
                            {current && (
                                <Image
                                    src={current.src}
                                    alt={current.label}
                                    fill
                                    quality={95}
                                    sizes='(min-width: 1280px) 1200px, (min-width: 1024px) 50vw, 100vw'
                                    className='object-contain'
                                    priority={active === 0}
                                />
                            )}
                        </motion.div>
                    </AnimatePresence>

                    {/* Hover hint */}
                    <div className='absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4'>
                        <span className='inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/70 backdrop-blur text-white text-xs font-medium'>
                            <svg
                                width='12'
                                height='12'
                                viewBox='0 0 24 24'
                                fill='none'
                                stroke='currentColor'
                                strokeWidth='2'
                                strokeLinecap='round'
                                strokeLinejoin='round'
                            >
                                <circle cx='11' cy='11' r='8' />
                                <path d='m21 21-4.3-4.3' />
                                <path d='M11 8v6' />
                                <path d='M8 11h6' />
                            </svg>
                            View
                        </span>
                    </div>
                </button>

                {/* Progress bar */}
                <div className='absolute bottom-0 left-0 right-0 h-0.5 bg-white/5'>
                    {!paused && slides.length > 1 && (
                        <motion.div
                            key={`${active}-progress`}
                            initial={{ width: '0%' }}
                            animate={{ width: '100%' }}
                            transition={{
                                duration: autoIntervalMs / 1000,
                                ease: 'linear',
                            }}
                            className='h-full bg-gradient-to-r from-purple to-blue-500'
                        />
                    )}
                </div>
            </div>

            {/* Thumbnail strip */}
            <div className='flex gap-2 overflow-x-auto pb-1 -mx-1 px-1 scrollbar-thin'>
                {slides.map((slide, i) => (
                    <button
                        key={slide.src}
                        type='button'
                        onClick={() => setActive(i)}
                        aria-label={slide.label}
                        aria-current={i === active}
                        className={cn(
                            'flex-shrink-0 relative w-20 h-14 rounded-lg overflow-hidden border-2 transition-all duration-200',
                            i === active
                                ? 'border-purple shadow-[0_0_0_3px_rgba(203,172,249,0.15)]'
                                : 'border-white/10 hover:border-white/30 opacity-60 hover:opacity-100'
                        )}
                    >
                        <Image
                            src={slide.src}
                            alt=''
                            fill
                            sizes='80px'
                            className='object-cover object-top'
                        />
                    </button>
                ))}
            </div>
        </div>
    );
};

export default BrowserShowcase;
