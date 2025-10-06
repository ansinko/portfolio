'use client';
import { useEffect, useState } from 'react';
import { motion, stagger, useAnimate } from 'framer-motion';
import { cn } from '@/lib/utils';

export const TextGenerateEffect = ({
    words,
    className,
}: {
    words: string;
    className?: string;
}) => {
    const [scope, animate] = useAnimate();
    const [wordsArray, setWordsArray] = useState<string[]>(words.split(' '));

    useEffect(() => {
        // Reset words array when words change
        const newWordsArray = words.split(' ');
        setWordsArray(newWordsArray);

        // Wait for DOM to update, then animate
        const timer = setTimeout(() => {
            // Reset all spans to opacity 0 first
            animate(
                'span',
                {
                    opacity: 0,
                },
                {
                    duration: 0,
                }
            ).then(() => {
                // Then animate them to opacity 1
                animate(
                    'span',
                    {
                        opacity: 1,
                    },
                    {
                        duration: 2,
                        delay: stagger(0.2),
                    }
                );
            });
        }, 50); // Small delay to ensure DOM is updated

        return () => clearTimeout(timer);
    }, [words, animate]);

    const renderWords = () => {
        return (
            <motion.div ref={scope}>
                {wordsArray.map((word, idx) => {
                    return (
                        <motion.span
                            key={`${word}-${idx}-${words}`} // Add words to key to force re-render
                            // change here if idx is greater than 3, change the text color to #CBACF9
                            className={` ${
                                idx === 0 || idx === 3
                                    ? 'text-purple'
                                    : 'text-white'
                            } opacity-0`}
                        >
                            {word}{' '}
                        </motion.span>
                    );
                })}
            </motion.div>
        );
    };

    return (
        <div className={cn('font-bold', className)}>
            {/* mt-4 to my-4 */}
            <div className='my-4'>
                {/* remove  text-2xl from the original */}
                <div className=' dark:text-white text-black leading-snug tracking-wide'>
                    {renderWords()}
                </div>
            </div>
        </div>
    );
};
