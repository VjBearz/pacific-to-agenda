import React from 'react';

const Hero: React.FC = () => {
    const scrollToSection = (id: string) => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className="relative isolate px-6 pt-14 lg:px-8">
            <div className="mx-auto max-w-4xl py-24 sm:py-32 lg:py-40">
                <div className="text-center">
                    <h1 className="text-4xl font-bold tracking-tight sm:text-6xl text-custom-gradient">
                        De la photo du planning à l’agenda, en un geste.
                    </h1>
                    <p className="mt-6 text-lg leading-8 text-[var(--text-secondary)]">
                        Scannez un planning Pacific, corrigez si besoin, exportez en .ICS ou ajoutez directement à Apple Calendar et Google Agenda.
                    </p>
                    <div className="mt-10 flex items-center justify-center gap-x-6">
                        <button onClick={() => scrollToSection('contact')} className="rounded-md bg-custom-gradient px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-opacity">
                            Rejoindre la liste d’attente
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;