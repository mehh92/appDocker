# Utilisez une image de base Apache
FROM httpd:latest

# Définir la variable d'environnement
ENV work=/usr/local/apache2/htdocs

# Copier les fichiers de l'application dans le répertoire de travail
COPY . ${work}

# Exposez le port 80
EXPOSE 80

# Commande pour démarrer Apache
CMD ["httpd-foreground"]
