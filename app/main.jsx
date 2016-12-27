'use strict'
import React from 'react'
import {render} from 'react-dom'
import { Provider } from 'react-redux'
import { Router, Route, IndexRedirect, browserHistory } from 'react-router'
import store from './store'

import { readCampusesThenRenderAll } from './reducers/actions/campuses'
import { readStudentsThenRenderAll } from './reducers/actions/students'

import App from './components/App'
import AllCampuses from './containers/AllCampuses'
import SingleCampus from './containers/SingleCampus'
import AllStudents from './containers/AllStudents'
import SingleStudent from './containers/SingleStudent'

const onEnterStudents = () => store.dispatch( readStudentsThenRenderAll() )
const onEnterCampuses = () => store.dispatch( readCampusesThenRenderAll() )

render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <Route path="campuses" component={AllCampuses} onEnter={onEnterCampuses}/>
          <Route path=":id" component={SingleCampus} />
        <Route path="students" component={AllStudents} onEnter={onEnterStudents} />
          <Route path=":id" component={SingleStudent} />
        <IndexRedirect to="/campuses"/>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('main')
)
