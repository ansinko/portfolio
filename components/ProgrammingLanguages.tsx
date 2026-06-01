'use client';

import { motion } from 'motion/react';
import { programmingLanguages } from '@/data';
import { useLanguage } from '@/contexts/LanguageContext';
import TechIconStack from './ui/TechIconStack';

const CARD_BG: React.CSSProperties = {
    backgroundImage:
        'linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)',
};

const ProgrammingLanguages = () => {
    const { t } = useLanguage();
    const langs = programmingLanguages(t);

    return (
        <section className='py-20' id='skills'>
            <h2
                className='heading'
                dangerouslySetInnerHTML={{
                    __html: t('programmingLanguages.title'),
                }}
            />
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10 px-4'>
                {langs.map((lang, i) => (
                    <motion.div
                        key={lang.name.join('/')}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-50px' }}
                        transition={{ duration: 0.4, delay: (i % 3) * 0.08 }}
                        className='relative p-6 rounded-3xl border border-white/[0.1] hover:shadow-xl hover:border-purple/30 transition-all duration-300 group'
                        style={CARD_BG}
                    >
                        <div className='flex items-center gap-3 mb-4'>
                            <TechIconStack icons={lang.icon} />
                            <div>
                                <h3 className='text-white font-bold text-lg'>
                                    {lang.name.join(' / ')}
                                </h3>
                                <p className='text-white-100 text-sm'>
                                    {lang.description}
                                </p>
                            </div>
                        </div>

                        <div
                            className='w-full bg-black-200 rounded-full h-2 mb-4 overflow-hidden'
                            aria-label={`Proficiency ${lang.proficiency}%`}
                        >
                            <motion.div
                                initial={{ width: 0 }}
                                whileInView={{ width: `${lang.proficiency}%` }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: 1,
                                    ease: 'easeOut',
                                    delay: 0.2,
                                }}
                                className='bg-gradient-to-r from-purple to-blue-500 h-2 rounded-full'
                            />
                        </div>

                        <div className='flex items-end justify-between'>
                            <span className='inline-block px-3 py-1 rounded-full bg-purple/20 text-purple font-semibold text-xs uppercase tracking-wide'>
                                {lang.skillLevel}
                            </span>
                            {lang.experience && (
                                <p className='text-white-100 text-sm text-right pt-2 ml-2'>
                                    {lang.experience}
                                </p>
                            )}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default ProgrammingLanguages;
