# Do Your Chores - Asana Clone

### Link to live site

https://doyourchores.herokuapp.com/

Do Your Chores is a web application that allows parents and children to keep track of chores which need to get done around the house.

Here is a quick rundown of how the document is laid out:

1. [Feature List](./feature-list)
   - [Login/Signup](./login/signup)
   - [Squads](./squads)
   - [Zones](./zones)
   - [Chores](./chores)
2. [React Component List](./react-component-list)
3. [Database Schema](./database-schema)
4. [Frontend Routes](./frontend-routes)
5. [API routes](./api-routes)
6. [Redux Store Tree](./redux-store-tree)

## Feature List

### Login/Signup

![](https://i.postimg.cc/cCHzr61N/Login-page.jpg)
![](https://i.postimg.cc/Fzd2T1MV/Signup-page.jpg)

- A user who wishes to view and experience the site as a fully registered user, but does not wish to create a new account, may use the Demo login.
- Users may create a new account or login using their existing credentials.

### Squads

- Upon signup, users will join a Squad, which is a team. This Squad may have many Zones for which they are responsible.
- The user's Squad dictates which Zones they are able to see.
- In a future version of the app, the user will be allowed to have more than one Squad.

### Zones

![](https://i.postimg.cc/HWbG88tT/zones-page.jpg)

- Users may create a "Zone" which can be a section of the house that kids, or parents, will be cleaning. i.e. "Kitchen", or "Bathrooms".
- Zones are larger components similar to projects which hold smaller components called Chores.
- In a future version of this app only the master user will be able to create, update, or delete Zones.

### Chores

Create a Chore View
![](https://i.postimg.cc/G2Qk6QCc/chores-page-create-chore.jpg)

Detailed Chore View
![](https://i.postimg.cc/v8CWkcRx/detailed-chore-view.jpg)

- Any user may create a new Chore.
- A Chore is equivalent to a task and can be created, edited, and deleted.
- Additionally, a user may complete a Chore. In a future version of the app, when a Chore is completed it will disappear from the "Incomplete Chores" page and appear in the "Completed Chores" page. A user may toggle back and forth between the two pages to view completed and incomplete Chores and change the status of Chores as they wish.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

## Technologies Used

- React
- Redux
- JavaScript
- CSS
- Heroku

## Link to Wiki docs

https://github.com/pantheman1/asana-clone-doyourchores/wiki
