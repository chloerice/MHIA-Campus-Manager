'use strict'
import React from 'react'
import {render} from 'react-dom'
import { Provider } from 'react-redux'
// import Router from 'react-router'

import store from './store'
import MainNav from './components/MainNav'

render(
  <Provider store={store}>
    <MainNav/>
  </Provider>,
  document.getElementById('main')
)
