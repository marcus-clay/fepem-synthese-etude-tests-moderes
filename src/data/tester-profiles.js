// Profils des testeurs - données issues des synthèses individuelles et retranscriptions
// Source : FEPEM_Synthese_Analyse_Complete_Confluence.md + synthèses individuelles (.docx) + retranscriptions (.txt/.md)

export const testerProfiles = [
  {
    id: 'kidisti',
    name: 'Kidisti',
    segment: 'SPE',
    archetype: 'SPE Précaire',
    date: '29/01/2026',
    duration: 127,
    status: 'complete',
    profile: 'Aide ménagère, originaire d\'Érythrée, 6 mois en France',
    age: null,
    situation: 'Immigration récente, français limité, urgence d\'emploi. Bénéficie d\'un accompagnement France Travail et cherche activement un contrat pour sécuriser son statut administratif.',
    context: 'Kidisti est arrivée en France il y a 6 mois. Elle parle peu français et passe spontanément à l\'anglais quand elle est en difficulté. Sa priorité est d\'obtenir un contrat pour justifier son statut auprès de France Travail. L\'application représente pour elle un moyen de sécurisation administrative.',
    objectifReel: 'Prouver son existence administrative. Obtenir un contrat officiel pour France Travail. Sécuriser un revenu stable. La mise en relation n\'est qu\'un moyen vers cette fin.',
    keyBehaviors: [
      'Passe spontanément à l\'anglais sans le signaler, ne demande pas d\'aide',
      'Ne compare pas les offres, cherche la première réponse positive',
      'N\'a pas trouvé le bouton Postuler, l\'action principale du parcours SPE était invisible',
      'S\'inquiète immédiatement du transport : comment se rendre physiquement sur le lieu de travail',
      'Mentionne avoir des photos sur Instagram qu\'elle pourrait utiliser pour son profil',
      'Exprime un critère de sélection lié à la religion : elle souhaite éviter les personnes aux pratiques religieuses radicales, ce qui traduit une expérience passée difficile sur ce sujet'
    ],
    surfaceFrustrations: [
      'Le bouton Postuler est invisible',
      'Je ne comprends pas la distance "4.92 km"',
      'Les termes métier sont confus'
    ],
    deepFrustrations: [
      'Besoin de prouver à France Travail qu\'elle travaille. Sans contrat, risque de révocation de statut. Sa priorité est la certitude d\'un emploi, avant la qualité de l\'emploi.',
      'L\'incertitude post-candidature génère de l\'anxiété : "Je reste là-bas ou je rentre chez moi ?" Elle ne sait pas ce qui se passe après avoir postulé.',
      'La langue crée une exclusion silencieuse. Elle ne signale pas qu\'elle ne comprend pas, elle s\'adapte seule. L\'application l\'exclut sans le savoir.',
      'Elle mentionne vouloir éviter les profils de personnes aux pratiques religieuses radicales. Ce critère de sélection personnel, exprimé spontanément, indique une expérience passée négative et un besoin de sécurité qui dépasse le cadre professionnel.'
    ],
    verbatims: [
      { text: 'Je reste là-bas ou je rentre chez moi ? C\'est pas clair. J\'ai besoin du contrat pour France Travail.', context: 'Après avoir postulé, ne comprend pas la suite du parcours' },
      { text: 'Je voudrais mettre les deux (métiers)', context: 'Écran de sélection du type d\'aide, ne comprend pas qu\'elle doit choisir' },
      { text: 'Elle ne prend pas les personnes en fauteuil roulant', context: 'Interprétation erronée d\'une fiche employeur, projette ses propres critères' },
    ],
    signalsForts: [
      'L\'application résout le mauvais problème pour les SPE vulnérables : ils cherchent la sécurité, pas le choix',
      'L\'accessibilité linguistique constitue un prérequis pour que le modèle fonctionne auprès de cette cible',
    ],
    signauxFaibles: [
      'Kidisti ne demande jamais d\'aide quand elle ne comprend pas, ce qui constitue un signal d\'exclusion silencieuse',
      'Elle mentionne spontanément le contrat et France Travail : son besoin réel porte sur la sécurisation administrative plutôt que la mise en relation',
      'Elle évoque le transport avant même le salaire : la logistique physique prime sur la rémunération',
      'Son critère de sélection lié à la religion suggère que la confiance envers les profils ne se limite pas aux compétences professionnelles, mais inclut des dimensions personnelles et culturelles'
    ],
    mentalModel: 'L\'application devrait me donner une réponse claire, pas des options à comparer. Je n\'ai pas le luxe de négocier ou d\'attendre. J\'ai besoin qu\'on me dise "voilà un travail, voilà comment y aller, voilà le contrat".',
    gapAttente: 'Certitude d\'emploi immédiate',
    gapRealite: 'Marketplace à naviguer avec des dizaines d\'offres',
    gapImpact: 'Paralysie, anxiété, sentiment d\'échec',
    testImage: '/images/images tests/img-entretien-kidisti-01.png',
  },
  {
    id: 'severine',
    name: 'Séverine',
    segment: 'PE',
    archetype: 'PE Bénéficiaire',
    date: '29/01/2026',
    duration: 68,
    status: 'complete',
    profile: 'Bénéficiaire PCH, atteinte de la maladie de Lyme',
    age: null,
    situation: 'Atteinte de la maladie de Lyme, bénéficiaire de la Prestation de Compensation du Handicap (PCH). Recherche une assistante de vie pour elle-même, pas pour un proche. Sa relation à l\'aide à domicile est intime et quotidienne.',
    context: 'Séverine est la première PE testée. Elle cherche une aide pour elle-même en raison de sa maladie. Son rapport à l\'application diffère des autres PE : elle ne recrute pas à distance pour un tiers, elle cherche quelqu\'un qui va partager son quotidien. La terminologie métier l\'a particulièrement déstabilisée, elle ne se reconnaît dans aucune des catégories proposées.',
    objectifReel: 'Trouver une personne de confiance pour l\'accompagner au quotidien. La PCH couvre les frais, mais le choix de la personne est personnel et émotionnel.',
    keyBehaviors: [
      'Bloquée sur l\'interface de planification : "Je ne comprends pas ce que je dois faire"',
      'La terminologie métier la déstabilise : "Ça veut tout et rien dire"',
      'Cherche des informations sur le lien avec la PCH, absentes de l\'application',
      'Temps de session : 68 min pour un parcours prévu en 5 min'
    ],
    surfaceFrustrations: [
      'L\'interface de planification est incompréhensible',
      'La terminologie est vague et imprécise',
      'Pas de lien avec la PCH'
    ],
    deepFrustrations: [
      'L\'application ne reconnaît pas sa réalité : elle est à la fois employeur et personne en situation de handicap. Les catégories proposées ne couvrent pas son cas.',
      'La planification rigide ne correspond pas à son quotidien. Ses besoins varient selon les jours et son état de santé.',
      'L\'absence de lien avec la PCH la force à gérer deux systèmes en parallèle, alors que sa maladie lui impose déjà une charge mentale élevée.'
    ],
    verbatims: [
      { text: 'C\'est trop vague, ça veut tout et rien dire.', context: 'Sur la terminologie métier : aide ménagère, assistance de vie, dame de compagnie' },
      { text: 'Franchement, je ne comprends pas ce que je dois faire.', context: 'Interface de planification des créneaux' },
    ],
    signalsForts: [
      'Le parcours PE prend 68 min au lieu des 5 min prévues : l\'hypothèse H2 est invalidée dès le premier test PE',
      'La terminologie métier exclut une partie des utilisateurs : le vocabulaire est conçu pour le secteur, pas pour les bénéficiaires'
    ],
    signauxFaibles: [
      'L\'absence de lien avec la PCH révèle un angle mort du produit : les PE bénéficiaires sont aussi des usagers du système social',
      'La variabilité de ses besoins selon son état de santé suggère qu\'un modèle de planning fixe est inadapté'
    ],
    mentalModel: 'J\'ai besoin de quelqu\'un qui comprenne ma situation. Ce n\'est pas une question de "service", c\'est une question de vie quotidienne. L\'application devrait m\'aider à trouver cette personne et à gérer la partie administrative avec la PCH.',
    gapAttente: 'Accompagnement adapté à sa situation de handicap',
    gapRealite: 'Interface générique sans prise en compte du handicap ni de la PCH',
    gapImpact: 'Frustration, sentiment de ne pas être comprise par le produit',
    testImage: null,
  },
  {
    id: 'daniel',
    name: 'Daniel',
    segment: 'SPE',
    archetype: 'SPE Précaire',
    date: '30/01/2026',
    duration: 67,
    status: 'interrupted',
    profile: 'Aide-soignant en alternance',
    age: null,
    situation: 'En alternance aide-soignant, cherche des heures complémentaires pour joindre les deux bouts. Situation financière précaire. A besoin de clarifier son rôle dans l\'application.',
    context: 'Daniel est le seul participant dont la session a été interrompue. Il a confondu les offres d\'employeurs avec des profils de candidats comme lui. Quand il a réalisé son erreur, il a intériorisé la faute : "peut-être que je ne suis pas assez intelligent pour ce métier". La confusion technique a entraîné une perte de confiance.',
    objectifReel: 'Trouver des heures complémentaires pour sécuriser un revenu. Besoin de clarté sur son rôle : est-il un candidat ou un concurrent ?',
    keyBehaviors: [
      'A confondu les cartes d\'offres (employeurs) avec des profils de candidats comme lui',
      'La confusion a provoqué un effondrement de confiance et l\'arrêt de la session',
      'Ne comprend pas la distinction PE/SPE sur l\'écran "Indiquer mon besoin" : "Tous les deux sont travail"',
      'S\'est blâmé lui-même pour l\'erreur de l\'interface'
    ],
    surfaceFrustrations: [
      'J\'ai confondu les profils',
      'Je ne comprends pas la différence entre les deux options',
      'Ça n\'a rien à voir avec moi'
    ],
    deepFrustrations: [
      'Remise en question de sa propre valeur. En réalisant son erreur, il a intériorisé la faute plutôt que de la rattacher à l\'interface : "peut-être que je ne suis pas assez intelligent pour ce métier".',
      'Un mal-être visible pendant la session : "Le moral déjà, je suis pas bien déjà dans le moral." L\'interface a renforcé une vulnérabilité préexistante.',
      'La confusion PE/SPE relève d\'un problème de modèle mental, pas seulement de formulation. Daniel ne comprend pas sa place dans le système.'
    ],
    verbatims: [
      { text: 'Selon moi les personnes comme Jean Martin c\'est comme moi.', context: 'Confond les offres d\'employeurs avec des profils de candidats' },
      { text: 'Ça n\'a rien à voir avec moi. Je me sens mal à l\'aise.', context: 'Quand on lui explique qu\'il regardait des offres, pas des collègues' },
      { text: 'Le moral déjà, je suis pas bien déjà dans le moral.', context: 'Moment de l\'interruption de session' },
      { text: 'Tous les deux sont travail.', context: 'Écran de sélection PE/SPE, ne comprend pas la distinction' }
    ],
    signalsForts: [
      'La confusion PE/SPE provoque des crises de confiance : Daniel s\'est blâmé lui-même, pas l\'interface',
      'Session interrompue : signal critique. Le produit a généré un mal-être observable chez un utilisateur en situation de vulnérabilité.'
    ],
    signauxFaibles: [
      'Daniel dit "tous les deux sont travail" : pour les SPE, la distinction PE/SPE n\'a pas de sens dans leur cadre de référence',
      'Il s\'est blâmé lui-même. Les utilisateurs en situation précaire internalisent les échecs de l\'interface comme des échecs personnels.'
    ],
    mentalModel: 'Je cherche du travail. L\'application devrait me montrer des offres d\'emploi claires, avec des employeurs identifiés comme tels. Je ne devrais pas avoir à deviner qui est qui.',
    gapAttente: 'Clarté sur son rôle dans le système',
    gapRealite: 'Confusion complète PE/SPE, offres et profils mélangés',
    gapImpact: 'Effondrement de confiance, interruption de session, remise en question personnelle',
    testImage: null,
  },
  {
    id: 'isabelle',
    name: 'Isabelle',
    segment: 'PE',
    archetype: 'PE Aidant familial',
    date: '30/01/2026',
    duration: 60,
    status: 'complete',
    profile: 'Ingénieur, aidante pour ses parents âgés',
    age: null,
    situation: 'Ingénieur de formation, aidante familiale pour ses parents âgés. Elle recrute pour des personnes vulnérables dont elle a la charge. Pour elle, le recrutement relève d\'une démarche de soin.',
    context: 'Isabelle représente le segment de l\'aidant familial. Elle cherche une aide pour ses parents, pas pour elle-même. Ce décalage n\'est géré à aucun moment du parcours. L\'application présuppose que le PE est aussi le bénéficiaire. Son approche est méthodique et prudente, guidée par la responsabilité qu\'elle porte.',
    objectifReel: 'Protéger ses parents vulnérables. Trouver quelqu\'un de confiance à qui confier leur sécurité. Se décharger d\'une part de la culpabilité de ne pas pouvoir être présente en permanence.',
    keyBehaviors: [
      'Approche méthodique : compare les profils, prend des notes',
      'Cherche des signaux de fiabilité : vérification, références, avis',
      'Le cas de l\'aidant n\'est géré à aucun moment du parcours',
      'Juge l\'interface "jolie et agréable" mais insuffisante sur le fond'
    ],
    surfaceFrustrations: [
      'Je veux des profils vérifiés',
      'Il manque des références et des avis',
      'Le cas de l\'aidant n\'est pas géré'
    ],
    deepFrustrations: [
      'Culpabilité et responsabilité pour la sécurité de ses parents vulnérables. Elle ne recrute pas un employé, elle externalise les soins de personnes qu\'elle aime.',
      'L\'absence de vérification des profils la met face à un risque qu\'elle n\'est pas prête à prendre : confier ses parents à un inconnu non vérifié.',
      'Le parcours ne reconnaît pas son rôle d\'intermédiaire. Elle doit remplir les informations comme si c\'était pour elle, alors que c\'est pour un tiers.'
    ],
    verbatims: [
      { text: 'Ce n\'est pas pour moi, c\'est pour mes parents.', context: 'Explication de sa démarche, le parcours ne gère pas le cas aidant' },
      { text: 'Je ne rentrerai en contact avec personne sans vérification.', context: 'Sur l\'absence de vérification des profils candidats' }
    ],
    signalsForts: [
      'Le cas de l\'aidant familial n\'est pas géré : un segment PE majeur est ignoré par le produit',
      'La vérification des profils est une condition sine qua non pour les PE sérieux'
    ],
    signauxFaibles: [
      'Elle juge l\'interface agréable mais ne l\'utiliserait pas en l\'état : le design ne suffit pas sans la confiance',
      'Son approche méthodique (notes, comparaison) suggère un besoin d\'outils avancés incompatibles avec le mobile'
    ],
    mentalModel: 'Je ne recrute pas un employé, je confie la sécurité de quelqu\'un que j\'aime. J\'ai besoin de garanties, pas de suggestions. Le profil doit être vérifié, référencé, et je dois pouvoir rencontrer la personne avant de décider.',
    gapAttente: 'Profils vérifiés, pré-sélectionnés, avec références',
    gapRealite: 'Matching algorithmique sans vérification',
    gapImpact: 'Méfiance, refus de contacter sans garanties',
    testImage: '/images/images tests/img-entretien-isabelle-03.png',
  },
  {
    id: 'veronique',
    name: 'Véronique',
    segment: 'PE',
    archetype: 'PE Expert',
    date: '02/02/2026',
    duration: 110,
    status: 'complete',
    profile: 'Ancienne VP FEPEM, experte recrutement',
    age: null,
    situation: 'Ancienne vice-présidente de la FEPEM. Expérience significative du recrutement dans le secteur. Compare systématiquement l\'application à France Travail (service public) et attend des standards institutionnels.',
    context: 'Véronique est la participante la plus exigeante et la plus articulée. Sa session de 110 minutes est la plus longue après Kidisti. Elle connaît le secteur de l\'intérieur et juge l\'application contre des standards professionnels, pas contre des applications grand public. Le format mobile-only est qualifié de "rédhibitoire".',
    objectifReel: 'Recruter de manière professionnelle et méthodique. Avoir accès aux mêmes outils que les institutions. Ne pas faire de compromis sur la qualité du processus de recrutement.',
    keyBehaviors: [
      'Compare systématiquement à France Travail, standard de référence',
      'Session de 110 min : prend le temps d\'analyser chaque écran en profondeur',
      'Demande des CV, lettres de motivation, contact direct (tél/email)',
      'Rejette catégoriquement le format mobile-only',
      'Juge l\'onboarding "léger et clair" mais l\'ensemble insuffisant'
    ],
    surfaceFrustrations: [
      'C\'est rédhibitoire si c\'est sur mobile seulement',
      'J\'ai besoin de voir le téléphone et l\'adresse email',
      'C\'est vous qui faites une séparation (Suggestions/Candidats) alors que le PE n\'en a pas besoin'
    ],
    deepFrustrations: [
      'Perte de contrôle dans un processus à enjeux élevés. Le mobile force le mode "spontané, instantané" alors qu\'elle veut être intentionnelle et méthodique.',
      'Le format mobile réduit le recrutement à un acte impulsif. "On ne va pas recruter comme ça à l\'avenir la personne qui va s\'occuper de la prunelle de leurs yeux."',
      'La distinction Suggestions/Candidats est une création produit qui ne correspond à aucune réalité utilisateur. C\'est une segmentation artificielle qui complique sans apporter de valeur.'
    ],
    verbatims: [
      { text: 'On ne recrute pas sur un portable la personne qui va s\'occuper de la prunelle de leurs yeux.', context: 'Sur le format mobile-only' },
      { text: 'C\'est rédhibitoire si c\'est sur application mobile seulement.', context: 'Demande explicite d\'une version desktop' },
      { text: 'C\'est vous qui faites une séparation alors que le PE n\'en a pas besoin.', context: 'Sur la distinction Suggestions/Candidats' },
      { text: 'Je ne rentrerai en contact avec personne.', context: 'Sans téléphone ni email, refuse le contact via messagerie uniquement' },
      { text: 'Vous avez fait du bon boulot.', context: 'Sur l\'onboarding et l\'interface globale, positive malgré les critiques de fond' },
      { text: 'Le téléphone portable c\'est de l\'instantané, c\'est du spontané, c\'est du rapide, mais ce n\'est pas du travail de fond.', context: 'Explication de pourquoi le mobile est inadéquat pour le recrutement' },
      { text: 'Franchement, le meilleur que je connaisse, c\'est France Travail.', context: 'Standard de référence pour une plateforme de mise en relation sérieuse' }
    ],
    signalsForts: [
      'Mobile-only est une barrière pour les PE sérieux : la plateforme exclut le segment le plus exigeant sur la qualité du recrutement',
      'Les PE attendent des fonctionnalités de niveau institutionnel : le standard est France Travail, pas Leboncoin'
    ],
    signauxFaibles: [
      'Malgré ses critiques de fond, elle juge l\'interface "bien faite" : le problème n\'est pas le design, c\'est le canal et le modèle',
      'Elle compare à France Travail mais aussi aux mandataires : il y a un modèle intermédiaire entre marketplace et service public'
    ],
    mentalModel: 'Le recrutement est un processus sérieux qui nécessite du temps, de l\'espace (desktop), et des outils de comparaison avancés. Le mobile est pour la notification, pas pour la décision.',
    gapAttente: 'Outils niveau institutionnel, desktop, CV, références',
    gapRealite: 'Application mobile grand public, sans contact direct, sans CV',
    gapImpact: 'Refus d\'utilisation ("rédhibitoire")',
    testImage: '/images/images tests/img-entretien-veronique-02.png',
  },
  {
    id: 'megane',
    name: 'Mégane',
    segment: 'SPE',
    archetype: 'SPE Multi-clients',
    date: '03/02/2026',
    duration: 56,
    status: 'complete',
    profile: 'Aide ménagère indépendante, 8 ans d\'expérience',
    age: null,
    situation: 'Aide ménagère depuis 8 ans, fonctionne en mode indépendant avec plusieurs clients. Se déplace à pied et optimise son planning pour minimiser les temps de trajet. Seule participante globalement satisfaite de l\'application.',
    context: 'Mégane est la seule participante pour qui l\'application fonctionne bien. Sa session est la plus courte (56 min) et la plus fluide. Elle navigue dans un mode marketplace parce qu\'elle est dans une logique marketplace : elle enchaîne les missions, compare les offres, décide vite. Ce qui confirme que l\'application a été conçue pour ce profil, mais uniquement pour ce profil.',
    objectifReel: 'Maximiser l\'efficacité personnelle. Enchaîner les missions. Minimiser les temps de trajet. Garder le contrôle de son planning.',
    keyBehaviors: [
      'Navigation fluide, parcours le plus court (56 min)',
      'Compare les offres de manière pragmatique : distance, horaires, rémunération',
      'Demande la géolocalisation pour calculer les temps de trajet à pied',
      'Apprécie la messagerie sécurisée : "Pratique de ne pas donner son tél direct"',
      'Seule participante globalement positive sur l\'application'
    ],
    surfaceFrustrations: [
      'J\'ai besoin de la géolocalisation pour calculer les distances',
      'Je voudrais savoir la distance entre ma cliente et moi',
      'Il manque l\'indication de régulier/occasionnel sur la première page'
    ],
    deepFrustrations: [
      'Perte de contrôle et d\'autonomie. Elle optimise sa vie (plusieurs clients, temps de trajet minimal). Sans géolocalisation, elle est à la merci de la logistique employeur.',
      'L\'absence de géolocalisation affecte directement son modèle économique. Chaque minute de trajet est une minute non rémunérée.'
    ],
    verbatims: [
      { text: 'L\'application est très bien développée, elle est claire, on a le strict minimum dont on a besoin.', context: 'Avis global positif, l\'application correspond à son mode de fonctionnement' },
      { text: 'Au moins avoir le nom de la rue pour calculer la distance.', context: 'Besoin de géolocalisation précise pour organiser ses déplacements' },
      { text: 'Moi, la priorité, c\'est la zone géographique, de savoir la distance entre ma cliente et moi.', context: 'Question baguette magique, sa priorité n°1' },
      { text: 'C\'est une application qui donne envie, qui est très claire. Moi, j\'en serais contente.', context: 'Impression finale, seule participante pleinement satisfaite' },
    ],
    signalsForts: [
      'Le modèle marketplace fonctionne uniquement pour ce profil multi-clients transactionnel',
      'La géolocalisation est un besoin universel : tous les participants sauf 2 la demandent'
    ],
    signauxFaibles: [
      'Mégane est la seule satisfaite, ce qui confirme que l\'application est conçue pour un seul segment',
      'Elle se déplace à pied : la géolocalisation est encore plus critique pour les SPE sans véhicule'
    ],
    mentalModel: 'L\'application est un outil professionnel pour gérer mon activité. Je compare, je choisis, je décide. J\'ai besoin de voir la distance, les horaires, la rémunération, et de pouvoir décider vite.',
    gapAttente: 'Outils d\'optimisation et de planification',
    gapRealite: 'Interface marketplace basique mais fonctionnelle',
    gapImpact: 'Satisfaction (seule utilisatrice satisfaite)',
    testImage: '/images/images tests/img-entretien-megane-01.png',
  },
  {
    id: 'anne-sophie',
    name: 'Anne-Sophie',
    segment: 'PE',
    archetype: 'PE Institutionnel',
    date: '04/02/2026',
    duration: 54,
    status: 'complete',
    profile: 'Responsable régionale FEPEM La Réunion',
    age: null,
    situation: 'Responsable régionale FEPEM à La Réunion. Porte la responsabilité de la crédibilité institutionnelle de la FEPEM dans les DOM-TOM. Connaît les spécificités locales : illettrisme, fracture numérique, diversité culturelle.',
    context: 'Anne-Sophie est à la fois utilisatrice et représentante de l\'institution. Son regard est double : elle teste l\'application comme PE mais évalue aussi les risques réputationnels pour la FEPEM. Elle a vécu l\'expérience de Pôle Emploi avec les faux profils et porte cette mémoire institutionnelle. Sa préoccupation non exprimée directement : si la FEPEM lance sans vérification, les conséquences retomberont sur les responsables régionaux.',
    objectifReel: 'Déployer un outil crédible qui renforce la marque FEPEM. Adapter aux spécificités locales (DOM-TOM, populations fragiles). Protéger l\'institution contre les risques réputationnels.',
    keyBehaviors: [
      'Double lecture : utilisatrice et représentante institutionnelle',
      'Mentionne l\'illettrisme à La Réunion, signal d\'accessibilité critique',
      'Référence l\'échec de Pôle Emploi avec les faux profils',
      'Les checkboxes semblent pré-cochées, ne comprend pas l\'état des cases',
      'Suggère l\'intégration de France Identité pour la vérification',
      'Compare à France Travail comme référence de sérieux'
    ],
    surfaceFrustrations: [
      'Les checkboxes sont confuses : je croyais qu\'elles étaient déjà cochées',
      'J\'ai pas compris ce que c\'était mes suggestions',
      'Les termes ne sont pas clairs pour les populations locales'
    ],
    deepFrustrations: [
      'Responsabilité institutionnelle pour la marque FEPEM. Elle a vécu l\'échec de Pôle Emploi avec les faux profils. Sa préoccupation : "Si on lance sans vérification, je serai tenue responsable de ne pas avoir averti."',
      'Les spécificités DOM-TOM ne sont pas prises en compte : illettrisme, diversité linguistique, fracture numérique. L\'application est conçue pour la France métropolitaine.',
      'L\'ambiguïté des checkboxes constitue un symptôme plus large : si l\'interface génère des erreurs sur les interactions de base, cela fragilise la confiance sur les enjeux critiques (vérification, contact, données personnelles).'
    ],
    verbatims: [
      { text: 'Ce sera une vraie plus-value pour notre secteur.', context: 'Vision positive conditionnelle : "si les profils sont vérifiés"' },
      { text: 'J\'ai pas compris ce que c\'était mes suggestions.', context: 'Distinction Suggestions/Candidats, confusion systématique' },
      { text: 'Je croyais qu\'elle était déjà cochée.', context: 'Ambiguïté visuelle des checkboxes' },
      { text: 'Les candidats ont été vérifiés, contrôlés ? On n\'est pas à faire à des faux profils ?', context: 'Question de confiance institutionnelle, référence à l\'expérience Pôle Emploi' },
      { text: 'Si on n\'a pas le bon profil d\'un particulier employeur et qu\'on est un violeur, excusez-moi j\'y vais franco.', context: 'Risque sécuritaire concret : les PE invitent des inconnus chez eux' },
    ],
    signalsForts: [
      'L\'ambiguïté visuelle des checkboxes est un symptôme : 5 participants pensent qu\'elles sont déjà cochées',
      'La vérification des profils est un enjeu réputationnel pour la FEPEM, pas seulement un besoin utilisateur'
    ],
    signauxFaibles: [
      'Anne-Sophie mentionne l\'illettrisme à La Réunion : l\'accessibilité ne concerne pas que les non-francophones',
      'Elle suggère France Identité : des solutions technologiques existent déjà pour la vérification',
      'Son ton évolue de "c\'est bien" à "c\'est risqué" quand on aborde la vérification, ce qui traduit une inquiétude réelle sur ce sujet'
    ],
    mentalModel: 'L\'application représente la FEPEM. Si elle échoue (faux profils, bugs), c\'est la réputation de l\'institution qui est en jeu. Je dois pouvoir la déployer en confiance sur mon territoire.',
    gapAttente: 'Outil institutionnel crédible et sécurisé',
    gapRealite: 'MVP startup avec des risques non couverts',
    gapImpact: 'Inquiétude pour la marque, recommandation conditionnelle',
    testImage: '/images/images tests/img-entretien-anne-sophie-02.png',
  },
];

// Synthèse croisée des signaux
export const crossAnalysis = {
  signalsForts: [
    {
      title: 'L\'application résout le mauvais problème pour deux segments critiques',
      description: 'Les SPE vulnérables cherchent la sécurité (pas le choix). Les PE sérieux recrutent sur desktop (pas sur mobile). Seule Mégane (multi-clients transactionnels) est satisfaite du modèle marketplace.',
      participants: ['Kidisti', 'Daniel', 'Véronique'],
      framework: 'Le besoin réel des utilisateurs porte sur la sécurisation : sécurisation d\'un emploi pour les SPE, sécurisation d\'un proche pour les PE, sécurisation de la marque pour l\'institution. La mise en relation telle que proposée ne répond pas directement à ce besoin sous-jacent.'
    },
    {
      title: 'Le modèle marketplace est inadapté aux relations longues',
      description: 'Les relations d\'emploi à domicile durent 5 à 7 ans en moyenne. Un modèle transactionnel (comparer, sélectionner, cliquer) est incompatible avec des relations de confiance longue durée. Thomas Devaux (FEPEM) confirme en débrief : "nos moyennes de relation, c\'est 5 à 7 ans."',
      participants: ['Kidisti', 'Isabelle', 'Véronique'],
      framework: 'La forme de l\'interface (marketplace) dicte un comportement (transaction rapide) qui contredit la fonction réelle (relation de confiance). L\'interface devrait guider vers la rencontre, pas vers le clic.'
    },
    {
      title: 'Mobile-only exclut les PE les plus engagés',
      description: 'Le format mobile-only est jugé "rédhibitoire" par Véronique. Le recrutement est un acte de réflexion qui nécessite de l\'espace, du temps, et des outils de comparaison. "Le téléphone portable c\'est de l\'instantané, c\'est du spontané, mais ce n\'est pas du travail de fond."',
      participants: ['Véronique', 'Anne-Sophie'],
      framework: 'Les utilisateurs les plus sérieux sont sur desktop. L\'approche mobile-first a fait oublier que certains usages nécessitent un écran plus grand. Le mobile convient pour la notification, pas pour la décision de recrutement.'
    },
    {
      title: 'La confusion PE/SPE provoque des crises de confiance',
      description: 'Daniel a inversé employeur/employé. En réalisant son erreur, il a intériorisé la faute plutôt que de la rattacher à l\'interface. "Le moral déjà, je suis pas bien déjà dans le moral." L\'interface a renforcé une vulnérabilité préexistante.',
      participants: ['Daniel', 'Kidisti'],
      framework: 'L\'interface a eu un impact émotionnel observable. La confusion a entraîné chez Daniel une remise en question personnelle plutôt qu\'une critique du produit.'
    },
    {
      title: 'La vérification des profils est un enjeu structurant',
      description: 'Les PE confient la sécurité de proches vulnérables (parents âgés, enfants, personnes handicapées) à des inconnus trouvés sur une application. Anne-Sophie a vécu l\'échec de Pôle Emploi avec les faux profils. "Si on est un violeur, excusez-moi j\'y vais franco." Kidisti, côté SPE, exprime un besoin de filtrage qui inclut aussi des critères personnels comme les pratiques religieuses, indiquant que la confiance ne se limite pas aux compétences professionnelles.',
      participants: ['Isabelle', 'Anne-Sophie', 'Véronique', 'Kidisti'],
      framework: 'La confiance est la monnaie d\'échange des marchés à haute responsabilité. Sans vérification, la FEPEM ne joue pas dans la même catégorie que France Travail. Et les critères de confiance des utilisateurs dépassent les seules compétences professionnelles pour inclure des dimensions personnelles et culturelles.'
    },
    {
      title: 'La géolocalisation est un besoin universel',
      description: 'Tous les participants sauf 2 demandent la géolocalisation. Pour Mégane qui se déplace à pied, c\'est un outil d\'optimisation. Pour Kidisti, c\'est une question de faisabilité. Pour les PE, c\'est un critère de sélection n°1.',
      participants: ['Mégane', 'Kidisti', 'Véronique'],
      framework: 'Un besoin exprimé par 5 participants sur 7 dépasse la demande de fonctionnalité isolée. Il s\'agit d\'un manque structurel dans la conception du produit.'
    }
  ],
  signauxFaibles: [
    {
      title: 'La langue crée une exclusion silencieuse',
      description: 'Kidisti passe à l\'anglais sans le signaler. Anne-Sophie mentionne l\'illettrisme à La Réunion. Estimation : 80% des SPE sont non francophones ou en difficulté avec le français écrit.',
      implication: 'L\'accessibilité linguistique constitue un prérequis pour que le modèle fonctionne. Si le panel des SPE est à 80% non francophone, l\'application exclut de fait la majorité de sa cible.'
    },
    {
      title: 'Les utilisateurs précaires internalisent les échecs de l\'interface',
      description: 'Daniel intériorise l\'erreur d\'interface comme un échec personnel. Kidisti s\'adapte seule sans demander d\'aide quand elle ne comprend pas. Les utilisateurs en situation de vulnérabilité ne signalent pas leurs difficultés.',
      implication: 'Les métriques classiques (taux de complétion, temps sur tâche) ne captent pas ce type d\'impact. Le produit peut afficher de bons KPIs tout en générant des difficultés non mesurées.'
    },
    {
      title: 'L\'absence de lien avec les dispositifs sociaux (PCH, France Travail)',
      description: 'Séverine a besoin du lien avec la PCH. Kidisti a besoin du contrat pour France Travail. L\'application fonctionne en silo alors que ses utilisateurs vivent dans un écosystème de dispositifs sociaux.',
      implication: 'L\'application qui intégrera les parcours sociaux aura un avantage structurel : elle deviendra un point d\'entrée unique au lieu d\'un outil supplémentaire à gérer.'
    },
    {
      title: 'Le débrief interne révèle un doute stratégique',
      description: 'Thomas Devaux (FEPEM) dit en débrief : "On va peut-être droit dans le mur." Et : "On s\'est basé sur des plateformes existantes parce qu\'en fait on savait pas quoi faire." L\'équipe produit elle-même questionne le modèle.',
      implication: 'Ce signal provient de l\'équipe elle-même. Quand le product owner exprime ce doute, cela peut indiquer un moment opportun pour réexaminer la direction du produit.'
    },
  ],
  conclusion: 'Les 7 tests montrent un produit fonctionnel dont le positionnement mérite d\'être réexaminé. L\'application a été conçue pour un segment (SPE multi-clients) qui ne représente qu\'une fraction de la cible. Pour les SPE vulnérables et les PE sérieux, les deux segments les plus critiques, le produit ne couvre pas le besoin principal. La question stratégique porte sur la définition de la cible et du besoin réel auquel l\'application doit répondre.'
};
