import React, { useContext, useState, useEffect } from 'react';
import { Grid, Form, Message, Button, Menu, Icon, GridColumn } from 'semantic-ui-react';
import AppMenu from './AppMenu';

import ItemContainer from './ItemContainer';
import { DataContext } from '../Providers/DataProvider';
import { auth } from './../firebase';
import bby from 'bestbuy';
import AppMenuSearch from './AppMenuSeach';
import BB_KEY from '../config'
// var bby = require('bestbuy')('G0JV5AgPvEEirid2FhdVC7bI');

// 1. find way to hid api key
// make search find item
const Home = (props) => {
  // const { productData } = useContext(DataContext);
  const [productData, setproductData] = useState('')

  const [search, setsearch] = useState('');

  const [showresults, setshowresults] = useState(false)
  var bb = bby(BB_KEY)

  useEffect(() => {


    const getBbData = (search) => {
      console.log('fatscreentv', search)

      // bb.products(`(search=television)`,
      bb.products('customerReviewAverage>=4&customerReviewCount>1500&salePrice>500',
        //  { show: 'all', pageSize: 1 })
        { show: 'sku,name,salePrice,thumbnailImage,image,shortDescription,customerReviewAverage,customerReviewCount,customerTopRated,department,salePrice', page: 1, pageSize: 30, sort: 'salePrice.asc' })

        .then(function (data) {

          setproductData(data)
          console.log('data was found in home', data)
          if (data.total === 0) console.log('No products found');
        })
        .catch(function (err) {
          console.warn(err);
        });


      // bb.products(`categoryPath.name="All Flat-Screen TVs"`,
      // bb.products(`categoryPath.name="maria"`,

      //   // { show: 'sku,name,salePrice,thumbnailImage,image,shortDescription,customerReviewAverage,customerReviewCount,customerTopRated,department', sort: 'salePrice.asc' })
      //   { show: 'all' })

      //   .then(function (data) {
      //     console.log('bbdata', data);

      //     setproductData(data)
      //   })
    }

    return getBbData()
  }, [])



  const handleSearchSubmit = (searchWords) => {

    setshowresults(true)
    setsearch(searchWords)

    bb.products(`(search=${searchWords})`,

      { show: 'sku,name,salePrice,thumbnailImage,image,shortDescription,customerReviewAverage,customerReviewCount,customerTopRated,department,salePrice', page: 2, sort: 'salePrice.asc' })

      .then(function (data) {
        setproductData(data)


      })
      .catch(function (err) {
        console.warn(err);
      });



    // console.log('fatscreentv', searchWords)
    // bb.products(`categoryPath.name="${searchWords}"`,
    //   { show: 'sku,name,salePrice,thumbnailImage,image,shortDescription,customerReviewAverage,customerReviewCount,customerTopRated,department,salePrice', sort: 'salePrice.asc' })
    //   .then(function (data) {
    //     console.log('bbdata', data);
    //     setproductData(data)


    //   })

  }







  return (
    <div>
      <Grid>
        <Grid.Row centered style={{ marginTop: '9px' }}>
          <Grid.Column width={2}>
          </Grid.Column>

          <Grid.Column width={4} >
            <AppMenuSearch mySearch={handleSearchSubmit} resultText={setshowresults} />
          </Grid.Column>

          <Grid.Column width={8} >
            <AppMenu />
          </Grid.Column>

          <Grid.Column width={2}>

          </Grid.Column>
        </Grid.Row>

        <Grid.Row columns={1}>
          <Grid.Column>
            {showresults ? <p>Showing results for: <a href='#'>{search}</a></p> : ''}
            <ItemContainer searchResult={productData} />
          </Grid.Column>
        </Grid.Row>
      </Grid>

    </div>
  );
};
export default Home;
