import React, { useState } from 'react';
import { Button, Container, Divider, Grid, Header, Image, Input, Menu, Search } from 'semantic-ui-react';

import { auth, firestore } from './../firebase'
import logo from './../assets/logo.svg'


const AppMenu = () => {

  const [activeItem, setactiveItem] = useState('home')

  const handleItemClick = name => {
    setactiveItem(name)
  }

  function signout() {
    console.log("Hi there, signingout !");
    auth.signOut().then(function (data) {
      console.log('signedout', data)
      // Sign-out successful.
    }).catch(function (error) {
      console.log('errror exist in signout', error)
      // An error happened.
    });
  }


  return (
    <div>
      <Menu secondary>

        <Menu.Menu position='right'>
          <Menu.Item
            name='home'
            active={activeItem === 'home'}
            onClick={handleItemClick}
          >
            <Header as='h2' color='teal' textAlign='center'>
              <Image src={logo} />
            </Header>


          </Menu.Item>

          <Menu.Item>
            <Input icon='search' placeholder='Search...' />
          </Menu.Item>


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


          <Menu.Item
            name='logout'
            active={activeItem === 'logout'}
            onClick={signout}
          />
        </Menu.Menu>
      </Menu>
    </div>
  );
};

export default AppMenu;
