import React, { useState, useEffect } from 'react'
import logo from './logo.svg';
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
import { auth, firestore } from './firebase'
import { useHistory } from 'react-router-dom';


const RegistrationForm = (props) => {

  const [email, setEmail] = useState('')
  const [password, setpassword] = useState('')
  const [fullName, setfullName] = useState('')
  const [token, settoken] = useState('')

  function handleClick() {
    console.log("Hi there, signin!");
    props.login(true)
  }


  const createUserWithEmailAndPasswordHandler = event => {
    event.preventDefault();
    console.log(email, 'git the email and pass to register', password)

    auth.createUserWithEmailAndPassword(email, password)
      .then((response) => {
        settoken(response.user.refreshToken)
        localStorage.setItem('token', response.user.refreshToken);

        console.log('the data is here to register ', response)
      })
      .catch(function (error) {
        console.error("Error registering in with password and email", error);
      });
  };

  useEffect(() => {
    auth.onAuthStateChanged(user => {
      if (user) {
        // User is signed in.
        console.log(' register user is logged in', user)
      } else {
        // User is signed out.
        console.log('register user is looged out', user)
      }
    });
    return () => {

    }
  }, [token])


  return (


    <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as='h2' color='teal' textAlign='center'>
          <Image src={logo} /> Register for an account
      </Header>
        <Form onSubmit={createUserWithEmailAndPasswordHandler} size='large'>
          <Segment stacked>
            <Form.Input fluid icon='user' iconPosition='left' placeholder='Full Name' value={fullName}

              onChange={(e) => setfullName(e.target.value)} />

            <Form.Input fluid icon='mail' iconPosition='left' placeholder='E-mail address' value={email}

              onChange={(e) => setEmail(e.target.value)} />

            <Form.Input
              fluid
              icon='lock'
              iconPosition='left'
              placeholder='Password'
              type='password'
              value={password}

              onChange={(e) => setpassword(e.target.value)}


            />

            <Button color='teal' fluid size='large'>
              Register
          </Button>
          </Segment>
        </Form>
        <Message>
          Have an account? <a href='#' onClick={handleClick} >Sign In</a>

        </Message>
      </Grid.Column>
    </Grid>
  )
}

export default RegistrationForm