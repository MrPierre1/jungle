import React from 'react'
import { Button, Container, Divider, Grid, Header, Image } from 'semantic-ui-react'
import Menu from './Menu'
import { auth, firestore } from './../firebase'


const GridLayout = () => {

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


      <Container text>
        <Header as='h3'>Text Container</Header>
        <Menu />
        <p>
          Text containers <b>do not need to use grids</b> and help simplify basic page layouts.
      </p>

        <Grid>
          <Grid.Row columns={1}>
            <Grid.Column>

              <div><Button primary onClick={signout}> Sign Out</Button></div>

            </Grid.Column>
          </Grid.Row>
        </Grid>

      </Container>
    </div>
  )
}
export default GridLayout