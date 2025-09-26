
import React from 'react';

const steps = [
    {
        name: 'Étape 1: Scanner le planning',
        description: 'Importez une photo ou une capture d\'écran. L\'app redresse et analyse automatiquement l\'image pour en extraire les informations clés.',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"></path><circle cx="12" cy="13" r="3"></circle></svg>
        ),
    },
    {
        name: 'Étape 2: Vérifier et corriger',
        description: 'Consultez les événements dans un tableau clair. Modifiez une heure, une mission ou un lieu en un clic. Des alertes signalent les éventuels chevauchements.',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>
        ),
    },
    {
        name: 'Étape 3: Ajouter à l’agenda',
        description: 'Exportez un fichier .ics universel ou ajoutez directement les événements à votre Apple Calendar ou Google Agenda via les intégrations natives.',
        icon: (
             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2Z"></path><path d="M12 16v-4m-2 2h4"></path></svg>
        ),
    },
];

const HowItWorks: React.FC = () => {
    return (
        <section id="how-it-works" className="py-24 sm:py-32 bg-[var(--card-bg)] dark:bg-gray-800/50 rounded-lg m-4">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:text-center">
                    <h2 className="text-base font-semibold leading-7 text-custom-gradient">Comment ça marche</h2>
                    <p className="mt-2 text-3xl font-bold tracking-tight text-[var(--text-primary)] sm:text-4xl">
                        Votre planning, votre agenda, en 3 étapes simples.
                    </p>
                </div>
                <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
                    <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-base leading-7 sm:grid-cols-2 lg:grid-cols-3">
                        {steps.map((step) => (
                            <div key={step.name} className="flex flex-col items-center text-center">
                                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-custom-gradient text-white">
                                    {step.icon}
                                </div>
                                <dt className="font-semibold text-[var(--text-primary)] text-lg">{step.name}</dt>
                                <dd className="mt-1 text-[var(--text-secondary)]">{step.description}</dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
