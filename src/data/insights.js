import { FEPEM } from '../design/tokens';

export const insightsData = {
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
        'Repenser l\'objectif de cette étape, notamment pour des PE qui cherchent un accompagnement récurrent sur le long terme'
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
      probleme: 'L\'absence de vérification des profils bloque les PE sérieux. Risque réputationnel pour la FEPEM. Côté SPE, Kidisti exprime aussi un besoin de filtrage qui inclut des critères personnels : elle souhaite éviter les personnes aux pratiques religieuses radicales, ce qui traduit une expérience passée difficile et un besoin de sécurité qui dépasse le cadre professionnel.',
      consequence: 'Les PE refusent d\'utiliser une plateforme sans garantie et se tournent vers France Travail ou le bouche-à-oreille. Les critères de confiance des utilisateurs dépassent les seules compétences professionnelles pour inclure des dimensions personnelles et culturelles.',
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
        'Confirmer sur cet écran ce que signifie "Confirmé" (niveau d\'expérience du candidat, confirmation officielle effectuée par Fepem ?)',
        'Prendre en compte que la confiance envers les profils inclut des dimensions au-delà des compétences professionnelles (critères personnels, culturels) pour certains utilisateurs.'
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
      consequence: 'Daniel a confondu les rôles et pense que les offres d\'emploi sont d\'autres chercheurs d\'emploi comme lui. Perte de confiance observée.',
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
      title: 'Confusion offres/profils, point CRITIQUE',
      probleme: 'Les cartes avec noms d\'employeurs (Jean Martin, Hugo Cavani) ressemblent à des profils de candidats. Daniel les confond complètement.',
      consequence: 'Session interrompue. Daniel se sent \'mal à l\'aise\' et \'déstabilisé\'. Perte de confiance observée pendant la session.',
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
      probleme: 'Kidisti utilise l\'app principalement pour obtenir un contrat et prouver à France Travail qu\'elle travaille. L\'app ne couvre pas ce besoin.',
      consequence: 'Elle ne peut pas attendre de négocier. Elle a besoin d\'un contrat MAINTENANT. L\'app ajoute de l\'incertitude au lieu de la réduire.',
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
