// Main component of our application.
// We setup react-helmet, which let us nicely manage our <head />
// It's a nice library you should use!

import './App.less';

import { CLIENT_ID, SPREADSHEET_ID } from './constants';
import React, { Component } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import { Helmet } from 'react-helmet';
import Landing from './scenes/landing/Landing';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sheetLoaded: false,
    }
  }

  render() {
    return (
      <div>
        <Helmet defaultTitle="Matt and Joel's Wedding">
          <meta charSet="utf-8" />
        </Helmet>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Redirect to="/" />
        </Switch>
      </div>
    );
  }
}

export default App;