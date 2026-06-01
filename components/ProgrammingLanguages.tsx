'use client';

import { motion } from 'motion/react';
import { programmingLanguages, type ProgLang, type SkillTier } from '@/data';
import { useLanguage } from '@/contexts/LanguageContext';
import TechIconStack from './ui/TechIconStack';

const TIER_ORDER: SkillTier[] = ['core', 'comfortable', 'familiar'];

const TIER_ACCENT: Record<SkillTier, string> = {
    core: 'from-purple to-blue-500',
    comfortable: 'from-blue-500 to-cyan-400',
    familiar: 'from-cyan-400 to-emerald-400',
};

const TIER_LABEL: Record<SkillTier, { title: string; desc: string }> = {
    core: {
        title: 'programmingLanguages.tier.coreTitle',
        desc: 'programmingLanguages.tier.coreDesc',
    },
    comfortable: {
        title: 'programmingLanguages.tier.comfortableTitle',
        desc: 'programmingLanguages.tier.comfortableDesc',
    },
    familiar: {
        title: 'programmingLanguages.tier.familiarTitle',
        desc: 'programmingLanguages.tier.familiarDesc',
    },
};

const SkillCard = ({ lang, index }: { lang: ProgLang; index: number }) => (
    <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.4, delay: (index % 3) * 0.06 }}
        className='group relative flex flex-col gap-3 p-5 rounded-2xl border border-white/[0.08] bg-[#0c0e23]/80 hover:border-purple/40 hover:bg-[#10132E]/90 transition-colors duration-300'
    >
        <div className='flex items-center gap-3'>
            <TechIconStack icons={lang.icon} size='md' />
            <div className='min-w-0'>
                <h3 className='text-white font-semibold text-base leading-tight truncate'>
                    {lang.name.join(' / ')}
                </h3>
                <p className='text-white-100/70 text-xs mt-0.5 truncate'>
                    {lang.topic}
                </p>
            </div>
        </div>

        <div className='flex items-center justify-between gap-2 pt-3 border-t border-white/[0.06] text-xs'>
            {lang.experience ? (
                <span className='text-white font-medium'>
                    {lang.experience}
                </span>
            ) : (
                <span className='text-white-100/50'>—</span>
            )}
            {lang.context && (
                <span className='text-white-100/60 truncate'>
                    {lang.context}
                </span>
            )}
        </div>
    </motion.div>
);

const TierSection = ({
    tier,
    langs,
}: {
    tier: SkillTier;
    langs: ProgLang[];
}) => {
    const { t } = useLanguage();
    if (langs.length === 0) return null;

    return (
        <div className='mb-12 last:mb-0'>
            <div className='flex items-center gap-3 mb-1 px-1'>
                <span
                    className={`block w-8 h-1 rounded-full bg-gradient-to-r ${TIER_ACCENT[tier]}`}
                />
                <h3 className='text-white font-semibold text-lg'>
                    {t(TIER_LABEL[tier].title)}
                </h3>
            </div>
            <p className='text-white-100/60 text-sm mb-5 pl-12'>
                {t(TIER_LABEL[tier].desc)}
            </p>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
                {langs.map((lang, i) => (
                    <SkillCard
                        key={`${tier}-${lang.name.join('-')}`}
                        lang={lang}
                        index={i}
                    />
                ))}
            </div>
        </div>
    );
};

const ProgrammingLanguages = () => {
    const { t } = useLanguage();
    const all = programmingLanguages(t);

    return (
        <section className='py-20' id='skills'>
            <h2
                className='heading'
                dangerouslySetInnerHTML={{
                    __html: t('programmingLanguages.title'),
                }}
            />
            <div className='mt-12 px-4 max-w-6xl mx-auto'>
                {TIER_ORDER.map(tier => (
                    <TierSection
                        key={tier}
                        tier={tier}
                        langs={all.filter(l => l.tier === tier)}
                    />
                ))}
            </div>
        </section>
    );
};

export default ProgrammingLanguages;
