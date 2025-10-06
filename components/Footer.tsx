import { FaLocationArrow } from 'react-icons/fa6';

import { socialMedia } from '@/data';
import MagicButton from './ui/MagicButton';
import { useLanguage } from '@/contexts/LanguageContext';

const Footer = () => {
    const { t } = useLanguage();
    return (
        <footer className='w-full pt-20 pb-10' id='contact'>
            {/* background grid */}
            <div className='w-full absolute left-0 -bottom-72 min-h-96'>
                <img
                    src='/footer-grid.svg'
                    alt='grid'
                    className='w-full h-full opacity-50 '
                />
            </div>

            <div className='flex flex-col items-center'>
                <h1
                    className='heading lg:max-w-[45vw]'
                    dangerouslySetInnerHTML={{ __html: t('footer.title') }}
                />
                <p
                    className='text-white-200 md:mt-10 my-5 text-center'
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
            <div className='flex mt-16 md:flex-row flex-col justify-between items-center'>
                <p className='md:text-base text-sm md:font-normal font-light'>
                    Copyright © 2025 Andrej Meliska
                </p>

                <div className='flex items-center md:gap-3 gap-6'>
                    {socialMedia.map(info => (
                        <a
                            key={info.id}
                            href={info.link}
                            target='_blank'
                            rel='noopener noreferrer'
                            tabIndex={0}
                            aria-label={info.name || 'Social link'}
                            className='w-10 h-10 flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300 focus:outline-none focus:ring-2 focus:ring-purple cursor-pointer'
                            onKeyDown={e => {
                                if (e.key === 'Enter' || e.key === ' ') {
                                    window.open(
                                        info.link,
                                        '_blank',
                                        'noopener,noreferrer'
                                    );
                                }
                            }}
                        >
                            <img
                                src={info.img}
                                alt={info.name || 'icon'}
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
