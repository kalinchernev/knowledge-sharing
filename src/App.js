import React, { Fragment } from 'react';
import { HashRouter, Route } from 'react-router-dom';

// Partials and mostly static components which will change very little in time.
import Header from './components/Header';
import Navigation from './components/Navigation';
import Footer from './components/Footer';

// Components which will grow into pages in time and potentially have sub-routes.
import List from './components/List';
import Share from './components/Share';
import Profile from './components/Profile';

const App = () => (
  <HashRouter>
    <Fragment>
      <Header />
      <Navigation />
      <div className="container">
        <Route exact path="/" component={List} />
        <Route path="/share" component={Share} />
        <Route path="/profile" component={Profile} />
      </div>
      <Footer />
    </Fragment>
  </HashRouter>
);

export default App;
