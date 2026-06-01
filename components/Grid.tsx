'use client';

import { gridItems } from '@/data';
import { useLanguage } from '@/contexts/LanguageContext';
import { BentoGrid, BentoGridItem } from './ui/BentoGrid';

const Grid = () => {
    const { t } = useLanguage();

    return (
        <section id='about'>
            <BentoGrid className='w-full py-20'>
                {gridItems(t).map(item => (
                    <BentoGridItem
                        key={item.id}
                        id={item.id}
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
