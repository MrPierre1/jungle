import React, { useState } from 'react'
// import logo from './logo.svg';
import './../App.css';
import SignInForm from './SignInForm'
// import LandingPage from './LandingPage'
import RegistrationForm from './RegistrationForm'
// import { auth, firestore } from './../firebase'

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


const LandingPage = (props) => {

  const [login, setlogin] = useState(true)
  // const [activeItem, setactiveItem] = useState('home')
  // const [speed, setspeed] = useState(10)
  // const [haveAnAccount, sethaveAnAccount] = useState(true)
  // const [register, setregister] = useState(false)
  // const [token, settoken] = useState('')
  // 


  // const handleItemClick = name => {
  //   setactiveItem(name)
  // }



  return (

    <div>

      {login ? <SignInForm login={setlogin} getToken={props.getToken} /> : <RegistrationForm login={setlogin} getToken={props.getToken} />}

    </div>


  )
}

export default LandingPage