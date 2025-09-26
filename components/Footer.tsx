
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
    return (
        <footer className="bg-[var(--card-bg)] border-t border-[var(--border-color)]">
            <div className="mx-auto max-w-7xl overflow-hidden px-6 py-12 lg:px-8">
                <nav className="-mb-6 columns-2 sm:flex sm:justify-center sm:space-x-12" aria-label="Footer">
                    <div className="pb-6">
                        <Link to="/privacy" className="text-sm leading-6 text-[var(--text-secondary)] hover:text-[var(--text-primary)]">
                            Politique de confidentialité
                        </Link>
                    </div>
                    <div className="pb-6">
                        <a href="#" className="text-sm leading-6 text-[var(--text-secondary)] hover:text-[var(--text-primary)]">
                            Conditions
                        </a>
                    </div>
                     <div className="pb-6">
                        <a href="mailto:contact@pacific-to-agenda.app" className="text-sm leading-6 text-[var(--text-secondary)] hover:text-[var(--text-primary)]">
                            Contact
                        </a>
                    </div>
                </nav>
                <div className="mt-10 flex justify-center space-x-10">
                    <a href="#" className="text-[var(--text-secondary)] hover:text-[var(--text-primary)]">
                        <span className="sr-only">X (Twitter)</span>
                        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                        </svg>
                    </a>
                    <a href="#" className="text-[var(--text-secondary)] hover:text-[var(--text-primary)]">
                        <span className="sr-only">LinkedIn</span>
                        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                             <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                        </svg>
                    </a>
                </div>
                <p className="mt-10 text-center text-xs leading-5 text-[var(--text-secondary)]">
                    &copy; 2025 Pacific to Agenda. Tous droits réservés.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
