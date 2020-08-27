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

const Settings = (props) => {

  return (
    <Grid textAlign="center" style={{ height: '100vh' }} verticalAlign="middle">
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as="h2" color="teal" textAlign="center">
          <Image src={logo} /> Test Settings
        </Header>
      </Grid.Column>
    </Grid>
  );
};

export default withRouter(Settings);
