import React, { useContext, useEffect } from 'react';
import { Container, Grid, } from 'semantic-ui-react';

import data from './../assets/data.json';
import ItemCard from './ItemCard';
import { DataContext } from '../Providers/DataProvider';




const ItemContainer = (props) => {
  const { productData } = useContext(DataContext);


  useEffect(() => {
    console.log(typeof productData, 'its data', productData)
    return () => {

    }
  }, [])


  return (
    <div>
      <Container>
        <Grid>
          <Grid.Row columns={4}>
            {console.log(typeof productData, 'productData in home', productData)}



            {productData.map(function (doc) {
              // { console.log('product data ', item) }

              return (
                <Grid.Column key={doc.id}>
                  <ItemCard data={doc.data()} />
                </Grid.Column>
              );
            })}
          </Grid.Row>
        </Grid>
      </Container>
    </div>
  );
};
export default ItemContainer;
