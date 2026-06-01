import Image from 'next/image';
import { cn } from '@/lib/utils';

type Size = 'sm' | 'md' | 'lg';

const SIZES: Record<Size, { box: string; img: number }> = {
    sm: { box: 'w-8 h-8', img: 32 },
    md: { box: 'w-8 h-8 lg:w-10 lg:h-10', img: 40 },
    lg: { box: 'w-12 h-12', img: 48 },
};

interface Props {
    icons: string[];
    size?: Size;
    overlap?: boolean;
    className?: string;
}

const TechIconStack = ({
    icons,
    size = 'md',
    overlap = true,
    className,
}: Props) => {
    const { box, img } = SIZES[size];

    return (
        <div className={cn('flex items-center', className)}>
            {icons.map((icon, i) => (
                <div
                    key={`${icon}-${i}`}
                    className={cn(
                        'border border-white/20 rounded-full bg-black flex justify-center items-center',
                        box
                    )}
                    style={
                        overlap
                            ? { transform: `translateX(-${5 * i + 2}px)` }
                            : undefined
                    }
                >
                    <Image
                        src={icon}
                        alt=''
                        width={img}
                        height={img}
                        className='p-2'
                    />
                </div>
            ))}
        </div>
    );
};

export default TechIconStack;
