import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import Calculator from './Calculator';
import Quote from './Quote';

const Routes = () => (
  <>
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/calculator" component={Calculator} />
        <Route exact path="/quote" component={Quote} />
      </Switch>
    </BrowserRouter>
  </>
);

export default Routes;
