import React, { useEffect } from 'react'
import { Container, Icon, Image, Card, Divider, Rating } from 'semantic-ui-react'
import logo from './../assets/logo.svg'
import AppMenu from './AppMenu'



const ItemCard = (props) => {

  useEffect(() => {
    console.log('props', props)
    return () => {

    }
  }, [])

  // const extra = (
  //   <a>
  //     <Icon name='star' />
  //     {props.data.info.rating}
  //   </a>
  // )


  return (

    <div>
      {/* <Container  >
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





      </Container> */}
    </div>
  )
}
export default ItemCard