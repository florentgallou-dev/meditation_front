FROM ubuntu:22.04 AS docker-meditation-front

# link directly docker image to repository packages
LABEL org.opencontainers.image.source https://github.com/florentgallou-dev/meditation_front

# new way to install node
RUN apt-get update -yq \
&& apt-get install -y ca-certificates curl gnupg \
&& mkdir -p /etc/apt/keyrings \
&& curl -fsSL https://deb.nodesource.com/gpgkey/nodesource-repo.gpg.key | sudo gpg --dearmor -o /etc/apt/keyrings/nodesource.gpg \
&& NODE_MAJOR=18 \
&& echo "deb [signed-by=/etc/apt/keyrings/nodesource.gpg] https://deb.nodesource.com/node_$NODE_MAJOR.x nodistro main" | sudo tee /etc/apt/sources.list.d/nodesource.list \
&& sudo apt-get update \
&& sudo apt-get install nodejs -y \
&& apt-get clean -y

# Adds all files from racine and create a /app folder in docker image to paste it
ADD . /app/

# Start in /app in
WORKDIR /app

RUN npm install
RUN npm run build

EXPOSE 3000

CMD npm run start