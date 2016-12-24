import React, { PropTypes } from 'react'
import { Button, Panel, Row } from 'react-bootstrap'

//actions

//components
import CreateCampus from './Form_CreateCampus'
import Campus from './Campus'
import CreateButton from '../UtilityElements/CreateButton'

const Campuses = (props) => (
  <div >
    <Row>
      { props.campuses.map(campus => {
          return (
            <Campus
              key={campus.id}
              id={campus.id}
              name={campus.name}
              image={campus.image}
            />
          )
        })
      }
    </Row>
    <CreateButton onClick={props.toggleForm}/>
    <Panel collapsible expanded={props.open}>
      <CreateCampus onSubmit={props.handleSubmit}/>
      <Button
        type="submit"
        block={true}
        disabled={props.isLoading}
        bsStyle="primary"
        onClick={!props.isLoading ? props.handleSubmit : null}>
        {props.isLoading ? `Saving Campus ${this.state.name}` : `Save Campus ${this.state.name}`}
      </Button>
    </Panel>
  </div>
)

Campuses.propTypes = {
  campuses: PropTypes.array.isRequired,
  open: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  toggleForm: PropTypes.func.isRequired
}

export default Campuses
