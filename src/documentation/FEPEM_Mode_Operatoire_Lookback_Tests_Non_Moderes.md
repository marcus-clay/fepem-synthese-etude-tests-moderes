# Mode Operatoire Lookback - Tests Non Moderes

**Projet :** FEPEM - Application Mon Emploi Direct  
**Date :** 02/02/2026  
**Auteur :** Victor Soussan - Cocolabs  
**Statut :** A valider avec Thomas

---

## Synthese

| Element | Valeur |
|---------|--------|
| Plateforme | Lookback (plan Team) |
| Type de Round | Tasks (non modere structure) |
| Volume cible | 30 participants |
| Recrutement | Panel Lookback (externe) |
| Cout estime panel | ~760 USD (10 inclus + 20 x 38 USD) |
| Duree estimee session | 20-25 min |
| Segmentation | 3 segments (PE aide soi / PE aide proche / SPE) |

---

## 1. Architecture du projet Lookback

### 1.1 Structure recommandee

```
[Fepem] App MED - Campagne - Jan-Fev 2026
|
+-- Stakeholders
|   +-- Interviews : Non utilise (tests moderes via Google Meet)
|   +-- Goals : Objectifs de recherche (optionnel)
|
+-- Rounds
|   +-- Round 1 : PE - Aide pour soi (Tasks)
|   +-- Round 2 : PE - Aide pour proche (Tasks)  
|   +-- Round 3 : SPE - Recherche emploi (Tasks)
|
+-- Findings : Insights consolides post-analyse
+-- Reels : Clips video des moments cles
```

### 1.2 Pourquoi 3 Rounds separes ?

- Parcours utilisateur different PE vs SPE
- Questions screener specifiques par segment
- Facilite l'analyse par cohorte
- Quotas independants (10 par segment)

---

## 2. Configuration du Round (type Tasks)

### 2.1 Creer un nouveau Round

1. Ouvrir le projet [Fepem] App MED
2. Cliquer sur **+ Create new round**
3. Selectionner **Tasks** (colonne UNMODERATED)
4. Cliquer **Next**

### 2.2 Parametres generaux

| Parametre | Valeur |
|-----------|--------|
| Round name | PE - Aide pour soi |
| Description | Test du parcours Particulier Employeur cherchant une aide pour son propre domicile |
| Device | Mobile only |
| Estimated duration | 25 minutes |
| Language | French |

### 2.3 Configuration des taches

**Structure type pour un Round PE :**

| Etape | Type | Contenu |
|-------|------|---------|
| 1 | Instruction | Texte d'accueil et consignes think-aloud |
| 2 | Task | Creer un compte |
| 3 | Rating | Facilite de creation de compte (1-7) |
| 4 | Task | Publier une annonce |
| 5 | Rating | Facilite de publication (1-7) |
| 6 | Open question | Qu'est-ce qui vous a pose probleme ? |
| 7 | Task | Contacter un candidat |
| 8 | Rating | Facilite de contact (1-7) |
| 9 | SUS simplifie | 4 questions echelle 1-5 |
| 10 | Open question | Baguette magique |

---

## 3. Redaction des taches

### 3.1 Instruction d'accueil

```
Bienvenue dans ce test de l'application Mon Emploi Direct.

Vous allez tester une application de mise en relation entre particuliers employeurs et salaries a domicile.

IMPORTANT : Pensez a voix haute pendant tout le test. Dites ce que vous voyez, ce que vous comprenez, ce qui vous surprend ou vous pose question.

Il n'y a pas de bonne ou mauvaise reponse. C'est l'application qu'on teste, pas vous.

La session dure environ 20 minutes.
```

### 3.2 Taches PE

**Tache 1 : Creer un compte**

```
Contexte : Vous cherchez une aide menagere pour 4 heures par semaine a votre domicile.

Votre mission : Creez un compte sur l'application.

Utilisez ces informations :
- Email : emailtest@fepem.fr  
- Mot de passe : a creer vous-meme
- Adresse : 78 rue de Monceau 75008 Paris

Pensez a voix haute pendant que vous naviguez.
```

**Tache 2 : Publier une annonce**

```
Votre mission : Creez et publiez une annonce pour trouver une aide menagere.

Remplissez les informations demandees selon votre propre situation (fictive ou reelle).

Pensez a voix haute : qu'est-ce qui est clair ? Qu'est-ce qui vous pose question ?
```

**Tache 3 : Contacter un candidat**

```
Votre mission : Consultez les profils de candidats disponibles et contactez celui qui vous interesse.

Observez les informations affichees sur les profils. Qu'est-ce qui vous aide a choisir ?
```

### 3.3 Taches SPE

**Tache 1 : Creer un compte**

```
Contexte : Vous etes aide a domicile et vous cherchez un nouvel employeur pour des heures complementaires.

Votre mission : Creez un compte sur l'application.

Utilisez ces informations :
- Email : emailtest@fepem.fr
- Mot de passe : a creer vous-meme  
- Adresse : 78 rue de Monceau 75008 Paris

Pensez a voix haute pendant que vous naviguez.
```

**Tache 2 : Completer votre profil**

```
Votre mission : Remplissez votre profil professionnel.

Ajoutez vos competences, votre experience et vos disponibilites.

Pensez a voix haute : qu'est-ce qui est facile ? Qu'est-ce qui vous bloque ?
```

**Tache 3 : Postuler a une offre**

```
Votre mission : Consultez les offres d'emploi disponibles et postulez a celle qui vous interesse.

Observez les informations affichees sur les annonces. Qu'est-ce qui vous aide a choisir ?
```

---

## 4. Questions post-taches

### 4.1 Apres chaque tache (Rating 1-7)

| Question | Echelle |
|----------|---------|
| C'etait facile | 1 = Pas du tout / 7 = Tout a fait |
| J'ai compris ce qu'on me demandait | 1 = Pas du tout / 7 = Tout a fait |
| J'ai eu envie d'abandonner | 1 = Tout a fait / 7 = Pas du tout |

### 4.2 Questions ouvertes (apres bloc de taches)

```
Qu'est-ce qui vous a pose probleme dans ce que vous venez de faire ?
```

```
Qu'est-ce qui vous a plu ?
```

### 4.3 SUS simplifie (fin de session)

| Affirmation | Echelle 1-5 |
|-------------|-------------|
| J'utiliserais cette application regulierement | Pas du tout d'accord - Tout a fait d'accord |
| L'application est facile a utiliser | Pas du tout d'accord - Tout a fait d'accord |
| Je me suis senti en confiance | Pas du tout d'accord - Tout a fait d'accord |
| Je recommanderais cette application | Pas du tout d'accord - Tout a fait d'accord |

### 4.4 Questions finales

```
Baguette magique : Si vous pouviez changer UNE seule chose dans cette application, ce serait quoi ?
```

```
Resumez votre experience en UN mot.
```

---

## 5. Configuration du recrutement panel

### 5.1 Acces au recrutement

1. Dans le Round, aller dans **Participants**
2. Cliquer sur **Recruit participants**
3. Selectionner **Lookback Panel**

### 5.2 Questions de screening

**Question 1 : Profil (Disqualifiante)**

```
Type : Single choice
Question : Lequel de ces profils vous correspond le mieux ?

Options :
[ ] Je cherche a employer quelqu'un pour m'aider a domicile (menage, courses, repas...) -> Qualifie -> Tag: PE_AIDE_SOI
[ ] Je cherche a employer quelqu'un pour aider un proche (parent age, personne dependante...) -> Qualifie -> Tag: PE_AIDE_PROCHE  
[ ] Je travaille ou cherche a travailler comme salarie a domicile (aide menagere, auxiliaire de vie, garde d'enfants...) -> Qualifie -> Tag: SPE
[ ] Aucun de ces profils -> Disqualifie
```

**Question 2 : Smartphone (Disqualifiante)**

```
Type : Single choice
Question : Quel type de smartphone utilisez-vous principalement ?

Options :
[ ] iPhone (iOS) -> Qualifie -> Tag: iOS
[ ] Android -> Qualifie -> Tag: Android
[ ] Je n'ai pas de smartphone -> Disqualifie
```

**Question 3 : Age (Segmentation)**

```
Type : Single choice  
Question : Dans quelle tranche d'age vous situez-vous ?

Options :
[ ] 18-24 ans -> Qualifie
[ ] 25-34 ans -> Qualifie
[ ] 35-44 ans -> Qualifie
[ ] 45-54 ans -> Qualifie
[ ] 55-64 ans -> Qualifie
[ ] 65 ans et plus -> Qualifie
[ ] Moins de 18 ans -> Disqualifie
```

**Question 4 : Localisation (Disqualifiante)**

```
Type : Single choice
Question : Ou residez-vous ?

Options :
[ ] France metropolitaine -> Qualifie
[ ] DOM-TOM -> Qualifie  
[ ] Autre pays -> Disqualifie
```

### 5.3 Quotas par Round

| Round | Segment | Quota |
|-------|---------|-------|
| Round 1 | PE_AIDE_SOI | 10 |
| Round 2 | PE_AIDE_PROCHE | 10 |
| Round 3 | SPE | 10 |

---

## 6. Contrainte technique : App native

### 6.1 Le probleme

Lookback ne peut pas enregistrer directement une app native iOS/Android. Le participant doit installer l'app Lookback Participate qui fait le screen recording systeme.

### 6.2 Parcours participant

1. Recevoir l'invitation Lookback par email
2. Installer l'app **Lookback Participate** (App Store / Play Store)
3. Installer l'app **Mon Emploi Direct** :
   - iOS : Lien TestFlight (a fournir)
   - Android : Lien APK ou Play Store beta (a fournir)
4. Ouvrir Lookback Participate
5. Rejoindre le test via le lien
6. Autoriser le screen recording et le micro
7. Suivre les taches affichees tout en utilisant l'app MED

### 6.3 Instructions a inclure dans le Round

```
AVANT DE COMMENCER

1. Installez l'application "Lookback Participate" depuis l'App Store (iPhone) ou le Play Store (Android)

2. Installez l'application "Mon Emploi Direct" :
   - iPhone : [LIEN TESTFLIGHT A INSERER]
   - Android : [LIEN APK A INSERER]

3. Ouvrez Lookback Participate et rejoignez ce test

4. Autorisez l'enregistrement de l'ecran et du micro quand demande

Une fois pret, cliquez sur Suivant pour commencer.
```

### 6.4 Prerequis techniques (a valider avec Thomas/Cedric)

| Element | Statut | Responsable |
|---------|--------|-------------|
| Lien TestFlight iOS | A fournir | Cedric |
| Lien APK Android | A fournir | Cedric |
| Compte de test fonctionnel | emailtest@fepem.fr | Thomas |
| Donnees de demo visibles | A verifier | Thomas |
| Reset entre sessions | Procedure a definir | Thomas |

---

## 7. Metriques cibles

### 7.1 Taux de completion

| Tache | Cible | Alerte |
|-------|-------|--------|
| Creation compte | > 90% | < 80% |
| Publication annonce (PE) / Profil (SPE) | > 85% | < 70% |
| Contact candidat / Candidature | > 80% | < 65% |

### 7.2 Scores facilite

| Metrique | Cible | Alerte |
|----------|-------|--------|
| Score facilite moyen | > 5/7 | < 4/7 |
| Score SUS equivalent | > 70/100 | < 50/100 |

### 7.3 Temps

| Metrique | Cible | Alerte |
|----------|-------|--------|
| Temps total session | < 20 min | > 30 min |
| Temps creation compte | < 5 min | > 8 min |

---

## 8. Planning de lancement

| Jour | Action | Responsable |
|------|--------|-------------|
| J | Finalisation configuration Lookback | Victor + Thomas |
| J | Validation liens TestFlight/APK | Cedric |
| J+1 | Test pilote interne (1-2 participants) | Victor |
| J+2 | Ajustements si necessaire | Victor |
| J+3 | Lancement recrutement panel | Victor |
| J+5 | Check qualite (5 premieres reponses) | Victor |
| J+7 | 50% reponses attendues | - |
| J+10 | Cloture collecte | Victor |
| J+12 | Analyse + synthese | Victor |

---

## 9. Livrables attendus

| Element | Format | Source |
|---------|--------|--------|
| Videos individuelles | MP4 | Lookback |
| Transcriptions | Texte | Lookback (auto) |
| Reponses questionnaires | Export CSV | Lookback |
| Metriques par tache | Dashboard | Lookback |
| Highlight clips | MP4 | A creer dans Reels |

---

## 10. Checklist de lancement

### Preparation

- [ ] Creer Round 1 (PE - Aide pour soi)
- [ ] Creer Round 2 (PE - Aide pour proche)
- [ ] Creer Round 3 (SPE)
- [ ] Configurer questions de screening
- [ ] Definir quotas (10 par segment)
- [ ] Rediger taches et questions
- [ ] Ajouter instructions installation app
- [ ] Obtenir liens TestFlight et APK
- [ ] Verifier compte de test fonctionnel
- [ ] Test pilote interne

### Lancement

- [ ] Activer recrutement panel
- [ ] Monitorer premieres reponses
- [ ] Ajuster si probleme qualite

### Post-collecte

- [ ] Exporter donnees
- [ ] Visionner videos (priorite abandons)
- [ ] Consolider metriques
- [ ] Creer highlight reels
- [ ] Croiser avec resultats tests moderes

---

## Documents lies

- Brief_Recherche_Fepem_V3.docx
- Guide_Entretien_PE_V3.docx
- Guide_Entretien_SPE_V3.docx
- Protocole_Test_Non_Modere_Fepem.md (version Userlytics - reference)

---

*Victor Soussan - Cocolabs*
