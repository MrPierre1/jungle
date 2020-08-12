import React, { useContext } from 'react';
import { Grid } from 'semantic-ui-react';
import AppMenu from './AppMenu';

import ItemContainer from './ItemContainer';
import { DataContext } from '../Providers/DataProvider';


const Home = (props) => {
  const { productData } = useContext(DataContext);

  return (
    <div>
      <Grid>
        <Grid.Row columns={3}>
          <Grid.Column />
          <Grid.Column>
            <AppMenu />
          </Grid.Column>
          <Grid.Column />
        </Grid.Row>

        <Grid.Row columns={1}>
          <Grid.Column>
            {/* {console.log(typeof productData, 'productData in home', productData)} */}
            <ItemContainer />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
};
export default Home;
