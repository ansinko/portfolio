'use client';

import { gridItems } from '@/data';
import { BentoGrid, BentoGridItem } from './ui/BentoGrid';
import { useLanguage } from '@/contexts/LanguageContext';

const Grid = () => {
    const { t } = useLanguage();
    return (
        <section id='about'>
            <BentoGrid className='w-full py-20' t={t}>
                {gridItems(t).map((item, i) => (
                    <BentoGridItem
                        id={item.id}
                        key={i}
                        title={item.title}
                        description={item.description}
                        className={item.className}
                        img={item.img}
                        imgClassName={item.imgClassName}
                        titleClassName={item.titleClassName}
                        spareImg={item.spareImg}
                        link={item.link}
                        t={t}
                    />
                ))}
            </BentoGrid>
        </section>
    );
};

export default Grid;
