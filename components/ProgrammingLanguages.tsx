'use client';

import { programmingLanguages } from '@/data';
import { useLanguage } from '@/contexts/LanguageContext';

const ProgrammingLanguages = () => {
    const { t } = useLanguage();

    return (
        <div className='py-20' id='skills'>
            <h2 className='heading'>{t('programmingLanguages.title')}</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10 px-4'>
                {programmingLanguages.map((lang, index) => (
                    <div
                        key={index}
                        className='relative p-6 rounded-3xl border border-white/[0.1] bg-black-100 hover:shadow-xl transition duration-200 group'
                        style={{
                            background: 'rgb(4,7,29)',
                            backgroundColor:
                                'linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)',
                        }}
                    >
                        <div className='flex items-center justify-between mb-4'>
                            <div className='flex items-center gap-3'>
                                <div className='flex items-center'>
                                    {lang.icon.map((icon, index) => (
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
                                <div>
                                    <h3 className='text-white font-bold text-lg'>
                                        {lang.name.join(' / ')}
                                    </h3>

                                    <p className='text-white-100 text-sm'>
                                        {lang.description}
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Proficiency Bar */}
                        <div className='w-full bg-black-200 rounded-full h-2 mb-4'>
                            <div
                                className='bg-gradient-to-r from-purple to-blue-500 h-2 rounded-full transition-all duration-1000 group-hover:animate-pulse'
                                style={{ width: `${lang.proficiency}%` }}
                            ></div>
                        </div>
                        <div className='flex align-end justify-between'>
                            <span className='inline-block mt-2 px-3 py-1 rounded-full bg-purple/20 text-purple font-semibold text-xs uppercase tracking-wide focus:outline-none focus:ring-2 focus:ring-purple focus:ring-offset-2'>
                                {lang.skillLevel}
                            </span>
                            <p className='text-white-100 text-sm text-right pt-2 ml-2'>
                                {lang.experience}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProgrammingLanguages;
