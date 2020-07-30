import React, { useContext, useEffect } from 'react'
import { Container, Grid, Icon, Image, Card, Divider, Rating } from 'semantic-ui-react'
import logo from './../assets/logo.svg'
import AppMenu from './AppMenu'
// import { auth, firestore } from './../firebase'
import { AuthContext } from '../Providers/AuthProvider';


// import data from '../assets/data.json';


const ItemCard = (props) => {

  const authContext = useContext(AuthContext);

  // useEffect(() => {
  //   console.log('all of the values in order from ItemCard', authContext.user,
  //     authContext.authenticated,
  //     authContext.setUser,
  //     authContext.loadingAuthState, 'Authcontenxt', authContext)
  //   return () => {

  //   }
  // })


  const extra = (
    <a>
      <Icon name='star' />
      {props.data.info.rating}
    </a>
  )


  return (

    <div>
      <Container image >
        <Divider />


        <Card>
          <Image src={logo} wrapped ui={false} />
          <Card.Content>
            <Card.Header>{props.data.info.title}</Card.Header>
            <Card.Meta>
              <span className='date'>Home</span>
            </Card.Meta>
            <Card.Description>
              {props.data.info.description}
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <Rating icon='star' defaultRating={props.data.info.rating} maxRating={5} />
          </Card.Content>
        </Card>





      </Container>
    </div>
  )
}
export default ItemCard