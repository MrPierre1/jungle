import React, { useState, useCallback } from 'react';
import { Menu } from 'semantic-ui-react';
import { auth } from './../firebase';

const AppMenu = ({ mySearch }) => {
  const [activeItem, setactiveItem] = useState('home');

  const handleItemClick = (e, { name }) => {
    console.log('namem', name);
    setactiveItem(name);
  };

  const signOut = () => {
    console.log('Hi there, signingout !');
    auth
      .signOut()
      .then(function (data) {
        console.log('signedout', data);
      })
      .catch(function (error) {
        console.log('errror exist in signout', error);
      });
  };

  return (
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

      <Menu.Item
        name="logout"
        active={activeItem === 'logout'}
        onClick={signOut}
      />
    </Menu>
  );
};

export default AppMenu;
