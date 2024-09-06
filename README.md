# Movie Library Project

## Description

Ce projet est une bibliothèque de films construite avec React et Vite. Il utilise une fausse base de données pour les données de test et inclut des tests pour les composants et les API. Le projet utilise du CSS natif pour le style.

**Documentation swagger : http://localhost:3000/api-docs/**

## Tests

Le projet utilise Jest pour exécuter des tests sur les composants React ainsi que sur les fichiers Node.js. La configuration de Jest est définie dans un fichier unique `jest.config.cjs` qui gère les deux types de tests.

### Configuration des Tests

Le fichier de configuration Jest (`jest.config.cjs`) est divisé en deux sections principales :

1. **Tests des Composants React**
    - **Environnement de test :** `jsdom`
    - **Transformateur :** `babel-jest`
    - **Extensions de fichiers :** `js`, `jsx`, `ts`, `tsx`
    - **Mapper les modules :** Utilise `identity-obj-proxy` pour les fichiers CSS et autres fichiers de style.

2. **Tests Node.js**
    - **Environnement de test :** `node`
    - **Transformateur :** `babel-jest`
    - **Extensions de fichiers :** `js`, `jsx`, `ts`, `tsx`
    - **Mapper les modules :** Utilise `identity-obj-proxy` pour les fichiers CSS et autres fichiers de style.

### Commandes pour Exécuter les Tests

- **Pour exécuter les tests des composants React :**
    ```bash
    npm run test:components

- **Pour exécuter les tests des composants Node :**
    ```bash
    npm run test:node


### Clé MongoDB

- **Le fichier .env.local comportant la clé de connexion à MongoDB se trouve dans le dossier api**

### Commandes pour lancer le site 

- **Pour exécuter le back :**
    ```bash
    cd src
    cd api
    node server.js

- **Pour exécuter le front :**
    ```bash
    cd movie-library-project
    npm run dev