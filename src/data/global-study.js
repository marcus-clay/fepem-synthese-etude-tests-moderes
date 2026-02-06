export const missionData = {
  title: 'Recherche Utilisateur : Mon Emploi Direct',
  subtitle: 'Application FEPEM de mise en relation Particulier Employeur / Salarié',
  context: `La FEPEM (Fédération des Particuliers Employeurs de France) développe l'application mobile "Mon Emploi Direct" pour faciliter la mise en relation entre les salariés du secteur de l'emploi à domicile et les particuliers employeurs. Cette étude de recherche utilisateur a été commanditée pour valider les hypothèses produit et identifier les points de friction avant le lancement prévu fin février 2026.`,
  objectifs: [
    'Comment les utilisateurs perçoivent-ils la proposition de valeur de l\'application ?',
    'Quels sont les principaux points de friction dans le parcours utilisateur ?',
    'Les utilisateurs parviennent-ils à trouver et contacter un profil pertinent ?',
    'La distinction Suggestions/Candidats est-elle comprise ?',
    'La terminologie métier est-elle adaptée aux différents segments ?',
  ],
  campagnes: [
    {
      id: 'moderes',
      label: 'Tests Modérés',
      description: 'Tests qualitatifs semi-dirigés en visioconférence avec protocole Think Aloud.',
      stats: [
        { value: '7', label: 'participants' },
        { value: '11', label: 'hypothèses' },
        { value: '77 min', label: 'durée moyenne' },
      ],
      link: '/tests-moderes',
      status: 'complete',
    },
    {
      id: 'non-moderes',
      label: 'Tests Non-Modérés',
      description: 'Tests quantitatifs à distance sur plateforme Lookback avec tâches et échelles.',
      stats: [
        { value: '30', label: 'participants ciblés' },
        { value: '3', label: 'segments' },
        { value: '20-25 min', label: 'durée cible' },
      ],
      link: '/tests-non-moderes',
      status: 'in-progress',
    },
  ],
};

export const globalInsights = [
  {
    title: 'Modèle marketplace inadapté',
    text: 'Les relations d\'emploi à domicile durent en moyenne 5 à 7 ans. Le modèle marketplace transactionnel est incompatible avec des relations de confiance longue durée.',
  },
  {
    title: 'Mobile uniquement rédhibitoire',
    text: 'Les PE sérieux recrutent sur ordinateur avec méthode. Le format mobile-only exclut le segment le plus exigeant et le plus engagé dans la qualité du recrutement.',
  },
  {
    title: 'Vérification des profils critique',
    text: 'Risque réputationnel majeur si des faux profils apparaissent. Les PE confient la sécurité de proches vulnérables à ces candidats, la confiance est non négociable.',
  },
];

export const methodologieComparaison = [
  { critere: 'Type', modere: 'Qualitatif semi-dirigé', nonModere: 'Quantitatif à distance' },
  { critere: 'Format', modere: 'Visioconférence individuelle', nonModere: 'Plateforme Lookback' },
  { critere: 'Protocole', modere: 'Think Aloud + Observation', nonModere: 'Tâches + Échelles (SUS, SEQ)' },
  { critere: 'Participants', modere: '7 (4 PE, 3 SPE)', nonModere: '30 ciblés (3 segments)' },
  { critere: 'Durée session', modere: '45-60 min', nonModere: '20-25 min' },
  { critere: 'Objectif', modere: 'Comprendre le pourquoi', nonModere: 'Mesurer le combien' },
];
