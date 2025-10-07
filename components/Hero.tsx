'use client';

import { FaLocationArrow } from 'react-icons/fa6';
import MagicButton from './ui/MagicButton';
import { TextGenerateEffect } from './ui/TextGenerateEffect';
import { useLanguage } from '@/contexts/LanguageContext';
import LanguageToggle from './ui/LanguageToggle';
import { Spotlight } from './ui/Spotlight';

const Hero = () => {
    const { t } = useLanguage();

    return (
        <div className='pt-36'>
            {/**
             *  UI: Spotlights
             *  Link: https://ui.aceternity.com/components/spotlight
             */}
            <div>
                <Spotlight />
            </div>

            {/**
             *  UI: grid
             *  change bg color to bg-black-100 and reduce grid color from
             *  0.2 to 0.03
             */}
            <div
                className='h-screen w-full bg-black-100 bg-grid-white/[0.03] bg-grid-black-100/[0.2]
       absolute top-0 left-0 flex items-center justify-center'
            >
                {/* Radial gradient for the container to give a faded look */}
                <div
                    // chnage the bg to bg-black-100, so it matches the bg color and will blend in
                    className='absolute pointer-events-none inset-0 flex items-center justify-center bg-black-100
          [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]'
                />
            </div>

            {/* Language Toggle */}
            <div className='absolute top-4 right-4 z-20'>
                <LanguageToggle />
            </div>

            <div className='flex justify-center relative my-20 z-10'>
                <div className='max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center'>
                    <p className='uppercase tracking-widest text-sm md:text-base lg:text-lg text-center text-blue-100'>
                        {t('hero.title')}
                    </p>

                    {/**
                     *  Link: https://ui.aceternity.com/components/text-generate-effect
                     *
                     *  change md:text-6xl, add more responsive code
                     */}
                    <TextGenerateEffect
                        words={t('hero.subtitle')}
                        className='text-center text-[40px] md:text-5xl lg:text-6xl'
                    />

                    <p className='text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl text-blue-100'>
                        {t('hero.description')}
                    </p>

                    <a
                        href='#projects'
                        onClick={e => {
                            e.preventDefault();
                            // First scroll to top, then to projects section
                            window.scrollTo({
                                top: 0,
                                behavior: 'smooth',
                            });
                            setTimeout(() => {
                                const targetElement =
                                    document.getElementById('projects');
                                if (targetElement) {
                                    const offset = 80;
                                    const targetPosition =
                                        targetElement.offsetTop - offset;
                                    window.scrollTo({
                                        top: targetPosition,
                                        behavior: 'smooth',
                                    });
                                }
                            }, 100);
                        }}
                    >
                        <MagicButton
                            title={t('hero.button') || 'Show my work'}
                            icon={<FaLocationArrow />}
                            position='right'
                        />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Hero;
