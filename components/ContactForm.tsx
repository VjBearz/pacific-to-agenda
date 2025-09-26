
import React, { useState } from 'react';

const ContactForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [agreed, setAgreed] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      setError('Veuillez entrer une adresse e-mail valide.');
      return;
    }
    if (!agreed) {
      setError('Vous devez accepter les conditions pour continuer.');
      return;
    }
    // In a real app, you would send this to a backend service like Mailchimp.
    console.log({ email, agreed });
    setSubmitted(true);
  };

  return (
    <section id="contact" className="relative isolate overflow-hidden py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
          <div className="max-w-xl lg:max-w-lg">
            <h2 className="text-3xl font-bold tracking-tight text-custom-gradient sm:text-4xl">Soyez le premier informé.</h2>
            <p className="mt-4 text-lg leading-8 text-[var(--text-secondary)]">
              Rejoignez notre liste d'attente pour recevoir un accès anticipé à la bêta (TestFlight/Closed Track) et être notifié du lancement officiel.
            </p>
          </div>
          {submitted ? (
            <div className="flex items-center justify-center rounded-2xl bg-[var(--card-bg)] p-8 shadow-lg">
                <div className="text-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="mx-auto h-12 w-12 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <h3 className="mt-4 text-2xl font-bold text-[var(--text-primary)]">Merci !</h3>
                    <p className="mt-2 text-base text-[var(--text-secondary)]">Votre inscription a été enregistrée. Nous vous tiendrons au courant.</p>
                </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                    <label htmlFor="email" className="sr-only">Email</label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        autoComplete="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full rounded-md border-0 bg-[var(--card-bg)] px-3.5 py-2 text-[var(--text-primary)] shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-600 focus:ring-2 focus:ring-inset focus:ring-[var(--accent-ico)] sm:text-sm sm:leading-6"
                        placeholder="votre.email@example.com"
                    />
                </div>
                <div className="flex items-start">
                    <div className="flex h-6 items-center">
                        <input
                            id="consent"
                            name="consent"
                            type="checkbox"
                            checked={agreed}
                            onChange={(e) => setAgreed(e.target.checked)}
                            className="h-4 w-4 rounded border-gray-300 text-[var(--accent-ico)] focus:ring-[var(--accent-ico)]"
                        />
                    </div>
                    <div className="ml-3 text-sm leading-6">
                        <p className="text-[var(--text-secondary)]">
                            J'accepte de recevoir des e-mails concernant le lancement de l'application.
                        </p>
                    </div>
                </div>
                {error && <p className="text-sm text-red-500">{error}</p>}
                <div>
                    <button
                        type="submit"
                        className="w-full rounded-md bg-custom-gradient px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-opacity"
                    >
                        Rejoindre la liste d'attente
                    </button>
                </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
