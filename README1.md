# Application de Liste de Tâches (Todo List)

## Introduction

Cette application de liste de tâches (todo list) a été développée en utilisant NestJS et Prisma. Elle permet de créer, lire, mettre à jour et supprimer des tâches. Chaque tâche a un nom et un état de complétion (`completed`).

## Choix et Décisions

### Framework et Outils

- **NestJS** : Utilisé pour structurer l'application en modules, contrôleurs et services. NestJS offre une architecture modulaire et facilite l'injection de dépendances.
- **Prisma** : Utilisé comme ORM pour interagir avec la base de données. Prisma simplifie la gestion des migrations et la génération de clients de base de données.
- **TypeScript** : Utilisé pour bénéficier de la vérification de types statiques et améliorer la maintenabilité du code.
- **React** : Utilisé pour le frontend de l'application.
- **MySQL** : Utilisé comme base de données relationnelle.
- **Yarn** : Utilisé pour la gestion des dépendances, car recommandé dans l'instruction.


### Structure du Projet

- **Modules** : L'application est divisée en modules pour une meilleure organisation et maintenabilité. Le module principal est `TaskModule`.
- **Contrôleurs** : Les contrôleurs gèrent les requêtes HTTP et délèguent les opérations aux cas d'utilisation appropriés.
- **Cas d'utilisation** : Les cas d'utilisation encapsulent la logique métier et interagissent avec les dépôts pour effectuer des opérations sur les données.
- **Dépôts** : Les dépôts sont responsables de l'interaction avec la base de données via Prisma.

### Modèle de Données

Le modèle de données pour les tâches (`Task`) inclut les champs suivants :
- `id` : Identifiant unique de la tâche.
- `name` : Nom de la tâche.
- `completed` : État de complétion de la tâche (boolean).
- `createdAt` : Date de création de la tâche.
- `updatedAt` : Date de dernière mise à jour de la tâche.

## Points de Blocage

### Problème avec le Champ `completed`

Initialement, le champ `completed` n'était pas inclus dans le modèle `Task`. Cela a causé des erreurs lors de l'insertion de données. Pour résoudre ce problème, j'ai mis à jour le schéma Prisma pour inclure le champ `completed` et appliqué les migrations nécessaires.

### Gestion des Types Prisma

Lors de la mise à jour et de la création de tâches, il y avait des problèmes de compatibilité de types avec Prisma. Pour résoudre cela, j'ai utilisé des assertions de type et vérifié explicitement la présence de l'ID dans les données.

### Synchronisation de la Base de Données

Il était nécessaire de s'assurer que la base de données était correctement synchronisée avec le schéma Prisma. J'ai utilisé les commandes Prisma pour générer le client et appliquer les migrations.

## Instructions d'Installation

1. Clonez le dépôt :
   ```sh
   git clone <URL_DU_DEPOT>
   cd <NOM_DU_DEPOT>
2. Installez les dépendances :
 yarn install
3. Configurez la base de données dans le fichier .env :
 DATABASE_URL="mysql://user:password@localhost:3306/database"
4. Appliquez les migrations Prisma :
    npx prisma migrate dev --name init
5. Démarrez l'application :
    yarn start:dev

## Utilisation
Endpoints
GET /tasks : Récupère toutes les tâches.
POST /tasks : Crée une nouvelle tâche.
PATCH /tasks/:id : Met à jour une tâche existante.
DELETE /tasks/:id : Supprime une tâche.

Conclusion
Cette application de liste de tâches utilise NestJS et Prisma pour offrir une architecture modulaire et une gestion simplifiée des données. Les choix de conception ont été faits pour assurer la maintenabilité et la scalabilité de l'application. Les points de blocage ont été résolus en mettant à jour le schéma Prisma et en gérant correctement les types de données.