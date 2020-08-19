import React, { useContext, useEffect, useState } from 'react';
import { Container, Grid, } from 'semantic-ui-react';

// import data from './../assets/data.json';
import ItemCard from './ItemCard';
import { DataContext } from '../Providers/DataProvider';
import { firestore } from '../firebase'
import bby from 'bestbuy';
// var bby = require('bestbuy')('G0JV5AgPvEEirid2FhdVC7bI');
var bb = bby('G0JV5AgPvEEirid2FhdVC7bI')

const ItemContainer = ({ searchResult }) => {
  const { productData } = useContext(DataContext);
  const [bbData, setbbData] = useState(null)
  const [queryData, setQueryData] = useState('')




  return (
    <div>
      <Container>
        <Grid>
          <Grid.Row columns={4}>

            {console.log('queryData', searchResult)}

            {searchResult ? (


              searchResult.products.map(function (item) {

                return (
                  <Grid.Column key={item.sku}>

                    <ItemCard data={item} />
                  </Grid.Column>
                );
              })


            ) :
              <div>Loading...</div>
            }


          </Grid.Row>
        </Grid>
      </Container>
    </div>
  );
};
export default ItemContainer;
