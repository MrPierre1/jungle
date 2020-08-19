import React, { useContext, useState, useEffect } from 'react';
import { Grid, Form, Message, Button, Menu, Icon, GridColumn } from 'semantic-ui-react';
import AppMenu from './AppMenu';

import ItemContainer from './ItemContainer';
import { DataContext } from '../Providers/DataProvider';
import { auth } from './../firebase';
import bby from 'bestbuy';
// var bby = require('bestbuy')('G0JV5AgPvEEirid2FhdVC7bI');


const Home = (props) => {
  const { productData } = useContext(DataContext);
  const [searchItem, setsearchItem] = useState('television');
  const [search, setsearch] = useState('');
  const [bbData, setbbData] = useState(null)
  const [queryData, setQueryData] = useState('')
  const [showresults, setshowresults] = useState(false)
  var bb = bby('G0JV5AgPvEEirid2FhdVC7bI')

  const searchForItem = (e) => {
    e.preventDefault();
    setshowresults(true)
    console.log('my value, ', search);
  };

  const [activeItem, setactiveItem] = useState('');

  const handleItemClick = (e, { name }) => {
    console.log('namem', name);
    setactiveItem(name);
  };


  useEffect(() => {



    // useEffect(() => {
    //   console.log('searchItem-----0', props.searchResult)
    //   if (props.searchResult) {
    //     setQueryData(props.searchResult)
    //   }
    //   else {

    const getBbData = () => {
      bb.products('categoryPath.name="All Flat-Screen TVs"',
        { show: 'sku,name,salePrice,thumbnailImage,image,shortDescription,customerReviewAverage,customerReviewCount,customerTopRated,department', sort: 'salePrice.asc' })
        .then(function (data) {
          console.log('bbdata', data);
          setbbData(data)
          setQueryData(data)
        })
    }




    // }, [props.searchResult]);

    // const searchForItem = (searchItem) => {
    //   bb.products(`categoryPath.name=${searchItem}`,
    //     { show: 'sku,name,salePrice,thumbnailImage,image,shortDescription,customerReviewAverage,customerReviewCount,customerTopRated,department', sort: 'salePrice.asc' })
    //     .then(function (data) {
    //       console.log('result Data', data);
    //       // setbbData(data)
    //     })
    // }
    return getBbData()


    // return () => {

    // }
  }, [])










  const signOut = () => {
    console.log('Hi there, signingout !');
    auth
      .signOut()
      .then(function (data) {
        console.log('signedout', data);
        // Sign-out successful.
      })
      .catch(function (error) {
        console.log('errror exist in signout', error);
        // An error happened.
      });
  };

  return (
    <div>
      <Grid>
        <Grid.Row centered style={{ marginTop: '9px' }}>
          <Grid.Column width={2}>

          </Grid.Column>


          <Grid.Column width={4} >
            <Form onSubmit={searchForItem} inverted>
              <Form.Group>
                <Form.Input
                  size='large'
                  placeholder="Search"
                  name="search"
                  value={search}
                  onChange={(e) => setsearch(e.target.value)}
                />

                <Form.Button icon size="mini">
                  <Icon name="search" inverted circular link />
                </Form.Button>
              </Form.Group>
            </Form>
          </Grid.Column>

          <Grid.Column width={8} >
            <Menu secondary>
              <Menu.Item
                name="account"
                active={activeItem === 'account'}
                onClick={handleItemClick}
              />
              <Menu.Item
                name="settings"
                active={activeItem === 'settings'}
                onClick={handleItemClick}
              />

              {/* <Menu.item position="right"> */}

              <Menu.Item

                name="logout"
                active={activeItem === 'logout'}
                onClick={signOut}
              />
            </Menu>
          </Grid.Column>

          <Grid.Column width={2}>

          </Grid.Column>
        </Grid.Row>

        <Grid.Row columns={1}>
          <Grid.Column>
            {showresults ? <p>Showing results for: <a href='#'>{search}</a></p> : ''}
            <ItemContainer searchResult={bbData} />
          </Grid.Column>
        </Grid.Row>
      </Grid>

    </div>
  );
};
export default Home;
