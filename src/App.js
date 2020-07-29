import React, { useState, useEffect } from 'react';
// import logo from './assets/logo.svg';
import './App.css';
import SignInForm from './components/SignInForm'
import LandingPage from './components/LandingPage'
import RegistrationForm from './components/RegistrationForm'
import { auth, firestore } from './firebase'
import Home from './components/Home'

// import { Button, Form, Grid, Header, Image, Message, Menu, Segment } from 'semantic-ui-react'
// import { BrowserRouter, Route, Link, Router } from "react-router-dom";
// import * as firebase from 'firebase';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,

} from 'react-router-dom';


function App() {

  const [loggedIn, setloggedIn] = useState(false)
  const [register, setregister] = useState(false)
  const [token, settoken] = useState('')
  const [haveAnAccount, sethaveAnAccount] = useState(false)


  useEffect(() => {
    console.log('token, ', token)
    auth.onAuthStateChanged(user => {
      if (user) {
        settoken(user)
        setloggedIn(true)
        sethaveAnAccount(true)
        // User is signed in.
        console.log('signin user is logged in ', user.refreshToken)
      } else {
        setloggedIn(false)
        // User is signed out.
        console.log('sign user is looged out', user)
      }
    });
    return () => {

    }
  }, [token])


  function signout() {
    console.log("Hi there, signingout !");
    auth.signOut().then(function (data) {
      console.log('signedout', data)
      // Sign-out successful.
    }).catch(function (error) {
      console.log('errror exist in signout', error)
      // An error happened.
    });
  }




  return (

    <div>

      {token ? <Home getToken={settoken} /> : <LandingPage getToken={settoken} />}



      {/* <h1>hi</h1> */}



    </div>
    //     <div className="App">

    //       {/* {token ? <div><Button primary onClick={signout}> Sign Out</Button><p>I'm here</p></div> : <LandingPage />} */}
    //       {loggedIn ? <Home /> : <LandingPage />}

    //       {/* 
    // <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
    //       <Grid.Column style={{ maxWidth: 450 }}>




    //  */}

    //     </div >





  );
}

export default App;
