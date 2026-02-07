# Protocole Test Non-Modere - Fepem
**V1.0 | 26 janvier 2026 | Victor Soussan - Cocolabs**

---

## En bref

| | |
|---|---|
| **Quoi** | Tests asynchrones sans animateur |
| **Pourquoi** | Volume + donnees quantitatives |
| **Qui** | 15-20 participants externes |
| **Plateforme** | Userlytics / Lookback |
| **Duree** | 20-25 min / session |
| **Output** | Videos + reponses questionnaire |

---

## Difference vs Test Modere

| | Modere | Non-modere |
|---|--------|------------|
| Animateur | Oui | Non |
| Duree | 60 min | 20-25 min |
| Profondeur | Questions ouvertes | Taches + echelles |
| Volume | 10-12 | 15-20 |
| Donnees | Qualitatives | Quali + quanti |
| Relances | Possibles | Impossible |

**Quand utiliser ?** Complement au panel Fepem. Validation statistique des frictions.

---

## Structure du test

### Intro (2 min)

> "Vous allez tester une application de mise en relation entre particuliers employeurs et salaries a domicile.
>
> Pensez a voix haute : dites ce que vous voyez, ce que vous comprenez, ce qui vous surprend.
>
> Il n'y a pas de bonne ou mauvaise reponse. C'est l'application qu'on teste, pas vous."

---

### Screening (1 min)

**Q1.** Quel profil vous correspond ?
- [ ] Je cherche a employer quelqu'un a domicile (PE)
- [ ] Je cherche un employeur pour travailler a domicile (SPE)

*Branchement automatique selon reponse.*

---

### Parcours PE (15 min)

**Contexte**
> "Vous cherchez une aide menagere pour 4h par semaine."

**Tache 1** : Creer un compte
> "Creez un compte avec ces informations :
> - Email : emailtest@fepem.fr
> - Mot de passe : a creer vous-meme
> - Adresse : 78 rue de Monceau 75008 Paris"

**Tache 2** : Publier une annonce
> "Creez et publiez une annonce pour trouver une aide menagere."

**Tache 3** : Contacter un candidat
> "Consultez les profils disponibles et contactez un candidat."

---

### Parcours SPE (15 min)

**Contexte**
> "Vous cherchez un nouvel employeur pour des heures complementaires."

**Tache 1** : Creer un compte
> "Creez un compte avec ces informations :
> - Email : emailtest@fepem.fr
> - Mot de passe : a creer vous-meme
> - Adresse : 78 rue de Monceau 75008 Paris"

**Tache 2** : Completer votre profil
> "Remplissez votre profil professionnel."

**Tache 3** : Postuler a une offre
> "Consultez les offres et postulez a celle qui vous interesse."

---

### Questions post-taches (5 min)

**Apres chaque tache** (echelle 1-7)

| Question | 1 | 2 | 3 | 4 | 5 | 6 | 7 |
|----------|---|---|---|---|---|---|---|
| C'etait facile | Pas du tout | | | | | | Tout a fait |
| J'ai compris ce qu'on me demandait | Pas du tout | | | | | | Tout a fait |
| J'ai eu envie d'abandonner | Tout a fait | | | | | | Pas du tout |

**Questions ouvertes**

1. "Qu'est-ce qui vous a pose probleme ?" *(texte libre)*
2. "Qu'est-ce qui vous a plu ?" *(texte libre)*

---

### Questions finales (3 min)

**SUS simplifie** (echelle 1-5)

| Affirmation | 1 | 2 | 3 | 4 | 5 |
|-------------|---|---|---|---|---|
| J'utiliserais cette app regulierement | | | | | |
| L'app est facile a utiliser | | | | | |
| Je me suis senti en confiance | | | | | |
| Je recommanderais cette app | | | | | |

**Baguette magique**
> "Si vous pouviez changer UNE chose, ce serait quoi ?" *(texte libre)*

**Mot resume**
> "Resumez votre experience en UN mot." *(texte libre)*

---

## Points d'observation automatiques

La plateforme capture :
- Temps par tache
- Taux de completion
- Clics/taps
- Hesitations (pauses > 5 sec)
- Abandons

**Metriques cles**

| Metrique | Cible | Alerte |
|----------|-------|--------|
| Taux completion Tache 1 | > 90% | < 80% |
| Taux completion Tache 2 | > 85% | < 70% |
| Taux completion Tache 3 | > 80% | < 65% |
| Temps moyen total | < 15 min | > 20 min |
| Score facilite moyen | > 5/7 | < 4/7 |

---

## Configuration Userlytics

### Parametres

| Parametre | Valeur |
|-----------|--------|
| Type | Mobile unmoderated |
| Device | iOS + Android |
| Duree estimee | 20-25 min |
| Enregistrement | Ecran + audio |
| Compensation | Geree par plateforme |

### Criteres de recrutement

**PE**
- A employe ou cherche a employer quelqu'un a domicile
- Smartphone iOS ou Android
- 25-65 ans
- France metropolitaine

**SPE**
- Travaille ou cherche a travailler a domicile
- Smartphone iOS ou Android
- 18-60 ans
- France metropolitaine

### Quotas

| Segment | Nb |
|---------|-----|
| PE | 8-10 |
| SPE | 8-10 |
| **Total** | 15-20 |

---

## Donnees de test

```
Email :        emailtest@fepem.fr
Mot de passe : A CREER PAR LE PARTICIPANT
Adresse :      78 rue de Monceau 75008 Paris
```

**Important** : Le participant cree son propre mot de passe. On observe le comportement.

---

## Analyse

### Livraison attendue

| Element | Format |
|---------|--------|
| Videos individuelles | MP4 |
| Reponses questionnaire | CSV |
| Metriques par tache | Dashboard |
| Highlights clips | MP4 (extraits) |

### Grille d'analyse

| Hypothese | Metrique | Validation |
|-----------|----------|------------|
| H1 - Onboarding clair | Taux completion T1 > 90% | Oui/Non |
| H2/H3 - Parcours rapide | Temps T2 < 5 min | Oui/Non |
| H4 - Contact fluide | Taux completion T3 > 80% | Oui/Non |
| H7 - Plus tard compris (SPE) | Pas d'abandon T2 | Oui/Non |

---

## Checklist lancement

### Preparation
- [ ] Creer projet Userlytics
- [ ] Configurer screener questions
- [ ] Rediger taches + questions
- [ ] Definir quotas
- [ ] Verifier app installable (TestFlight/APK)
- [ ] Preparer donnees test
- [ ] Test pilote interne

### Lancement
- [ ] Activer projet
- [ ] Monitorer premieres reponses (qualite)
- [ ] Ajuster si probleme

### Post-collecte
- [ ] Exporter donnees
- [ ] Visionner videos (priorite abandons)
- [ ] Consolider metriques
- [ ] Croiser avec tests moderes

---

## Timeline

| Jour | Action |
|------|--------|
| J | Lancement projet |
| J+2 | Check qualite (5 premieres reponses) |
| J+5 | 50% reponses attendues |
| J+7 | Cloture collecte |
| J+10 | Analyse + synthese |
| J+12 | Livraison rapport |

---

## Documents lies

- FEPEM_Protocole_Test_Modere_V2.md
- Grille_Observation_Tests_V3.docx
- Brief_Recherche_Fepem_V3.docx

---

*Victor Soussan - Cocolabs*
