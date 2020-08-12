import React, { useState, useContext } from 'react';
// import logo from './logo.svg';
import logo from './../assets/logo.svg';
import { withRouter, Redirect } from 'react-router';
import {
  Button,
  Form,
  Grid,
  Header,
  Image,
  Message,
  Segment,
} from 'semantic-ui-react';
// import { auth, firestore } from './firebase'
import { auth, firestore } from '../firebase';
import { AuthContext } from '../Providers/AuthProvider';

const SignIn = (props) => {
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const [token, settoken] = useState('');
  function handleClick() {
    console.log('Hi there, signin!');

    console.log('props exist', props);
    props.history.push('/signup');
  }

  const signInWithEmailAndPasswordHandler = (event) => {
    event.preventDefault();
    // console.log(email, 'git the email and pass', password)

    auth
      .signInWithEmailAndPassword(email, password)
      .then((data) => {
        settoken(data.user);

        localStorage.setItem('token', data.user.refreshToken);
        console.log('the data is here ', data);
      })
      .catch((error) => {
        console.error('Error signing in with password and email', error);
      });
  };

  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    return <Redirect to="/" />;
  }

  return (
    <Grid textAlign="center" style={{ height: '100vh' }} verticalAlign="middle">
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as="h2" color="teal" textAlign="center">
          <Image src={logo} /> Log-in to your account
        </Header>
        <Form onSubmit={signInWithEmailAndPasswordHandler} size="large">
          <Segment stacked>
            <Form.Input
              fluid
              icon="user outline"
              iconPosition="left"
              placeholder="email"
              value={email}
              onChange={(e) => setemail(e.target.value)}
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
              Login
            </Button>
          </Segment>
        </Form>
        <Message>
          New to us?{' '}
          <a href="#" onClick={handleClick}>
            Sign Up
          </a>
        </Message>
      </Grid.Column>
    </Grid>
  );
};

export default withRouter(SignIn);
