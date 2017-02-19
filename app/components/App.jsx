import React, { PropTypes } from 'react'
import { connect } from 'react-redux'

import Navbar from './utilities/Navbar'

//Returns our main application page, whose children will render based on state

const App = props => (
  <div>
    <Navbar campuses={props.campuses} />
    { props.children && React.cloneElement(props.children, props) }
    {/* ^this.props.children === whichever route/component is currently active */}
  </div>
)

App.propTypes = {
  campuses: PropTypes.array.isRequired,
  children: PropTypes.node.isRequired,
}

const mapStateToProps = (state, ownProps) => {
  return {
    campuses: state.campuses,
    students: state.students,
    currentCampus: state.currentCampus,
    currentStudent: state.currentStudent,
    loading: state.loading,
    children: ownProps.children
  }
}

export default connect(mapStateToProps)(App)
