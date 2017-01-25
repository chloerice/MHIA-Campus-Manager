import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import { readStudentThenRenderIt,
         readStudentsThenRenderAll } from '../reducers/actions/receivingStudents'
import { readCampusThenRenderIt,
         readCampusesThenRenderAll } from '../reducers/actions/receivingCampuses'

import Navbar from './utilities/Navbar'

//Returns our main application page, whose children will render based on state

class App extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.grabCampuses()
    this.props.grabStudents()
  }

  render() {
    return (
      <div>
        <Navbar handleClick={this.props.handleClick} campuses={this.props.campuses}/>
        { this.props.children && React.cloneElement(this.props.children, this.props) }
        {/* ^this.props.children === whichever route/component is currently active */}
      </div>
    )
  }
}

App.propTypes = {
  campuses: PropTypes.array.isRequired,
  students: PropTypes.array.isRequired,
  currentStudent: PropTypes.object.isRequired,
  currentCampus: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
  handleClick: PropTypes.func.isRequired,
  dispatch: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired
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

const mapDispatchToProps = (dispatch) => {
  return {
    grabStudents: () => dispatch(readStudentsThenRenderAll()),
    grabCampuses: () => dispatch(readCampusesThenRenderAll()),
    handleClick: (event, id, type) => {
      if (type === 'campus') return dispatch(readCampusThenRenderIt(id))
      if (type === 'student') return dispatch(readStudentThenRenderIt(id))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
