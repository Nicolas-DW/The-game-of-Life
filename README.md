# The Game of Life

Une implémentation interactive du célèbre automate cellulaire de Conway avec une architecture modulaire en JavaScript ES6+.

## Description

Cette application web simule le Jeu de la Vie de Conway, un automate cellulaire inventé par le mathématicien britannique John Conway en 1970. À partir de règles simples, des structures complexes et fascinantes émergent sur une grille de cellules vivantes et mortes.

## Fonctionnalités

- **Interface interactive** - Grille de cellules cliquables pour créer vos propres motifs
- **Contrôles intuitifs** :
  - **Start** : Lance ou met en pause la simulation
  - **Clear** : Efface toutes les cellules de la grille
  - **Random** : Génère une configuration aléatoire de cellules
- **Architecture modulaire** - Code organisé en modules ES6 pour une meilleure maintenabilité
- **Simulation en temps réel** - Observe l'évolution des motifs selon les règles de Conway

## Les Règles du Jeu de la Vie

Le Jeu de la Vie suit quatre règles simples :

1. **Sous-population** : Une cellule vivante avec moins de 2 voisins meurt
2. **Survie** : Une cellule vivante avec 2 ou 3 voisins survit
3. **Surpopulation** : Une cellule vivante avec plus de 3 voisins meurt
4. **Reproduction** : Une cellule morte avec exactement 3 voisins devient vivante

## Technologies utilisées

- **JavaScript ES6+** - Modules, imports/exports
- **HTML5** - Structure sémantique
- **CSS3** - Styles modernes
- **Grunt** - Automatisation des tâches de build
- **http-server** - Serveur de développement local

## Installation

1. Clonez ce dépôt :
   ```bash
   git clone https://github.com/Nicolas-DW/The-game-of-Life.git
   cd The-game-of-Life
   ```

2. Installez les dépendances :
   ```bash
   npm install
   ```

## Utilisation

### Mode développement

Lancez un serveur local pour tester l'application :

```bash
npm run dev
```

L'application sera accessible sur `http://localhost:8081`

### Mode production

Pour créer les fichiers de distribution :

```bash
grunt
```

Les fichiers optimisés seront générés dans le dossier `dist/`.

## Structure du projet

```
.
├── js/
│   ├── actionsForLife/    # Logique des règles de Conway
│   ├── grid-creation/     # Création et gestion de la grille
│   ├── handlers/          # Gestionnaires d'événements
│   ├── stateOfGame/       # Gestion de l'état du jeu
│   ├── table-creation/    # Création du tableau HTML
│   └── script.js          # Point d'entrée principal
├── dist/                  # Fichiers de build (générés par Grunt)
├── index.html             # Page principale
├── style.css              # Styles CSS
├── Gruntfile.js           # Configuration Grunt
└── package.json           # Dépendances npm

```

## Comment jouer

1. Ouvrez l'application dans votre navigateur
2. Cliquez sur les cellules de la grille pour les activer (noir) ou les désactiver (blanc)
3. Cliquez sur **Start** pour lancer la simulation
4. Observez l'évolution de votre motif selon les règles de Conway
5. Utilisez **Clear** pour recommencer ou **Random** pour générer un motif aléatoire

## Tributes

Basé sur le travail de Robert Spatz
- [Conway's Game of Life - JavaScript](https://codepen.io/RBSpatz/pen/rLyNLb)
- [Profil CodePen](https://codepen.io/RBSpatz)

## Licence

Distribué sous licence MIT. Voir le fichier `LICENSE` pour plus d'informations.

## À propos du Jeu de la Vie

Le Jeu de la Vie de Conway est un exemple fascinant de système complexe émergeant de règles simples. Bien qu'il s'agisse d'un jeu à zéro joueur (son évolution est déterminée par son état initial), il a captivé des générations de programmeurs, mathématiciens et passionnés d'informatique théorique.

Certains motifs remarquables incluent :
- **Planeurs** : Petites structures qui se déplacent à travers la grille
- **Oscillateurs** : Motifs qui reviennent périodiquement à leur état initial
- **Vaisseaux** : Structures qui se déplacent dans une direction
- **Canons** : Structures qui génèrent d'autres motifs

---

Créé avec passion pour explorer la beauté des automates cellulaires.
