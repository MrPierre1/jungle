import React, { useState } from 'react';
import { Form, Icon } from 'semantic-ui-react';

const AppMenuSearch = ({ mySearch, resultText }) => {
  const [search, setsearch] = useState('');
  const searchForItem = (e) => {
    e.preventDefault();
    resultText(true);
    mySearch(search);

    console.log('my value, ', search);
  };

  return (
    <Form onSubmit={searchForItem} inverted>
      <Form.Group>
        <Form.Input
          size="large"
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
  );
};

export default AppMenuSearch;
