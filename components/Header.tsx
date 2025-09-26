import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Logo: React.FC = () => (
  <div className="flex items-center space-x-2">
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[var(--grad-start)]">
      <path d="M25.5 8H6.5C5.67157 8 5 8.67157 5 9.5V25.5C5 26.3284 5.67157 27 6.5 27H25.5C26.3284 27 27 26.3284 27 25.5V9.5C27 8.67157 26.3284 8 25.5 8Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M21 5V11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M11 5V11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M5 14H27" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M19 20H13C12.4477 20 12 19.5523 12 19V17C12 16.4477 12.4477 16 13 16H19C19.5523 16 20 16.4477 20 17V19C20 19.5523 19.5523 20 19 20Z" fill="url(#paint0_linear_logo)" stroke="url(#paint0_linear_logo_stroke)"/>
      <defs>
        <linearGradient id="paint0_linear_logo" x1="12" y1="18" x2="20" y2="18" gradientUnits="userSpaceOnUse">
          <stop stopColor="#D9006C"/>
          <stop offset="1" stopColor="#A30052"/>
        </linearGradient>
         <linearGradient id="paint0_linear_logo_stroke" x1="12" y1="18" x2="20" y2="18" gradientUnits="userSpaceOnUse">
          <stop stopColor="#D9006C"/>
          <stop offset="1" stopColor="#A30052"/>
        </linearGradient>
      </defs>
    </svg>
    <span className="font-bold text-xl text-[var(--text-primary)]">Pacific to Agenda</span>
  </div>
);

const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();
    const [theme, setTheme] = useState(() => {
        if (typeof window !== 'undefined') {
            if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                return 'dark';
            }
        }
        return 'light';
    });

    useEffect(() => {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
            localStorage.theme = 'dark';
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.theme = 'light';
        }
    }, [theme]);

    const handleThemeSwitch = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    };

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        setIsMenuOpen(false);
    };

    const navLinks = [
        { name: 'FAQ', id: 'faq' },
    ];
    
    const ThemeToggleButton = ({ className = '' }: { className?: string }) => (
         <button onClick={handleThemeSwitch} className={`-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors ${className}`}>
            <span className="sr-only">Changer de thème</span>
            {theme === 'dark' ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>
            ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
            )}
        </button>
    );

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-[var(--card-bg)]/80 backdrop-blur-md shadow-md dark:shadow-none border-b border-[var(--border-color)]">
            <nav className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8">
                <div className="flex lg:flex-1">
                    <Link to="/" className="-m-1.5 p-1.5">
                        <span className="sr-only">Pacific to Agenda</span>
                        <Logo />
                    </Link>
                </div>
                <div className="flex lg:hidden">
                    <button type="button" onClick={() => setIsMenuOpen(true)} className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-[var(--text-secondary)]">
                        <span className="sr-only">Ouvrir le menu</span>
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                    </button>
                </div>
                {location.pathname === '/' && (
                    <div className="hidden lg:flex lg:gap-x-12">
                        {navLinks.map((link) => (
                            <button key={link.name} onClick={() => scrollToSection(link.id)} className="text-sm font-semibold leading-6 text-[var(--text-primary)] hover:text-custom-gradient">
                                {link.name}
                            </button>
                        ))}
                    </div>
                )}
                <div className="hidden lg:flex lg:flex-1 lg:justify-end items-center gap-x-4">
                    <ThemeToggleButton />
                    <button onClick={() => scrollToSection('contact')} className="text-sm font-semibold leading-6 bg-custom-gradient text-white px-4 py-2 rounded-md hover:opacity-90 transition-opacity">
                        Rejoindre la liste d’attente <span aria-hidden="true">&rarr;</span>
                    </button>
                </div>
            </nav>

            {/* Mobile menu */}
            <div className={`lg:hidden ${isMenuOpen ? 'block' : 'hidden'}`} role="dialog" aria-modal="true">
                <div className="fixed inset-0 z-50" />
                <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-[var(--fond)] px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div className="flex items-center justify-between">
                         <Link to="/" className="-m-1.5 p-1.5" onClick={() => setIsMenuOpen(false)}>
                            <span className="sr-only">Pacific to Agenda</span>
                            <Logo />
                        </Link>
                        <button type="button" onClick={() => setIsMenuOpen(false)} className="-m-2.5 rounded-md p-2.5 text-[var(--text-secondary)]">
                            <span className="sr-only">Fermer le menu</span>
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/10">
                            {location.pathname === '/' && (
                                <div className="space-y-2 py-6">
                                    {navLinks.map((link) => (
                                        <button key={link.name} onClick={() => scrollToSection(link.id)} className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-[var(--text-primary)] hover:bg-gray-50 dark:hover:bg-gray-800">
                                            {link.name}
                                        </button>
                                    ))}
                                </div>
                            )}
                            <div className="py-6 flex items-center justify-between">
                                <button onClick={() => scrollToSection('contact')} className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-[var(--text-primary)] hover:bg-gray-50 dark:hover:bg-gray-800">
                                    Rejoindre la liste d’attente
                                </button>
                                <ThemeToggleButton />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;