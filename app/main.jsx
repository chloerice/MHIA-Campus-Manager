'use strict'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { Router, Route, IndexRedirect, browserHistory } from 'react-router'

import store from './store'

import App from './components/App'
import AllCampuses from './containers/AllCampuses'
import SingleCampus from './containers/SingleCampus'
import AllStudents from './containers/AllStudents'
import SingleStudent from './containers/SingleStudent'

render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <Route path="/campuses" component={AllCampuses} />
        <Route path="/campuses/:id" component={SingleCampus} />
        <Route path="/students" component={AllStudents} />
        <Route path="/students/:id" component={SingleStudent} />
        <IndexRedirect to={'/campuses'}/>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
)
