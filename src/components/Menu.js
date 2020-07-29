import React, { useState } from 'react';
import { Button, Container, Divider, Grid, Header, Image } from 'semantic-ui-react';

const Menu = () => {

  const [activeItem, setactiveItem] = useState('home')

  const handleItemClick = name => {
    setactiveItem(name)
  }

  return (
    <div>
      <Container text>
        <Header as="h3">Text Container</Header>

        <p>
          Text containers <b>do not need to use grids</b> and help simplify
          basic page layouts.
        </p>

        <Grid>
          <Grid.Row columns={1}>
            <Grid.Column>
              <Menu size="large">
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

                <Menu.Item position="right">
                  <Button primary>Sign Up</Button>
                </Menu.Item>
              </Menu>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </div>
  );
};

export default Menu;
