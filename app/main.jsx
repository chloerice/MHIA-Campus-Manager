'use strict'

import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { Router, Route, IndexRedirect, browserHistory } from 'react-router'

import store from './store'
// CONTAINERS
import App from './components/App'
import AllCampuses from './containers/AllCampuses'
import SingleCampus from './containers/SingleCampus'
import AllStudents from './containers/AllStudents'
import SingleStudent from './containers/SingleStudent'
// THUNKS
import { readCampusThenRenderIt, readCampusesThenRenderAll } from './reducers/actions/receivingCampuses'
import { readStudentThenRenderIt, readStudentsThenRenderAll } from './reducers/actions/receivingStudents'

const onCampusEnter = nextRouterState => store.dispatch(readCampusThenRenderIt(nextRouterState.params.id))
const onStudentEnter = nextRouterState => store.dispatch(readStudentThenRenderIt(nextRouterState.params.id))
const onAppEnter = () => {
  store.dispatch(readCampusesThenRenderAll())
  store.dispatch(readStudentsThenRenderAll())
}

render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App} onEnter={onAppEnter}>
        <Route path="/campuses" component={AllCampuses} />
        <Route path="/campuses/:id" component={SingleCampus} onEnter={onCampusEnter} />
        <Route path="/students" component={AllStudents} />
        <Route path="/students/:id" component={SingleStudent} onEnter={onStudentEnter} />
        <IndexRedirect to={'/campuses'} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
)
