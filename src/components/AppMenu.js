import React, { useState, useCallback } from 'react';
import {
  Button,
  Header,
  Image,
  Input,
  Form,
  Menu,
  Search,
  Icon,
} from 'semantic-ui-react';

import { auth } from './../firebase';
import logo from './../assets/logo.svg';
import { apps, app } from 'firebase';
import bby from 'bestbuy';
// var bby = require('bestbuy')('G0JV5AgPvEEirid2FhdVC7bI');
var bb = bby('G0JV5AgPvEEirid2FhdVC7bI')

const AppMenu = ({ mySearch }) => {
  const [activeItem, setactiveItem] = useState('home');
  const [appSearch, setappSearch] = useState('');
  const [loading, setloading] = useState(false);
  const [searchValue, setsearchValue] = useState('')

  const handleItemClick = (e, { name }) => {
    console.log('namem', name);
    setactiveItem(name);
  };

  // const searchForItem = (searchItem) => {
  //   bb.products(`categoryPath.name=${searchItem}`,
  //     { show: 'sku,name,salePrice,thumbnailImage,image,shortDescription,customerReviewAverage,customerReviewCount,customerTopRated,department', sort: 'salePrice.asc' })
  //     .then(function (data) {
  //       console.log('result Data', data);
  //       // setbbData(data)
  //     })
  // }


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

  const handleSearchChange = useCallback((e, data) => {
    console.log('data from search change', data);
    e.preventDefault();
    setloading(true);
    setappSearch(data.value);
    console.log('searhcitem from field', data.value);

    bb.products(`categoryPath.name=${data.value}`,
      { show: 'sku,name,salePrice,thumbnailImage,image,shortDescription,customerReviewAverage,customerReviewCount,customerTopRated,department', sort: 'salePrice.asc' })
      .then(function (results) {
        console.log('result results', results);
        console.log('results from appmenu', results)
        setTimeout(() => {
          mySearch(results);
        }, 1000);


        // setbbData(data)
      })
  })


  const searchForItem = (e) => {
    e.preventDefault()
    console.log('my value, ', appSearch);
    mySearch(searchValue)
  };



  return (
    <Menu secondary>
      <Menu.Item
        name="home"
        active={activeItem === 'home'}
        onClick={handleItemClick}
      />
      <Menu.Item
        name="messages"
        active={activeItem === 'messages'}
        onClick={handleItemClick}
      />
      <Menu.Item
        name="friends"
        active={activeItem === 'friends'}
        onClick={handleItemClick}
      />
      <Menu.Menu position="right">

        <Menu.Item
          name="logout"
          active={activeItem === 'logout'}
          onClick={signOut}
        />
      </Menu.Menu>
    </Menu>
  );
};

export default AppMenu;
