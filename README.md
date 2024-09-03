# Personal Blog API

## Description

Cette API RESTful permet de gérer un blog personnel. Elle offre des opérations CRUD (Create, Read, Update, Delete) sur les articles de blog, permettant de créer, lire, mettre à jour et supprimer des articles.

## Technologies utilisées

- **Node.js** avec **Fastify** : Pour créer un serveur web performant.
- **MongoDB** avec **Mongoose** : Pour la base de données NoSQL.
- **Dotenv** : Pour gérer les variables d'environnement.

## Prérequis

- Node.js (v14 ou supérieur)
- MongoDB installé et en cours d'exécution, ou un cluster MongoDB Atlas.

## Installation

1. Clonez le dépôt GitHub sur votre machine locale :

   ```bash
   git clone https://github.com/naguib-med/personal-blog-api.git
   cd personal-blog-api
    ```
   
2. Installez les dépendances du projet :

   ```bash
   npm install
   ```
3. Créez un fichier `.env` à la racine du projet et ajoutez les variables d'environnement suivantes :

   ```env
MONGO_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/personal_blog?retryWrites=true&w=majority
    ```
4. Démarrez le serveur de développement :

   ```bash
   node server.js
   ```
   
## Routes de l'API

| Méthode | Route              | Description                                        | Paramètres / Body                            |
|---------|--------------------|----------------------------------------------------|----------------------------------------------|
| `GET`   | `/articles`        | Récupère tous les articles avec filtres optionnels | `tags` (query, optionnel) : Filtrer par tags<br>`date` (query, optionnel) : Filtrer par date de publication (format ISO 8601) |
| `GET`   | `/articles/:id`    | Récupère un article par ID                         | `id` (paramètre de route) : L'ID de l'article|
| `POST`  | `/articles`        | Crée un nouvel article                             | **Body (JSON)** : <br> `{` <br>&nbsp;&nbsp;&nbsp;&nbsp;`"title": "Titre de l'article",`<br>&nbsp;&nbsp;&nbsp;&nbsp;`"content": "Contenu de l'article",`<br>&nbsp;&nbsp;&nbsp;&nbsp;`"author": "Auteur de l'article",`<br>&nbsp;&nbsp;&nbsp;&nbsp;`"tags": ["tag1", "tag2"]`<br>`}` |
| `PUT`   | `/articles/:id`    | Met à jour un article existant par ID              | `id` (paramètre de route) : L'ID de l'article<br>**Body (JSON)** : Les champs à mettre à jour |
| `DELETE`| `/articles/:id`    | Supprime un article par ID                         | `id` (paramètre de route) : L'ID de l'article|


### Licence
Ce projet est sous licence MIT.