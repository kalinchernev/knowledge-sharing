import React, { Fragment } from 'react';
import { HashRouter, Route } from 'react-router-dom';

// Amplify specifics
import Amplify from 'aws-amplify';
import { withAuthenticator } from 'aws-amplify-react';
import awsconfig from './aws-exports';

// Partials and mostly static components which will change very little in time.
import Header from './components/Header';
import Navigation from './components/Navigation';
import Footer from './components/Footer';

// Components which will grow into pages in time and potentially have sub-routes.
import List from './components/List';
import Share from './components/Share';
import Profile from './components/Profile';

Amplify.configure(awsconfig);

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

// @see https://www.cannyengineer.com/blog/google-authentication-aws-amplify-deployment
// @see https://github.com/aws-amplify/amplify-js/blob/master/packages/aws-amplify-react/src/Auth/index.jsx#L39
export default withAuthenticator(
  App,
  {
    includeGreetings: true,
    signUpConfig: {
      signUpFields: [
        {
          label: 'Name',
          key: 'name',
          required: true,
          type: 'string',
          displayOrder: 0,
        },
      ],
    },
  },
  []
);
