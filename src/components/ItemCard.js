import React, { useEffect } from 'react';
import {
  Container,
  Icon,
  Image,
  Card,
  Divider,
  Rating,
  Button,
} from 'semantic-ui-react';
import logo from './../assets/logo.svg';
import AppMenu from './AppMenu';
import { image } from 'faker';

const ItemCard = (props) => {
  // const extra = (
  //   // <a>
  //   //   <Icon name='star' />
  //   //   {props.data.info.ratingCount}
  //   // </a>
  // )

  return (
    <div>
      {/* <Container  > */}
      <Divider />

      {console.log('item summary props', props)}
      <Card fluid>
        {props.data.image ? (
          <img src={props.data.image} height={200} />
        ) : (
            <img src="https://i.stack.imgur.com/yZlqh.png" height={200} />
          )}

        <Card.Content style={{ height: '150px' }}>
          <Card.Header>{props.data.name.substring(0, 35) + '...'}</Card.Header>
          <Card.Meta>
            <span className="date">{[props.data.department]}</span>
          </Card.Meta>
          <Card.Description>
            {props.data.shortDescription ? (
              props.data.shortDescription.substring(0, 35) + '...'
            ) : (
                'TBD'
              )}
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <a href="#">
            <Rating
              defaultRating={props.data.customerReviewAverage}
              maxRating={5}
              disabled
            />
            {props.data.customerReviewCount}
          </a>
          <Divider />
          <p style={{ color: 'red', fontWeight: 'bold', marginRight: '-30px' }}>
            ${props.data.salePrice}

            <a href="#">Add to Cart</a>
          </p>




        </Card.Content>
      </Card>

      {/* </Container> */}
    </div>
  );
};
export default ItemCard;
