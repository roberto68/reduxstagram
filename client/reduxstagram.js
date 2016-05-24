// let's go!
import React from 'react';
import {render} from 'react-dom';
import {Router, Route, IndexRoute, browserHistory } from 'react-router';
import css from './styles/style.styl'
import Main from './components/main';
import Photo from './components/photo';
import PhotoGrid from './components/photoGrid';

const router = (
  <Router history={browserHistory}>
    <Route path ="/" component={Main}>
      <Route path="PhotoGrid" component={PhotoGrid}></Route>
    <Route path="/photo/:photoId" component={Photo}></Route>
    </Route>
  </Router>
)

render(router, document.getElementById('root'));
