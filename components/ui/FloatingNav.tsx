'use client';

import { type ReactNode, useState } from 'react';
import {
    AnimatePresence,
    motion,
    useMotionValueEvent,
    useScroll,
} from 'motion/react';
import { cn } from '@/lib/utils';
import { scrollToSection } from '@/lib/scroll';

interface NavItem {
    name: string;
    link: string;
    icon?: ReactNode;
}

export const FloatingNav = ({
    navItems,
    className,
}: {
    navItems: NavItem[];
    className?: string;
}) => {
    const { scrollYProgress } = useScroll();
    const [visible, setVisible] = useState(false);

    useMotionValueEvent(scrollYProgress, 'change', current => {
        if (typeof current !== 'number') return;
        const direction = current - (scrollYProgress.getPrevious() ?? 0);
        if (current < 0.05) {
            setVisible(false);
        } else {
            setVisible(direction < 0);
        }
    });

    return (
        <AnimatePresence mode='wait'>
            <motion.div
                initial={{ opacity: 1, y: -100 }}
                animate={{
                    y: visible ? 0 : -100,
                    opacity: visible ? 1 : 0,
                }}
                transition={{ duration: 0.2 }}
                className={cn(
                    'flex flex-row max-w-fit fixed top-10 inset-x-0 mx-auto border rounded-full bg-black-100 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] px-10 py-5 border-white/[0.2] items-center justify-center space-x-4',
                    className
                )}
                data-floating-nav
            >
                {navItems.map((item, idx) => (
                    <a
                        key={`${item.link}-${idx}`}
                        href={item.link}
                        onClick={e => {
                            e.preventDefault();
                            scrollToSection(item.link.replace('#', ''));
                        }}
                        className='relative text-neutral-50 items-center flex space-x-2 hover:text-neutral-300 cursor-pointer transition-colors duration-200'
                    >
                        <span className='block sm:hidden'>{item.icon}</span>
                        <span className='hidden sm:block text-sm'>
                            {item.name}
                        </span>
                    </a>
                ))}
            </motion.div>
        </AnimatePresence>
    );
};
