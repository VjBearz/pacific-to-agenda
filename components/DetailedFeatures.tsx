import React from 'react';

const features = [
  {
    name: 'OCR on-device',
    description: 'Utilise les technologies natives (iOS Vision / Android ML Kit) pour une analyse rapide et privée, sans envoyer vos données sur un serveur.',
    icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 11a8 8 0 0 1 8-8V2a9.982 9.982 0 0 0-11 11.026"/><path d="M20 11a8 8 0 0 0-8-8V2c4.418 0 8 3.582 8 8h1a9.982 9.982 0 0 1-11 11.026"/><path d="m5 13 4 4L19 7"/></svg>
    ),
  },
  {
    name: 'Reconnaissance intelligente',
    description: 'Détecte les jours (Lu, Ma...), les missions (Axxx*, RPxx), les lieux (FBG, STG...) et les horaires au format HH:MM.',
    icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15.5 16.5c1.5-1.5 2-3.5 1-5-1-1.5-3-2-5-1-1.5 1-2 3-1 5 1 1.5 3 2 5 1z"/><path d="m22 2-4.5 4.5"/><path d="M10 10.5a.5.5 0 1 0-1 0 .5.5 0 0 0 1 0z"/><path d="M14 14.5a.5.5 0 1 0-1 0 .5.5 0 0 0 1 0z"/></svg>
    ),
  },
  {
    name: 'Éditeur tabulaire complet',
    description: 'Triez, recherchez et modifiez chaque événement avant l\'import. Un bouton "RP → Repos" permet de corriger une mission en un clic.',
    icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line></svg>
    ),
  },
  {
    name: 'Exports flexibles',
    description: 'Générez des fichiers .ics (VCALENDAR 2.0) avec conversion UTC, ou utilisez l\'ajout natif pour une intégration parfaite à vos agendas mobiles.',
    icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>
    ),
  },
];

const DetailedFeatures: React.FC = () => {
  return (
    <section id="features" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-base font-semibold leading-7 text-custom-gradient">Fonctionnalités</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-[var(--text-primary)] sm:text-4xl">Tout ce qu'il vous faut</p>
              <p className="mt-6 text-lg leading-8 text-[var(--text-secondary)]">
                Des outils puissants pour une gestion de planning sans faille, conçus avec et pour les agents de terrain.
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-[var(--text-secondary)] lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-[var(--text-primary)]">
                        <div className="absolute left-1 top-1 h-5 w-5 text-[var(--accent-ico)]">
                           {feature.icon}
                        </div>
                      {feature.name}
                    </dt>
                    <dd className="inline">: {feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <img
            src="https://picsum.photos/seed/pacificdark/1200/1000"
            alt="Product screenshot"
            className="w-full max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 md:-ml-4 lg:-ml-0"
            width="2432"
            height="1442"
          />
        </div>
      </div>
    </section>
  );
};

export default DetailedFeatures;