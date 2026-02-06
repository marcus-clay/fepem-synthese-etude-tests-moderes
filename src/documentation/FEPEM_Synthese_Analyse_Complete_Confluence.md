# Synthèse et Analyse Approfondie - Tests Utilisateurs FEPEM

**Projet :** FEPEM - Application de mise en relation PE/SPE
**Date :** Février 2026
**Auteur :** Victor Soussan (Cocolabs)
**Statut :** Validé

---

## Résumé exécutif

### Découverte majeure

L'application résout le mauvais problème pour deux segments critiques :

1. Les SPE vulnérables qui cherchent la sécurité (pas le choix)
2. Les PE sérieux qui recrutent sur desktop (pas sur mobile)

Le modèle marketplace transactionnel fonctionne uniquement pour les SPE multi-clients (type Mégane).

### 3 insights clés

| # | Insight | Impact |
|---|---------|--------|
| 1 | Modèle marketplace inadapté | Relations de confiance long terme (5-7 ans) incompatibles avec approche transactionnelle |
| 2 | Mobile uniquement rédhibitoire | PE sérieux recrutent sur ordinateur, format mobile exclut une partie de la cible |
| 3 | Vérification des profils critique | Risque réputationnel majeur si faux profils (expérience Pôle Emploi) |

### Chiffres clés

| Métrique | Valeur |
|----------|--------|
| Tests réalisés | 7 sur 10-12 prévus |
| Particuliers Employeurs | 4 (Séverine, Isabelle, Véronique, Anne-Sophie) |
| Salariés (SPE) | 3 (Kidisti, Daniel, Mégane) |
| Durée moyenne | 75 minutes par session |
| Session interrompue | 1 (Daniel - confusion critique) |

### Validation des hypothèses

Sur les 11 hypothèses testées : 3 validées, 4 partiellement validées, 4 invalidées.

---

## 1. Contexte de l'étude

### 1.1 Présentation de la FEPEM

La FEPEM (Fédération des Particuliers Employeurs de France) développe une application mobile de mise en relation entre les salariés du secteur de l'emploi à domicile et les particuliers employeurs.

| Élément | Description |
|---------|-------------|
| Vision produit | Permettre aux PE de trouver des salariés qualifiés et aux salariés de sécuriser leur emploi |
| Périmètre MVP | Phase 1 - Mise en relation uniquement (contractualisation prévue en phase 2) |
| Lancement prévu | Fin février / début mars 2026 |

### 1.2 Objectifs des tests

L'objectif principal était de valider l'utilisabilité et la pertinence du parcours de mise en relation avant le lancement, afin d'identifier les points de friction critiques et les opportunités d'amélioration.

**Questions de recherche :**

- Comment les utilisateurs perçoivent-ils la proposition de valeur ?
- Quels sont les principaux points de friction dans le parcours ?
- Les utilisateurs parviennent-ils à trouver et contacter un profil pertinent ?
- La distinction Suggestions/Candidats est-elle comprise ?
- La terminologie métier est-elle comprise ?

### 1.3 Méthodologie

| Paramètre | Valeur |
|-----------|--------|
| Type | Tests utilisateurs qualitatifs semi-dirigés |
| Format | Entretiens individuels en visioconférence |
| Protocole | Think aloud + Observation |
| Durée | 45-60 minutes par session |
| Équipe | Victor Soussan (animateur) + Thomas Devaux (observateur) |

---

## 2. Panel des participants

### 2.1 Liste des participants

| Participant | Profil | Segment | Date | Durée |
|-------------|--------|---------|------|-------|
| 01 Kidisti | Aide ménagère, Érythrée | SPE | 29/01/2026 | 127 min |
| 02 Séverine | PE, maladie de Lyme | PE | 29/01/2026 | 68 min |
| 03 Daniel | Aide-soignant | SPE | 30/01/2026 | 67 min* |
| 04 Isabelle | PE, aidante parents | PE | 30/01/2026 | 60 min |
| 05 Véronique | Ancienne VP FEPEM | PE | 02/02/2026 | 110 min |
| 06 Mégane | Aide ménagère indépendante | SPE | 03/02/2026 | 56 min |
| 07 Anne-Sophie | Resp. régionale La Réunion | PE | 04/02/2026 | 54 min |

*Session interrompue suite à une confusion critique*

### 2.2 Profils des participants

**Particuliers Employeurs (PE) :**

- Séverine : Atteinte de la maladie de Lyme, bénéficiaire PCH, recherche assistante de vie
- Isabelle : Ingénieur, aidante pour ses parents âgés, expérience bouche-à-oreille
- Véronique : Ancienne VP FEPEM, experte recrutement, utilise France Travail comme référence
- Anne-Sophie : Responsable régionale FEPEM La Réunion, connaît les spécificités DOM-TOM

**Salariés (SPE) :**

- Kidisti : Originaire d'Érythrée, 6 mois en France, peu de français, urgence d'emploi
- Daniel : Aide-soignant en alternance, cherche heures complémentaires, situation précaire
- Mégane : Aide ménagère indépendante, 8 ans d'expérience, mode multi-clients

---

## 3. Résultats par thème

### 3.1 Particuliers Employeurs

#### Onboarding et création de compte

**Constats :**

- Le carousel d'onboarding est bien compris
- La distinction PE/SPE est claire sur le premier écran
- Les checkboxes semblent pré-cochées, créant de la confusion
- Le div beige masque les exigences du mot de passe (point critique)

**Verbatims clés :**

> "C'est bien, c'est léger, l'essentiel est dit" - Véronique

> "Je croyais qu'elle était déjà cochée" - Anne-Sophie

#### Création d'annonce

**Constats :**

- La terminologie métier est incompréhensible : aide à domicile, aide ménagère, assistance de vie
- L'interface de planification bloque complètement le parcours
- Le concept de 'flexible' n'est pas compris
- Pas d'aperçu avant publication de l'annonce

**Verbatims clés :**

> "C'est trop vague, ça veut tout et rien dire" - Séverine

> "Franchement, je ne comprends pas ce que je dois faire" - Séverine

**Frustrations profondes :**

- Le cas de l'aidant n'est pas géré (Isabelle cherche pour ses parents, pas pour elle)
- Aucun lien avec la PCH pour savoir ce qui est pris en charge
- Les critères de filtre sont insuffisants avant publication

#### Suggestions et candidats

**Constats :**

- La distinction Suggestions/Candidats crée de la confusion systématique
- Le message automatique est incohérent : "Merci pour l'intérêt porté à mon égard" alors que c'est le PE qui initie
- Le passage de Suggestions à Candidats n'est pas compris

**Verbatims clés :**

> "J'ai pas compris ce que c'était mes suggestions" - Anne-Sophie

> "C'est vous qui faites une séparation alors que le PE n'en a pas besoin" - Véronique

#### Prise de contact

**Constats :**

- Pas de contact direct (téléphone/email)
- Le téléphone est caché sans explication
- Envoi de message par inadvertance sans confirmation
- Besoin d'échanger avant de contractualiser

**Verbatims clés :**

> "J'aurai besoin de voir le téléphone et adresse email de contact" - Véronique

> "Je ne rentrerai en contact avec personne" - Véronique

### 3.2 Salariés (SPE)

#### Confusion PE/SPE dès l'onboarding

**Constats :**

- L'écran "Indiquer mon besoin" crée de la confusion pour les deux SPE testés
- "Aide à domicile" évoque un métier, pas un service à chercher
- Daniel ne comprend pas la différence entre les deux options

**Verbatims clés :**

> "Tous les deux sont travail" - Daniel

> "Je voudrais mettre les deux (métiers)" - Kidisti

#### Confusion offres/profils (CRITIQUE)

**Découverte majeure - Daniel :**

Daniel a confondu les offres d'emploi (cartes avec noms d'employeurs) avec des profils de candidats comme lui. Cette incompréhension a provoqué une perte de confiance sévère et l'arrêt prématuré de la session.

**Verbatims clés :**

> "Selon moi les personnes comme Jean Martin c'est comme moi" - Daniel

> "Ça n'a rien à voir avec moi. Je me sens mal à l'aise" - Daniel

> "Le moral déjà, je suis pas bien déjà dans le moral" - Daniel

**Impact :**

- Session interrompue à la demande du participant
- Perte de confiance immédiate et durable
- Risque élevé d'abandon pour ce segment

#### Besoins spécifiques des SPE

**Kidisti - Urgence et sécurisation :**

- Ne cherche pas la meilleure offre mais UNE offre pour travailler
- Besoin d'un contrat pour France Travail
- Besoin de savoir où physiquement (carte, transport)

> "Je reste là-bas ou je rentre chez moi ? C'est pas clair. J'ai besoin du contrat pour France Travail" - Kidisti

**Mégane - Organisation multi-clients :**

- Besoin de géolocalisation et temps de trajet (se déplace à pied)
- Besoin d'un planning intégré dans l'app
- L'app convient bien à son mode de fonctionnement

> "L'application est très bien développée, elle est claire, on a le strict minimum dont on a besoin" - Mégane

#### Segmentation révélée

Les tests révèlent deux profils SPE aux attentes très différentes :

| Dimension | Multi-clients (Mégane) | Relation longue (Kidisti) |
|-----------|------------------------|---------------------------|
| Mode | Enchaîne les missions courtes | Relation 5-7 ans |
| Terme utilisé | "Clients" | "Employeur" |
| Priorité | Optimise son planning | Stabilité et confiance |
| Rapport au contrat | Flexibilité, pas de contrat | Contrat, documents officiels |
| Adéquation app | L'app actuelle convient | Codes de confiance manquants |

---

## 4. Analyse approfondie

### 4.1 Frustrations profondes non verbalisées

Les utilisateurs expriment des plaintes de surface, mais leurs comportements et hésitations révèlent des frustrations plus profondes qu'ils n'articulent pas directement.

#### Frustrations SPE

| Participant | Surface | Profonde |
|-------------|---------|----------|
| Kidisti | Le bouton est invisible | Angoisse existentielle de prouver à France Travail qu'elle travaille. Sans contrat, risque de révocation de statut. Elle ne cherche pas le meilleur emploi, elle cherche LA certitude d'un emploi. |
| Daniel | J'ai confondu les profils | Perte de dignité et remise en question de sa propre valeur. Quand il a réalisé son erreur, il ne s'est pas dit "l'interface est confuse", il s'est dit "peut-être que je ne suis pas assez intelligent pour ce métier". |
| Mégane | J'ai besoin de géolocalisation | Perte de contrôle et d'autonomie. Elle optimise sa vie (plusieurs clients, temps de trajet minimal). Sans géolocalisation, elle est à la merci de la logistique employeur. |

#### Frustrations PE

| Participant | Surface | Profonde |
|-------------|---------|----------|
| Isabelle | Je veux des profils vérifiés | Culpabilité et responsabilité pour la sécurité de ses parents vulnérables. Elle ne recrute pas un employé, elle externalise les soins de personnes qu'elle aime. |
| Véronique | Mobile uniquement est inacceptable | Perte de contrôle dans un processus à enjeux élevés. Le mobile force le mode "spontané, instantané" alors qu'elle veut être intentionnelle et méthodique. |
| Anne-Sophie | Les checkboxes sont confuses | Responsabilité institutionnelle pour la marque FEPEM. Elle a vécu l'échec de Pôle Emploi avec les faux profils. Sa peur non dite : "Si on lance sans vérification, je serai tenue responsable de ne pas avoir averti." |

> "On ne va pas recruter comme ça à l'avenir la personne qui va s'occuper de la prunelle de leurs yeux" - Véronique

### 4.2 Signaux faibles

Ces indices subtils peuvent indiquer des problèmes plus larges ou des opportunités non exploitées.

**Signal faible #1 - La langue crée une exclusion silencieuse**

Kidisti passe à l'anglais, ne demande pas d'aide. Anne-Sophie mentionne l'illettrisme à La Réunion. L'estimation de 80% de SPE non francophones est probablement conservative. L'accessibilité linguistique n'est pas une feature, c'est un bloqueur de business model.

**Signal faible #2 - L'ambiguïté visuelle des checkboxes**

5 participants pensent que les checkboxes sont déjà cochées. Cela suggère que l'interface entière pourrait échouer sous charge cognitive. Les utilisateurs passent en mode "ça doit déjà être fait" quand ils sont incertains.

**Signal faible #3 - L'incertitude post-candidature**

Kidisti : "Tout est terminé. Mais le transport, c'est pas clair." L'app ne clarifie pas le parcours post-candidature. Pour les utilisateurs précaires, cette ambiguïté = anxiété.

**Signal faible #4 - Le mot de passe comme point de friction**

5 participants sur 7 ont eu des problèmes. Ce n'est pas un bug UI, c'est un symptôme de marges de sécurité insuffisantes dans l'interface. Quand les champs basiques créent de la friction, l'app échoue aux moments d'engagement.

### 4.3 Signaux forts

Ces patterns clairs et répétés indiquent des problèmes structurels qui nécessitent une attention immédiate.

**Signal fort #1 - L'app résout le mauvais problème pour les SPE**

Kidisti ne cherche pas la meilleure offre, elle a besoin de validation d'emploi immédiate. Daniel ne navigue pas dans un marketplace, il cherche de la clarté. Seule Mégane (multi-clients) est satisfaite car elle navigue réellement dans un marketplace.

**Signal fort #2 - Mobile-only est une barrière pour les PE sérieux**

Véronique : "C'est rédhibitoire." La plateforme exclut le segment de PE le plus sérieux sur la qualité du recrutement - ceux qui prennent le temps de comparer, noter, réfléchir.

**Signal fort #3 - Les PE attendent des fonctionnalités de niveau institutionnel**

Véronique compare à France Travail (service public). Elle attend des filtres avancés, du tri, de la comparaison, des CV/lettres de motivation, du contact direct. L'app est jugée contre des standards institutionnels, pas contre des apps grand public.

**Signal fort #4 - La confusion PE/SPE provoque des crises identitaires**

Daniel a complètement inversé employeur/employé. Quand il a été corrigé, il n'a pas blâmé l'interface - il s'est blâmé lui-même. Ce n'est pas un problème de wording, c'est un problème de modèle mental.

**Signal fort #5 - Les relations long terme nécessitent de la confiance, pas des transactions**

Assistance de vie, garde d'enfants = professions à haute confiance. Un modèle marketplace (swipe, comparer, sélectionner) est inadéquat. L'app a besoin de deux modes : transactionnel (Mégane) et relationnel (Kidisti/Isabelle).

**Signal fort #6 - La géolocalisation est un besoin universel**

Tous les participants sauf 2 demandent la géolocalisation. Ce n'est pas une demande de feature, c'est une nécessité fondamentale. Sans elle, les utilisateurs ne peuvent pas prendre de décisions.

---

## 5. Archétypes utilisateurs

### 5.1 Archétypes SPE

#### Le SPE Précaire (Kidisti, Daniel)

| Dimension | Description |
|-----------|-------------|
| Profil | En situation de vulnérabilité (immigration récente, formation en cours, précarité financière). Cherche la stabilité et la sécurisation, pas l'optimisation. |
| Objectif réel | Prouver son existence administrative, obtenir un contrat officiel, sécuriser un revenu stable. |
| Modèle mental | L'app devrait me donner UNE réponse claire, pas des options à comparer. Je n'ai pas le luxe de négocier ou d'attendre. |
| Parcours type | Inscription > Recherche immédiate > Blocage sur compréhension > Anxiété sur incertitude > Abandon ou persistence sans confiance |
| Hiérarchie des besoins | 1. Documentation officielle > 2. Accessibilité physique (transport) > 3. Relation de confiance > 4. Optimisation salaire |

#### Le SPE Multi-clients (Mégane)

| Dimension | Description |
|-----------|-------------|
| Profil | Expérimenté (8+ ans), autonome, organisé. Fonctionne en mode indépendant avec plusieurs clients. Optimise son planning et ses revenus. |
| Objectif réel | Maximiser l'efficacité personnelle, enchaîner les missions, minimiser les temps de trajet. |
| Modèle mental | L'app est un outil professionnel pour gérer mon activité. Je compare, je choisis, je décide. |
| Parcours type | Inscription rapide > Navigation fluide > Sélection multi-critères > Contact direct > Négociation autonome |
| Hiérarchie des besoins | 1. Efficacité (géolocalisation, planning) > 2. Autonomie (choix, flexibilité) > 3. Revenu > 4. Réputation |

### 5.2 Archétypes PE

#### Le PE Aidant (Isabelle)

| Dimension | Description |
|-----------|-------------|
| Profil | Recrute pour un proche vulnérable (parents âgés, personne en situation de handicap). Porte la responsabilité émotionnelle et pratique des soins. |
| Objectif réel | Protéger un proche vulnérable, trouver quelqu'un de confiance, se décharger de la culpabilité. |
| Modèle mental | Je ne recrute pas un employé, je confie la sécurité de quelqu'un que j'aime. J'ai besoin de garanties, pas de suggestions. |
| Parcours type | Recherche avec critères précis > Frustration sur manque de vérification > Comparaison manuelle > Hésitation > Contact prudent > Rencontre avant décision |
| Hiérarchie des besoins | 1. Sécurité du proche > 2. Confiance dans le candidat > 3. Compatibilité pratique > 4. Prix |

#### Le PE Expert (Véronique)

| Dimension | Description |
|-----------|-------------|
| Profil | Expérimenté dans le recrutement, méthodique, exigeant. Compare systématiquement les candidats, prend des notes, réfléchit avant de décider. |
| Objectif réel | Recruter de manière professionnelle et méthodique, avec les mêmes outils que les institutions. |
| Modèle mental | Le recrutement est un processus sérieux qui nécessite du temps, de l'espace (desktop), et des outils de comparaison avancés. |
| Parcours type | Analyse des besoins > Publication détaillée > Filtrage avancé > Comparaison multi-critères > Contact direct (tél/email) > Entretien structuré > Décision |
| Hiérarchie des besoins | 1. Contrôle et due diligence > 2. Information complète > 3. Contact direct > 4. Conformité légale |

#### Le PE Institutionnel (Anne-Sophie)

| Dimension | Description |
|-----------|-------------|
| Profil | Responsable régional, représentant FEPEM. Porte la responsabilité de la crédibilité institutionnelle et de l'adaptation locale. |
| Objectif réel | Déployer un outil crédible qui renforce la marque FEPEM, adapter aux spécificités locales. |
| Modèle mental | L'app représente la FEPEM. Si elle échoue (faux profils, bugs), c'est la réputation de l'institution qui est en jeu. |
| Parcours type | Évaluation critique > Identification des risques > Test terrain > Feedback structuré > Recommandations conditionnelles |
| Hiérarchie des besoins | 1. Protection de la marque > 2. Adaptation locale > 3. Accessibilité pour populations diverses > 4. Fonctionnalités |

---

## 6. Écarts de modèles mentaux

Le tableau ci-dessous compare ce que les utilisateurs attendent vs ce que l'app délivre. Ces écarts expliquent la majorité des frustrations observées.

| Utilisateur | Attente | Réalité | Impact |
|-------------|---------|---------|--------|
| Kidisti | Certitude d'emploi immédiate | Marketplace à naviguer | Paralysie, anxiété |
| Daniel | Clarté sur son rôle | Confusion PE/SPE | Effondrement de confiance |
| Mégane | Outils d'optimisation | Interface marketplace | Satisfaction (seule) |
| Isabelle | Profils vérifiés, pré-sélectionnés | Matching algorithmique | Méfiance |
| Véronique | Outils niveau institutionnel, desktop | App mobile grand public | Refus d'utilisation |
| Anne-Sophie | Responsabilité institutionnelle | Startup thinking | Inquiétude pour la marque |

---

## 7. Validation des hypothèses

| # | Hypothèse | Résultat | Preuves |
|---|-----------|----------|---------|
| H1 | Onboarding clair | PARTIELLE | Email OK, mot de passe problématique |
| H2 | Parcours rapide PE (<5min) | INVALIDÉE | 68 min en moyenne, blocages multiples |
| H3 | Parcours rapide SPE (<5min) | PARTIELLE | Mégane OK, Daniel/Kidisti bloqués |
| H4 | Prise de contact fluide | INVALIDÉE | Message incohérent, pas de contact direct |
| H5 | Infos profil justifiées | VALIDÉE | Compétences claires, bien comprises |
| H6 | Suggestions/Candidats clair | INVALIDÉE | Confusion systématique |
| H7 | Obligatoire/plus tard compris | VALIDÉE | Pas de blocage sur cet écran |
| H8 | Confiance annonce SPE | PARTIELLE | Kidisti/Daniel ne comprennent pas les cartes |
| H9 | Confiance profil candidat | INVALIDÉE | Manque vérification, CV, tél, localisation |
| H10 | Conformité annonce PE | PARTIELLE | Pas d'aperçu, critères manquants |
| H11 | Critères suffisants | INVALIDÉE | Distance, permis, diplômes manquants |

---

## 8. Classification des insights

### 8.1 Bugs techniques

- Bug mot de passe : exigences masquées par le div beige, 3 tentatives nécessaires
- Bug checkboxes : semblent pré-cochées alors qu'elles ne le sont pas
- Champ nombre d'heures : ne fonctionne pas avec le clavier
- Sélection créneaux : "Matinée" sélectionnée par défaut sans action
- Barre de navigation : ne permet pas de naviguer correctement

### 8.2 Quick wins (faciles à corriger)

- Adapter le message automatique selon qui initie le contact
- Afficher les exigences mot de passe AVANT le champ de saisie
- Remplacer "Courriel" par "Email"
- Préciser le salaire : brut/net, CP inclus
- Afficher occasionnel/récurrent sur les vignettes
- Ajouter "Confirmée" à côté du bouton Postuler pour le rendre visible
- Clarifier section "Logement" (logement de l'employeur, pas du salarié)

### 8.3 Problèmes UX profonds

- Vocabulaire métier incompréhensible (aide ménagère, assistance de vie, dame de compagnie)
- Interface de planification bloquante (concept "flexible", créneaux, jours)
- Distinction Suggestions/Candidats illogique
- Confusion offres/profils pour les SPE
- Cas de l'aidant non géré
- Mobile uniquement = rédhibitoire pour les PE sérieux
- Modèle marketplace inadapté aux relations longues

### 8.4 Points positifs

- Interface jugée "jolie et agréable" (Isabelle)
- Onboarding léger et clair (Véronique)
- "Vous avez fait du bon boulot" (Véronique)
- "L'application est très bien développée, elle est claire" (Mégane)
- Messagerie sécurisante : "Pratique de ne pas donner son tél direct" (Mégane)
- "Ce sera une vraie plus-value pour notre secteur" (Anne-Sophie)

---

## 9. Chantiers stratégiques

### 9.1 Court terme (avant lancement)

**Corriger les bugs critiques :**

- Div beige mot de passe : afficher les exigences avant la saisie
- Checkboxes : revoir le design pour différencier coché/non coché
- Message automatique : adapter selon le contexte (PE initie vs SPE postule)

**Clarifier l'interface :**

- Page offres SPE : différencier visuellement employeurs et candidats
- Ajouter un indicateur clair "EMPLOYEUR" ou "Cherche un salarié"
- Augmenter la visibilité du bouton Postuler

**Simplifier la planification :**

- Supprimer ou expliquer le concept "flexible"
- Revoir l'interface de sélection des créneaux

### 9.2 Moyen terme (sprint suivant)

**Critères de filtre :**

- Ajouter distance/km, permis, voiture, diplômes, expérience avant publication
- Ajouter un tri par kilométrage (critère n°1 pour les PE)

**Contact et confiance :**

- Afficher téléphone et email du candidat (pour PE)
- Permettre CV et lettre de motivation
- Ajouter aperçu avant publication

**Terminologie :**

- Refondre les catégories d'aide avec des termes compréhensibles
- Tester les intitulés avec des utilisateurs réels

**Géolocalisation :**

- Ajouter carte interactive + temps de trajet en transport en commun
- Filtre "Accessible en métro/bus"

### 9.3 Long terme (chantiers stratégiques)

**Version desktop :**

C'est l'attente majeure de Véronique et probablement d'une partie significative des PE.

> "C'est rédhibitoire si c'est sur application mobile seulement. On ne recrute pas sur un portable la personne qui va s'occuper de la prunelle de leurs yeux" - Véronique

**Vérification des profils :**

Risque réputationnel majeur si des faux profils apparaissent (expérience Pôle Emploi).

- Intégrer France Identité ou dispositif équivalent
- Mentionner que les profils sont déclaratifs
- Afficher le délai moyen de réponse des candidats

**Parcours aidant :**

- Permettre de spécifier qu'on cherche pour un proche et non pour soi-même

**Deux modes distincts :**

- Mode transactionnel (multi-clients type Mégane)
- Mode relationnel (emploi stable type Kidisti/Isabelle)

**Accessibilité linguistique :**

- Explorer anglais, arabe, autres langues prioritaires

---

## 10. Conclusion

Les 7 tests utilisateurs réalisés ont permis d'identifier des points de friction significatifs qui doivent être adressés avant le lancement de l'application.

### Points forts

- L'interface est jugée agréable et moderne
- L'onboarding est compris dans ses grandes lignes
- L'application répond bien aux besoins des SPE multi-clients (type Mégane)
- La messagerie sécurisée est appréciée

### Points critiques à adresser

- Le vocabulaire métier doit être repensé
- L'interface de planification nécessite une refonte complète
- La distinction Suggestions/Candidats doit être clarifiée ou supprimée
- La vérification des profils est essentielle pour la crédibilité de la FEPEM
- Une version desktop est indispensable pour les PE sérieux

### Deux crises structurelles identifiées

**Crise #1 (PE) :** L'app mobile-only exclut les PE sérieux qui recrutent sur desktop avec méthode. Véronique représente un segment critique qui ne sera jamais utilisateur sans version desktop.

**Crise #2 (SPE) :** L'app marketplace fonctionne pour Mégane (multi-clients transactionnels) mais échoue pour les SPE vulnérables (Kidisti, Daniel) qui cherchent la sécurité et la documentation, pas le choix et la négociation.

### Recommandation globale

L'application est fonctionnelle mais nécessite des ajustements significatifs avant le lancement.

Un second round de tests est recommandé après correction des points critiques identifiés, en particulier sur l'interface de planification et la page des offres SPE.

La solution n'est pas une amélioration incrémentale de l'UI. Elle nécessite une décision stratégique claire : pour qui FEPEM construit-elle cette application ?

### Prochaines étapes

1. Corriger les bugs critiques (mot de passe, checkboxes, message automatique)
2. Revoir l'interface de planification
3. Différencier visuellement les cartes employeurs/candidats
4. Planifier un second round de tests (5 participants)
5. Évaluer la faisabilité d'une version desktop

---

## Documents liés

- [FEPEM_Synthese_Analyse_Complete_Fevrier2026.docx](lien)
- [FEPEM_Presentation_Complete_Fevrier2026.pptx](lien)
- [Guide d'entretien PE](lien)
- [Guide d'entretien SPE](lien)
- [Grille d'observation](lien)

---

*Document réalisé par Victor Soussan - Cocolabs pour FEPEM*

*Février 2026*
