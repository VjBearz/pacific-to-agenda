
import React from 'react';

const stats = [
    { name: 'Du scan à l\'aperçu', value: '< 20 s' },
    { name: 'Extraction correcte (sans correction)', value: '≥ 85%' },
    { name: 'Compatibilité .ics', value: 'Apple/Google/Outlook' },
];

const KPIs: React.FC = () => {
    return (
        <div className="py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
                    {stats.map((stat) => (
                        <div key={stat.name} className="mx-auto flex max-w-xs flex-col gap-y-4">
                            <dt className="text-base leading-7 text-[var(--text-secondary)]">{stat.name}</dt>
                            <dd className="order-first text-3xl font-semibold tracking-tight text-custom-gradient sm:text-5xl">
                                {stat.value}
                            </dd>
                        </div>
                    ))}
                </dl>
            </div>
        </div>
    );
};

export default KPIs;
