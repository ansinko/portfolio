'use client';

import { useCallback, useEffect, useState } from 'react';
import Image from 'next/image';
import { AnimatePresence, motion } from 'motion/react';
import {
    FaGithub,
    FaChartLine,
    FaWallet,
    FaListCheck,
    FaPersonRunning,
    FaBookBible,
    FaPlug,
    FaLock,
    FaWandMagicSparkles,
    FaChevronLeft,
    FaChevronRight,
    FaXmark,
} from 'react-icons/fa6';
import type { IconType } from 'react-icons';

import { useLanguage } from '@/contexts/LanguageContext';
import BrowserShowcase, {
    type ShowcaseSlide,
} from './ui/BrowserShowcase';

const STEWARD_REPO = 'https://github.com/ansinko/expense-tracker';

const FEATURES: { key: string; Icon: IconType }[] = [
    { key: 'dashboard', Icon: FaChartLine },
    { key: 'finance', Icon: FaWallet },
    { key: 'habits', Icon: FaListCheck },
    { key: 'sport', Icon: FaPersonRunning },
    { key: 'bible', Icon: FaBookBible },
    { key: 'integrations', Icon: FaPlug },
    { key: 'auth', Icon: FaLock },
];

interface Screen {
    src: string;
    labelKey: string;
}

const SCREENS: Screen[] = [
    { src: '/steward/screenshot-1.png', labelKey: 'dashboard' },
    { src: '/steward/screenshot-4.png', labelKey: 'sport' },
    { src: '/steward/screenshot-3.png', labelKey: 'habits' },
    { src: '/steward/screenshot-2.png', labelKey: 'finance' },
    { src: '/steward/screenshot-5.png', labelKey: 'spotify' },
    { src: '/steward/screenshot-6.png', labelKey: 'nhl' },
    { src: '/steward/screenshot-7.png', labelKey: 'dashboardCompact' },
];

const STACK = [
    { name: 'Next.js 16', icon: '/icons/nextjs/nextjs-original.svg' },
    { name: 'TypeScript', icon: '/icons/typescript/typescript-original.svg' },
    { name: 'Tailwind 4', icon: null },
    { name: 'PostgreSQL', icon: '/icons/postgresql/postgresql-original.svg' },
    { name: 'Prisma 7', icon: null },
    { name: 'Better Auth', icon: null },
    { name: 'Recharts', icon: null },
    { name: 'Docker', icon: '/icons/docker/docker-original.svg' },
];

const setNavVisibility = (visible: boolean) => {
    const nav = document.querySelector<HTMLElement>('[data-floating-nav]');
    if (nav) nav.style.visibility = visible ? 'visible' : 'hidden';
};

const Steward = () => {
    const { t } = useLanguage();
    const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

    const open = (i: number) => {
        setLightboxIndex(i);
        setNavVisibility(false);
    };
    const close = useCallback(() => {
        setLightboxIndex(null);
        setNavVisibility(true);
    }, []);
    const prev = useCallback(
        () =>
            setLightboxIndex(i =>
                i === null ? null : (i - 1 + SCREENS.length) % SCREENS.length
            ),
        []
    );
    const next = useCallback(
        () =>
            setLightboxIndex(i =>
                i === null ? null : (i + 1) % SCREENS.length
            ),
        []
    );

    useEffect(() => {
        if (lightboxIndex === null) return;
        const onKey = (e: KeyboardEvent) => {
            if (e.key === 'Escape') close();
            if (e.key === 'ArrowRight') next();
            if (e.key === 'ArrowLeft') prev();
        };
        document.addEventListener('keydown', onKey);
        return () => document.removeEventListener('keydown', onKey);
    }, [lightboxIndex, close, next, prev]);

    const slides: ShowcaseSlide[] = SCREENS.map(s => ({
        src: s.src,
        label: t(`steward.screens.${s.labelKey}`),
    }));

    return (
        <section className='py-20' id='steward'>
            <div className='max-w-6xl mx-auto px-4'>
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-50px' }}
                    transition={{ duration: 0.5 }}
                    className='flex flex-col items-center text-center'
                >
                    <span className='inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple/15 border border-purple/30 text-purple text-xs font-medium uppercase tracking-wider'>
                        <span className='relative flex h-2 w-2'>
                            <span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-purple opacity-75' />
                            <span className='relative inline-flex rounded-full h-2 w-2 bg-purple' />
                        </span>
                        {t('steward.tag')}
                    </span>
                    <h2
                        className='heading mt-6'
                        dangerouslySetInnerHTML={{
                            __html: t('steward.title'),
                        }}
                    />
                    <p className='text-white-100/80 text-base md:text-lg lg:text-xl mt-6 max-w-3xl leading-relaxed'>
                        {t('steward.tagline')}
                    </p>
                </motion.div>

                {/* Showcase — full width */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-50px' }}
                    transition={{ duration: 0.5 }}
                    className='mt-14 max-w-5xl mx-auto'
                >
                    <BrowserShowcase
                        slides={slides}
                        onSlideClick={open}
                        domain='steward.app'
                    />
                    <p className='text-center text-white-100/50 text-xs mt-3'>
                        {t('steward.galleryHint')}
                    </p>
                </motion.div>

                {/* Features — 2-col grid */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-50px' }}
                    transition={{ duration: 0.5 }}
                    className='mt-16'
                >
                    <h3 className='text-white font-semibold text-xl mb-5 px-1 text-center'>
                        {t('steward.featuresTitle')}
                    </h3>
                    <div className='grid md:grid-cols-2 gap-3'>
                        {FEATURES.map(({ key, Icon }) => (
                            <div
                                key={key}
                                className='flex items-start gap-4 p-4 rounded-2xl border border-white/[0.08] bg-[#0c0e23]/80 hover:border-purple/30 transition-colors'
                            >
                                <div className='flex-shrink-0 w-10 h-10 rounded-xl bg-purple/15 border border-purple/30 flex items-center justify-center text-purple'>
                                    <Icon size={18} />
                                </div>
                                <p className='text-white-100/90 text-sm md:text-base leading-relaxed pt-1.5'>
                                    {t(`steward.features.${key}`)}
                                </p>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* AI callout — full width below */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-50px' }}
                    transition={{ duration: 0.5 }}
                    className='mt-14 relative overflow-hidden rounded-3xl border border-purple/30 bg-gradient-to-br from-purple/15 via-[#10132E]/80 to-blue-500/10 p-8 md:p-10'
                >
                    <div className='absolute -top-20 -right-20 w-72 h-72 bg-purple/20 rounded-full blur-3xl pointer-events-none' />
                    <div className='relative flex flex-col md:flex-row items-start gap-5'>
                        <div className='flex-shrink-0 w-14 h-14 rounded-2xl bg-purple/20 border border-purple/40 flex items-center justify-center text-purple'>
                            <FaWandMagicSparkles size={24} />
                        </div>
                        <div>
                            <h3 className='text-white font-semibold text-xl md:text-2xl mb-3'>
                                {t('steward.aiCalloutTitle')}
                            </h3>
                            <p className='text-white-100/85 text-base md:text-lg leading-relaxed max-w-3xl'>
                                {t('steward.aiCalloutBody')}
                            </p>
                        </div>
                    </div>
                </motion.div>

                {/* Stack + CTA */}
                <div className='mt-14 flex flex-col items-center'>
                    <h3 className='text-white-100/70 text-sm uppercase tracking-widest mb-5'>
                        {t('steward.stackTitle')}
                    </h3>
                    <div className='flex flex-wrap justify-center gap-3 max-w-3xl'>
                        {STACK.map(item => (
                            <span
                                key={item.name}
                                className='inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0c0e23]/80 border border-white/10 text-white-100/90 text-sm hover:border-purple/40 transition-colors'
                            >
                                {item.icon && (
                                    <Image
                                        src={item.icon}
                                        alt=''
                                        width={18}
                                        height={18}
                                    />
                                )}
                                {item.name}
                            </span>
                        ))}
                    </div>

                    <div className='flex flex-col sm:flex-row items-center gap-4 mt-10'>
                        <a
                            href={STEWARD_REPO}
                            target='_blank'
                            rel='noopener noreferrer'
                            className='inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white/5 border border-white/10 text-white hover:bg-purple/20 hover:border-purple/30 hover:text-purple transition-all duration-200 font-medium'
                        >
                            <FaGithub size={18} />
                            {t('steward.githubButton')}
                        </a>
                        <span className='inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-blue-500/10 border border-blue-500/30 text-blue-300 text-sm font-medium'>
                            <span className='w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse' />
                            {t('steward.comingSoon')}
                        </span>
                    </div>
                </div>
            </div>

            {/* Lightbox */}
            <AnimatePresence>
                {lightboxIndex !== null && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className='fixed inset-0 z-[5500] flex items-center justify-center bg-black/90 backdrop-blur-md p-4 sm:p-8'
                        onClick={close}
                    >
                        <div className='absolute top-4 left-4 right-4 flex items-center justify-between text-white pointer-events-none z-10'>
                            <span className='text-sm font-medium bg-black/50 px-3 py-1.5 rounded-full pointer-events-auto'>
                                {t(
                                    `steward.screens.${SCREENS[lightboxIndex].labelKey}`
                                )}{' '}
                                · {lightboxIndex + 1} / {SCREENS.length}
                            </span>
                            <button
                                type='button'
                                onClick={e => {
                                    e.stopPropagation();
                                    close();
                                }}
                                aria-label={t('steward.galleryClose')}
                                className='p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors pointer-events-auto'
                            >
                                <FaXmark size={20} />
                            </button>
                        </div>

                        <button
                            type='button'
                            onClick={e => {
                                e.stopPropagation();
                                prev();
                            }}
                            aria-label={t('steward.galleryPrev')}
                            className='absolute left-2 sm:left-6 z-10 p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white'
                        >
                            <FaChevronLeft size={20} />
                        </button>

                        <motion.div
                            key={lightboxIndex}
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            transition={{ duration: 0.2 }}
                            className='relative w-full h-full max-w-6xl max-h-[85vh]'
                            onClick={e => e.stopPropagation()}
                        >
                            <Image
                                src={SCREENS[lightboxIndex].src}
                                alt={t(
                                    `steward.screens.${SCREENS[lightboxIndex].labelKey}`
                                )}
                                fill
                                sizes='100vw'
                                priority
                                className='object-contain'
                            />
                        </motion.div>

                        <button
                            type='button'
                            onClick={e => {
                                e.stopPropagation();
                                next();
                            }}
                            aria-label={t('steward.galleryNext')}
                            className='absolute right-2 sm:right-6 z-10 p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white'
                        >
                            <FaChevronRight size={20} />
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Steward;
