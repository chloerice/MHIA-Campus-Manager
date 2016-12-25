'use strict'
import React from 'react'
import {render} from 'react-dom'
import { Provider } from 'react-redux'
import { Router, Route, IndexRedirect, browserHistory } from 'react-router'

import store from './store'

//CONTAINER COMPONENTS
import App from './components/App'
import AllCampuses from './components/Campuses/Container_AllCampuses'
import SingleCampus from './components/Campuses/Container_SingleCampus'
import AllStudents from './components/Students/Container_AllStudents'
import SingleStudent from './components/Students/Container_SingleStudent'

// //ASYNC ACTION CREATORS
// import { readCampusesThenRerenderAll } from './reducers/actions/campuses'
// import { readStudentsThenRerenderAll } from './reducers/actions/students'

// const onEnterCampuses = () => store.dispatch(readCampusesThenRerenderAll())
// const onEnterStudents = () => store.dispatch(readStudentsThenRerenderAll())

render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRedirect to="/campuses"/>
        <Route path="campuses" component={AllCampuses} />
          <Route path=":id" component={SingleCampus} />
        <Route path="students" component={AllStudents} />
          <Route path=":id" component={SingleStudent} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('main')
)
