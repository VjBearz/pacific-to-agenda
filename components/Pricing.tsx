
import React from 'react';

const Pricing: React.FC = () => {
    const scrollToSection = (id: string) => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section id="pricing" className="py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-4xl text-center">
                    <h2 className="text-base font-semibold leading-7 text-custom-gradient">Tarifs</h2>
                    <p className="mt-2 text-4xl font-bold tracking-tight text-[var(--text-primary)] sm:text-5xl">
                        Un tarif adapté à chaque besoin
                    </p>
                </div>
                <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-[var(--text-secondary)]">
                    Commencez gratuitement et passez à la version Pro lorsque vous aurez besoin de plus de flexibilité.
                </p>
                <div className="isolate mx-auto mt-16 grid max-w-md grid-cols-1 gap-y-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                    <div className="flex flex-col justify-between rounded-3xl bg-[var(--card-bg)] p-8 shadow-xl ring-1 ring-gray-900/10 dark:ring-white/10 sm:p-10">
                        <div>
                            <h3 className="text-base font-semibold leading-7 text-[var(--accent-ico)]">Gratuit</h3>
                            <div className="mt-4 flex items-baseline gap-x-2">
                                <span className="text-5xl font-bold tracking-tight text-[var(--text-primary)]">0€</span>
                                <span className="text-base font-semibold leading-7 text-[var(--text-secondary)]">/mois</span>
                            </div>
                            <p className="mt-6 text-base leading-7 text-[var(--text-secondary)]">
                                L'essentiel pour importer vos plannings rapidement.
                            </p>
                            <ul role="list" className="mt-10 space-y-4 text-sm leading-6 text-[var(--text-secondary)]">
                                <li className="flex gap-x-3"><svg className="h-6 w-5 flex-none text-green-500" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.052-.143z" clipRule="evenodd" /></svg>Scans et exports .ics</li>
                                <li className="flex gap-x-3"><svg className="h-6 w-5 flex-none text-green-500" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.052-.143z" clipRule="evenodd" /></svg>Limite de 5 imports par mois</li>
                            </ul>
                        </div>
                        <button onClick={() => scrollToSection('contact')} className="mt-8 block rounded-md bg-custom-gradient px-3.5 py-2.5 text-center text-sm font-semibold leading-6 text-white shadow-sm hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-opacity">
                            Rejoindre la liste d'attente
                        </button>
                    </div>
                    <div className="flex flex-col justify-between rounded-3xl bg-[var(--card-bg)] p-8 shadow-xl ring-1 ring-gray-900/10 dark:ring-white/10 sm:p-10">
                        <div>
                            <h3 className="text-base font-semibold leading-7 text-[var(--accent-ico)]">Pro</h3>
                            <div className="mt-4 flex items-baseline gap-x-2">
                                <span className="text-5xl font-bold tracking-tight text-[var(--text-primary)]">À venir</span>
                            </div>
                            <p className="mt-6 text-base leading-7 text-[var(--text-secondary)]">
                                Pour les utilisateurs intensifs qui veulent plus de contrôle.
                            </p>
                            <ul role="list" className="mt-10 space-y-4 text-sm leading-6 text-[var(--text-secondary)]">
                                <li className="flex gap-x-3"><svg className="h-6 w-5 flex-none text-green-500" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.052-.143z" clipRule="evenodd" /></svg>Imports illimités</li>
                                <li className="flex gap-x-3"><svg className="h-6 w-5 flex-none text-green-500" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.052-.143z" clipRule="evenodd" /></svg>Modèles de renommage personnalisés</li>
                                <li className="flex gap-x-3"><svg className="h-6 w-5 flex-none text-green-500" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.052-.143z" clipRule="evenodd" /></svg>Historique des imports étendu</li>
                                <li className="flex gap-x-3"><svg className="h-6 w-5 flex-none text-green-500" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.052-.143z" clipRule="evenodd" /></svg>Support prioritaire</li>
                            </ul>
                        </div>
                        <button disabled className="mt-8 block rounded-md bg-gray-400 px-3.5 py-2.5 text-center text-sm font-semibold leading-6 text-white shadow-sm cursor-not-allowed">
                            Bientôt disponible
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Pricing;
