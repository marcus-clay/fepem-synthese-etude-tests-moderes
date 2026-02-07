# Guide de Configuration Lookback - Tests Non Modérés FEPEM

**Projet :** Application Mon Emploi Direct  
**Date :** 03 février 2026  
**Auteur :** Victor Soussan

---

## Vue d'ensemble

| Round | Segment | Participants | Coût |
|-------|---------|--------------|------|
| Round 1 : PE | Particuliers Employeurs (aide pour soi + aide pour un proche) | 20 | ~$106 |
| Round 2 : SPE | Salariés du Particulier Employeur | 10 | ~$53 |
| **TOTAL** | | **30** | **~$159** |

---

## Prérequis avant de commencer

- [ ] Budget validé par Alice (~150 EUR)
- [ ] Crédits achetés dans Lookback (Thomas)
- [ ] Liens d'installation app confirmés par Cédric :
  - [ ] Lien Store non référencé (option préférée)
  - [ ] OU Lien APK Android

---

# ROUND 1 : PE (Particuliers Employeurs)

## Étape 1 : Créer le Round

1. Connecte-toi sur [lookback.com](https://lookback.com)
2. Ouvre le projet **"[Fepem] App MED - Campagne - Jan-Fev 2026"**
3. Dans le menu gauche, clique sur le **"+"** à côté de **Rounds**
4. Choisis **Tasks** (colonne UNMODERATED)
5. Clique **Next**

---

## Étape 2 : Settings

Remplis les champs suivants :

| Champ | Valeur à saisir |
|-------|-----------------|
| **Name** | `PE - Particuliers Employeurs` |
| **Description** | `Test du parcours employeur : création de compte, publication d'annonce, recherche et contact de candidats` |
| **Localisation** | `French` |
| **Transcription (required)** | `French` |
| **Device requirements** | Cocher **Mobile** uniquement |
| **Mobile browsers > Hide controls** | Laisser décoché |
| **Participant camera** | Sélectionner **Optional** |

Clique **Save** puis **Next** ou va dans **Test setup** dans le menu gauche.

---

## Étape 3 : Test Setup

### 3.1 BEFORE SESSION - Welcome message

Copie-colle ce texte dans le champ **Welcome message** :

```
Bienvenue dans ce test de l'application Mon Emploi Direct.

Vous allez tester une application qui permet aux particuliers de trouver des aides à domicile (aide ménagère, auxiliaire de vie, garde d'enfants, etc.).

Pensez à voix haute pendant tout le test. Dites ce que vous voyez, ce que vous comprenez, ce qui vous surprend ou vous pose question.

Il n'y a pas de bonne ou mauvaise réponse. C'est l'application qu'on teste, pas vous.

--

AVANT DE COMMENCER

1. Installez l'application "Lookback Participate" depuis le Play Store

2. Installez l'application "Mon Emploi Direct" :
   - Android : [LIEN À COMPLÉTER]

3. Ouvrez Lookback Participate et rejoignez ce test

4. Autorisez l'enregistrement de l'écran et du micro

Une fois prêt, cliquez sur Suivant.
```

### 3.2 DURING SESSION - Scenario

Copie-colle ce texte dans le champ **Scenario** :

```
Contexte : Vous cherchez une aide à domicile (aide ménagère, auxiliaire de vie, ou garde d'enfants) pour quelques heures par semaine. Vous venez de découvrir cette application et vous souhaitez l'explorer.
```

### 3.3 DURING SESSION - Tâche 1

Clique sur **+ Add task** et remplis :

**Task instruction :**
```
TÂCHE 1 : Créer un compte

Votre mission : Créez un compte sur l'application.

Utilisez :
- Votre email personnel
- Un mot de passe de votre choix
- Adresse : 78 rue de Monceau 75008 Paris

Pensez à voix haute : qu'est-ce qui est clair ? Qu'est-ce qui vous fait hésiter ?
```

**Auto-open URL :** Laisser vide

### 3.4 DURING SESSION - Rating 1

Clique sur **+ Add task** > Choisis **Rating** (si disponible) ou **Question**

Si Rating disponible :
- Question : `Cette étape vous a semblé...`
- Échelle : 1-7 (1 = Très difficile, 7 = Très facile)

Si pas de Rating, ajoute une **Open question** :
```
Sur une échelle de 1 à 7, cette étape vous a semblé... (1 = Très difficile, 7 = Très facile). Expliquez pourquoi.
```

### 3.5 DURING SESSION - Tâche 2

Clique sur **+ Add task** et remplis :

**Task instruction :**
```
TÂCHE 2 : Publier une annonce

Votre mission : Créez et publiez une annonce pour rechercher une aide ménagère, 4 heures par semaine.

Remplissez les informations comme si c'était votre vraie recherche.

Pensez à voix haute : les champs demandés sont-ils clairs ? Manque-t-il quelque chose ?
```

### 3.6 DURING SESSION - Rating 2

Ajoute un Rating ou une Open question :
```
Sur une échelle de 1 à 7, cette étape vous a semblé... (1 = Très difficile, 7 = Très facile). Expliquez pourquoi.
```

### 3.7 DURING SESSION - Tâche 3

Clique sur **+ Add task** et remplis :

**Task instruction :**
```
TÂCHE 3 : Explorer les profils et contacter un candidat

Votre mission : Parcourez les profils de candidats disponibles. Choisissez-en un qui vous semble intéressant et essayez de le contacter.

Pensez à voix haute : qu'est-ce qui vous aide à choisir ? Qu'est-ce qui manque ?
```

### 3.8 DURING SESSION - Rating 3

Ajoute un Rating ou une Open question :
```
Sur une échelle de 1 à 7, cette étape vous a semblé... (1 = Très difficile, 7 = Très facile). Expliquez pourquoi.
```

### 3.9 DURING SESSION - Questions ouvertes finales

Clique sur **+ Add task** > **Open question** :

**Question 1 :**
```
Qu'est-ce qui vous a posé le plus de difficultés pendant ce test ?
```

Clique sur **+ Add task** > **Open question** :

**Question 2 :**
```
Si vous aviez une baguette magique, qu'est-ce que vous changeriez dans cette application ?
```

### 3.10 AFTER SESSION - Final message

Copie-colle ce texte dans le champ **Final message** :

```
Merci d'avoir participé à ce test.

Vos réponses sont précieuses pour notre équipe. Elles nous aideront à améliorer l'application pour qu'elle corresponde mieux à vos besoins.

Bonne journée !
```

Clique **Save** puis va dans **Screener** dans le menu gauche.

---

## Étape 4 : Screener

### 4.1 Question 1 - Profil (segmentation)

| Paramètre | Valeur |
|-----------|--------|
| **Type** | Single choice |
| **Question** | `Quel est votre rapport à l'emploi à domicile ?` |

**Options :**

| Option | Action |
|--------|--------|
| `J'emploie ou envisage d'employer une aide pour moi-même (ménage, garde d'enfants, etc.)` | **Accept** |
| `J'emploie ou envisage d'employer une aide pour un proche (parent âgé, personne dépendante)` | **Accept** |
| `Je travaille ou cherche un emploi dans les services à domicile` | **Reject** |
| `Aucune de ces situations` | **Reject** |

Clique sur **+** pour ajouter la question suivante.

### 4.2 Question 2 - Smartphone (Android uniquement)

| Paramètre | Valeur |
|-----------|--------|
| **Type** | Single choice |
| **Question** | `Quel smartphone utilisez-vous au quotidien ?` |

**Options :**

| Option | Action |
|--------|--------|
| `iPhone` | **Reject** |
| `Android` | **Accept** |
| `Je n'ai pas de smartphone` | **Reject** |

Clique sur **+** pour ajouter la question suivante.

### 4.3 Question 3 - Localisation

| Paramètre | Valeur |
|-----------|--------|
| **Type** | Single choice |
| **Question** | `Où résidez-vous ?` |

**Options :**

| Option | Action |
|--------|--------|
| `France métropolitaine` | **Accept** |
| `DOM-TOM` | **Accept** |
| `Autre pays` | **Reject** |

Clique **Save** puis va dans **Recruit** dans le menu gauche.

---

## Étape 5 : Recruit

### 5.1 Describe your research study

Clique sur **Add study details** et remplis :

| Champ | Valeur |
|-------|--------|
| **Research study title** | `Test d'une application de mise en relation emploi à domicile` |
| **Description** | `Nous recherchons des personnes qui emploient ou envisagent d'employer une aide à domicile pour eux-mêmes ou pour un proche. Vous testerez une application mobile pendant environ 25 minutes. Vous devrez installer l'application sur votre smartphone Android et penser à voix haute pendant le test.` |

Clique **Save**.

### 5.2 Recruitment criteria

Clique sur **Add criteria** et sélectionne :

| Critère | Valeur |
|---------|--------|
| **Country** | France |
| **Age** | 25-65 |

Ne sélectionne PAS les critères "Advanced" (+$49/session).

Clique **Save**.

### 5.3 Details

Remplis les champs :

| Champ | Valeur |
|-------|--------|
| **Number of participants** | `20` |
| **Incentive amount** | `5` |
| **Session length (minutes)** | `25` |
| **Max time to complete session** | `3` days `0` hours |
| **Study end date** | `17/02/2026` |
| **Auto-approve qualified participants** | **Activé** (toggle ON) |

### 5.4 Vérification du coût

Dans le panneau **Summary** à droite, vérifie :

| Élément | Montant attendu |
|---------|-----------------|
| Participants from package | 10 (ou 0 si pas de package) |
| Recruitment | $0 (si critères basiques) |
| Incentives (20 × $5) | $100 |
| Processing fee (6%) | $6 |
| **Total due** | **~$106** |

Clique **Save**.

---

## Étape 6 : Observer Lobby (optionnel)

Si tu veux que Thomas ou Alice puissent observer les sessions :

1. Va dans **Observer Lobby** dans le menu gauche
2. **Lobby Access** : Sélectionne `Anyone with the link can enter`
3. Copie le lien et partage-le avec l'équipe

---

## Étape 7 : Preview et vérification

1. Clique sur **Preview Session** (en haut à droite)
2. Parcours le test comme un participant
3. Vérifie :
   - [ ] Le Welcome message est clair
   - [ ] Les instructions d'installation sont complètes
   - [ ] Les tâches s'enchaînent correctement
   - [ ] Les questions sont compréhensibles
   - [ ] Le Final message s'affiche

---

## Étape 8 : NE PAS LANCER ENCORE

**IMPORTANT : Ne clique PAS sur "Launch" tant que :**

- [ ] Les liens d'installation (APK ou Store non référencé) ne sont pas confirmés par Cédric
- [ ] Les liens ont été mis à jour dans le Welcome message
- [ ] Un test pilote interne a été réalisé

---

# ROUND 2 : SPE (Salariés)

## Étape 1 : Créer le Round

1. Dans le projet, clique sur le **"+"** à côté de **Rounds**
2. Choisis **Tasks** (colonne UNMODERATED)
3. Clique **Next**

---

## Étape 2 : Settings

| Champ | Valeur à saisir |
|-------|-----------------|
| **Name** | `SPE - Salariés Emploi à Domicile` |
| **Description** | `Test du parcours candidat : création de compte, complétion de profil, recherche et candidature à des annonces` |
| **Localisation** | `French` |
| **Transcription (required)** | `French` |
| **Device requirements** | Cocher **Mobile** uniquement |
| **Participant camera** | Sélectionner **Optional** |

Clique **Save**.

---

## Étape 3 : Test Setup

### 3.1 BEFORE SESSION - Welcome message

```
Bienvenue dans ce test de l'application Mon Emploi Direct.

Vous allez tester une application qui permet aux personnes travaillant dans les services à domicile de trouver des emplois auprès de particuliers employeurs.

Pensez à voix haute pendant tout le test. Dites ce que vous voyez, ce que vous comprenez, ce qui vous surprend ou vous pose question.

Il n'y a pas de bonne ou mauvaise réponse. C'est l'application qu'on teste, pas vous.

--

AVANT DE COMMENCER

1. Installez l'application "Lookback Participate" depuis le Play Store

2. Installez l'application "Mon Emploi Direct" :
   - Android : [LIEN À COMPLÉTER]

3. Ouvrez Lookback Participate et rejoignez ce test

4. Autorisez l'enregistrement de l'écran et du micro

Une fois prêt, cliquez sur Suivant.
```

### 3.2 DURING SESSION - Scenario

```
Contexte : Vous travaillez ou cherchez un emploi dans les services à domicile (aide ménagère, auxiliaire de vie, garde d'enfants, etc.). Vous venez de découvrir cette application et vous souhaitez l'explorer pour trouver des opportunités.
```

### 3.3 DURING SESSION - Tâche 1

```
TÂCHE 1 : Créer un compte

Votre mission : Créez un compte sur l'application en tant que candidat.

Utilisez :
- Votre email personnel
- Un mot de passe de votre choix
- Adresse : 78 rue de Monceau 75008 Paris

Pensez à voix haute : qu'est-ce qui est clair ? Qu'est-ce qui vous fait hésiter ?
```

### 3.4 Rating 1

```
Sur une échelle de 1 à 7, cette étape vous a semblé... (1 = Très difficile, 7 = Très facile). Expliquez pourquoi.
```

### 3.5 DURING SESSION - Tâche 2

```
TÂCHE 2 : Compléter votre profil

Votre mission : Complétez votre profil candidat pour vous présenter aux employeurs potentiels.

Remplissez les informations comme si c'était votre vrai profil professionnel.

Pensez à voix haute : les champs demandés sont-ils clairs ? Manque-t-il quelque chose pour bien vous présenter ?
```

### 3.6 Rating 2

```
Sur une échelle de 1 à 7, cette étape vous a semblé... (1 = Très difficile, 7 = Très facile). Expliquez pourquoi.
```

### 3.7 DURING SESSION - Tâche 3

```
TÂCHE 3 : Explorer les annonces et postuler

Votre mission : Parcourez les annonces disponibles. Choisissez-en une qui vous semble intéressante et essayez de postuler ou de contacter l'employeur.

Pensez à voix haute : qu'est-ce qui vous aide à choisir une annonce ? Qu'est-ce qui manque ?
```

### 3.8 Rating 3

```
Sur une échelle de 1 à 7, cette étape vous a semblé... (1 = Très difficile, 7 = Très facile). Expliquez pourquoi.
```

### 3.9 Questions ouvertes finales

**Question 1 :**
```
Qu'est-ce qui vous a posé le plus de difficultés pendant ce test ?
```

**Question 2 :**
```
Si vous aviez une baguette magique, qu'est-ce que vous changeriez dans cette application ?
```

### 3.10 AFTER SESSION - Final message

```
Merci d'avoir participé à ce test.

Vos réponses sont précieuses pour notre équipe. Elles nous aideront à améliorer l'application pour qu'elle corresponde mieux à vos besoins.

Bonne journée !
```

---

## Étape 4 : Screener

### 4.1 Question 1 - Profil

| Paramètre | Valeur |
|-----------|--------|
| **Type** | Single choice |
| **Question** | `Quel est votre rapport à l'emploi à domicile ?` |

**Options :**

| Option | Action |
|--------|--------|
| `J'emploie ou envisage d'employer une aide pour moi-même` | **Reject** |
| `J'emploie ou envisage d'employer une aide pour un proche` | **Reject** |
| `Je travaille ou cherche un emploi dans les services à domicile (aide ménagère, auxiliaire de vie, garde d'enfants, etc.)` | **Accept** |
| `Aucune de ces situations` | **Reject** |

### 4.2 Question 2 - Smartphone (Android uniquement)

| Option | Action |
|--------|--------|
| `iPhone` | **Reject** |
| `Android` | **Accept** |
| `Je n'ai pas de smartphone` | **Reject** |

### 4.3 Question 3 - Localisation

| Option | Action |
|--------|--------|
| `France métropolitaine` | **Accept** |
| `DOM-TOM` | **Accept** |
| `Autre pays` | **Reject** |

---

## Étape 5 : Recruit

### 5.1 Study details

| Champ | Valeur |
|-------|--------|
| **Research study title** | `Test d'une application de recherche d'emploi à domicile` |
| **Description** | `Nous recherchons des personnes qui travaillent ou cherchent un emploi dans les services à domicile (aide ménagère, auxiliaire de vie, garde d'enfants, etc.). Vous testerez une application mobile pendant environ 25 minutes.` |

### 5.2 Recruitment criteria

| Critère | Valeur |
|---------|--------|
| **Country** | France |
| **Age** | 18-65 |

### 5.3 Details

| Champ | Valeur |
|-------|--------|
| **Number of participants** | `10` |
| **Incentive amount** | `5` |
| **Session length (minutes)** | `25` |
| **Max time to complete session** | `3` days |
| **Study end date** | `17/02/2026` |
| **Auto-approve** | **Activé** |

### 5.4 Coût attendu

| Élément | Montant |
|---------|---------|
| Incentives (10 × $5) | $50 |
| Processing fee (6%) | $3 |
| **Total** | **~$53** |

---

## Étape 6 : Preview et vérification

Même process que Round 1.

---

## Étape 7 : NE PAS LANCER ENCORE

Attendre validation des liens d'installation.

---

# Checklist finale avant lancement

## Round 1 : PE

- [ ] Settings configurés
- [ ] Welcome message avec liens d'installation valides
- [ ] Scenario rempli
- [ ] 3 tâches créées avec ratings
- [ ] 2 questions ouvertes finales
- [ ] Final message rempli
- [ ] Screener avec 3 questions (Q1 : Accept PE-soi et PE-proche)
- [ ] Recruit : 20 participants, $5, 25 min, date fin 17/02
- [ ] Preview Session testé

## Round 2 : SPE

- [ ] Settings configurés
- [ ] Welcome message avec liens d'installation valides
- [ ] Scenario rempli
- [ ] 3 tâches créées avec ratings
- [ ] 2 questions ouvertes finales
- [ ] Final message rempli
- [ ] Screener avec 3 questions (Q1 : Accept SPE uniquement)
- [ ] Recruit : 10 participants, $5, 25 min, date fin 17/02
- [ ] Preview Session testé

## Avant de cliquer sur Launch

- [ ] Liens APK ou Store non référencé validés par Cédric
- [ ] Liens mis à jour dans les Welcome messages des 2 Rounds
- [ ] Test pilote interne réalisé (toi ou Thomas)
- [ ] Crédits achetés (~$159)

---

# Support

En cas de question sur Lookback : help.lookback.io

En cas de question sur la configuration : contacter Victor

---

*Document généré le 03/02/2026*
