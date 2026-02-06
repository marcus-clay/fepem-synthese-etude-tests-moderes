import { FEPEM } from '../design/tokens';

export const archetypes = [
  {
    id: 'spe-precaire',
    name: 'SPE Précaire',
    subtitle: 'Kidisti',
    description: 'Cherche la stabilité et la sécurité administrative. A besoin de documentation officielle pour France Travail.',
    need: 'Certitude et structure',
    frustration: 'Incertitude sur les engagements',
    quote: 'Je reste là-bas ou je rentre chez moi ? J\'ai besoin du contrat pour France Travail.',
    color: FEPEM.colors.error
  },
  {
    id: 'spe-multi',
    name: 'SPE Multi-clients',
    subtitle: 'Mégane',
    description: 'Enchaîne les missions courtes, optimise son planning. Fonctionne sans contrat formel.',
    need: 'Flexibilité et volume',
    frustration: 'Peu de frustrations majeures',
    quote: 'L\'application est très bien développée, elle est claire.',
    color: FEPEM.colors.success
  },
  {
    id: 'pe-aidant',
    name: 'PE Aidant familial',
    subtitle: 'Isabelle',
    description: 'Cherche pour un proche vulnérable, pas pour soi. Approche méthodique et prudente.',
    need: 'Confiance et vérification',
    frustration: 'Absence de parcours dédié',
    quote: 'Ce n\'est pas pour moi, c\'est pour mes parents.',
    color: FEPEM.colors.gold
  },
  {
    id: 'pe-expert',
    name: 'PE Expert',
    subtitle: 'Véronique',
    description: 'Connaît le secteur, a des exigences élevées. Refuse les outils simplifiés.',
    need: 'Outils complets de recrutement',
    frustration: 'Format mobile-only rédhibitoire',
    quote: 'On ne recrute pas sur un portable la personne qui va s\'occuper de la prunelle de leurs yeux.',
    color: FEPEM.colors.purple
  },
  {
    id: 'pe-institutionnel',
    name: 'PE Institutionnel',
    subtitle: 'Anne-Sophie',
    description: 'Responsable régionale FEPEM. Porte la responsabilité de la crédibilité institutionnelle et de l\'adaptation locale.',
    need: 'Protection de la marque',
    frustration: 'Responsabilité institutionnelle',
    quote: 'Ce sera une vraie plus-value pour notre secteur, si les profils sont vérifiés.',
    color: FEPEM.colors.purpleLight
  }
];

export const archetypesDetailData = {
  'spe-precaire': {
    segment: 'SPE',
    participants: 'Kidisti, Daniel',
    profileDescription: 'En situation de vulnérabilité (immigration récente, formation en cours, précarité financière). Cherche avant tout la stabilité et la sécurisation.',
    objectifReel: 'Prouver son existence administrative, obtenir un contrat officiel, sécuriser un revenu stable.',
    modeleMental: 'L\'app devrait me donner UNE réponse claire, pas des options à comparer. Je n\'ai pas le luxe de négocier ou d\'attendre.',
    parcoursType: 'Inscription → Recherche immédiate → Blocage sur compréhension → Anxiété sur incertitude → Abandon ou persistence sans confiance',
    needsHierarchy: [
      { label: 'Documentation officielle', level: 100 },
      { label: 'Accessibilité physique (transport)', level: 80 },
      { label: 'Relation de confiance', level: 60 },
      { label: 'Optimisation salaire', level: 30 }
    ],
    surfaceFrustrations: [
      { participant: 'Kidisti', text: 'Le bouton est invisible' },
      { participant: 'Daniel', text: 'J\'ai confondu les profils' }
    ],
    deepFrustrations: [
      { participant: 'Kidisti', text: 'Besoin de prouver à France Travail qu\'elle travaille. Sans contrat, risque de révocation de statut. Sa priorité est la certitude d\'un emploi, avant la qualité de l\'emploi.' },
      { participant: 'Daniel', text: 'Remise en question de sa propre valeur. En réalisant son erreur, il a intériorisé la faute plutôt que de la rattacher à l\'interface : "peut-être que je ne suis pas assez intelligent pour ce métier".' }
    ],
    mentalModelGap: [
      { participant: 'Kidisti', attente: 'Certitude d\'emploi immédiate', realite: 'Marketplace à naviguer', impact: 'Paralysie, anxiété' },
      { participant: 'Daniel', attente: 'Clarté sur son rôle', realite: 'Confusion PE/SPE', impact: 'Effondrement de confiance' }
    ],
    verbatims: [
      { text: 'Je reste là-bas ou je rentre chez moi ? C\'est pas clair. J\'ai besoin du contrat pour France Travail', author: 'Kidisti' },
      { text: 'Selon moi les personnes comme Jean Martin c\'est comme moi', author: 'Daniel' },
      { text: 'Le moral déjà, je suis pas bien déjà dans le moral', author: 'Daniel' }
    ],
    signalsToExplore: [
      'La langue crée une exclusion silencieuse : Kidisti passe à l\'anglais, ne demande pas d\'aide. L\'accessibilité linguistique constitue un prérequis pour le fonctionnement du modèle.',
      'L\'application propose de la mise en relation alors que les SPE vulnérables cherchent avant tout la sécurisation d\'un emploi.',
      'La confusion PE/SPE entraîne une intériorisation de l\'erreur : Daniel s\'est blâmé lui-même plutôt que de remettre en cause l\'interface.'
    ],
    testImage: '/images/images tests/img-entretien-kidisti-01.png'
  },
  'spe-multi': {
    segment: 'SPE',
    participants: 'Mégane',
    profileDescription: 'Expérimentée (8+ ans), autonome, organisée. Fonctionne en mode indépendant avec plusieurs clients. Optimise son planning et ses revenus.',
    objectifReel: 'Maximiser l\'efficacité personnelle, enchaîner les missions, minimiser les temps de trajet.',
    modeleMental: 'L\'app est un outil professionnel pour gérer mon activité. Je compare, je choisis, je décide.',
    parcoursType: 'Inscription rapide → Navigation fluide → Sélection multi-critères → Contact direct → Négociation autonome',
    needsHierarchy: [
      { label: 'Efficacité (géolocalisation, planning)', level: 100 },
      { label: 'Autonomie (choix, flexibilité)', level: 80 },
      { label: 'Revenu', level: 55 },
      { label: 'Réputation', level: 30 }
    ],
    surfaceFrustrations: [
      { participant: 'Mégane', text: 'J\'ai besoin de géolocalisation' }
    ],
    deepFrustrations: [
      { participant: 'Mégane', text: 'Perte de contrôle et d\'autonomie. Elle optimise sa vie (plusieurs clients, temps de trajet minimal). Sans géolocalisation, elle est à la merci de la logistique employeur.' }
    ],
    mentalModelGap: [
      { participant: 'Mégane', attente: 'Outils d\'optimisation', realite: 'Interface marketplace', impact: 'Satisfaction (seule utilisatrice satisfaite)' }
    ],
    verbatims: [
      { text: 'L\'application est très bien développée, elle est claire, on a le strict minimum dont on a besoin', author: 'Mégane' },
      { text: 'Au moins avoir le nom de la rue pour calculer la distance', author: 'Mégane' }
    ],
    signalsToExplore: [
      'La géolocalisation est un besoin universel : tous les participants sauf 2 la demandent.',
      'Le modèle marketplace fonctionne UNIQUEMENT pour ce profil multi-clients transactionnel.',
      'Mégane est la seule satisfaite, ce qui valide que l\'app est conçue pour ce seul segment.'
    ],
    testImage: '/images/images tests/img-entretien-megane-01.png'
  },
  'pe-aidant': {
    segment: 'PE',
    participants: 'Isabelle',
    profileDescription: 'Recrute pour un proche vulnérable (parents âgés, personne en situation de handicap). Porte la responsabilité émotionnelle et pratique des soins.',
    objectifReel: 'Protéger un proche vulnérable, trouver quelqu\'un de confiance, se décharger de la culpabilité.',
    modeleMental: 'Je ne recrute pas un employé, je confie la sécurité de quelqu\'un que j\'aime. J\'ai besoin de garanties, pas de suggestions.',
    parcoursType: 'Recherche avec critères précis → Frustration sur manque de vérification → Comparaison manuelle → Hésitation → Contact prudent → Rencontre avant décision',
    needsHierarchy: [
      { label: 'Sécurité du proche', level: 100 },
      { label: 'Confiance dans le candidat', level: 85 },
      { label: 'Compatibilité pratique', level: 55 },
      { label: 'Prix', level: 25 }
    ],
    surfaceFrustrations: [
      { participant: 'Isabelle', text: 'Je veux des profils vérifiés' }
    ],
    deepFrustrations: [
      { participant: 'Isabelle', text: 'Responsabilité pour la sécurité de ses parents vulnérables. Elle externalise les soins de personnes dont elle a la charge, ce qui donne au recrutement une dimension personnelle forte.' }
    ],
    mentalModelGap: [
      { participant: 'Isabelle', attente: 'Profils vérifiés, pré-sélectionnés', realite: 'Matching algorithmique', impact: 'Méfiance' }
    ],
    verbatims: [
      { text: 'Ce n\'est pas pour moi, c\'est pour mes parents', author: 'Isabelle' },
      { text: 'Je ne rentrerai en contact avec personne sans vérification', author: 'Véronique' }
    ],
    signalsToExplore: [
      'Le cas de l\'aidant n\'est pas géré : Isabelle cherche pour ses parents, pas pour elle.',
      'La vérification des profils est une condition sine qua non pour les PE sérieux.',
      'Les relations long terme nécessitent un socle de confiance. Le modèle marketplace tel qu\'il est conçu répond difficilement à ce besoin.'
    ],
    testImage: '/images/images tests/img-entretien-isabelle-03.png'
  },
  'pe-expert': {
    segment: 'PE',
    participants: 'Véronique',
    profileDescription: 'Expérimentée dans le recrutement, méthodique, exigeante. Compare systématiquement les candidats, prend des notes, réfléchit avant de décider.',
    objectifReel: 'Recruter de manière professionnelle et méthodique, avec les mêmes outils que les institutions.',
    modeleMental: 'Le recrutement est un processus sérieux qui nécessite du temps, de l\'espace (desktop), et des outils de comparaison avancés.',
    parcoursType: 'Analyse des besoins → Publication détaillée → Filtrage avancé → Comparaison multi-critères → Contact direct (tél/email) → Entretien structuré → Décision',
    needsHierarchy: [
      { label: 'Contrôle et due diligence', level: 100 },
      { label: 'Information complète', level: 85 },
      { label: 'Contact direct', level: 65 },
      { label: 'Conformité légale', level: 40 }
    ],
    surfaceFrustrations: [
      { participant: 'Véronique', text: 'Mobile uniquement est inacceptable' }
    ],
    deepFrustrations: [
      { participant: 'Véronique', text: 'Perte de contrôle dans un processus à enjeux élevés. Le mobile force le mode "spontané, instantané" alors qu\'elle veut être intentionnelle et méthodique.' }
    ],
    mentalModelGap: [
      { participant: 'Véronique', attente: 'Outils niveau institutionnel, desktop', realite: 'App mobile grand public', impact: 'Refus d\'utilisation' }
    ],
    verbatims: [
      { text: 'On ne recrute pas sur un portable la personne qui va s\'occuper de la prunelle de leurs yeux', author: 'Véronique' },
      { text: 'C\'est rédhibitoire si c\'est sur application mobile seulement', author: 'Véronique' },
      { text: 'Vous avez fait du bon boulot', author: 'Véronique' }
    ],
    signalsToExplore: [
      'Mobile-only est une barrière pour les PE sérieux : la plateforme exclut le segment le plus sérieux sur la qualité du recrutement.',
      'Les PE attendent des fonctionnalités de niveau institutionnel : Véronique compare à France Travail (service public).',
      'L\'incertitude post-candidature crée de l\'anxiété : l\'app ne clarifie pas le parcours après la mise en contact.'
    ],
    testImage: '/images/images tests/img-entretien-veronique-02.png'
  },
  'pe-institutionnel': {
    segment: 'PE',
    participants: 'Anne-Sophie',
    profileDescription: 'Responsable régionale FEPEM. Porte la responsabilité de la crédibilité institutionnelle et de l\'adaptation locale (spécificités DOM-TOM).',
    objectifReel: 'Déployer un outil crédible qui renforce la marque FEPEM, adapter aux spécificités locales.',
    modeleMental: 'L\'app représente la FEPEM. Si elle échoue (faux profils, bugs), c\'est la réputation de l\'institution qui est en jeu.',
    parcoursType: 'Évaluation critique → Identification des risques → Test terrain → Feedback structuré → Recommandations conditionnelles',
    needsHierarchy: [
      { label: 'Protection de la marque', level: 100 },
      { label: 'Adaptation locale', level: 75 },
      { label: 'Accessibilité populations diverses', level: 60 },
      { label: 'Fonctionnalités', level: 35 }
    ],
    surfaceFrustrations: [
      { participant: 'Anne-Sophie', text: 'Les checkboxes sont confuses' }
    ],
    deepFrustrations: [
      { participant: 'Anne-Sophie', text: 'Responsabilité institutionnelle pour la marque FEPEM. Elle a vécu l\'échec de Pôle Emploi avec les faux profils. Sa préoccupation : "Si on lance sans vérification, je serai tenue responsable de ne pas avoir averti."' }
    ],
    mentalModelGap: [
      { participant: 'Anne-Sophie', attente: 'Responsabilité institutionnelle', realite: 'Startup thinking', impact: 'Inquiétude pour la marque' }
    ],
    verbatims: [
      { text: 'Ce sera une vraie plus-value pour notre secteur', author: 'Anne-Sophie' },
      { text: 'J\'ai pas compris ce que c\'était mes suggestions', author: 'Anne-Sophie' }
    ],
    signalsToExplore: [
      'L\'ambiguïté visuelle des checkboxes est un symptôme : 5 participants pensent qu\'elles sont déjà cochées. L\'interface échoue sous charge cognitive.',
      'Le mot de passe comme point de friction : 5/7 participants ont eu des problèmes. Symptôme de marges de sécurité insuffisantes.',
      'Anne-Sophie mentionne l\'illettrisme à La Réunion : l\'accessibilité linguistique constitue un prérequis pour le déploiement dans les DOM-TOM.'
    ],
    testImage: '/images/images tests/img-entretien-anne-sophie-02.png'
  }
};
