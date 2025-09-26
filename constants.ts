
import type { FAQItem } from './types';

export const faqData: FAQItem[] = [
    {
        question: 'Les repos (RP) sont-ils reconnus ?',
        answer: 'Oui, l\'application identifie automatiquement les missions de type "RPxx" et les convertit en un événement "Repos (RPxx)" qui occupe la journée entière dans votre agenda, du matin au soir, en se basant sur le fuseau horaire local (Europe/Paris).',
    },
    {
        question: 'Puis-je éditer les informations avant d’importer ?',
        answer: 'Absolument. Après le scan, un tableau récapitulatif vous permet de vérifier et de modifier chaque détail : date, heure de début, heure de fin, nom de la mission et lieu. L\'application signale également les conflits potentiels, comme des événements qui se chevauchent.',
    },
    {
        question: 'Mes données de planning sortent-elles de l’application ?',
        answer: 'Par défaut, non. La confidentialité est notre priorité. Tout le traitement, de l\'analyse de l\'image (OCR) à la génération du calendrier, se fait en local sur votre appareil. Aucune image ou donnée de planning n\'est envoyée sur nos serveurs.',
    },
    {
        question: 'Comment les fuseaux horaires sont-ils gérés ?',
        answer: 'L\'application utilise par défaut le fuseau horaire Europe/Paris pour interpréter les heures de votre planning. Lors de l\'export en format .ics, les heures sont converties en UTC (Temps Universel Coordonné) pour garantir une compatibilité maximale et un affichage correct sur tous les appareils et services de calendrier.',
    },
    {
        question: 'L\'application fonctionne-t-elle avec Microsoft Outlook ?',
        answer: 'Oui. Vous pouvez exporter votre planning au format .ics depuis l\'application, puis importer ce fichier directement dans votre calendrier Microsoft Outlook, que ce soit sur l\'application de bureau ou la version web.',
    },
];
