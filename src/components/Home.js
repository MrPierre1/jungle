import React, { useContext, useEffect } from 'react'
import { Container, Grid } from 'semantic-ui-react'
import AppMenu from './AppMenu'
// import { auth, firestore } from './../firebase'
import { AuthContext } from './../Providers/AuthProvider';
import ItemContainer from './ItemContainer';
import LeftSearchFilters from './LeftSearchFilters';
// import ItemContainer from './ItemContainer';




const Home = (props) => {
  const authContext = useContext(AuthContext);

  // useEffect(() => {
  //   console.log('all of the values in order from home', authContext.user,
  //     authContext.authenticated,
  //     authContext.setUser,
  //     authContext.loadingAuthState, 'Authcontenxt', authContext)
  //   return () => {

  //   }
  // })
  return (


    <div>


      <Container text>


        {/* <Grid>
          <Grid.Row columns={1}>
            <Grid.Column> */}


        <AppMenu />

        <ItemContainer />
        {/* 
            </Grid.Column>
          </Grid.Row> */}
        {/* </Grid> */}

      </Container>
    </div>
  )
}
export default Home