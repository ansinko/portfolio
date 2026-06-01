'use client';

import {
    createContext,
    useContext,
    useEffect,
    useState,
    type ReactNode,
} from 'react';
import { translations, type Language } from '@/data/translations';

interface LanguageContextValue {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: (key: string) => string;
    tx: <T = unknown>(key: string) => T;
}

const LanguageContext = createContext<LanguageContextValue | undefined>(
    undefined
);

const STORAGE_KEY = 'portfolio-language';
const SUPPORTED: readonly Language[] = ['en', 'sk'] as const;

const walk = (tree: unknown, path: string): unknown =>
    path
        .split('.')
        .reduce<unknown>(
            (acc, key) =>
                acc && typeof acc === 'object'
                    ? (acc as Record<string, unknown>)[key]
                    : undefined,
            tree
        );

export const useLanguage = () => {
    const ctx = useContext(LanguageContext);
    if (!ctx) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return ctx;
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
    const [language, setLanguageState] = useState<Language>('en');

    useEffect(() => {
        const saved = localStorage.getItem(STORAGE_KEY) as Language | null;
        if (saved && SUPPORTED.includes(saved)) {
            setLanguageState(saved);
        }
    }, []);

    const setLanguage = (lang: Language) => {
        setLanguageState(lang);
        localStorage.setItem(STORAGE_KEY, lang);
    };

    const t = (key: string) => {
        const value = walk(translations[language], key);
        return typeof value === 'string' ? value : key;
    };

    const tx = <T,>(key: string): T => walk(translations[language], key) as T;

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t, tx }}>
            {children}
        </LanguageContext.Provider>
    );
};
