import React, { useState, useEffect } from 'react'
import logo from './logo.svg';
import './App.css';
import SignInForm from './SignInForm'
import LandingPage from './LandingPage'
import RegistrationForm from './RegistrationForm'
import { auth, firestore } from './firebase'

import { Button, Form, Grid, Header, Image, Message, Menu, Segment } from 'semantic-ui-react'
// import { BrowserRouter, Route, Link, Router } from "react-router-dom";
// import * as firebase from 'firebase';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,

} from 'react-router-dom';


const Home = (props) => {

  // const [token, settoken] = useState('')
  const [activeItem, setactiveItem] = useState('home')
  const [speed, setspeed] = useState(10)
  const [login, setlogin] = useState(true)
  const [register, setregister] = useState(false)
  const [token, settoken] = useState('')

  // useEffect(() => {
  //   auth.onAuthStateChanged(user => {
  //     if (user) {
  //       // User is signed in.
  //       console.log('signin user is logged in ', user.refreshToken)
  //     } else {
  //       // User is signed out.
  //       console.log('sign user is looged out', user)
  //     }
  //   });
  //   return () => {

  //   }
  // }, [token])


  const handleItemClick = name => {
    setactiveItem(name)
  }



  return (
    // {token ? <div>What is here</div> : <LandingPage />}


    <div>

      {login ? <SignInForm login={setlogin} /> : <RegistrationForm login={setlogin} />}


    </div>
    // <Router>
    //   <Segment
    //     textAlign="center"
    //     style={{ minHeight: 0, padding: '1em 10em' }}
    //     vertical
    //     inverted
    //   >
    //     <div className="divMenu">


    //       <Menu.Item
    //         name="signIn"
    //         // active={activeItem === 'sign'}
    //         // onClick={handleItemClick}
    //         as={Link}
    //         to="/signIn"

    //       >
    //         Signin
    //         </Menu.Item>

    //       <Menu.Item
    //         name="register"
    //         // active={activeItem === 'register'}
    //         // onClick={handleItemClick}
    //         as={Link}
    //         to="/register"
    //       // style={
    //       //   activeItem === 'register' ? (
    //       //     {
    //       //       backgroundColor: 'black',
    //       //       color: 'white',
    //       //       fontSize: '15px',
    //       //     }
    //       //   ) : (
    //       //     {}
    //       //   )
    //       // }
    //       >
    //         Register
    //         </Menu.Item>


    //     </div>
    //   </Segment>

    //   <Switch attached='bottom'>
    //     <Route path="/signIn" component={SignInForm} />
    //     <Route exact path="/register" component={RegistrationForm} />
    //   </Switch>

    // </Router>

  )
}

export default Home