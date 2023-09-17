FROM ubuntu:22.04 AS docker-meditation-front

# link directly docker image to repository packages
LABEL org.opencontainers.image.source https://github.com/florentgallou-dev/meditation_front

# new way to install node - wolontary separate each command to see where it could go wrong
RUN apt-get update -yq
RUN apt-get install -yq ca-certificates curl gnupg
RUN mkdir -p /etc/apt/keyrings
RUN curl -fsSL https://deb.nodesource.com/gpgkey/nodesource-repo.gpg.key | gpg --dearmor -o /etc/apt/keyrings/nodesource.gpg
RUN echo "deb [signed-by=/etc/apt/keyrings/nodesource.gpg] https://deb.nodesource.com/node_18.x nodistro main" | tee /etc/apt/sources.list.d/nodesource.list
RUN apt-get update -yq
RUN apt-get install nodejs -yq
RUN apt-get clean -y

# Adds all files from racine and create a /app folder in docker image to paste it
ADD . /app/

# Start in /app in
WORKDIR /app

RUN npm install
RUN npm run build

EXPOSE 3000

CMD npm run start