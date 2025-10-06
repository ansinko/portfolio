'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { cn } from '@/lib/utils';

const LanguageToggle = () => {
    const { language, setLanguage } = useLanguage();
    const [isOpen, setIsOpen] = useState(false);

    const languages = [
        { code: 'en', name: 'EN', flag: '🇺🇸' },
        { code: 'sk', name: 'SK', flag: '🇸🇰' },
    ] as const;

    const handleLanguageChange = (lang: 'en' | 'sk') => {
        setLanguage(lang);
        setIsOpen(false);
    };

    const currentLang = languages.find(lang => lang.code === language);

    return (
        <div className='relative'>
            <motion.button
                onClick={() => setIsOpen(!isOpen)}
                className={cn(
                    'flex items-center gap-2 px-3 py-2 rounded-full',
                    'bg-white/5 border border-white/10',
                    'text-white hover:bg-white/10',
                    'transition-all duration-200',
                    'backdrop-blur-sm'
                )}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
            >
                <span className='text-lg'>{currentLang?.flag}</span>
                <span className='text-sm font-medium'>{currentLang?.name}</span>
                <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                >
                    <svg
                        width='12'
                        height='12'
                        viewBox='0 0 12 12'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                    >
                        <path
                            d='M3 4.5L6 7.5L9 4.5'
                            stroke='currentColor'
                            strokeWidth='1.5'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                        />
                    </svg>
                </motion.div>
            </motion.button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className='absolute top-full right-0 mt-2 min-w-[120px]'
                    >
                        <div className='bg-black-100 border border-white/10 rounded-xl overflow-hidden backdrop-blur-sm'>
                            {languages.map(lang => (
                                <motion.button
                                    key={lang.code}
                                    onClick={() =>
                                        handleLanguageChange(
                                            lang.code as 'en' | 'sk'
                                        )
                                    }
                                    className={cn(
                                        'w-full flex items-center gap-3 px-4 py-3 text-left',
                                        'hover:bg-white/5 transition-colors duration-150',
                                        language === lang.code &&
                                            'bg-purple/10 text-purple'
                                    )}
                                    whileHover={{
                                        backgroundColor:
                                            'rgba(255,255,255,0.05)',
                                    }}
                                >
                                    <span className='text-lg'>{lang.flag}</span>
                                    <span className='text-sm font-medium'>
                                        {lang.name}
                                    </span>
                                    {language === lang.code && (
                                        <motion.div
                                            initial={{ scale: 0 }}
                                            animate={{ scale: 1 }}
                                            className='ml-auto w-2 h-2 bg-purple rounded-full'
                                        />
                                    )}
                                </motion.button>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default LanguageToggle;
