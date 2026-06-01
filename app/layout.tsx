import type { Metadata, Viewport } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from './provider';
import { LanguageProvider } from '@/contexts/LanguageContext';

const geistSans = Geist({
    variable: '--font-geist-sans',
    subsets: ['latin', 'latin-ext'],
});

const geistMono = Geist_Mono({
    variable: '--font-geist-mono',
    subsets: ['latin', 'latin-ext'],
});

export const metadata: Metadata = {
    metadataBase: new URL('https://meliska.sk'),
    title: {
        default: 'Andrej Meliška — Software Developer',
        template: '%s | Andrej Meliška',
    },
    description:
        'Portfolio of Andrej Meliška — Software Developer and FIT CTU graduate building backends, microservices, and web apps in Java, TypeScript, and beyond.',
    keywords: [
        'Andrej Meliška',
        'Software Developer',
        'Portfolio',
        'FIT CTU',
        'Java',
        'TypeScript',
        'Web Developer',
    ],
    authors: [{ name: 'Andrej Meliška' }],
    creator: 'Andrej Meliška',
    icons: {
        icon: '/icons/icons8-portfolio-16.png',
        shortcut: '/icons/icons8-portfolio-16.png',
        apple: '/icons/icons8-portfolio-16.png',
    },
    openGraph: {
        type: 'website',
        title: 'Andrej Meliška — Software Developer',
        description:
            'Software developer and FIT CTU graduate bringing ideas to life with code.',
        images: ['/icons/icons8-portfolio-16.png'],
    },
    twitter: {
        card: 'summary',
        title: 'Andrej Meliška — Software Developer',
        description:
            'Software developer and FIT CTU graduate bringing ideas to life with code.',
    },
};

export const viewport: Viewport = {
    themeColor: '#000319',
    colorScheme: 'dark',
};

export default function RootLayout({
    children,
}: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang='en' className='dark scroll-smooth' suppressHydrationWarning>
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased`}
            >
                <ThemeProvider
                    attribute='class'
                    defaultTheme='dark'
                    forcedTheme='dark'
                    enableSystem={false}
                    disableTransitionOnChange
                >
                    <LanguageProvider>{children}</LanguageProvider>
                </ThemeProvider>
            </body>
        </html>
    );
}
