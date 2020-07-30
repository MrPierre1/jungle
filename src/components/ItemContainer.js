import React, { useContext, useEffect } from 'react'
import { Container, Divider, Grid, Item } from 'semantic-ui-react'
import AppMenu from './AppMenu'
// import { auth, firestore } from './../firebase'
import { AuthContext } from './../Providers/AuthProvider';
import LeftSearchFilters from './LeftSearchFilters'

import data from './../assets/data.json';
import ItemCard from './ItemCard'

const ItemContainer = (props) => {

  const authContext = useContext(AuthContext);

  // useEffect(() => {
  //   console.log('all of the values in order from ItemContainer', authContext.user,
  //     authContext.authenticated,
  //     authContext.setUser,
  //     authContext.loadingAuthState, 'Authcontenxt', authContext)
  //   return () => {

  //   }
  // })



  return (


    // data.map(function(item, i){
    //   console.log('test');
    //   return <li key={i}>Test</li>
    // })


    <div>
      <Container >
        <Grid  >
          <Grid.Row columns={4} >
            {data.map((item, i) => (
              <Grid.Column key={item}>
                <ItemCard key={item.info.itemID} data={item} />

              </Grid.Column>

            ))}

            <Divider vertical></Divider>

            {/* <LeftSearchFilters /> */}
          </Grid.Row>
          <Grid.Row>

          </Grid.Row>
        </Grid>

      </Container>
    </div>
  )
}
export default ItemContainer