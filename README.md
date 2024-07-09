# Projet appDocker

## Description du projet
Ce projet est une application web qui génère aléatoirement des compliments ou des critiques lorsque l'utilisateur appuie sur un bouton. L'architecture de l'application est divisée en deux parties principales : un frontend basé sur Apache qui affiche l'interface utilisateur et un backend Node.js qui génère les messages aléatoires.

## Prérequis
Avant de pouvoir construire et déployer l'application, assurez-vous d'avoir les logiciels suivants installés :
- Docker
- Docker Compose

## Instructions

### Construction et déploiement des conteneurs sur une machine AWS EC2

1. unzip le projet

   Assurez-vous que les fichiers suivants sont présents dans le répertoire du projet :

    docker-compose.yml
    frontend/Dockerfile
    backend/Dockerfile

2. récuperé l'ip publique de votre instance EC2 

3. modifier le fichier app.js en y ajoutant l'ip que vous venez de recupérer dans les fetch

4. Pousser le projet de votre machine local vers la vm EC2 AWS avec le protocole scp

5. docker-compose build

6. docker-compose up -d

7. vous pouvez tester l'application qui est accessible via l'url suivante : votre/ip/publique/EC2:666


#### Pour stopper les conteneurs 

docker-compose down

#### L'architecture du projet

├── README.md
├── apache-logs
│   └── httpd.pid
├── backend
│   ├── Dockerfile
│   ├── index.js
│   ├── package-lock.json
│   └── package.json
├── docker-compose.yml
└── frontend
    ├── Dockerfile
    ├── app.js
    ├── index.html
    └── style.css

frontend/

Ce répertoire contient les fichiers nécessaires pour le frontend de l'application.
Dockerfile : Dockerfile pour le conteneur Apache.
Fichiers web (HTML, CSS, JavaScript) : Fichiers nécessaires pour l'interface utilisateur.

backend/

Ce répertoire contient les fichiers nécessaires pour le backend de l'application.
Dockerfile : Dockerfile pour le conteneur Node.js.
index.js : Point d'entrée du backend Node.js.
Autres fichiers Node.js nécessaires pour l'application.

docker-compose.yml

Ce fichier orchestre le déploiement des conteneurs frontend et backend.
Configure les services frontend (Apache) et backend (Node.js).
Définit les volumes, les ports exposés et d'autres configurations nécessaires.

Autres fichiers

D'autres fichiers peuvent être présents selon les besoins spécifiques de votre application :

README.md : Ce fichier, fournissant des instructions et des informations sur le projet.
apache-logs/ : Dossier pour les logs d'Apache, monté comme volume pour persistance.
