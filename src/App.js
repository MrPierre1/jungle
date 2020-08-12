import React from 'react';

import './App.css';
import 'semantic-ui-css/semantic.min.css';

import SignUp from './components/SignUp';

import Home from './components/Home';
import { AuthProvider } from './Providers/AuthProvider';
import { DataProvider } from './Providers/DataProvider';


import { BrowserRouter as Router, Route } from 'react-router-dom';

import SignIn from './components/SignIn';

import PrivateRoute from './components/PrivateRoute';

const App = () => {
  return (
    <AuthProvider>
      <DataProvider>


        <Router>
          <div>
            <PrivateRoute exact path="/" component={Home} />
            <Route exact path="/signin" component={SignIn} />
            <Route exact path="/signup" component={SignUp} />
          </div>
        </Router>
      </DataProvider>
    </AuthProvider>
  );
};

export default App;
