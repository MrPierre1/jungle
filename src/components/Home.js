import React from 'react'
import { Button, Container, Divider, Grid, Header, Image, Search } from 'semantic-ui-react'
import AppMenu from './AppMenu'
import { auth, firestore } from './../firebase'


const Home = (props) => {

  return (


    <div>


      <Container text>


        <Grid>
          <Grid.Row columns={1}>
            <Grid.Column>

              {/* <div><Button primary onClick={signout}> Sign Out</Button></div> */}
              <AppMenu />
            </Grid.Column>
          </Grid.Row>
        </Grid>

      </Container>
    </div>
  )
}
export default Home