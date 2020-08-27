import React, { useState, useCallback } from 'react';
import { Menu } from 'semantic-ui-react';
import { auth } from './../firebase';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import TestHome from './TestHome'

const AppMenu = ({ mySearch }) => {
  const [activeItem, setactiveItem] = useState('home');

  const handleItemClick = (e, { name }) => {
    console.log('namem', name);
    setactiveItem(name);
  };

  const signOut = () => {
    console.log('Hi there, signingout !');
    auth
      .signOut()
      .then(function (data) {
        console.log('signedout', data);
      })
      .catch(function (error) {
        console.log('errror exist in signout', error);
      });
  };

  return (


    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </div>


      <Menu secondary>
        <Menu.Item

          name="account"
          active={activeItem === 'account'}
          onClick={handleItemClick}
          as={Link}
          to="/account"




        />
        <Menu.Item
          name="settings"
          active={activeItem === 'settings'}
          onClick={handleItemClick}
          as={Link}
          to="/settings"
        />

      </Menu>
      <Switch>
        <Route path="/account">
          <TestHome />
        </Route>
        {/* <Route path="/">
            <Home />
          </Route> */}


      </Switch>

    </Router>

  );
};

export default AppMenu;
