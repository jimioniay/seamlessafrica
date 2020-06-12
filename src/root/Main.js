import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from '../pages/home';
import FAQ from '../pages/faq';
import About from '../pages/about';
import Contact from '../pages/contact';
import NotFound from '../pages/home';

const Main = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/faq" component={FAQ} />
    <Route exact path="/about" component={About} />
    <Route exact path="/contact" component={Contact} />
    <Route component={NotFound} />
  </Switch>
);
export default Main;
