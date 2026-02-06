import React, { useState, useRef, useEffect } from 'react';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell, RadarChart, Radar, PolarGrid, PolarAngleAxis, PolarRadiusAxis,
  LineChart, Line, Legend, Area, AreaChart
} from 'recharts';
import { 
  X, Menu, ChevronRight, ChevronDown, Users, AlertTriangle, CheckCircle, 
  XCircle, Clock, Target, Heart, Brain, Eye, MessageSquare, Zap, 
  TrendingUp, TrendingDown, Minus, ArrowRight, FileText, BarChart2,
  Grid, List, Filter, Search, ExternalLink, Bookmark, Share2
} from 'lucide-react';

// ============================================
// FEPEM DESIGN SYSTEM TOKENS
// ============================================
const FEPEM = {
  colors: {
    cream: '#FAF7F0',
    creamLight: '#FAF4EB',
    purple: '#4917E6',
    purpleLight: '#6B3FF5',
    purpleDark: '#170845',
    gold: '#FDCF7E',
    goldLight: '#FEE4B3',
    text: '#262624',
    textMuted: '#403F3C',
    textLight: '#6B6B68',
    success: '#22C55E',
    warning: '#F59E0B',
    error: '#EF4444',
    border: '#E5E2DB'
  }
};

// ============================================
// DATA
// ============================================
const hypothesesData = [
  { id: 'H1', name: 'Onboarding clair', status: 'partial', score: 60 },
  { id: 'H2', name: 'Parcours PE (<5min)', status: 'invalid', score: 20 },
  { id: 'H3', name: 'Parcours SPE (<5min)', status: 'partial', score: 50 },
  { id: 'H4', name: 'Prise de contact fluide', status: 'invalid', score: 25 },
  { id: 'H5', name: 'Infos profil justifiées', status: 'valid', score: 85 },
  { id: 'H6', name: 'Suggestions/Candidats compris', status: 'invalid', score: 15 },
  { id: 'H7', name: 'Obligatoire/plus tard compris', status: 'valid', score: 90 },
  { id: 'H8', name: 'Confiance annonce SPE', status: 'partial', score: 45 },
  { id: 'H9', name: 'Confiance profil candidat', status: 'invalid', score: 30 },
  { id: 'H10', name: 'Conformité annonce PE', status: 'partial', score: 55 },
  { id: 'H11', name: 'Critères filtre suffisants', status: 'invalid', score: 20 },
];

const panelData = [
  { id: '01', name: 'Kidisti', profile: 'Aide ménagère, arrivée récente', segment: 'SPE', duration: 127, status: 'complete' },
  { id: '02', name: 'Séverine', profile: 'Bénéficiaire PCH, maladie de Lyme', segment: 'PE', duration: 68, status: 'complete' },
  { id: '03', name: 'Daniel', profile: 'Aide-soignant en alternance', segment: 'SPE', duration: 67, status: 'interrupted' },
  { id: '04', name: 'Isabelle', profile: 'Ingénieur, aidante parents', segment: 'PE', duration: 60, status: 'complete' },
  { id: '05', name: 'Véronique', profile: 'Ancienne VP FEPEM', segment: 'PE', duration: 110, status: 'complete' },
  { id: '06', name: 'Mégane', profile: 'Aide ménagère, 8 ans exp.', segment: 'SPE', duration: 56, status: 'complete' },
  { id: '07', name: 'Anne-Sophie', profile: 'Responsable régionale FEPEM', segment: 'PE', duration: 54, status: 'complete' },
];

const issuesData = [
  { category: 'Bugs techniques', count: 4, severity: 'high', items: ['Exigences MDP masquées', 'Checkboxes ambiguës', 'Clavier numérique', 'Créneaux par défaut'] },
  { category: 'Quick wins', count: 5, severity: 'medium', items: ['Message automatique', 'Exigences MDP', 'Courriel → Email', 'Salaire brut/net', 'Bouton Postuler'] },
  { category: 'Problèmes UX', count: 6, severity: 'critical', items: ['Terminologie métier', 'Interface planification', 'Suggestions/Candidats', 'Confusion offres/profils', 'Aidants familiaux', 'Mobile-only'] },
  { category: 'Points positifs', count: 3, severity: 'positive', items: ['Interface agréable', 'Onboarding compris', 'Messagerie sécurisante'] },
];

const archetypes = [
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

const archetypesDetailData = {
  'spe-precaire': {
    segment: 'SPE',
    participants: 'Kidisti, Daniel',
    profileDescription: 'En situation de vulnérabilité (immigration récente, formation en cours, précarité financière). Cherche la stabilité et la sécurisation, pas l\'optimisation.',
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
      { participant: 'Kidisti', text: 'Angoisse existentielle de prouver à France Travail qu\'elle travaille. Sans contrat, risque de révocation de statut. Elle ne cherche pas le meilleur emploi, elle cherche LA certitude d\'un emploi.' },
      { participant: 'Daniel', text: 'Perte de dignité et remise en question de sa propre valeur. Quand il a réalisé son erreur, il ne s\'est pas dit "l\'interface est confuse", il s\'est dit "peut-être que je ne suis pas assez intelligent pour ce métier".' }
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
      'La langue crée une exclusion silencieuse — Kidisti passe à l\'anglais, ne demande pas d\'aide. L\'accessibilité linguistique est un bloqueur de business model.',
      'L\'app résout le mauvais problème pour les SPE vulnérables — ils cherchent la sécurité, pas le choix.',
      'La confusion PE/SPE provoque des crises identitaires — Daniel s\'est blâmé lui-même, pas l\'interface.'
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
      'La géolocalisation est un besoin universel — tous les participants sauf 2 la demandent.',
      'Le modèle marketplace fonctionne UNIQUEMENT pour ce profil multi-clients transactionnel.',
      'Mégane est la seule satisfaite — ce qui valide que l\'app est conçue pour ce seul segment.'
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
      { participant: 'Isabelle', text: 'Culpabilité et responsabilité pour la sécurité de ses parents vulnérables. Elle ne recrute pas un employé, elle externalise les soins de personnes qu\'elle aime.' }
    ],
    mentalModelGap: [
      { participant: 'Isabelle', attente: 'Profils vérifiés, pré-sélectionnés', realite: 'Matching algorithmique', impact: 'Méfiance' }
    ],
    verbatims: [
      { text: 'Ce n\'est pas pour moi, c\'est pour mes parents', author: 'Isabelle' },
      { text: 'Je ne rentrerai en contact avec personne sans vérification', author: 'Véronique' }
    ],
    signalsToExplore: [
      'Le cas de l\'aidant n\'est pas géré — Isabelle cherche pour ses parents, pas pour elle.',
      'La vérification des profils est une condition sine qua non pour les PE sérieux.',
      'Les relations long terme nécessitent de la confiance, pas des transactions — un modèle marketplace est inadéquat.'
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
      'Mobile-only est une barrière pour les PE sérieux — la plateforme exclut le segment le plus sérieux sur la qualité du recrutement.',
      'Les PE attendent des fonctionnalités de niveau institutionnel — Véronique compare à France Travail (service public).',
      'L\'incertitude post-candidature crée de l\'anxiété — l\'app ne clarifie pas le parcours après la mise en contact.'
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
      { participant: 'Anne-Sophie', text: 'Responsabilité institutionnelle pour la marque FEPEM. Elle a vécu l\'échec de Pôle Emploi avec les faux profils. Sa peur non dite : "Si on lance sans vérification, je serai tenue responsable de ne pas avoir averti."' }
    ],
    mentalModelGap: [
      { participant: 'Anne-Sophie', attente: 'Responsabilité institutionnelle', realite: 'Startup thinking', impact: 'Inquiétude pour la marque' }
    ],
    verbatims: [
      { text: 'Ce sera une vraie plus-value pour notre secteur', author: 'Anne-Sophie' },
      { text: 'J\'ai pas compris ce que c\'était mes suggestions', author: 'Anne-Sophie' }
    ],
    signalsToExplore: [
      'L\'ambiguïté visuelle des checkboxes est un symptôme — 5 participants pensent qu\'elles sont déjà cochées. L\'interface échoue sous charge cognitive.',
      'Le mot de passe comme point de friction — 5/7 participants ont eu des problèmes. Symptôme de marges de sécurité insuffisantes.',
      'Anne-Sophie mentionne l\'illettrisme à La Réunion — l\'accessibilité linguistique n\'est pas une feature, c\'est un bloqueur.'
    ],
    testImage: '/images/images tests/img-entretien-anne-sophie-02.png'
  }
};

const signals = [
  { name: 'Checkboxes pré-cochées', count: 5, type: 'bug', impact: 'high' },
  { name: 'Mot de passe masqué', count: 5, type: 'bug', impact: 'high' },
  { name: 'Géolocalisation demandée', count: 5, type: 'feature', impact: 'high' },
  { name: 'Vérification profils', count: 3, type: 'trust', impact: 'critical' },
  { name: 'Contact direct', count: 3, type: 'feature', impact: 'high' },
  { name: 'CV/Lettre motivation', count: 2, type: 'feature', impact: 'medium' },
];

const verbatims = [
  { author: 'Véronique', segment: 'PE', theme: 'Mobile', text: 'C\'est rédhibitoire si c\'est sur application mobile seulement.', impact: 'critical' },
  { author: 'Daniel', segment: 'SPE', theme: 'Confusion', text: 'Selon moi les personnes comme Jean Martin c\'est comme moi. Je me sens mal à l\'aise.', impact: 'critical' },
  { author: 'Kidisti', segment: 'SPE', theme: 'Sécurité', text: 'Je reste là-bas ou je rentre chez moi ? C\'est pas clair.', impact: 'high' },
  { author: 'Séverine', segment: 'PE', theme: 'Terminologie', text: 'C\'est trop vague, ça veut tout et rien dire.', impact: 'high' },
  { author: 'Anne-Sophie', segment: 'PE', theme: 'UX', text: 'J\'ai pas compris ce que c\'était mes suggestions.', impact: 'medium' },
  { author: 'Mégane', segment: 'SPE', theme: 'Positif', text: 'L\'application est très bien développée, elle est claire.', impact: 'positive' },
];

const insightsData = {
  pe: [
    {
      id: 'PE1',
      label: 'INSIGHT PE #1',
      title: 'Vocabulaire métier incompréhensible',
      probleme: 'Les termes \'aide à domicile\', \'aide ménagère\', \'assistance de vie\', \'dame de compagnie\' sont incompréhensibles pour certains PE.',
      consequence: 'Les utilisateurs ne savent pas quelle catégorie choisir. Pour certains, hésitent, font des erreurs, et perdent patience.',
      hypothesisType: 'hypothese',
      hypothesisId: 'H10',
      hypothesisLabel: 'H10 PARTIELLEMENT VALIDÉE',
      hypothesisStatus: 'partial',
      verbatims: [
        { text: 'C\'est trop vague, ça veut tout et rien dire', author: 'Séverine' },
        { text: 'Je ne comprends pas la différence entre aide ménagère et assistance de vie', author: 'Isabelle' }
      ],
      opportunites: [
        'Créer un assistant de sélection qui pose des questions simples sur les besoins réels plutôt que des catégories abstraites',
        'Proposer a minima la liste complète des métiers/sous-métier avec filtrage de recherche'
      ],
      screenshots: ['/images/Screenshot App Mobile MED - PE/1000136213.png']
    },
    {
      id: 'PE2',
      label: 'INSIGHT PE #2',
      title: 'Interface de choix jours/créneaux bloquante',
      probleme: 'L\'interface de sélection des créneaux et le concept \'flexible\' bloquent complètement le parcours de création d\'annonce.',
      consequence: 'Les PE passent beaucoup de temps à comprendre la mécanique fonctionnelle. Ralentit fortement le temps moyen de création d\'une annonce.',
      hypothesisType: 'hypothese',
      hypothesisId: 'H2',
      hypothesisLabel: 'H2 INVALIDÉE',
      hypothesisStatus: 'invalid',
      verbatims: [
        { text: 'Franchement, je ne comprends pas ce que je dois faire', author: 'Séverine' },
        { text: '\'Matinée\' était déjà sélectionnée, je n\'ai rien touché', author: 'Véronique' }
      ],
      opportunites: [
        'Revoir le pattern de sélection des jours et des créneaux',
        'Simplifier la logique de sélection. Clarifier la notion de "flexibilité"',
        'Repenser l\'objectif de cette étape — notamment pour des PE qui cherchent un accompagnement récurrent sur le long terme'
      ],
      screenshots: ['/images/Screenshot App Mobile MED - PE/1000136239.png']
    },
    {
      id: 'PE3',
      label: 'INSIGHT PE #3',
      title: 'Distinction Suggestions/Candidats illogique',
      probleme: 'La séparation entre \'Suggestions\' et \'Candidats\' crée une confusion fréquente. Les suggestions auto alors que l\'annonce n\'est pas complète génère de la complexité.',
      consequence: 'Les usagers s\'y reprennent à plusieurs fois entre l\'écran de Mon Annonce, l\'écran de détail d\'un candidat pour comprendre la logique.',
      hypothesisType: 'hypothese',
      hypothesisId: 'H6',
      hypothesisLabel: 'H6 INVALIDÉE',
      hypothesisStatus: 'invalid',
      verbatims: [
        { text: 'J\'ai pas compris ce que c\'était mes suggestions', author: 'Anne-Sophie' },
        { text: 'C\'est vous qui faites une séparation alors que le PE rien a pas besoin', author: 'Véronique' }
      ],
      opportunites: [
        'Fusionner en une seule liste \'Mes contacts\' avec des filtres simples : Nouveau, En discussion, Archivé / Suggéré'
      ],
      screenshots: ['/images/Screenshot App Mobile MED - PE/PE - Annonce - Detail@2x.png', '/images/Screenshot App Mobile MED - PE/PE - Annonce - Detail - Profils@2x.png']
    },
    {
      id: 'PE4',
      label: 'INSIGHT PE #4',
      title: 'Incohérence du message lors de l\'envoi de candidature',
      probleme: 'Le PE consulte un profil qui l\'intéresse, souhaite lui partager l\'offre d\'emploi, le message pré-configuré dans le champs est confus.',
      consequence: 'L\'usager reste bloqué sur cette fenêtre de message et ne comprend pas pourquoi il manifeste un intérêt pour la candidature du candidat alors qu\'il vient de poster son annonce et que le candidat est une suggestion.',
      hypothesisType: 'hypothese',
      hypothesisId: null,
      hypothesisLabel: null,
      hypothesisStatus: null,
      verbatims: [
        { text: 'Alors, il va falloir m\'expliquer comment je me retrouve avec ce message de candidature alors que je viens à peine de publier mon annonce, et que c\'est moi qui envoie mon annonce à la candidature', author: 'Anne-Sophie' }
      ],
      opportunites: [
        'Semble être un bug dû à la version MVP de l\'app',
        'Bien vérifier les règles de gestion liées au paramétrage des messages pré-fillés dans le champ, pour correspondre au bon contexte de l\'usager'
      ],
      screenshots: ['/images/Screenshot App Mobile MED - PE/1000136263.png']
    },
    {
      id: 'PE5',
      label: 'INSIGHT PE #5',
      title: 'Vérification des profils = condition sine qua non',
      probleme: 'L\'absence de vérification des profils est un bloqueur absolu pour les PE sérieux. Risque réputationnel majeur pour la FEPEM.',
      consequence: 'Les PE refusent d\'utiliser une plateforme sans garantie. Ils retournent vers France Travail ou le bouche-à-oreille.',
      hypothesisType: 'hypothese',
      hypothesisId: 'H9',
      hypothesisLabel: 'H9 INVALIDÉE',
      hypothesisStatus: 'invalid',
      verbatims: [
        { text: 'Je ne rentrerai en contact avec personne sans vérification', author: 'Véronique' },
        { text: 'On a vu ce que ça a donné avec Pôle Emploi et les faux profils', author: 'Anne-Sophie' }
      ],
      opportunites: [
        'Intégrer France Identité ou un dispositif équivalent. Afficher clairement \'Profil vérifié\' ou \'Profil déclaratif\'.',
        'Confirmer sur cet écran ce que signifie "Confirmé" (niveau d\'expérience du candidat, confirmation officielle effectuée par Fepem ?)'
      ],
      screenshots: ['/images/Screenshot App Mobile MED - PE/PE - Annonce - Detail - Profils@2x.png']
    }
  ],
  spe: [
    {
      id: 'SPE1',
      label: 'INSIGHT SPE #1',
      title: 'Confusion identitaire PE/SPE',
      probleme: 'L\'écran \'J\'indique mon besoin\' avec \'Je suis à la recherche d\'une aide\' vs \'Je cherche un emploi\' crée une confusion identitaire.',
      consequence: 'Daniel a confondu les rôles et pense que les offres d\'emploi sont d\'autres chercheurs d\'emploi comme lui. Effondrement de confiance.',
      hypothesisType: 'hypothese',
      hypothesisId: 'H3',
      hypothesisLabel: 'H3 PARTIELLEMENT VALIDÉE',
      hypothesisStatus: 'partial',
      verbatims: [
        { text: 'Tous les deux sont travail', author: 'Daniel' },
        { text: 'Je voudrais mettre les deux (métiers)', author: 'Kidisti' }
      ],
      opportunites: [
        'Reformuler : \'Je propose mes services\' vs \'Je recrute quelqu\'un\'. Ajouter des illustrations distinctives.'
      ],
      screenshots: ['/images/Screenshot App Mobile MED - SPE/1000136269.png']
    },
    {
      id: 'SPE2',
      label: 'INSIGHT SPE #2',
      title: 'Confusion offres/profils — CRITIQUE',
      probleme: 'Les cartes avec noms d\'employeurs (Jean Martin, Hugo Cavani) ressemblent à des profils de candidats. Daniel les confond complètement.',
      consequence: 'Session interrompue. Daniel se sent \'mal à l\'aise\' et \'déstabilisé\'. Perte de confiance immédiate et durable.',
      hypothesisType: 'hypothese',
      hypothesisId: 'H8',
      hypothesisLabel: 'H8 PARTIELLEMENT VALIDÉE',
      hypothesisStatus: 'partial',
      verbatims: [
        { text: 'Selon moi les personnes comme Jean Martin c\'est comme moi', author: 'Daniel' },
        { text: 'Ça n\'a rien à voir avec moi. Je me sens mal à l\'aise', author: 'Daniel' }
      ],
      opportunites: [
        'Différencier visuellement : badge \'EMPLOYEUR\' + icône maison. Utiliser \'Famille Martin recherche...\' plutôt que \'Jean Martin\'.'
      ],
      screenshots: ['/images/Screenshot App Mobile MED - SPE/1000136289.png']
    },
    {
      id: 'SPE3',
      label: 'INSIGHT SPE #3',
      title: 'Le vrai besoin : Documentation administrative',
      probleme: 'Kidisti n\'utilise pas l\'app pour \'trouver le meilleur emploi\' mais pour \'prouver à France Travail qu\'elle travaille\'. L\'app ignore ce besoin.',
      consequence: 'Elle ne peut pas attendre de négocier — elle a besoin d\'un contrat MAINTENANT. L\'app ajoute de l\'incertitude au lieu de la réduire.',
      hypothesisType: 'besoin',
      hypothesisId: null,
      hypothesisLabel: '80% SPE, en situation de précarité. Besoin de simplification administrative et d\'être accompagné·e pour trouver vite.',
      hypothesisStatus: null,
      verbatims: [
        { text: 'Je reste là-bas ou je rentre chez moi ? C\'est pas clair. J\'ai besoin du contrat pour France Travail', author: 'Kidisti' },
        { text: 'Le moral déjà, je suis pas bien déjà dans le moral', author: 'Daniel' }
      ],
      opportunites: [
        'Créer un parcours \'Sécurisation emploi\' avec génération de contrat intégrée et lien France Travail.'
      ],
      screenshots: ['/images/Screenshot App Mobile MED - SPE/1000136287.png']
    },
    {
      id: 'SPE4',
      label: 'INSIGHT SPE #4',
      title: 'Géolocalisation = décision impossible sans',
      probleme: 'Sans carte ni calcul de temps de trajet, les SPE ne peuvent pas évaluer si une offre est viable. \'4,92 km\' ne veut rien dire sans contexte.',
      consequence: 'Kidisti ne sait pas si elle peut physiquement se rendre au travail. Elle hésite et n\'ose pas postuler.',
      hypothesisType: 'signal',
      hypothesisId: null,
      hypothesisLabel: 'Signal récurrent chez tous les SPE testés',
      hypothesisStatus: null,
      verbatims: [
        { text: 'J\'aimerais voir une carte pour savoir si c\'est loin', author: 'Kidisti' },
        { text: 'Au moins avoir le nom de la rue pour calculer la distance', author: 'Mégane' }
      ],
      opportunites: [
        'Ajouter carte interactive + temps de trajet en transport en commun. Filtre \'Accessible en métro/bus\'.'
      ],
      screenshots: ['/images/Screenshot App Mobile MED - SPE/1000136281.png']
    }
  ]
};

// ============================================
// COMPONENTS
// ============================================

// Side Panel for editorial content
const SidePanel = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;
  
  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      <div 
        className="absolute inset-0 bg-black/20 backdrop-blur-sm"
        onClick={onClose}
      />
      <div 
        className="relative w-full max-w-xl bg-white shadow-2xl overflow-hidden"
        style={{ animation: 'slideIn 0.3s ease-out' }}
      >
        <div className="sticky top-0 z-10 flex items-center justify-between px-8 py-6 border-b" style={{ borderColor: FEPEM.colors.border, background: FEPEM.colors.cream }}>
          <h2 className="text-xl font-semibold" style={{ color: FEPEM.colors.purpleDark }}>{title}</h2>
          <button 
            onClick={onClose}
            className="p-2 rounded-full hover:bg-white/50 transition-colors"
          >
            <X size={20} style={{ color: FEPEM.colors.textMuted }} />
          </button>
        </div>
        <div className="overflow-y-auto h-[calc(100vh-88px)] px-8 py-6">
          {children}
        </div>
      </div>
    </div>
  );
};

// Stat Card
const StatCard = ({ label, value, subtext, trend, icon: Icon }) => (
  <div 
    className="p-6 rounded-2xl border"
    style={{ background: 'white', borderColor: FEPEM.colors.border }}
  >
    <div className="flex items-start justify-between mb-4">
      <div 
        className="p-3 rounded-xl"
        style={{ background: `${FEPEM.colors.purple}10` }}
      >
        <Icon size={20} style={{ color: FEPEM.colors.purple }} />
      </div>
      {trend && (
        <span className={`text-sm font-medium px-2 py-1 rounded-full ${
          trend === 'up' ? 'bg-green-50 text-green-600' :
          trend === 'down' ? 'bg-red-50 text-red-600' :
          'bg-gray-50 text-gray-600'
        }`}>
          {trend === 'up' ? <TrendingUp size={14} className="inline mr-1" /> :
           trend === 'down' ? <TrendingDown size={14} className="inline mr-1" /> :
           <Minus size={14} className="inline mr-1" />}
          {trend}
        </span>
      )}
    </div>
    <div className="text-3xl font-bold mb-1" style={{ color: FEPEM.colors.purpleDark }}>{value}</div>
    <div className="text-sm" style={{ color: FEPEM.colors.textMuted }}>{label}</div>
    {subtext && <div className="text-xs mt-2" style={{ color: FEPEM.colors.textLight }}>{subtext}</div>}
  </div>
);

// Hypothesis Badge
const HypothesisBadge = ({ status }) => {
  const config = {
    valid: { bg: '#DCFCE7', color: '#166534', label: 'Validée', icon: CheckCircle },
    partial: { bg: '#FEF3C7', color: '#92400E', label: 'Partielle', icon: AlertTriangle },
    invalid: { bg: '#FEE2E2', color: '#991B1B', label: 'Invalidée', icon: XCircle }
  };
  const { bg, color, label, icon: Icon } = config[status];
  
  return (
    <span 
      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium"
      style={{ background: bg, color }}
    >
      <Icon size={12} />
      {label}
    </span>
  );
};

// Archetype Card
const ArchetypeCard = ({ archetype, onClick }) => (
  <div 
    className="p-6 rounded-2xl border cursor-pointer hover:shadow-lg transition-all group"
    style={{ background: 'white', borderColor: FEPEM.colors.border }}
    onClick={onClick}
  >
    <div className="flex items-start gap-4 mb-4">
      <div 
        className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold"
        style={{ background: archetype.color }}
      >
        {archetype.name.charAt(0)}
      </div>
      <div className="flex-1">
        <h4 className="font-semibold" style={{ color: FEPEM.colors.purpleDark }}>{archetype.name}</h4>
        <p className="text-sm" style={{ color: FEPEM.colors.textMuted }}>{archetype.subtitle}</p>
      </div>
      <ChevronRight 
        size={20} 
        className="opacity-0 group-hover:opacity-100 transition-opacity"
        style={{ color: FEPEM.colors.textLight }}
      />
    </div>
    <p className="text-sm mb-4" style={{ color: FEPEM.colors.text }}>{archetype.description}</p>
    <div className="flex gap-2">
      <span 
        className="text-xs px-2 py-1 rounded-full"
        style={{ background: `${archetype.color}15`, color: archetype.color }}
      >
        {archetype.need}
      </span>
    </div>
  </div>
);

// Verbatim Card
const VerbatimCard = ({ verbatim }) => {
  const impactColors = {
    critical: FEPEM.colors.error,
    high: FEPEM.colors.warning,
    medium: FEPEM.colors.gold,
    positive: FEPEM.colors.success
  };
  
  return (
    <div 
      className="p-5 rounded-xl border-l-4"
      style={{ 
        background: 'white', 
        borderLeftColor: impactColors[verbatim.impact],
        borderTop: `1px solid ${FEPEM.colors.border}`,
        borderRight: `1px solid ${FEPEM.colors.border}`,
        borderBottom: `1px solid ${FEPEM.colors.border}`
      }}
    >
      <p className="text-sm italic mb-3" style={{ color: FEPEM.colors.text }}>
        "{verbatim.text}"
      </p>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span 
            className="text-xs px-2 py-0.5 rounded-full font-medium"
            style={{ 
              background: verbatim.segment === 'PE' ? `${FEPEM.colors.purple}15` : `${FEPEM.colors.gold}30`,
              color: verbatim.segment === 'PE' ? FEPEM.colors.purple : FEPEM.colors.purpleDark
            }}
          >
            {verbatim.segment}
          </span>
          <span className="text-xs" style={{ color: FEPEM.colors.textMuted }}>{verbatim.author}</span>
        </div>
        <span 
          className="text-xs px-2 py-0.5 rounded-full"
          style={{ background: `${impactColors[verbatim.impact]}15`, color: impactColors[verbatim.impact] }}
        >
          {verbatim.theme}
        </span>
      </div>
    </div>
  );
};

// Phone Frame Mockup
const PhoneFrame = ({ screenshots }) => (
  <div className="relative flex items-center justify-center">
    <div
      className="relative rounded-[2.2rem] border-[3px] overflow-hidden shadow-lg"
      style={{
        borderColor: '#1a1a2e',
        width: '204px',
        height: '408px',
        background: '#fff'
      }}
    >
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-5 rounded-b-xl z-10"
        style={{ background: '#1a1a2e' }}
      />
      <img
        src={screenshots[0]}
        alt="Écran de l'application mobile"
        className="w-full h-full object-cover object-top"
        loading="lazy"
      />
    </div>
    {screenshots.length > 1 && (
      <div
        className="absolute -right-4 -bottom-4 rounded-[2.2rem] border-[3px] overflow-hidden shadow-md opacity-50"
        style={{
          borderColor: '#1a1a2e',
          width: '180px',
          height: '360px',
          zIndex: -1,
          background: '#fff'
        }}
      >
        <img
          src={screenshots[1]}
          alt="Écran secondaire"
          className="w-full h-full object-cover object-top"
          loading="lazy"
        />
      </div>
    )}
  </div>
);

// Insight Hypothesis / Besoin / Signal Section
const InsightHypothesisSection = ({ insight }) => {
  if (!insight.hypothesisLabel) return null;

  const labelMap = {
    hypothese: 'HYPOTHÈSE',
    besoin: 'BESOIN',
    signal: 'SIGNAL FORT'
  };

  const statusColor = insight.hypothesisStatus === 'partial' ? FEPEM.colors.warning :
                      insight.hypothesisStatus === 'invalid' ? FEPEM.colors.error :
                      insight.hypothesisStatus === 'valid' ? FEPEM.colors.success :
                      FEPEM.colors.textMuted;

  return (
    <div className="mb-4">
      <h4
        className="text-xs font-bold uppercase tracking-wider mb-1"
        style={{ color: FEPEM.colors.purpleDark }}
      >
        {labelMap[insight.hypothesisType] || 'HYPOTHÈSE'}
      </h4>
      <p className="text-sm font-semibold" style={{ color: statusColor }}>
        {insight.hypothesisLabel}
      </p>
    </div>
  );
};

// Insight Verbatims
const InsightVerbatims = ({ verbatims }) => (
  <div className="mb-4">
    <h4
      className="text-xs font-bold uppercase tracking-wider mb-2"
      style={{ color: FEPEM.colors.purpleDark }}
    >
      VERBATIMS CLÉS
    </h4>
    <div className={`grid gap-3 ${verbatims.length > 1 ? 'grid-cols-1 lg:grid-cols-2' : 'grid-cols-1'}`}>
      {verbatims.map((v, i) => (
        <blockquote
          key={i}
          className="p-3 rounded-lg text-sm italic"
          style={{ background: FEPEM.colors.creamLight, color: FEPEM.colors.text }}
        >
          "{v.text}"
          <cite
            className="block text-xs mt-2 not-italic font-medium"
            style={{ color: FEPEM.colors.purple }}
          >
            — {v.author}
          </cite>
        </blockquote>
      ))}
    </div>
  </div>
);

// Insight Opportunites
const InsightOpportunites = ({ opportunites }) => (
  <div>
    <h4
      className="text-xs font-bold uppercase tracking-wider mb-2"
      style={{ color: FEPEM.colors.purpleDark }}
    >
      {opportunites.length > 1 ? 'OPPORTUNITÉS' : 'OPPORTUNITÉ'}
    </h4>
    <div
      className="p-4 rounded-lg border-l-4"
      style={{
        borderLeftColor: FEPEM.colors.success,
        background: `${FEPEM.colors.success}08`
      }}
    >
      <ol className="space-y-2">
        {opportunites.map((opp, i) => (
          <li key={i} className="flex gap-2 text-sm" style={{ color: FEPEM.colors.text }}>
            <span className="font-bold flex-shrink-0" style={{ color: FEPEM.colors.success }}>{i + 1}.</span>
            <span>{opp}</span>
          </li>
        ))}
      </ol>
    </div>
  </div>
);

// Insight Card (landscape 3:2)
const InsightCard = ({ insight }) => {
  const isPE = insight.id.startsWith('PE');
  const accentColor = isPE ? FEPEM.colors.purple : FEPEM.colors.gold;

  return (
    <div
      className="rounded-2xl border overflow-hidden"
      style={{ background: 'white', borderColor: FEPEM.colors.border }}
    >
      <div className="flex flex-col md:flex-row">
        {/* Left: Phone Frame */}
        <div
          className="w-full md:w-[290px] lg:w-[340px] flex-shrink-0 flex flex-col items-center justify-center p-6 md:p-8"
          style={{ background: FEPEM.colors.creamLight }}
        >
          <PhoneFrame screenshots={insight.screenshots} />
        </div>

        {/* Right: Content */}
        <div className="flex-1 p-6 md:p-8">
          {/* Label */}
          <span
            className="inline-block text-xs font-bold tracking-widest uppercase mb-2 px-2 py-1 rounded"
            style={{ color: accentColor, background: `${accentColor}12` }}
          >
            {insight.label}
          </span>

          {/* Title */}
          <h3
            className="text-lg lg:text-xl font-bold mb-5"
            style={{ color: FEPEM.colors.purpleDark }}
          >
            {insight.title}
          </h3>

          {/* Problème + Conséquence */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
            <div
              className="p-4 rounded-lg"
              style={{ background: '#F8F8F8' }}
            >
              <h4
                className="text-xs font-bold uppercase tracking-wider mb-2"
                style={{ color: FEPEM.colors.purpleDark }}
              >
                PROBLÈME
              </h4>
              <p className="text-sm" style={{ color: FEPEM.colors.text }}>
                {insight.probleme}
              </p>
            </div>
            <div
              className="p-4 rounded-lg"
              style={{ background: '#EEF6FF' }}
            >
              <h4
                className="text-xs font-bold uppercase tracking-wider mb-2"
                style={{ color: FEPEM.colors.purpleDark }}
              >
                CONSÉQUENCE
              </h4>
              <p className="text-sm" style={{ color: FEPEM.colors.text }}>
                {insight.consequence}
              </p>
            </div>
          </div>

          {/* Hypothesis / Besoin / Signal */}
          <InsightHypothesisSection insight={insight} />

          {/* Verbatims */}
          <InsightVerbatims verbatims={insight.verbatims} />

          {/* Opportunités */}
          <InsightOpportunites opportunites={insight.opportunites} />
        </div>
      </div>
    </div>
  );
};

// Issue Category Card
const IssueCategoryCard = ({ issue, onClick }) => {
  const severityConfig = {
    critical: { bg: '#FEE2E2', border: '#EF4444', icon: AlertTriangle },
    high: { bg: '#FEF3C7', border: '#F59E0B', icon: AlertTriangle },
    medium: { bg: '#E0F2FE', border: '#0EA5E9', icon: Zap },
    positive: { bg: '#DCFCE7', border: '#22C55E', icon: CheckCircle }
  };
  const config = severityConfig[issue.severity];
  const Icon = config.icon;
  
  return (
    <div 
      className="p-5 rounded-xl border cursor-pointer hover:shadow-md transition-all"
      style={{ background: config.bg, borderColor: config.border }}
      onClick={onClick}
    >
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <Icon size={18} style={{ color: config.border }} />
          <span className="font-semibold" style={{ color: FEPEM.colors.purpleDark }}>{issue.category}</span>
        </div>
        <span 
          className="text-2xl font-bold"
          style={{ color: config.border }}
        >
          {issue.count}
        </span>
      </div>
      <div className="flex flex-wrap gap-1">
        {issue.items.slice(0, 3).map((item, i) => (
          <span 
            key={i}
            className="text-xs px-2 py-0.5 rounded-full bg-white/60"
            style={{ color: FEPEM.colors.text }}
          >
            {item}
          </span>
        ))}
        {issue.items.length > 3 && (
          <span className="text-xs px-2 py-0.5" style={{ color: FEPEM.colors.textMuted }}>
            +{issue.items.length - 3}
          </span>
        )}
      </div>
    </div>
  );
};

// Homepage
const Homepage = ({ onNavigate }) => (
  <div className="min-h-screen" style={{ background: FEPEM.colors.cream }}>
    {/* Nav simplifiée */}
    <nav
      className="sticky top-0 z-40 border-b backdrop-blur-md"
      style={{ background: `${FEPEM.colors.cream}E6`, borderColor: FEPEM.colors.border }}
    >
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center font-bold text-white"
              style={{ background: FEPEM.colors.purple }}
            >F</div>
            <div>
              <div className="font-semibold text-sm" style={{ color: FEPEM.colors.purpleDark }}>FEPEM</div>
              <div className="text-xs" style={{ color: FEPEM.colors.textMuted }}>Tests Modérés</div>
            </div>
          </div>
          <button
            onClick={() => onNavigate('dashboard')}
            className="px-5 py-2 rounded-lg text-sm font-medium text-white transition-all hover:opacity-90"
            style={{ background: FEPEM.colors.purple }}
          >
            Explorer les résultats
          </button>
        </div>
      </div>
    </nav>

    {/* Hero */}
    <div
      className="relative overflow-hidden"
      style={{ background: `linear-gradient(135deg, ${FEPEM.colors.purpleDark} 0%, ${FEPEM.colors.purple} 100%)` }}
    >
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full" style={{ background: FEPEM.colors.gold, filter: 'blur(100px)' }} />
        <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full" style={{ background: FEPEM.colors.purpleLight, filter: 'blur(80px)' }} />
      </div>
      <div className="max-w-7xl mx-auto px-8 py-20 relative">
        <div className="max-w-3xl">
          <p className="text-sm font-medium mb-4 tracking-wider uppercase" style={{ color: FEPEM.colors.gold }}>
            Étude de Recherche Utilisateur — Février 2026
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
            Synthèse des Tests Utilisateurs Modérés
          </h1>
          <p className="text-lg mb-2" style={{ color: 'rgba(255,255,255,0.8)' }}>
            Application FEPEM — Mise en relation Particulier Employeur / Salarié
          </p>
          <p className="text-sm mb-8" style={{ color: 'rgba(255,255,255,0.6)' }}>
            Par Victor Soussan (Cocolabs) pour la FEPEM
          </p>
          <div className="flex flex-wrap gap-4 mb-8">
            {[
              { value: '7', label: 'participants' },
              { value: '11', label: 'hypothèses' },
              { value: '4', label: 'PE testés' },
              { value: '3', label: 'SPE testés' }
            ].map((s, i) => (
              <div key={i} className="px-4 py-3 rounded-xl" style={{ background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(10px)' }}>
                <span className="text-2xl font-bold text-white">{s.value}</span>
                <span className="text-sm ml-2" style={{ color: 'rgba(255,255,255,0.7)' }}>{s.label}</span>
              </div>
            ))}
          </div>
          <button
            onClick={() => onNavigate('dashboard')}
            className="px-6 py-3 rounded-xl text-sm font-semibold transition-all hover:scale-105"
            style={{ background: FEPEM.colors.gold, color: FEPEM.colors.purpleDark }}
          >
            Explorer les résultats →
          </button>
        </div>
      </div>
    </div>

    {/* Contenu Homepage */}
    <div className="max-w-7xl mx-auto px-8 py-16">

      {/* Découverte majeure */}
      <div
        className="p-8 rounded-2xl border-l-4 mb-16"
        style={{ background: `${FEPEM.colors.purple}08`, borderLeftColor: FEPEM.colors.purple }}
      >
        <div className="flex items-start gap-4">
          <Brain size={28} style={{ color: FEPEM.colors.purple, flexShrink: 0, marginTop: 2 }} />
          <div>
            <h2 className="text-xl font-bold mb-3" style={{ color: FEPEM.colors.purpleDark }}>Découverte majeure</h2>
            <p className="text-base mb-4" style={{ color: FEPEM.colors.text }}>
              L'application résout le mauvais problème pour deux segments critiques :
            </p>
            <ol className="space-y-2 mb-6">
              <li className="flex gap-2 text-sm" style={{ color: FEPEM.colors.text }}>
                <span className="font-bold" style={{ color: FEPEM.colors.purple }}>1.</span>
                Les SPE vulnérables qui cherchent la <strong>sécurité</strong> (pas le choix)
              </li>
              <li className="flex gap-2 text-sm" style={{ color: FEPEM.colors.text }}>
                <span className="font-bold" style={{ color: FEPEM.colors.purple }}>2.</span>
                Les PE sérieux qui recrutent sur <strong>desktop</strong> (pas sur mobile)
              </li>
            </ol>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { insight: 'Modèle marketplace inadapté', impact: 'Relations de confiance long terme (5-7 ans) incompatibles avec approche transactionnelle' },
                { insight: 'Mobile uniquement rédhibitoire', impact: 'PE sérieux recrutent sur ordinateur, format mobile exclut une partie de la cible' },
                { insight: 'Vérification des profils critique', impact: 'Risque réputationnel majeur si faux profils (expérience Pôle Emploi)' }
              ].map((item, i) => (
                <div key={i} className="p-4 rounded-xl" style={{ background: 'white', border: `1px solid ${FEPEM.colors.border}` }}>
                  <h4 className="text-sm font-bold mb-2" style={{ color: FEPEM.colors.purpleDark }}>{item.insight}</h4>
                  <p className="text-xs" style={{ color: FEPEM.colors.textMuted }}>{item.impact}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Contexte */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6" style={{ color: FEPEM.colors.purpleDark }}>Contexte de l'étude</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <p className="text-sm mb-4" style={{ color: FEPEM.colors.text }}>
              La FEPEM (Fédération des Particuliers Employeurs de France) développe une application mobile de mise en relation entre les salariés du secteur de l'emploi à domicile et les particuliers employeurs.
            </p>
            <div className="space-y-3">
              {[
                { label: 'Vision produit', text: 'Permettre aux PE de trouver des salariés qualifiés et aux salariés de sécuriser leur emploi' },
                { label: 'Périmètre MVP', text: 'Phase 1 — Mise en relation uniquement (contractualisation prévue en phase 2)' },
                { label: 'Lancement prévu', text: 'Fin février / début mars 2026' }
              ].map((item, i) => (
                <div key={i} className="p-3 rounded-lg" style={{ background: 'white', border: `1px solid ${FEPEM.colors.border}` }}>
                  <span className="text-xs font-bold uppercase tracking-wider" style={{ color: FEPEM.colors.purple }}>{item.label}</span>
                  <p className="text-sm mt-1" style={{ color: FEPEM.colors.text }}>{item.text}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-3" style={{ color: FEPEM.colors.purpleDark }}>Questions de recherche</h3>
            <ul className="space-y-3">
              {[
                'Comment les utilisateurs perçoivent-ils la proposition de valeur ?',
                'Quels sont les principaux points de friction dans le parcours ?',
                'Les utilisateurs parviennent-ils à trouver et contacter un profil pertinent ?',
                'La distinction Suggestions/Candidats est-elle comprise ?',
                'La terminologie métier est-elle comprise ?'
              ].map((q, i) => (
                <li key={i} className="flex gap-3 text-sm" style={{ color: FEPEM.colors.text }}>
                  <Search size={16} style={{ color: FEPEM.colors.purple, flexShrink: 0, marginTop: 2 }} />
                  {q}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Méthodologie */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6" style={{ color: FEPEM.colors.purpleDark }}>Méthodologie</h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {[
            { label: 'Type', value: 'Tests qualitatifs semi-dirigés' },
            { label: 'Format', value: 'Entretiens individuels en visioconférence' },
            { label: 'Protocole', value: 'Think aloud + Observation' },
            { label: 'Durée', value: '45-60 min par session' },
            { label: 'Équipe', value: 'Victor Soussan (animateur) + Thomas Devaux (observateur)' }
          ].map((item, i) => (
            <div key={i} className="p-4 rounded-xl" style={{ background: 'white', border: `1px solid ${FEPEM.colors.border}` }}>
              <span className="text-xs font-bold uppercase tracking-wider" style={{ color: FEPEM.colors.purple }}>{item.label}</span>
              <p className="text-sm mt-2 font-medium" style={{ color: FEPEM.colors.text }}>{item.value}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Panel */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6" style={{ color: FEPEM.colors.purpleDark }}>Panel des participants</h2>
        <div className="rounded-2xl border overflow-hidden" style={{ borderColor: FEPEM.colors.border }}>
          <table className="w-full text-sm">
            <thead>
              <tr style={{ background: `${FEPEM.colors.purple}08` }}>
                {['Participant', 'Profil', 'Segment', 'Date', 'Durée'].map(h => (
                  <th key={h} className="text-left px-4 py-3 font-semibold text-xs uppercase tracking-wider" style={{ color: FEPEM.colors.purpleDark }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[
                { name: 'Kidisti', profil: 'Aide ménagère, Érythrée', segment: 'SPE', date: '29/01', duree: '127 min' },
                { name: 'Séverine', profil: 'PE, maladie de Lyme', segment: 'PE', date: '29/01', duree: '68 min' },
                { name: 'Daniel', profil: 'Aide-soignant', segment: 'SPE', date: '30/01', duree: '67 min*' },
                { name: 'Isabelle', profil: 'PE, aidante parents', segment: 'PE', date: '30/01', duree: '60 min' },
                { name: 'Véronique', profil: 'Ancienne VP FEPEM', segment: 'PE', date: '02/02', duree: '110 min' },
                { name: 'Mégane', profil: 'Aide ménagère indépendante', segment: 'SPE', date: '03/02', duree: '56 min' },
                { name: 'Anne-Sophie', profil: 'Resp. régionale La Réunion', segment: 'PE', date: '04/02', duree: '54 min' }
              ].map((p, i) => (
                <tr key={i} className="border-t" style={{ borderColor: FEPEM.colors.border, background: i % 2 === 0 ? 'white' : FEPEM.colors.creamLight }}>
                  <td className="px-4 py-3 font-medium" style={{ color: FEPEM.colors.purpleDark }}>{p.name}</td>
                  <td className="px-4 py-3" style={{ color: FEPEM.colors.text }}>{p.profil}</td>
                  <td className="px-4 py-3">
                    <span className="text-xs px-2 py-0.5 rounded-full font-medium" style={{
                      background: p.segment === 'PE' ? `${FEPEM.colors.purple}15` : `${FEPEM.colors.gold}30`,
                      color: p.segment === 'PE' ? FEPEM.colors.purple : FEPEM.colors.purpleDark
                    }}>{p.segment}</span>
                  </td>
                  <td className="px-4 py-3" style={{ color: FEPEM.colors.textMuted }}>{p.date}</td>
                  <td className="px-4 py-3" style={{ color: FEPEM.colors.textMuted }}>{p.duree}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs mt-2" style={{ color: FEPEM.colors.textLight }}>*Session interrompue suite à une confusion critique</p>
      </section>

      {/* Photos des sessions */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6" style={{ color: FEPEM.colors.purpleDark }}>Sessions de test en visioconférence</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { src: '/images/images tests/img-entretien-anne-sophie-02.png', legend: 'Session PE — Anne-Sophie' },
            { src: '/images/images tests/img-entretien-veronique-02.png', legend: 'Session PE — Véronique' },
            { src: '/images/images tests/img-entretien-daniel-01.png', legend: 'Session SPE — Daniel' }
          ].map((img, i) => (
            <div key={i} className="rounded-2xl overflow-hidden border" style={{ borderColor: FEPEM.colors.border }}>
              <img src={img.src} alt={img.legend} className="w-full h-48 object-cover" loading="lazy" />
              <div className="px-4 py-3" style={{ background: 'white' }}>
                <p className="text-xs font-medium" style={{ color: FEPEM.colors.textMuted }}>{img.legend}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA final */}
      <div className="text-center py-12">
        <button
          onClick={() => onNavigate('dashboard')}
          className="px-8 py-4 rounded-xl text-base font-semibold text-white transition-all hover:scale-105 hover:shadow-lg"
          style={{ background: FEPEM.colors.purple }}
        >
          Accéder au dashboard complet →
        </button>
      </div>
    </div>
  </div>
);

// Archetype Detail Page
const ArchetypeDetail = ({ archetypeId, archetypes: archetypesList, onBack, onHome }) => {
  const archetype = archetypesList.find(a => a.id === archetypeId);
  const detail = archetypesDetailData[archetypeId];
  if (!archetype || !detail) return null;

  return (
    <div className="min-h-screen" style={{ background: FEPEM.colors.cream }}>
      {/* Nav */}
      <nav
        className="sticky top-0 z-40 border-b backdrop-blur-md"
        style={{ background: `${FEPEM.colors.cream}E6`, borderColor: FEPEM.colors.border }}
      >
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-4">
              <button
                onClick={onHome}
                className="flex items-center gap-3"
              >
                <div className="w-10 h-10 rounded-xl flex items-center justify-center font-bold text-white" style={{ background: FEPEM.colors.purple }}>F</div>
                <div>
                  <div className="font-semibold text-sm" style={{ color: FEPEM.colors.purpleDark }}>FEPEM</div>
                  <div className="text-xs" style={{ color: FEPEM.colors.textMuted }}>Tests Modérés</div>
                </div>
              </button>
            </div>
            <button
              onClick={onBack}
              className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium hover:bg-white/50 transition-colors"
              style={{ color: FEPEM.colors.purple }}
            >
              ← Retour aux résultats
            </button>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-8 py-12">
        {/* Header */}
        <div className="mb-10">
          <div className="flex items-center gap-5 mb-6">
            <div
              className="w-20 h-20 rounded-full flex items-center justify-center text-white text-3xl font-bold"
              style={{ background: archetype.color }}
            >
              {archetype.name.charAt(0)}
            </div>
            <div>
              <div className="flex items-center gap-3 mb-1">
                <h1 className="text-3xl font-bold" style={{ color: FEPEM.colors.purpleDark }}>{archetype.name}</h1>
                <span className="text-xs px-3 py-1 rounded-full font-medium" style={{
                  background: detail.segment === 'PE' ? `${FEPEM.colors.purple}15` : `${FEPEM.colors.gold}30`,
                  color: detail.segment === 'PE' ? FEPEM.colors.purple : FEPEM.colors.purpleDark
                }}>{detail.segment}</span>
              </div>
              <p className="text-base" style={{ color: FEPEM.colors.textMuted }}>{detail.participants}</p>
            </div>
          </div>
          <p className="text-base mb-6" style={{ color: FEPEM.colors.text }}>{detail.profileDescription}</p>
          <blockquote
            className="p-6 rounded-2xl text-lg italic border-l-4"
            style={{ background: `${archetype.color}08`, borderLeftColor: archetype.color, color: FEPEM.colors.text }}
          >
            "{archetype.quote}"
            <cite className="block text-sm mt-2 not-italic font-medium" style={{ color: archetype.color }}>— {archetype.subtitle}</cite>
          </blockquote>
        </div>

        {/* Objectif & Modèle mental */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          <div className="p-6 rounded-2xl border" style={{ background: 'white', borderColor: FEPEM.colors.border }}>
            <h3 className="text-xs font-bold uppercase tracking-wider mb-3" style={{ color: FEPEM.colors.purple }}>Objectif réel</h3>
            <p className="text-sm" style={{ color: FEPEM.colors.text }}>{detail.objectifReel}</p>
          </div>
          <div className="p-6 rounded-2xl border" style={{ background: 'white', borderColor: FEPEM.colors.border }}>
            <h3 className="text-xs font-bold uppercase tracking-wider mb-3" style={{ color: FEPEM.colors.purple }}>Modèle mental</h3>
            <p className="text-sm italic" style={{ color: FEPEM.colors.text }}>"{detail.modeleMental}"</p>
          </div>
        </div>

        {/* Parcours type */}
        <div className="p-6 rounded-2xl border mb-10" style={{ background: 'white', borderColor: FEPEM.colors.border }}>
          <h3 className="text-xs font-bold uppercase tracking-wider mb-3" style={{ color: FEPEM.colors.purple }}>Parcours type</h3>
          <p className="text-sm" style={{ color: FEPEM.colors.text }}>{detail.parcoursType}</p>
        </div>

        {/* Hiérarchie des besoins */}
        <div className="p-6 rounded-2xl border mb-10" style={{ background: 'white', borderColor: FEPEM.colors.border }}>
          <h3 className="text-xs font-bold uppercase tracking-wider mb-4" style={{ color: FEPEM.colors.purple }}>Hiérarchie des besoins</h3>
          <div className="space-y-4">
            {detail.needsHierarchy.map((need, i) => (
              <div key={i}>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium" style={{ color: FEPEM.colors.text }}>
                    <span className="font-bold" style={{ color: FEPEM.colors.purple }}>{i + 1}.</span> {need.label}
                  </span>
                </div>
                <div className="h-3 rounded-full overflow-hidden" style={{ background: FEPEM.colors.border }}>
                  <div
                    className="h-full rounded-full transition-all"
                    style={{ width: `${need.level}%`, background: `linear-gradient(90deg, ${FEPEM.colors.purple}, ${archetype.color})` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Frustrations */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {/* Surface */}
          <div className="p-6 rounded-2xl border" style={{ background: '#FFF8F0', borderColor: FEPEM.colors.warning }}>
            <h3 className="text-xs font-bold uppercase tracking-wider mb-4" style={{ color: FEPEM.colors.warning }}>
              <AlertTriangle size={14} className="inline mr-2" />
              Frustrations de surface
            </h3>
            <div className="space-y-3">
              {detail.surfaceFrustrations.map((f, i) => (
                <div key={i} className="p-3 rounded-lg" style={{ background: 'white' }}>
                  <p className="text-sm" style={{ color: FEPEM.colors.text }}>"{f.text}"</p>
                  <p className="text-xs mt-1 font-medium" style={{ color: FEPEM.colors.warning }}>— {f.participant}</p>
                </div>
              ))}
            </div>
          </div>
          {/* Profonde */}
          <div className="p-6 rounded-2xl border" style={{ background: '#FFF0F0', borderColor: FEPEM.colors.error }}>
            <h3 className="text-xs font-bold uppercase tracking-wider mb-4" style={{ color: FEPEM.colors.error }}>
              <Eye size={14} className="inline mr-2" />
              Frustrations profondes (non-dits)
            </h3>
            <div className="space-y-3">
              {detail.deepFrustrations.map((f, i) => (
                <div key={i} className="p-3 rounded-lg" style={{ background: 'white' }}>
                  <p className="text-sm" style={{ color: FEPEM.colors.text }}>{f.text}</p>
                  <p className="text-xs mt-1 font-medium" style={{ color: FEPEM.colors.error }}>— {f.participant}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Écart de modèle mental */}
        <div className="p-6 rounded-2xl border mb-10" style={{ background: 'white', borderColor: FEPEM.colors.border }}>
          <h3 className="text-xs font-bold uppercase tracking-wider mb-4" style={{ color: FEPEM.colors.purple }}>Écart de modèle mental</h3>
          <div className="space-y-4">
            {detail.mentalModelGap.map((gap, i) => (
              <div key={i} className="flex flex-col md:flex-row items-start md:items-center gap-3">
                <span className="text-xs font-bold px-2 py-1 rounded" style={{ background: `${archetype.color}15`, color: archetype.color }}>{gap.participant}</span>
                <div className="flex flex-col md:flex-row items-start md:items-center gap-2 flex-1">
                  <div className="p-3 rounded-lg flex-1" style={{ background: FEPEM.colors.creamLight }}>
                    <span className="text-xs font-bold uppercase" style={{ color: FEPEM.colors.success }}>Attente</span>
                    <p className="text-sm" style={{ color: FEPEM.colors.text }}>{gap.attente}</p>
                  </div>
                  <ArrowRight size={16} style={{ color: FEPEM.colors.textLight, flexShrink: 0 }} />
                  <div className="p-3 rounded-lg flex-1" style={{ background: '#F8F8F8' }}>
                    <span className="text-xs font-bold uppercase" style={{ color: FEPEM.colors.textMuted }}>Réalité</span>
                    <p className="text-sm" style={{ color: FEPEM.colors.text }}>{gap.realite}</p>
                  </div>
                  <ArrowRight size={16} style={{ color: FEPEM.colors.textLight, flexShrink: 0 }} />
                  <div className="p-3 rounded-lg flex-1" style={{ background: '#FFF0F0' }}>
                    <span className="text-xs font-bold uppercase" style={{ color: FEPEM.colors.error }}>Impact</span>
                    <p className="text-sm font-medium" style={{ color: FEPEM.colors.error }}>{gap.impact}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Verbatims + Image */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          <div className="p-6 rounded-2xl border" style={{ background: 'white', borderColor: FEPEM.colors.border }}>
            <h3 className="text-xs font-bold uppercase tracking-wider mb-4" style={{ color: FEPEM.colors.purple }}>Verbatims clés</h3>
            <div className="space-y-3">
              {detail.verbatims.map((v, i) => (
                <blockquote key={i} className="p-3 rounded-lg text-sm italic" style={{ background: FEPEM.colors.creamLight, color: FEPEM.colors.text }}>
                  "{v.text}"
                  <cite className="block text-xs mt-1 not-italic font-medium" style={{ color: FEPEM.colors.purple }}>— {v.author}</cite>
                </blockquote>
              ))}
            </div>
          </div>
          {detail.testImage && (
            <div className="rounded-2xl overflow-hidden border" style={{ borderColor: FEPEM.colors.border }}>
              <img src={detail.testImage} alt={`Session de test — ${archetype.subtitle}`} className="w-full h-full object-cover" loading="lazy" />
            </div>
          )}
        </div>

        {/* Signaux à creuser */}
        <div className="p-6 rounded-2xl border mb-10" style={{ background: `${FEPEM.colors.purple}05`, borderColor: FEPEM.colors.purple }}>
          <h3 className="text-xs font-bold uppercase tracking-wider mb-4" style={{ color: FEPEM.colors.purple }}>
            <Zap size={14} className="inline mr-2" />
            Signaux à creuser
          </h3>
          <div className="space-y-3">
            {detail.signalsToExplore.map((signal, i) => (
              <div key={i} className="flex gap-3 p-3 rounded-lg" style={{ background: 'white' }}>
                <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold text-white" style={{ background: FEPEM.colors.purple }}>{i + 1}</div>
                <p className="text-sm" style={{ color: FEPEM.colors.text }}>{signal}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Retour */}
        <div className="text-center py-8">
          <button
            onClick={onBack}
            className="px-6 py-3 rounded-xl text-sm font-medium transition-all hover:shadow-md"
            style={{ background: 'white', border: `1px solid ${FEPEM.colors.border}`, color: FEPEM.colors.purple }}
          >
            ← Retour aux résultats
          </button>
        </div>
      </div>
    </div>
  );
};

// Navigation
const Navigation = ({ activeSection, onNavigate, sections, onHome }) => (
  <nav 
    className="sticky top-0 z-40 border-b backdrop-blur-md"
    style={{ background: `${FEPEM.colors.cream}E6`, borderColor: FEPEM.colors.border }}
  >
    <div className="max-w-7xl mx-auto px-8">
      <div className="flex items-center justify-between h-16">
        <button onClick={onHome} className="flex items-center gap-3">
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center font-bold text-white"
            style={{ background: FEPEM.colors.purple }}
          >
            F
          </div>
          <div className="text-left">
            <div className="font-semibold text-sm" style={{ color: FEPEM.colors.purpleDark }}>FEPEM</div>
            <div className="text-xs" style={{ color: FEPEM.colors.textMuted }}>Tests Modérés</div>
          </div>
        </button>

        <div className="flex items-center gap-1">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => onNavigate(section.id)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                activeSection === section.id 
                  ? 'text-white' 
                  : 'hover:bg-white/50'
              }`}
              style={{ 
                background: activeSection === section.id ? FEPEM.colors.purple : 'transparent',
                color: activeSection === section.id ? 'white' : FEPEM.colors.text
              }}
            >
              {section.label}
            </button>
          ))}
        </div>
        
        <div className="flex items-center gap-2">
          <button 
            className="p-2 rounded-lg hover:bg-white/50 transition-colors"
            style={{ color: FEPEM.colors.textMuted }}
          >
            <Share2 size={18} />
          </button>
          <button 
            className="p-2 rounded-lg hover:bg-white/50 transition-colors"
            style={{ color: FEPEM.colors.textMuted }}
          >
            <Bookmark size={18} />
          </button>
        </div>
      </div>
    </div>
  </nav>
);

// Section Header
const SectionHeader = ({ title, subtitle, action }) => (
  <div className="flex items-end justify-between mb-8">
    <div>
      <h2 
        className="text-2xl font-bold mb-2"
        style={{ color: FEPEM.colors.purpleDark }}
      >
        {title}
      </h2>
      {subtitle && (
        <p className="text-sm" style={{ color: FEPEM.colors.textMuted }}>{subtitle}</p>
      )}
    </div>
    {action}
  </div>
);

// Charts Components
const HypothesesChart = () => {
  const chartData = hypothesesData.map(h => ({
    ...h,
    fill: h.status === 'valid' ? FEPEM.colors.success : 
          h.status === 'partial' ? FEPEM.colors.warning : 
          FEPEM.colors.error
  }));

  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart data={chartData} layout="vertical" margin={{ left: 120 }}>
        <CartesianGrid strokeDasharray="3 3" stroke={FEPEM.colors.border} />
        <XAxis type="number" domain={[0, 100]} tick={{ fill: FEPEM.colors.textMuted, fontSize: 12 }} />
        <YAxis 
          type="category" 
          dataKey="name" 
          tick={{ fill: FEPEM.colors.text, fontSize: 12 }}
          width={110}
        />
        <Tooltip 
          contentStyle={{ 
            background: 'white', 
            border: `1px solid ${FEPEM.colors.border}`,
            borderRadius: 8
          }}
        />
        <Bar dataKey="score" radius={[0, 4, 4, 0]}>
          {chartData.map((entry, index) => (
            <Cell key={index} fill={entry.fill} />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
};

const ValidationPieChart = () => {
  const data = [
    { name: 'Validées', value: 2, color: FEPEM.colors.success },
    { name: 'Partielles', value: 5, color: FEPEM.colors.warning },
    { name: 'Invalidées', value: 4, color: FEPEM.colors.error },
  ];

  return (
    <ResponsiveContainer width="100%" height={250}>
      <PieChart>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          innerRadius={60}
          outerRadius={90}
          paddingAngle={4}
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={index} fill={entry.color} />
          ))}
        </Pie>
        <Tooltip />
        <Legend 
          verticalAlign="bottom"
          formatter={(value) => <span style={{ color: FEPEM.colors.text, fontSize: 12 }}>{value}</span>}
        />
      </PieChart>
    </ResponsiveContainer>
  );
};

const SignalRadarChart = () => {
  const data = [
    { subject: 'Checkboxes', A: 5, fullMark: 7 },
    { subject: 'MDP', A: 5, fullMark: 7 },
    { subject: 'Géoloc', A: 5, fullMark: 7 },
    { subject: 'Vérification', A: 3, fullMark: 7 },
    { subject: 'Contact', A: 3, fullMark: 7 },
    { subject: 'CV', A: 2, fullMark: 7 },
  ];

  return (
    <ResponsiveContainer width="100%" height={300}>
      <RadarChart data={data}>
        <PolarGrid stroke={FEPEM.colors.border} />
        <PolarAngleAxis 
          dataKey="subject" 
          tick={{ fill: FEPEM.colors.text, fontSize: 11 }}
        />
        <PolarRadiusAxis tick={{ fill: FEPEM.colors.textMuted, fontSize: 10 }} />
        <Radar
          name="Mentions"
          dataKey="A"
          stroke={FEPEM.colors.purple}
          fill={FEPEM.colors.purple}
          fillOpacity={0.3}
        />
        <Tooltip />
      </RadarChart>
    </ResponsiveContainer>
  );
};

const DurationChart = () => {
  const data = panelData.map(p => ({
    name: p.name,
    duration: p.duration,
    fill: p.segment === 'PE' ? FEPEM.colors.purple : FEPEM.colors.gold
  }));

  return (
    <ResponsiveContainer width="100%" height={250}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" stroke={FEPEM.colors.border} />
        <XAxis dataKey="name" tick={{ fill: FEPEM.colors.text, fontSize: 11 }} />
        <YAxis tick={{ fill: FEPEM.colors.textMuted, fontSize: 11 }} />
        <Tooltip 
          contentStyle={{ 
            background: 'white', 
            border: `1px solid ${FEPEM.colors.border}`,
            borderRadius: 8
          }}
        />
        <Bar dataKey="duration" radius={[4, 4, 0, 0]}>
          {data.map((entry, index) => (
            <Cell key={index} fill={entry.fill} />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
};

// ============================================
// MAIN APP
// ============================================
export default function FEPEMSynthesisDashboard() {
  const [currentView, setCurrentView] = useState('home');
  const [activeSection, setActiveSection] = useState('overview');
  const [sidePanel, setSidePanel] = useState({ open: false, title: '', content: null });

  const navigateTo = (view) => {
    setCurrentView(view);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  const sections = [
    { id: 'overview', label: 'Vue d\'ensemble' },
    { id: 'panel', label: 'Panel' },
    { id: 'hypotheses', label: 'Hypothèses' },
    { id: 'findings', label: 'Constats' },
    { id: 'archetypes', label: 'Archétypes' },
    { id: 'insights', label: 'Insights' },
    { id: 'signals', label: 'Signaux' },
    { id: 'recommendations', label: 'Actions' },
  ];

  const sectionRefs = useRef({});

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    sectionRefs.current[sectionId]?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const openArchetypePanel = (archetype) => {
    setSidePanel({
      open: true,
      title: archetype.name,
      content: (
        <div className="space-y-6">
          <div 
            className="p-6 rounded-xl"
            style={{ background: `${archetype.color}10` }}
          >
            <div className="flex items-center gap-4 mb-4">
              <div 
                className="w-16 h-16 rounded-full flex items-center justify-center text-white text-2xl font-bold"
                style={{ background: archetype.color }}
              >
                {archetype.name.charAt(0)}
              </div>
              <div>
                <h3 className="text-xl font-bold" style={{ color: FEPEM.colors.purpleDark }}>{archetype.name}</h3>
                <p style={{ color: FEPEM.colors.textMuted }}>{archetype.subtitle}</p>
              </div>
            </div>
            <p className="text-sm" style={{ color: FEPEM.colors.text }}>{archetype.description}</p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-3" style={{ color: FEPEM.colors.purpleDark }}>Besoin fondamental</h4>
            <div 
              className="p-4 rounded-lg border"
              style={{ borderColor: FEPEM.colors.border }}
            >
              <div className="flex items-center gap-2 mb-2">
                <Heart size={16} style={{ color: archetype.color }} />
                <span className="font-medium" style={{ color: FEPEM.colors.text }}>{archetype.need}</span>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-3" style={{ color: FEPEM.colors.purpleDark }}>Frustration principale</h4>
            <div 
              className="p-4 rounded-lg border"
              style={{ borderColor: FEPEM.colors.border }}
            >
              <div className="flex items-center gap-2 mb-2">
                <AlertTriangle size={16} style={{ color: FEPEM.colors.error }} />
                <span className="font-medium" style={{ color: FEPEM.colors.text }}>{archetype.frustration}</span>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-3" style={{ color: FEPEM.colors.purpleDark }}>Verbatim clé</h4>
            <blockquote 
              className="p-4 rounded-lg border-l-4 italic"
              style={{ 
                background: FEPEM.colors.creamLight, 
                borderLeftColor: archetype.color,
                color: FEPEM.colors.text
              }}
            >
              "{archetype.quote}"
            </blockquote>
          </div>
          
          <div>
            <h4 className="font-semibold mb-3" style={{ color: FEPEM.colors.purpleDark }}>Modèle mental</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-24 text-xs font-medium" style={{ color: FEPEM.colors.textMuted }}>Attente</div>
                <div className="flex-1 h-2 rounded-full" style={{ background: `${archetype.color}30` }}>
                  <div className="h-full rounded-full" style={{ width: '80%', background: archetype.color }} />
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-24 text-xs font-medium" style={{ color: FEPEM.colors.textMuted }}>Réalité app</div>
                <div className="flex-1 h-2 rounded-full" style={{ background: `${FEPEM.colors.error}30` }}>
                  <div className="h-full rounded-full" style={{ width: '30%', background: FEPEM.colors.error }} />
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-3" style={{ color: FEPEM.colors.purpleDark }}>Recommandations</h4>
            <ul className="space-y-2">
              <li className="flex items-start gap-2 text-sm" style={{ color: FEPEM.colors.text }}>
                <CheckCircle size={16} className="mt-0.5 flex-shrink-0" style={{ color: FEPEM.colors.success }} />
                Adapter le parcours aux besoins spécifiques
              </li>
              <li className="flex items-start gap-2 text-sm" style={{ color: FEPEM.colors.text }}>
                <CheckCircle size={16} className="mt-0.5 flex-shrink-0" style={{ color: FEPEM.colors.success }} />
                Renforcer les éléments de confiance
              </li>
              <li className="flex items-start gap-2 text-sm" style={{ color: FEPEM.colors.text }}>
                <CheckCircle size={16} className="mt-0.5 flex-shrink-0" style={{ color: FEPEM.colors.success }} />
                Proposer des options adaptées au contexte
              </li>
            </ul>
          </div>
        </div>
      )
    });
  };

  const openIssuePanel = (issue) => {
    setSidePanel({
      open: true,
      title: issue.category,
      content: (
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <span className="text-4xl font-bold" style={{ color: FEPEM.colors.purpleDark }}>{issue.count}</span>
            <span 
              className="px-3 py-1 rounded-full text-sm font-medium"
              style={{ 
                background: issue.severity === 'critical' ? '#FEE2E2' : 
                           issue.severity === 'high' ? '#FEF3C7' :
                           issue.severity === 'positive' ? '#DCFCE7' : '#E0F2FE',
                color: issue.severity === 'critical' ? '#991B1B' :
                       issue.severity === 'high' ? '#92400E' :
                       issue.severity === 'positive' ? '#166534' : '#0369A1'
              }}
            >
              {issue.severity}
            </span>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4" style={{ color: FEPEM.colors.purpleDark }}>Détail des éléments</h4>
            <div className="space-y-3">
              {issue.items.map((item, i) => (
                <div 
                  key={i}
                  className="p-4 rounded-lg border flex items-center gap-3"
                  style={{ borderColor: FEPEM.colors.border }}
                >
                  <div 
                    className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium"
                    style={{ background: `${FEPEM.colors.purple}10`, color: FEPEM.colors.purple }}
                  >
                    {i + 1}
                  </div>
                  <span style={{ color: FEPEM.colors.text }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )
    });
  };

  // Conditional rendering based on currentView
  if (currentView === 'home') {
    return <Homepage onNavigate={navigateTo} />;
  }

  if (currentView.startsWith('archetype-')) {
    const archetypeId = currentView.replace('archetype-', '');
    return (
      <ArchetypeDetail
        archetypeId={archetypeId}
        archetypes={archetypes}
        onBack={() => navigateTo('dashboard')}
        onHome={() => navigateTo('home')}
      />
    );
  }

  return (
    <div className="min-h-screen" style={{ background: FEPEM.colors.cream, fontFamily: 'Montserrat, sans-serif' }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap');
        @keyframes slideIn {
          from { transform: translateX(100%); }
          to { transform: translateX(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fadeIn 0.5s ease-out forwards;
        }
      `}</style>

      <Navigation
        activeSection={activeSection}
        onNavigate={scrollToSection}
        sections={sections}
        onHome={() => navigateTo('home')}
      />
      
      {/* Hero Section */}
      <div 
        className="relative overflow-hidden"
        style={{ background: `linear-gradient(135deg, ${FEPEM.colors.purpleDark} 0%, ${FEPEM.colors.purple} 100%)` }}
      >
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full" style={{ background: FEPEM.colors.gold, filter: 'blur(100px)' }} />
          <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full" style={{ background: FEPEM.colors.purpleLight, filter: 'blur(80px)' }} />
        </div>
        
        <div className="max-w-7xl mx-auto px-8 py-16 relative">
          <div className="max-w-3xl">
            <div 
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
              style={{ background: 'rgba(255,255,255,0.1)' }}
            >
              <div className="w-2 h-2 rounded-full" style={{ background: FEPEM.colors.gold }} />
              <span className="text-sm text-white/80">Synthèse Recherche Utilisateur</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Tests Utilisateurs Modérés
            </h1>
            <p className="text-xl text-white/70 mb-8">
              Application FEPEM - Mise en relation PE/SPE
            </p>
            
            <div className="flex flex-wrap gap-4">
              <div 
                className="px-5 py-3 rounded-xl"
                style={{ background: 'rgba(255,255,255,0.1)' }}
              >
                <div className="text-2xl font-bold text-white">7</div>
                <div className="text-sm text-white/60">participants</div>
              </div>
              <div 
                className="px-5 py-3 rounded-xl"
                style={{ background: 'rgba(255,255,255,0.1)' }}
              >
                <div className="text-2xl font-bold text-white">11</div>
                <div className="text-sm text-white/60">hypothèses testées</div>
              </div>
              <div 
                className="px-5 py-3 rounded-xl"
                style={{ background: 'rgba(255,255,255,0.1)' }}
              >
                <div className="text-2xl font-bold" style={{ color: FEPEM.colors.gold }}>4</div>
                <div className="text-sm text-white/60">invalidées</div>
              </div>
              <div 
                className="px-5 py-3 rounded-xl"
                style={{ background: 'rgba(255,255,255,0.1)' }}
              >
                <div className="text-2xl font-bold text-white">1</div>
                <div className="text-sm text-white/60">session interrompue</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-8 py-12">
        
        {/* Overview Section */}
        <section 
          ref={el => sectionRefs.current['overview'] = el}
          className="mb-20 scroll-mt-20"
        >
          <SectionHeader 
            title="Vue d'ensemble"
            subtitle="Synthèse des tests utilisateurs conduits du 29 janvier au 4 février 2026"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <StatCard 
              label="Participants testés"
              value="7"
              subtext="4 PE, 3 SPE"
              icon={Users}
            />
            <StatCard 
              label="Hypothèses validées"
              value="2/11"
              subtext="18% de validation"
              trend="down"
              icon={Target}
            />
            <StatCard 
              label="Durée moyenne"
              value="77 min"
              subtext="Prévu: 60 min"
              icon={Clock}
            />
            <StatCard 
              label="Problèmes critiques"
              value="6"
              subtext="UX structurels"
              trend="critical"
              icon={AlertTriangle}
            />
          </div>
          
          {/* Key Insight Banner */}
          <div 
            className="p-8 rounded-2xl mb-12"
            style={{ background: `linear-gradient(135deg, ${FEPEM.colors.purpleDark} 0%, ${FEPEM.colors.purple} 100%)` }}
          >
            <div className="flex items-start gap-6">
              <div 
                className="p-4 rounded-xl"
                style={{ background: 'rgba(255,255,255,0.1)' }}
              >
                <Brain size={32} className="text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-white mb-3">Constat principal</h3>
                <p className="text-white/80 text-lg leading-relaxed">
                  Le modèle marketplace transactionnel est inadapté aux relations d'emploi longues 
                  caractéristiques du secteur (5-7 ans en moyenne). Les utilisateurs en situation précaire 
                  cherchent la <strong className="text-white">sécurité</strong>, pas le choix.
                </p>
              </div>
            </div>
          </div>
          
          {/* Charts Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div 
              className="p-6 rounded-2xl border"
              style={{ background: 'white', borderColor: FEPEM.colors.border }}
            >
              <h3 className="font-semibold mb-4" style={{ color: FEPEM.colors.purpleDark }}>Validation des hypothèses</h3>
              <ValidationPieChart />
            </div>
            <div 
              className="p-6 rounded-2xl border"
              style={{ background: 'white', borderColor: FEPEM.colors.border }}
            >
              <h3 className="font-semibold mb-4" style={{ color: FEPEM.colors.purpleDark }}>Signaux récurrents</h3>
              <SignalRadarChart />
            </div>
          </div>
        </section>

        {/* Panel Section */}
        <section 
          ref={el => sectionRefs.current['panel'] = el}
          className="mb-20 scroll-mt-20"
        >
          <SectionHeader 
            title="Panel de participants"
            subtitle="7 utilisateurs testés sur 2 segments distincts"
          />
          
          <div 
            className="rounded-2xl border overflow-hidden"
            style={{ background: 'white', borderColor: FEPEM.colors.border }}
          >
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr style={{ background: FEPEM.colors.creamLight }}>
                    <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider" style={{ color: FEPEM.colors.textMuted }}>#</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider" style={{ color: FEPEM.colors.textMuted }}>Participant</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider" style={{ color: FEPEM.colors.textMuted }}>Profil</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider" style={{ color: FEPEM.colors.textMuted }}>Segment</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider" style={{ color: FEPEM.colors.textMuted }}>Durée</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider" style={{ color: FEPEM.colors.textMuted }}>Statut</th>
                  </tr>
                </thead>
                <tbody>
                  {panelData.map((participant, i) => (
                    <tr 
                      key={participant.id}
                      className="border-t hover:bg-gray-50 transition-colors"
                      style={{ borderColor: FEPEM.colors.border }}
                    >
                      <td className="px-6 py-4 text-sm" style={{ color: FEPEM.colors.textMuted }}>{participant.id}</td>
                      <td className="px-6 py-4">
                        <span className="font-medium" style={{ color: FEPEM.colors.purpleDark }}>{participant.name}</span>
                      </td>
                      <td className="px-6 py-4 text-sm" style={{ color: FEPEM.colors.text }}>{participant.profile}</td>
                      <td className="px-6 py-4">
                        <span 
                          className="px-3 py-1 rounded-full text-xs font-medium"
                          style={{ 
                            background: participant.segment === 'PE' ? `${FEPEM.colors.purple}15` : `${FEPEM.colors.gold}30`,
                            color: participant.segment === 'PE' ? FEPEM.colors.purple : FEPEM.colors.purpleDark
                          }}
                        >
                          {participant.segment}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm font-medium" style={{ color: FEPEM.colors.text }}>{participant.duration} min</td>
                      <td className="px-6 py-4">
                        {participant.status === 'complete' ? (
                          <span className="inline-flex items-center gap-1 text-xs text-green-600">
                            <CheckCircle size={14} /> Complète
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-1 text-xs text-red-600">
                            <XCircle size={14} /> Interrompue
                          </span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          
          <div className="mt-8">
            <h3 className="font-semibold mb-4" style={{ color: FEPEM.colors.purpleDark }}>Durée des sessions</h3>
            <div 
              className="p-6 rounded-2xl border"
              style={{ background: 'white', borderColor: FEPEM.colors.border }}
            >
              <DurationChart />
            </div>
          </div>
        </section>

        {/* Hypotheses Section */}
        <section 
          ref={el => sectionRefs.current['hypotheses'] = el}
          className="mb-20 scroll-mt-20"
        >
          <SectionHeader 
            title="Validation des hypothèses"
            subtitle="11 hypothèses testées, 2 validées, 5 partiellement validées, 4 invalidées"
          />
          
          <div 
            className="p-6 rounded-2xl border mb-8"
            style={{ background: 'white', borderColor: FEPEM.colors.border }}
          >
            <HypothesesChart />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {hypothesesData.map((h) => (
              <div 
                key={h.id}
                className="p-5 rounded-xl border hover:shadow-md transition-all cursor-pointer"
                style={{ background: 'white', borderColor: FEPEM.colors.border }}
              >
                <div className="flex items-center justify-between mb-3">
                  <span 
                    className="text-sm font-bold"
                    style={{ color: FEPEM.colors.purple }}
                  >
                    {h.id}
                  </span>
                  <HypothesisBadge status={h.status} />
                </div>
                <p className="text-sm" style={{ color: FEPEM.colors.text }}>{h.name}</p>
                <div className="mt-3 h-2 rounded-full" style={{ background: FEPEM.colors.border }}>
                  <div 
                    className="h-full rounded-full transition-all"
                    style={{ 
                      width: `${h.score}%`,
                      background: h.status === 'valid' ? FEPEM.colors.success : 
                                 h.status === 'partial' ? FEPEM.colors.warning : 
                                 FEPEM.colors.error
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Findings Section */}
        <section 
          ref={el => sectionRefs.current['findings'] = el}
          className="mb-20 scroll-mt-20"
        >
          <SectionHeader 
            title="Constats et problèmes"
            subtitle="Classification des insights par catégorie et sévérité"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {issuesData.map((issue) => (
              <IssueCategoryCard 
                key={issue.category}
                issue={issue}
                onClick={() => openIssuePanel(issue)}
              />
            ))}
          </div>
          
          <div>
            <h3 className="font-semibold mb-4" style={{ color: FEPEM.colors.purpleDark }}>Verbatims significatifs</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {verbatims.map((v, i) => (
                <VerbatimCard key={i} verbatim={v} />
              ))}
            </div>
          </div>
        </section>

        {/* Archetypes Section */}
        <section 
          ref={el => sectionRefs.current['archetypes'] = el}
          className="mb-20 scroll-mt-20"
        >
          <SectionHeader 
            title="Archétypes utilisateurs"
            subtitle="5 profils types identifiés à partir des comportements observés"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {archetypes.map((archetype) => (
              <ArchetypeCard 
                key={archetype.id}
                archetype={archetype}
                onClick={() => navigateTo(`archetype-${archetype.id}`)}
              />
            ))}
          </div>
        </section>

        {/* Insights Section */}
        <section
          ref={el => sectionRefs.current['insights'] = el}
          className="mb-20 scroll-mt-20"
        >
          <SectionHeader
            title="Insights PE"
            subtitle="5 insights issus des parcours Particulier Employeur"
          />
          <div className="space-y-8 mb-16">
            {insightsData.pe.map((insight) => (
              <InsightCard key={insight.id} insight={insight} />
            ))}
          </div>

          <SectionHeader
            title="Insights SPE"
            subtitle="4 insights issus des parcours Salarié du Particulier Employeur"
          />
          <div className="space-y-8">
            {insightsData.spe.map((insight) => (
              <InsightCard key={insight.id} insight={insight} />
            ))}
          </div>
        </section>

        {/* Signals Section */}
        <section
          ref={el => sectionRefs.current['signals'] = el}
          className="mb-20 scroll-mt-20"
        >
          <SectionHeader
            title="Signaux récurrents"
            subtitle="Patterns identifiés à travers les sessions de test"
          />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div 
              className="p-6 rounded-2xl border"
              style={{ background: 'white', borderColor: FEPEM.colors.border }}
            >
              <h3 className="font-semibold mb-4" style={{ color: FEPEM.colors.purpleDark }}>Fréquence des signaux</h3>
              <div className="space-y-4">
                {signals.map((signal, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="w-40 text-sm" style={{ color: FEPEM.colors.text }}>{signal.name}</div>
                    <div className="flex-1 h-6 rounded-full overflow-hidden" style={{ background: FEPEM.colors.border }}>
                      <div 
                        className="h-full rounded-full flex items-center justify-end pr-2"
                        style={{ 
                          width: `${(signal.count / 7) * 100}%`,
                          background: signal.impact === 'critical' ? FEPEM.colors.error :
                                     signal.impact === 'high' ? FEPEM.colors.warning :
                                     FEPEM.colors.purple
                        }}
                      >
                        <span className="text-xs font-bold text-white">{signal.count}/7</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div 
              className="p-6 rounded-2xl border"
              style={{ background: 'white', borderColor: FEPEM.colors.border }}
            >
              <h3 className="font-semibold mb-4" style={{ color: FEPEM.colors.purpleDark }}>Distribution par type</h3>
              <SignalRadarChart />
            </div>
          </div>
        </section>

        {/* Recommendations Section */}
        <section 
          ref={el => sectionRefs.current['recommendations'] = el}
          className="mb-20 scroll-mt-20"
        >
          <SectionHeader 
            title="Recommandations"
            subtitle="Actions priorisées par horizon temporel"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Court terme */}
            <div 
              className="p-6 rounded-2xl border"
              style={{ background: 'white', borderColor: FEPEM.colors.border }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div 
                  className="w-10 h-10 rounded-full flex items-center justify-center"
                  style={{ background: `${FEPEM.colors.error}15` }}
                >
                  <Zap size={20} style={{ color: FEPEM.colors.error }} />
                </div>
                <div>
                  <h3 className="font-semibold" style={{ color: FEPEM.colors.purpleDark }}>Court terme</h3>
                  <p className="text-xs" style={{ color: FEPEM.colors.textMuted }}>Avant lancement</p>
                </div>
              </div>
              <ul className="space-y-3">
                {['Bug MDP', 'Checkboxes', 'Message auto', 'Label EMPLOYEUR'].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm" style={{ color: FEPEM.colors.text }}>
                    <div 
                      className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                      style={{ background: `${FEPEM.colors.error}15`, color: FEPEM.colors.error }}
                    >
                      {i + 1}
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Moyen terme */}
            <div 
              className="p-6 rounded-2xl border"
              style={{ background: 'white', borderColor: FEPEM.colors.border }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div 
                  className="w-10 h-10 rounded-full flex items-center justify-center"
                  style={{ background: `${FEPEM.colors.warning}15` }}
                >
                  <Target size={20} style={{ color: FEPEM.colors.warning }} />
                </div>
                <div>
                  <h3 className="font-semibold" style={{ color: FEPEM.colors.purpleDark }}>Moyen terme</h3>
                  <p className="text-xs" style={{ color: FEPEM.colors.textMuted }}>Q2 2026</p>
                </div>
              </div>
              <ul className="space-y-3">
                {['Filtres avancés', 'Contact direct', 'CV/LM', 'Planification', 'Carte trajets'].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm" style={{ color: FEPEM.colors.text }}>
                    <div 
                      className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                      style={{ background: `${FEPEM.colors.warning}15`, color: FEPEM.colors.warning }}
                    >
                      {i + 1}
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Long terme */}
            <div 
              className="p-6 rounded-2xl border"
              style={{ background: 'white', borderColor: FEPEM.colors.border }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div 
                  className="w-10 h-10 rounded-full flex items-center justify-center"
                  style={{ background: `${FEPEM.colors.purple}15` }}
                >
                  <TrendingUp size={20} style={{ color: FEPEM.colors.purple }} />
                </div>
                <div>
                  <h3 className="font-semibold" style={{ color: FEPEM.colors.purpleDark }}>Long terme</h3>
                  <p className="text-xs" style={{ color: FEPEM.colors.textMuted }}>Évolutions stratégiques</p>
                </div>
              </div>
              <ul className="space-y-3">
                {['Version desktop', 'Vérification profils', 'Parcours aidants', 'Modes d\'usage'].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm" style={{ color: FEPEM.colors.text }}>
                    <div 
                      className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                      style={{ background: `${FEPEM.colors.purple}15`, color: FEPEM.colors.purple }}
                    >
                      {i + 1}
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer 
          className="mt-20 pt-8 border-t text-center"
          style={{ borderColor: FEPEM.colors.border }}
        >
          <p className="text-sm" style={{ color: FEPEM.colors.textMuted }}>
            Synthèse réalisée par Victor Soussan (Cocolabs) - Février 2026
          </p>
          <p className="text-xs mt-2" style={{ color: FEPEM.colors.textLight }}>
            Tests modérés - 7 participants - Application FEPEM
          </p>
        </footer>
      </div>
      
      {/* Side Panel */}
      <SidePanel 
        isOpen={sidePanel.open}
        onClose={() => setSidePanel({ ...sidePanel, open: false })}
        title={sidePanel.title}
      >
        {sidePanel.content}
      </SidePanel>
    </div>
  );
}