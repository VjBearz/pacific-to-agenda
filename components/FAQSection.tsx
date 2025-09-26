
import React from 'react';
import { Link } from 'react-router-dom';
import { faqData } from '../constants';

const FAQSection: React.FC = () => {
  return (
    <section id="faq" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl divide-y divide-gray-900/10 dark:divide-white/10">
          <h2 className="text-2xl font-bold leading-10 tracking-tight text-custom-gradient">Questions fréquentes</h2>
          <dl className="mt-10 space-y-8 divide-y divide-gray-900/10 dark:divide-white/10">
            {faqData.slice(0, 5).map((faq) => (
                <div key={faq.question} className="pt-8">
                    <dt className="text-lg font-semibold leading-7 text-[var(--text-primary)]">{faq.question}</dt>
                    <dd className="mt-2 text-base leading-7 text-[var(--text-secondary)]">{faq.answer}</dd>
                </div>
            ))}
          </dl>
          <div className="pt-8 text-center">
            <Link to="/faq" className="text-sm font-semibold leading-6 text-[var(--accent-ico)]">
              Voir toutes les questions <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
