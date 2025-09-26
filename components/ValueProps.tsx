
import React from 'react';

const valuePropsData = [
    {
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
        ),
        title: "Gain de temps",
        description: "Moins de 20 secondes du scan à l’import dans votre calendrier."
    },
    {
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
        ),
        title: "Zéro erreur",
        description: "OCR on-device puissant pour détecter jours, heures, missions et lieux."
    },
    {
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>
        ),
        title: "Règles SNCF",
        description: "Les missions 'RPxx' sont automatiquement converties en 'Repos' sur une journée entière."
    }
];

const ValueProps: React.FC = () => {
    return (
        <div className="py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:text-center">
                    <p className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl text-custom-gradient">
                        Optimisez votre organisation
                    </p>
                    <p className="mt-6 text-lg leading-8 text-[var(--text-secondary)]">
                        Conçu pour les agents qui veulent un agenda toujours à jour, sans effort.
                    </p>
                </div>
                <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
                    <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-3 lg:gap-y-16">
                        {valuePropsData.map((prop) => (
                            <div key={prop.title} className="relative pl-16">
                                <dt className="text-base font-semibold leading-7 text-[var(--text-primary)]">
                                    <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-custom-gradient text-white">
                                        {prop.icon}
                                    </div>
                                    {prop.title}
                                </dt>
                                <dd className="mt-2 text-base leading-7 text-[var(--text-secondary)]">{prop.description}</dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
        </div>
    );
};

export default ValueProps;
