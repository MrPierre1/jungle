import React, { useEffect } from 'react'
import { Container, Icon, Image, Card, Divider, Rating } from 'semantic-ui-react'
import logo from './../assets/logo.svg'
import AppMenu from './AppMenu'
import { image } from 'faker'



const ItemCard = (props) => {



  // const extra = (
  //   // <a>
  //   //   <Icon name='star' />
  //   //   {props.data.info.ratingCount}
  //   // </a>
  // )


  return (

    <div>
      <Container  >
        <Divider />


        <Card>

          <Image src={props.data.image} wrapped ui={false} />
          <Card.Content>
            <Card.Header>{props.data.name}</Card.Header>
            <Card.Meta>
              <span className='date'>{[props.data.department]}</span>
            </Card.Meta>
            <Card.Description >
              {props.data.shortDescription.substring(0, 35) + '...'}
            </Card.Description>
          </Card.Content>
          <Card.Content extra>

            <a href="#">
              <Rating defaultRating={props.data.customerReviewAverage} maxRating={5} disabled />
              {props.data.customerReviewCount}
            </a>

          </Card.Content>
        </Card>





      </Container>
    </div>
  )
}
export default ItemCard