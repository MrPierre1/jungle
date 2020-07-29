import React, { useState } from 'react'
// import { Button, Container, Divider, Grid, Header, Image } from 'semantic-ui-react'
// import Menu from './Menu'
import { auth, firestore } from './../firebase'
// import SignInForm from './SignInForm'
// import Home from './Home'
// import { Router } from '@reach/router'

// import RegistrationForm from './RegistrationForm'

const AuthUser = () => {


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

  // const [login, setlogin] = useState(true)


  return (
    <div>
      {/* {login ? <SignInForm login={setlogin} /> : <RegistrationForm login={setlogin} />} */}


    </div>
  )
}
export default AuthUser