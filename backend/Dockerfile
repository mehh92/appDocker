# Utilisez une image de base Node.js
FROM node:14-alpine

# Définissez le répertoire de travail dans le conteneur
WORKDIR /app

# Copiez package.json
COPY package.json ./

# Installez les dépendances
RUN npm install

# Copiez le reste des fichiers de l'application
COPY . .

# Exposez le port 3000
EXPOSE 3000

# Commande pour démarrer l'application
CMD ["npm", "start"]
