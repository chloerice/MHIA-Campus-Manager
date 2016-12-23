import Student from './Student'

// Returns a div with campus logo and name aligned vertically in a square or
// horizontally in a jumbotron according to its props

const Campus = (props) => {
  return (
    <div key={props.id}> //TODO replace these divs with <Col X/> components
      <div><img src={props.image} alt={`${props.name} campus logo`}></img></div>
      <div><h1>{props.name}</h1></div>
    </div>
  )
}

export default Campus
