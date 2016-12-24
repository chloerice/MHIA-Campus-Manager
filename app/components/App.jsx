import React, { PropTypes } from 'react'
import { Grid } from 'react-bootstrap'

import Navigation from './UtilityElements/Navigation'

//returns our main application page, whose children will render based on state

export const App = (props) => (
  <Grid fluid={true}>
    <Navigation campuses={props.campuses}/>
    {this.props.children} // whichever component is currently active
  </Grid>
)

App.propTypes = {
  campuses: PropTypes.array.isRequired
}
