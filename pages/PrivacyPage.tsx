
import React from 'react';
import { Link } from 'react-router-dom';

const PrivacyPage: React.FC = () => {
  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <Link to="/" className="text-base font-semibold leading-7 text-[var(--accent-ico)]">&larr; Retour à l'accueil</Link>
          <h2 className="mt-2 text-4xl font-bold tracking-tight sm:text-6xl text-custom-gradient">Politique de Confidentialité</h2>
          <p className="mt-6 text-lg leading-8 text-[var(--text-secondary)]">
            Votre vie privée est notre priorité. Voici comment nous traitons vos données.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl text-base leading-7 text-[var(--text-secondary)]">
          <h3 className="text-2xl font-bold tracking-tight text-[var(--text-primary)]">1. Traitement Local par Défaut</h3>
          <p className="mt-4">
            L'application "Pacific to Agenda" est conçue pour fonctionner entièrement sur votre appareil. Par défaut, aucune donnée de vos plannings (images, captures d'écran, ou données extraites) ne quitte votre téléphone. L'analyse d'image (OCR) et la génération des événements de calendrier sont effectuées localement.
          </p>
          <h3 className="mt-8 text-2xl font-bold tracking-tight text-[var(--text-primary)]">2. Options Cloud (Fonctionnalité future)</h3>
          <p className="mt-4">
            Nous pourrions proposer des fonctionnalités optionnelles basées sur le cloud, comme la sauvegarde de vos imports. Si vous activez ces fonctionnalités, vos données seront chiffrées en transit et au repos. Nous nous engageons à une politique de suppression immédiate des données temporaires après traitement.
          </p>
          <h3 className="mt-8 text-2xl font-bold tracking-tight text-[var(--text-primary)]">3. Durée de Conservation</h3>
          <p className="mt-4">
            Puisque les données sont traitées localement, c'est vous qui contrôlez leur conservation. L'historique des imports est stocké sur votre appareil et peut être supprimé à tout moment depuis les paramètres de l'application. Par défaut, la durée de conservation est infinie tant que l'application est installée, mais nous n'avons aucun accès à ces informations.
          </p>
          <h3 className="mt-8 text-2xl font-bold tracking-tight text-[var(--text-primary)]">4. Contact DPO</h3>
          <p className="mt-4">
            Pour toute question relative à la protection de vos données, vous pouvez contacter notre Délégué à la Protection des Données (DPO) à l'adresse suivante : <a href="mailto:privacy@pacific-to-agenda.app" className="text-[var(--accent-ico)] hover:underline">privacy@pacific-to-agenda.app</a>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPage;
