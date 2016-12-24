'use strict'
import React from 'react'
import {render} from 'react-dom'
import { Provider } from 'react-redux'
import { Router, Route, IndexRedirect, browserHistory } from 'react-router'

import store from './store'

import App from './components/App'
import AllCampuses from './components/Campuses/Container_AllCampuses'
import SingleCampus from './components/Campuses/Container_SingleCampus'
import AllStudents from './components/Students/Container_AllStudents'
import SingleStudent from './components/Students/Container_SingleStudent'

const onEnterApp = () => store.dispatch(/* TODO */)
const onEnterCampuses = () => store.dispatch(/* TODO */)
const onEnterStudents = () => store.dispatch(/* TODO */)

render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App} onEnter={onEnterApp}>
        <IndexRedirect to="/campuses"/>
        <Route path="campuses" component={AllCampuses} onEnter={onEnterCampuses} />
          <Route path=":id" component={SingleCampus} />
        <Route path="students" component={AllStudents} onEnter={onEnterStudents} />
          <Route path=":id" component={SingleStudent} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('main')
)
