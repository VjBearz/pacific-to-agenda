
import React from 'react';
import { Link } from 'react-router-dom';
import { faqData } from '../constants';

const FAQPage: React.FC = () => {
  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl divide-y divide-gray-900/10 dark:divide-white/10">
          <div className="mb-12">
            <Link to="/" className="text-base font-semibold leading-7 text-[var(--accent-ico)]">&larr; Retour à l'accueil</Link>
            <h2 className="mt-2 text-4xl font-bold tracking-tight sm:text-5xl text-custom-gradient">
              Questions Fréquemment Posées
            </h2>
          </div>
          <dl className="mt-10 space-y-8 divide-y divide-gray-900/10 dark:divide-white/10">
            {faqData.map((faq) => (
              <div key={faq.question} className="pt-8">
                <dt className="text-lg font-semibold leading-7 text-[var(--text-primary)]">{faq.question}</dt>
                <dd className="mt-2 text-base leading-7 text-[var(--text-secondary)]">{faq.answer}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};

export default FAQPage;
