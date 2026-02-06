export const mentalModelPE = {
  title: 'Modèle mental — Parcours Particulier Employeur',
  subtitle: 'Besoins identifiés par étape du parcours PE. Les points rouges signalent les besoins non satisfaits par l\'application.',
  steps: [
    {
      id: 'discover',
      label: 'Découvrir l\'app',
      sublabel: 'Premier contact',
      needs: [
        { text: 'Comprendre la proposition de valeur', validated: false },
        { text: 'Identifier si le service correspond à ma situation', validated: false },
        { text: 'Distinguer cette app des plateformes type LeBonCoin', validated: false },
      ],
      insight: 'La valeur ajoutée vs. les canaux habituels n\'est pas perçue',
    },
    {
      id: 'signup',
      label: 'Créer un compte',
      sublabel: 'Inscription',
      needs: [
        { text: 'Un onboarding clair et rapide', validated: true },
        { text: 'Voir les exigences MDP clairement', validated: false },
        { text: 'Confirmation email simple', validated: true },
      ],
      insight: 'L\'onboarding est compris mais les exigences MDP sont cachées par le div beige',
    },
    {
      id: 'create-ad',
      label: 'Créer une annonce',
      sublabel: 'Publication',
      needs: [
        { text: 'Choisir le type de besoin clairement', validated: false },
        { text: 'Définir les créneaux et la planification', validated: false },
        { text: 'Décrire le besoin simplement', validated: false },
        { text: 'Comprendre la terminologie des situations', validated: false },
      ],
      insight: 'La création d\'annonce est longue et confuse : terminologie, planification, situations médicales',
    },
    {
      id: 'explore',
      label: 'Explorer les candidats',
      sublabel: 'Suggestions / Candidats',
      needs: [
        { text: 'Distinguer Suggestions vs Candidats', validated: false },
        { text: 'Comprendre le matching proposé', validated: false },
        { text: 'Filtrer par critères pertinents', validated: true },
      ],
      insight: 'Confusion Suggestions/Candidats : "J\'ai pas compris les suggestions avec le message à envoyer"',
    },
    {
      id: 'view-profile',
      label: 'Consulter un profil',
      sublabel: 'Évaluation',
      needs: [
        { text: 'Voir les informations essentielles rapidement', validated: true },
        { text: 'Évaluer la compatibilité du candidat', validated: false },
        { text: 'Accéder à des références ou avis', validated: false },
      ],
      insight: 'Les profils manquent de contexte pour juger de la fiabilité',
    },
    {
      id: 'contact',
      label: 'Prendre contact',
      sublabel: 'Mise en relation',
      needs: [
        { text: 'Envoyer un premier message personnalisé', validated: false },
        { text: 'Comprendre le statut après contact', validated: false },
        { text: 'Avoir une communication sécurisée', validated: true },
      ],
      insight: 'Le message automatique déshumanise le premier contact',
    },
  ],
};

export const mentalModelSPE = {
  title: 'Modèle mental — Parcours Salarié du Particulier Employeur',
  subtitle: 'Besoins identifiés par étape du parcours SPE. Les points rouges signalent les besoins non satisfaits par l\'application.',
  steps: [
    {
      id: 'discover',
      label: 'Découvrir l\'app',
      sublabel: 'Premier contact',
      needs: [
        { text: 'Comprendre la proposition de valeur', validated: false },
        { text: 'Identifier si le service correspond à ma situation', validated: false },
        { text: 'Comprendre la distinction PE/SPE', validated: false },
      ],
      insight: 'Daniel confond employeurs et candidats : "Tous les deux sont travail"',
    },
    {
      id: 'signup',
      label: 'Créer un compte',
      sublabel: 'Inscription',
      needs: [
        { text: 'Un onboarding clair et rapide', validated: true },
        { text: 'Comprendre les étapes du processus', validated: true },
        { text: 'Voir les exigences MDP clairement', validated: false },
        { text: 'Ne pas avoir à fournir trop d\'infos d\'emblée', validated: false },
      ],
      insight: 'L\'onboarding est compris mais les exigences MDP sont cachées',
    },
    {
      id: 'profile',
      label: 'Compléter le profil',
      sublabel: 'Configuration',
      needs: [
        { text: 'Comprendre la terminologie métier', validated: false },
        { text: 'Gérer mes disponibilités facilement', validated: false },
        { text: 'Définir mon périmètre géographique', validated: false },
        { text: 'Choisir clairement entre brut et net', validated: false },
      ],
      insight: 'Terminologie métier incomprise, planification confuse',
    },
    {
      id: 'search-offers',
      label: 'Rechercher des offres',
      sublabel: 'Exploration',
      needs: [
        { text: 'Comprendre les offres d\'employeurs', validated: false },
        { text: 'Évaluer la distance et la faisabilité logistique', validated: false },
        { text: 'Identifier les offres qui correspondent à ma situation', validated: false },
      ],
      insight: 'Sans géolocalisation, impossible d\'évaluer la faisabilité du déplacement',
    },
    {
      id: 'view-offer',
      label: 'Consulter une offre',
      sublabel: 'Évaluation',
      needs: [
        { text: 'Comprendre les attentes de l\'employeur', validated: false },
        { text: 'Évaluer la distance et le temps de trajet', validated: false },
        { text: 'Voir les conditions clairement', validated: false },
      ],
      insight: 'Les informations sont insuffisantes pour prendre une décision éclairée',
    },
    {
      id: 'apply',
      label: 'Postuler',
      sublabel: 'Candidature',
      needs: [
        { text: 'Trouver le bouton Postuler', validated: false },
        { text: 'Savoir ce qui se passe après', validated: false },
        { text: 'Avoir une confirmation claire', validated: false },
      ],
      insight: 'Le bouton Postuler est invisible et l\'incertitude post-candidature génère de l\'anxiété',
    },
  ],
};
