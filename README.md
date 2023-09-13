# Meditation API
A symfony/Api Platform based API comming with authentification, user tocken and routes to manage data for a front Next.js/react web app and in a second time a react native mobile app.

## ENVIRONMENT
| Language | version     | Description                |
| :-------- | :------- | :------------------------- |
| `node` | `18.15.0` |  |
| `next` | `13.4` |  |
| `react` | `18.2` |  |

<details>
  <summary><strong>INSTALLATION</strong></summary>

  > **1 Clone repo**
  > ``` bash
  > git clone git@github.com:florentgallou-dev/meditation_front.git
  > ```
  > **2 Pull docker image**
  > ``` bash
  > docker pull ghcr.io/florentgallou-dev/meditation_front:latest
  > ```
  > **3 Lauch docker container**
  > ``` bash
  > docker compose -f docker-compose.yml up
  > ```
</details>

<details>
  <summary><strong>ACTIONS</strong></summary>

  > **On merge with develop**
  > Build and push docker image with self-hosted actions-runner
  > 
  > **On merge with recipe**
  >
  > **1 Connect to OVH server**
  > **2 Pull new docker image**
  > ``` bash
  > docker pull ghcr.io/florentgallou-dev/meditation_front:latest
  > ```
  > **3 Lauch docker recipe container**
  > ``` bash
  > docker compose -f docker-compose.recipe.yml up
  > ```
  > **On merge with main**
  >
  > **1 Connect to OVH server**
  > **2 Lauch docker prod container**
  > ``` bash
  > docker compose -f docker-compose.prod.yml up
  > ```
</details>