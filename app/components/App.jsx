import React, { PropTypes } from 'react'
import { Grid } from 'react-bootstrap'

import Navbar from './UtilityElements/Navbar'

//returns our main application page, whose children will render based on state
//     {this.props.children} // whichever component is currently active
const App = (props) => (
  <Grid fluid={true}>
    <Navbar campuses={props.campuses}/>
  </Grid>
)

App.propTypes = {
  campuses: PropTypes.object.isRequired
}

export default App
