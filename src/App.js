import React, { useState, useEffect } from 'react';
// import logo from './assets/logo.svg';
import './App.css';
import 'semantic-ui-css/semantic.min.css'
// import SignInForm from './components/SignInForm';
import LandingPage from './components/LandingPage';
// import RegistrationForm from './components/RegistrationForm';
import { auth } from './firebase';
import Home from './components/Home';
import { AuthProvider } from './Providers/AuthProvider';

// import { Button, Form, Grid, Header, Image, Message, Menu, Segment } from 'semantic-ui-react'
// import { BrowserRouter, Route, Link, Router } from "react-router-dom";
// import * as firebase from 'firebase';

// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link,
//   Redirect,
// } from 'react-router-dom';

function App() {
  const [loggedIn, setloggedIn] = useState(false);
  // const [register, setregister] = useState(false);
  const [token, settoken] = useState(true);
  const [haveAnAccount, sethaveAnAccount] = useState(false);

  useEffect(
    () => {
      console.log('token, ', token);
      auth.onAuthStateChanged((user) => {
        if (user) {
          settoken(user);
          setloggedIn(true);
          sethaveAnAccount(true);
          // User is signed in.
          console.log('signin user is logged in ', user.refreshToken);
        } else {
          setloggedIn(false);
          // User is signed out.
          console.log('sign user is looged out', user);
        }
      });
      return () => { };
    },
    [token]
  );


  return (
    <AuthProvider>
      <div>
        {token ? (
          <Home getToken={settoken} />
        ) : (
            <LandingPage getToken={settoken} />
          )}

      </div>
    </AuthProvider>

  );
}

export default App;
