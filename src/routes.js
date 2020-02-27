import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './pages/Main';
import AddContact from './pages/AddContact';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/addcontact" component={AddContact} />
      </Switch>
    </BrowserRouter>
  );
}
