'use client';

import Image from 'next/image';
import { FaLocationArrow } from 'react-icons/fa6';

import { socialMedia } from '@/data';
import { useLanguage } from '@/contexts/LanguageContext';
import MagicButton from './ui/MagicButton';

const Footer = () => {
    const { t } = useLanguage();

    return (
        <footer className='w-full pt-20 pb-10' id='contact'>
            <div className='w-full absolute left-0 -bottom-72 min-h-96 -z-10'>
                <Image
                    src='/footer-grid.svg'
                    alt=''
                    width={100}
                    height={100}
                    className='w-full h-full opacity-50'
                />
            </div>

            <div className='flex flex-col items-center'>
                <h2
                    className='heading lg:max-w-[45vw]'
                    dangerouslySetInnerHTML={{ __html: t('footer.title') }}
                />
                <p
                    className='text-white-200 md:mt-10 my-5 text-center max-w-2xl text-base md:text-lg lg:text-xl leading-relaxed'
                    dangerouslySetInnerHTML={{
                        __html: t('footer.description'),
                    }}
                />
                <a href='mailto:andrej@meliska.sk'>
                    <MagicButton
                        title={t('footer.button')}
                        icon={<FaLocationArrow />}
                        position='right'
                    />
                </a>
            </div>

            <div className='flex mt-16 md:flex-row flex-col gap-6 md:gap-0 justify-between items-center'>
                <p className='md:text-base text-sm md:font-normal font-light'>
                    © {new Date().getFullYear()} Andrej Meliška
                </p>

                <div className='flex items-center md:gap-3 gap-6'>
                    {socialMedia.map(info => (
                        <a
                            key={info.id}
                            href={info.link}
                            target='_blank'
                            rel='noopener noreferrer'
                            aria-label={info.name}
                            className='w-10 h-10 flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300 hover:border-purple/40 focus:outline-none focus:ring-2 focus:ring-purple transition-colors'
                        >
                            <Image
                                src={info.img}
                                alt=''
                                width={20}
                                height={20}
                            />
                        </a>
                    ))}
                </div>
            </div>
        </footer>
    );
};

export default Footer;
