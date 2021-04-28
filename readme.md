# Do Your Chores

## Install

Steps to install:

```bash
npm install
```

## Setup the database:

### Install

Install [postgres][postgres]

### Configure

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

You want to make sure the `#` isn't at the beginning of the line.  If it's not there, great!  If it is, destroy it.

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

replacing `'*****'` with a password.  You can now exit psql using `ctrl-d`.

### Fill out .env

In `/backend` there is a file called `.env.example`.  Make a copy of that file and call it `.env` (still in the `/backend` directory).  Fill out the pieces that need to be filled out.

### Create user and DB for app

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

## Run

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
