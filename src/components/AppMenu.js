import React, { useState } from 'react';
import { Header, Image, Input, Menu, Icon } from 'semantic-ui-react';

import { auth } from './../firebase';
import logo from './../assets/logo.svg';

const AppMenu = () => {
  const [activeItem, setactiveItem] = useState('home');

  const handleItemClick = (e, { name }) => {
    console.log('namem', name)
    setactiveItem(name);
  };

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
  }


  return (
    <Menu secondary>
      <Menu.Item
        name='home'
        active={activeItem === 'home'}
        onClick={handleItemClick}
      />
      <Menu.Item
        name='messages'
        active={activeItem === 'messages'}
        onClick={handleItemClick}
      />
      <Menu.Item
        name='friends'
        active={activeItem === 'friends'}
        onClick={handleItemClick}
      />
      <Menu.Menu position='right'>
        <Menu.Item>
          <Input icon='search' placeholder='Search...' />
        </Menu.Item>
        <Menu.Item
          name='logout'
          active={activeItem === 'logout'}
          onClick={signOut}
        />
      </Menu.Menu>
    </Menu>
  )
}



export default AppMenu;
