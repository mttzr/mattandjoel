// Main component of our application.
// We setup react-helmet, which let us nicely manage our <head />
// It's a nice library you should use!

import './App.less';

import { Redirect, Route, Switch } from 'react-router-dom';

import { Helmet } from 'react-helmet';
import Landing from './scenes/landing/Landing';
import React from 'react';
import importedComponent from 'react-imported-component';

const HelloWorld2 = importedComponent(() => import('./HelloWorld2'));

export default function App() {
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
