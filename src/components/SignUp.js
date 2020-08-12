import React, { useState, useCallback, useContext } from 'react';
import logo from './../assets/logo.svg';
import {
  Button,
  Form,
  Grid,
  Header,
  Image,
  Message,
  Segment,
} from 'semantic-ui-react';

import { auth } from '../firebase';
import { withRouter, Redirect } from 'react-router';

import { AuthContext } from '../Providers/AuthProvider';

const SignUp = (props) => {
  const [email, setEmail] = useState('');
  const [password, setpassword] = useState('');
  const [fullName, setfullName] = useState('');
  const [token, settoken] = useState('');

  const { currentUser } = useContext(AuthContext);

  function handleClick() {
    props.history.push('/signin');
  }


  const createUserWithEmailAndPasswordHandler = useCallback(async event => {
    event.preventDefault();
    try {
      await
        auth
          .createUserWithEmailAndPassword(email, password);

      console.log('the current user', currentUser)

      if (currentUser) {
        // return <Redirect to="/" />;
        props.history.push('/');

      }

    } catch (error) {
      alert(error);
    }
  });


  return (
    <Grid textAlign="center" style={{ height: '100vh' }} verticalAlign="middle">
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as="h2" color="teal" textAlign="center">
          <Image src={logo} /> Register for an account
        </Header>
        <Form onSubmit={createUserWithEmailAndPasswordHandler} size="large">
          <Segment stacked>
            <Form.Input
              fluid
              icon="user"
              iconPosition="left"
              placeholder="Full Name"
              value={fullName}
              onChange={(e) => setfullName(e.target.value)}
            />

            <Form.Input
              fluid
              icon="mail"
              iconPosition="left"
              placeholder="E-mail address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <Form.Input
              fluid
              icon="lock"
              iconPosition="left"
              placeholder="Password"
              type="password"
              value={password}
              onChange={(e) => setpassword(e.target.value)}
            />

            <Button color="teal" fluid size="large">
              Register
            </Button>
          </Segment>
        </Form>
        <Message>
          Have an account?{' '}
          <a href="#" onClick={handleClick}>
            Sign In
          </a>
        </Message>
      </Grid.Column>
    </Grid>
  );
};

export default withRouter(SignUp);
