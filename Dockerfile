FROM ubuntu:22.04 AS docker-meditation-front

RUN apt-get update -yq \
&& apt-get install curl gnupg -yq \
&& curl -sL https://deb.nodesource.com/setup_18.x | bash \
&& apt-get install nodejs -yq \
&& apt-get clean -y

# Adds all files from racine and create a /app folder in docker image to paste it
# docker run -v $(pwd):/app -p 3000:3000 docker-project-test -> live using coded files
ADD . /app/

# Start in /app in
WORKDIR /app

RUN npm install
RUN npm run build     #For prod

EXPOSE 3000

# docker run -v $(pwd):/app -p 3000:3000  docker-project-test npm run dev -> overide CDM npm run start
CMD npm run start