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

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

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
          <Route exact path='/'>
            <Navigation isLoaded={isLoaded} />
          </Route>
          <Route path='/users/zones/:userId'>
            <Navigation isLoaded={isLoaded} />
            <Zones />
          </Route>
          <Route path='/zones/:zoneId/chores/:userId'>
            <Navigation isLoaded={isLoaded} />
            <Chores />
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;