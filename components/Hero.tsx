'use client';

import { FaLocationArrow } from 'react-icons/fa6';
import { useLanguage } from '@/contexts/LanguageContext';
import { scrollToSection } from '@/lib/scroll';
import MagicButton from './ui/MagicButton';
import { TextGenerateEffect } from './ui/TextGenerateEffect';
import LanguageToggle from './ui/LanguageToggle';
import { Spotlight } from './ui/Spotlight';

const Hero = () => {
    const { t } = useLanguage();

    return (
        <div className='pt-36'>
            <Spotlight />

            <div className='h-screen w-full bg-black-100 bg-grid-white/[0.03] bg-grid-black-100/[0.2] absolute top-0 left-0 flex items-center justify-center'>
                <div className='absolute pointer-events-none inset-0 flex items-center justify-center bg-black-100 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]' />
            </div>

            <div className='absolute top-4 right-4 z-20'>
                <LanguageToggle />
            </div>

            <div className='flex justify-center relative my-20 z-10'>
                <div className='max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center'>
                    <p className='uppercase tracking-widest text-sm md:text-base lg:text-lg text-center text-blue-100'>
                        {t('hero.title')}
                    </p>

                    <TextGenerateEffect
                        words={t('hero.subtitle')}
                        className='text-center text-[40px] md:text-5xl lg:text-6xl'
                    />

                    <p className='text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl text-blue-100'>
                        {t('hero.description')}
                    </p>

                    <MagicButton
                        title={t('hero.button')}
                        icon={<FaLocationArrow />}
                        position='right'
                        handleClick={() => scrollToSection('projects')}
                    />
                </div>
            </div>
        </div>
    );
};

export default Hero;
