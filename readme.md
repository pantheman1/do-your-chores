# Do Your Chores

<p align="center"><img width="200" src="https://i.postimg.cc/4N6WHTwv/logo-madeline.png" /></p>

### Link to live site

https://doyourchores.herokuapp.com/

Do Your Chores is a web application that allows parents and children to keep track of chores which need to get done around the house.

Here is a quick rundown of how this document is laid out:

1. [Feature List](#feature-list)
   - [Login/Signup](#login/signup)
   - [Squads](#squads)
   - [Zones](#zones)
   - [Chores](#chores)
1. [Database Schema](#database-schema)
1. [Frontend Routes](#frontend-routes)
1. [API routes](#api-routes)
1. [Technologies Used](#technologies-used)
1. [Getting Started](#getting-started)

## Feature List

### Login/Signup

- A user who wishes to view and experience the site as a fully registered user, but does not wish to create a new account, may use the Demo login.
- Users may create a new account or login using their existing credentials.
<p align="center"><img src=https://i.postimg.cc/cCHzr61N/Login-page.jpg /></p>
<p align="center"><img src=https://i.postimg.cc/Fzd2T1MV/Signup-page.jpg /></p>

### Squads

- Upon signup, users will join a Squad, which is a team. This Squad may have many Zones for which they are responsible.
- The user's Squad dictates which Zones they are able to see.
- In a future version of the app, the user will be allowed to have more than one Squad.

### Zones

<p align="center"><img src=https://i.postimg.cc/HWbG88tT/zones-page.jpg /></p>

- Users may create a "Zone" which can be a section of the house that kids, or parents, will be cleaning. i.e. "Kitchen", or "Bathrooms".
- Zones are larger components similar to projects which hold smaller components called Chores.
- In a future version of this app only the master user will be able to create, update, or delete Zones.

### Chores

- A Chore is equivalent to a task and can be created, edited, and deleted.
- Any user may create a new Chore.
<p align="center"><img src=https://i.postimg.cc/QdZ5jfsg/create-a-chore.gif /></p>
- A user can toggle between Create a Chore and Detailed Chore View:
<p align="center"><img src=https://i.postimg.cc/FKkWdP8P/toggle-detailed-view.gif /></p>
- Additionally, a user may complete a Chore. In a future version of the app, when a Chore is completed it will disappear from the "Incomplete Chores" page and appear in the "Completed Chores" page. A user may toggle back and forth between the two pages to view completed and incomplete Chores and change the status of Chores as they wish.
<p align="center"><img src=https://i.postimg.cc/Y0vZRpsH/complete-chore.gif /></p>

## Database Schema

<p align="center"><img src="https://i.postimg.cc/nVQgbfDM/database-schema.jpg" /></p>)

## Frontend Routes

- `/login`
- `/signup`
- `/zones`
- `/zones/:id`

## API routes

- `/users`
- `/zones`
- `/session`
- `/chores`

## Technologies Used

- React
- Redux
- JavaScript
- Express
- Sequelize
- CSS
- Heroku

### Link to Wiki docs

https://github.com/pantheman1/doyourchores/wiki

## Getting Started

### Install

Steps to install:

```bash
npm install
```

### Setup the database:

#### Install

Install [postgres][postgres]

#### Configure

Configure postgres:

Edit this file with sudo permissions: `/etc/postgresql/<VERSION>/main/postgresql.conf`

For example, it could look like this:

```bash
sudo vim /etc/postgresql/13/main/postgresql.conf
```

Search for `localhost`, you should find a line that looks like this:

```bash
#listen_addresses = 'localhost'         # what IP address(es) to listen on;
```

You want to make sure the `#` isn't at the beginning of the line. If it's not there, great! If it is, destroy it.

### Start the service

Restart (or start, if not already running) the `postgresql` service:

```bash
sudo service postgresql stop
sudo service postgresql start
```

### Create login

```bash
sudo -u postgres psql
```

```bash
ALTER USER postgres WITH ENCRYPTED PASSWORD '*****'
```

replacing `'*****'` with a password. You can now exit psql using `ctrl-d`.

### Fill out .env

In `/backend` there is a file called `.env.example`. Make a copy of that file and call it `.env` (still in the `/backend` directory). Fill out the pieces that need to be filled out.

### Create user and DB for app

Log into `psql`:

```bash
sudo -u postgres psql
```

Now create the user for your app account in the DB:

```bash
CREATE USER <username> CREATEDB WITH ENCRYPTED PASSWORD '*****';
```

where `<username>` is the username from `.env`, and `'*****'` is the password from `.env`.

Next, create the actual database using `sequelize`:

```bash
npx dotenv sequelize-cli db:create
```

### Migrate and seed DB

```bash
npx dotenv sequelize-cli db:migrate
npx dotenv sequelize-cli db:seed:all
```

### Install Postbird

Install the database management service [Postbird][postbird].

### Run

Start the backend:

```bash
cd backend
npm start
```

Start the frontend:

```bash
cd frontend
npm start
```

[postgres]: https://www.postgresql.org
[postbird]: https://github.com/Paxa/postbird/releases
