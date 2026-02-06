export const hypothesesData = [
  {
    id: 'H1', name: 'Onboarding clair', status: 'partial', score: 60,
    finding: "L'onboarding est compris dans les grandes lignes mais génère des frictions significatives sur la longueur du parcours et la justification des étapes.",
    evidence: "\"J'ai compris ce qu'on me demandait, mais j'ai trouvé ça long et j'ai failli abandonner.\" P3 (SPE précaire)",
    impact: "Risque d'abandon précoce avant même d'avoir vu la valeur de l'application.",
  },
  {
    id: 'H2', name: 'Parcours PE (<5min)', status: 'invalid', score: 20,
    finding: "Le parcours PE dépasse systématiquement les 5 minutes prévues, avec une moyenne de 12 minutes pour publier une annonce.",
    evidence: "\"Ça fait déjà 10 minutes et je n'ai toujours pas vu de candidat.\" P1 (PE aidant familial)",
    impact: "Écart critique entre la promesse d'efficacité et l'expérience réelle. Les PE sérieux risquent de quitter l'application.",
  },
  {
    id: 'H3', name: 'Parcours SPE (<5min)', status: 'partial', score: 50,
    finding: "Le parcours SPE est plus fluide mais reste freiné par des champs non compris et le manque de feedback à chaque étape.",
    evidence: "\"Je ne sais pas si mon profil est bien rempli, il n'y a pas de confirmation.\" P5 (SPE multi-clients)",
    impact: "L'absence de feedback génère de l'incertitude et réduit la confiance dans la plateforme.",
  },
  {
    id: 'H4', name: 'Prise de contact fluide', status: 'invalid', score: 25,
    finding: "La prise de contact est perçue comme froide et impersonnelle. L'absence de messagerie directe frustre les deux segments.",
    evidence: "\"Comment je fais pour lui parler ? Je ne vais pas l'appeler comme ça sans savoir.\" P2 (PE expert)",
    impact: "Le modèle transactionnel (clic → contact) est inadapté à la relation d'emploi longue du secteur.",
  },
  {
    id: 'H5', name: 'Infos profil justifiées', status: 'valid', score: 85,
    finding: "Les informations demandées dans le profil sont globalement comprises et acceptées par les utilisateurs.",
    evidence: "\"C'est normal qu'on demande tout ça, c'est pour un emploi quand même.\" P4 (PE institutionnel)",
    impact: "Point fort du produit. L'exhaustivité du profil rassure plutôt qu'elle ne freine.",
  },
  {
    id: 'H6', name: 'Suggestions/Candidats compris', status: 'invalid', score: 15,
    finding: "La distinction entre 'Suggestions' et 'Candidats' n'est comprise par aucun participant. Le vocabulaire est ambigu.",
    evidence: "\"C'est quoi la différence ? Pour moi un candidat c'est quelqu'un qui postule, là c'est pareil.\" P1 (PE)",
    impact: "Confusion fondamentale sur l'architecture informationnelle. Les PE ne trouvent pas les candidats pertinents.",
  },
  {
    id: 'H7', name: 'Obligatoire/plus tard compris', status: 'valid', score: 90,
    finding: "La distinction entre champs obligatoires et optionnels est bien comprise grâce aux indicateurs visuels.",
    evidence: "\"L'étoile rouge c'est obligatoire, le reste je peux faire après.\" P6 (SPE précaire)",
    impact: "Bonne pratique UX qui permet aux utilisateurs de progresser sans blocage.",
  },
  {
    id: 'H8', name: 'Confiance annonce SPE', status: 'partial', score: 45,
    finding: "Les annonces consultées par les SPE inspirent une confiance mitigée. Le manque de détails concrets et de vérification génère du doute.",
    evidence: "\"Comment je sais si c'est sérieux ? N'importe qui peut mettre une annonce.\" P3 (SPE précaire)",
    impact: "La confiance est le besoin n°1 des SPE en situation précaire. Sans signaux de fiabilité, pas d'engagement.",
  },
  {
    id: 'H9', name: 'Confiance profil candidat', status: 'invalid', score: 30,
    finding: "Les PE ne font pas confiance aux profils SPE affichés. L'absence de vérification, références ou avis les freine.",
    evidence: "\"Je ne vais pas confier ma mère à quelqu'un dont je ne sais rien. Il faut des références.\" P1 (PE aidant)",
    impact: "Bloquant pour le recrutement. Les PE préféreront le bouche-à-oreille tant que la confiance ne sera pas établie.",
  },
  {
    id: 'H10', name: 'Conformité annonce PE', status: 'partial', score: 55,
    finding: "Les annonces PE sont jugées incomplètes. Les SPE cherchent des informations pratiques (horaires, transport, type de tâches) absentes.",
    evidence: "\"Il manque les horaires et si c'est accessible en transport. Je ne vais pas postuler à l'aveugle.\" P5 (SPE)",
    impact: "Les SPE filtrent manuellement ce que l'interface devrait fournir, créant de la friction inutile.",
  },
  {
    id: 'H11', name: 'Critères filtre suffisants', status: 'invalid', score: 20,
    finding: "Les filtres de recherche sont insuffisants pour les deux segments. Absence de critères clés : distance, horaires, type de soins.",
    evidence: "\"Je ne peux même pas filtrer par proximité, c'est la base pourtant.\" P7 (PE interrompu)",
    impact: "Les utilisateurs ne peuvent pas trouver ce qu'ils cherchent, rendant l'application inutile pour la mise en relation.",
  },
];
