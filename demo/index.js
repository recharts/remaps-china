import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory} from 'react-router';
import App from './container/App';

const routes = (
  <Route path='/' component={App}/>
);
/*
Router.run(routes, function (Handler, state) {
  React.render(<Handler query={state.query} />, document.getElementById('root'));
});
*/

ReactDOM.render(<Router history={hashHistory}>{routes}</Router>, document.getElementById('root'));
