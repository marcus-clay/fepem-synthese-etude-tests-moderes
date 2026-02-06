export const unmoderatedData = {
  title: 'Tests Utilisateurs Non-Modérés',
  subtitle: 'Campagne quantitative à distance : Application Mon Emploi Direct',
  context: `Cette seconde campagne de tests vise à compléter les insights qualitatifs obtenus lors des tests modérés par des données quantitatives. L'objectif est de mesurer les taux de complétion, la facilité d'utilisation et la satisfaction sur un échantillon plus large et représentatif.`,
  complementarite: `Les tests modérés ont permis d'identifier le "pourquoi" : frustrations profondes, modèles mentaux, écarts entre attentes et réalité. Les tests non-modérés mesurent le "combien" : taux de réussite, temps de complétion, scores de facilité, pour quantifier l'ampleur des problèmes identifiés et prioriser les actions correctives.`,
  methodologie: {
    plateforme: 'Lookback',
    duree: '20-25 minutes par session',
    protocole: 'Tâches séquentielles + échelles post-task (SEQ) + questionnaire final (SUS)',
    enregistrement: 'Vidéo écran + audio + webcam',
  },
  tasks: [
    { id: 1, label: 'Inscription et création de compte', description: 'L\'utilisateur crée un compte sur l\'application en suivant le parcours d\'onboarding.', metriques: ['Taux de complétion', 'Temps', 'SEQ'] },
    { id: 2, label: 'Création d\'annonce / profil', description: 'PE : création d\'une annonce d\'emploi. SPE : création de profil candidat.', metriques: ['Taux de complétion', 'Temps', 'SEQ'] },
    { id: 3, label: 'Recherche et filtrage', description: 'Trouver un profil ou une offre pertinente en utilisant les filtres disponibles.', metriques: ['Taux de complétion', 'Pertinence résultat', 'SEQ'] },
    { id: 4, label: 'Prise de contact', description: 'Envoyer un message ou manifester son intérêt pour un profil/offre.', metriques: ['Taux de complétion', 'Temps', 'SEQ'] },
    { id: 5, label: 'Navigation générale', description: 'Explorer librement l\'application et identifier les fonctionnalités disponibles.', metriques: ['Zones visitées', 'Confiance déclarée'] },
  ],
  metriques: [
    { label: 'Taux de complétion', description: 'Pourcentage de participants ayant terminé chaque tâche avec succès.', cible: '> 80%' },
    { label: 'Facilité perçue (SEQ)', description: 'Score de facilité sur échelle 1-7 après chaque tâche.', cible: '> 5.5/7' },
    { label: 'Score SUS', description: 'System Usability Scale, score global d\'utilisabilité (0-100).', cible: '> 68' },
    { label: 'Temps de complétion', description: 'Durée moyenne pour chaque tâche.', cible: 'Variable par tâche' },
  ],
  panel: {
    total: 30,
    segments: [
      { label: 'Particuliers Employeurs (PE)', count: 15, description: 'Mix primo-employeurs et employeurs expérimentés' },
      { label: 'Salariés (SPE)', count: 10, description: 'Mix profils débutants et expérimentés' },
      { label: 'Aidants familiaux', count: 5, description: 'Segment identifié comme critique lors des tests modérés' },
    ],
    rounds: [
      { label: 'Round 1', participants: 10, dates: 'Semaine 1' },
      { label: 'Round 2', participants: 10, dates: 'Semaine 2' },
      { label: 'Round 3', participants: 10, dates: 'Semaine 3' },
    ],
  },
};
