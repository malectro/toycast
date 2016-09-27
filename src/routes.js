import React from 'react';
import {Route, IndexRoute} from 'react-router';

import App from 'src/components/app.jsx';
import Feed from 'src/components/feed.jsx';
import About from 'src/components/about.jsx';


export default (
  <Route path="/" component={App}>
    <IndexRoute component={Feed} />
    <Route path="about" component={About} />
  </Route>
);

