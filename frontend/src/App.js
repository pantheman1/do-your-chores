import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import LoginFormPage from "./components/LoginFormPage";
import SignupFormPage from "./components/SignupFormPage";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import HomePage from './components/HomePage';
import Zones from './components/Zones';
import Chores from './components/Chores';
import CompletedChores from "./components/Chores/CompleteChores";
import Squads from "./components/Squads";
// import IncompleteChores from "./components/Chores/IncompleteChores"; //make this

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  // useEffect(() => {
  //   // dispatch a thunk to get all of the user's squads
  // }, [dispatch])

  return (
    <>
      {isLoaded && (
        <Switch>
          <Route path='/login'>
            <LoginFormPage />
          </Route>
          <Route path='/signup'>
            <SignupFormPage />
          </Route>
          <Route path='/:userId/squads'>
            <Squads />
          </Route>
          <Route exact path='/'>
            <Navigation isLoaded={isLoaded} />
          </Route>
          <Route exact path='/zones'>
            <Navigation isLoaded={isLoaded} />
            <Zones />
          </Route>
          <Route exact path='/zones/:zoneId'>
            <Navigation isLoaded={isLoaded} />
            <Chores />
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;