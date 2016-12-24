import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import { Table } from 'react-bootstrap'
// ** Rendered by AllStudents & SingleCampus via Students & CampusRoster ** //
// Returns a table of students w/ name(<--linked), email, and campus(<--linked)
const StudentsRoster = (props) => (
  <Table striped={true} bordered={true} responsive={true} hover={true}>
    <thead>
      <tr>
        <th>NAME</th>
        <th>EMAIL</th>
        {props.showCampusName && <th>CAMPUS</th>}
      </tr>
    </thead>
    <tbody>
      {props.students.map(student => {
        return (
          <tr key={student.id}>
            <td><Link to={`/students/${student.id}`}>{student.name}</Link></td>
            <td>{student.email}</td>
            {props.showCampusName && <td><Link to={`/campuses/${student.campusId}`}>{student.campusName}</Link></td>}
          </tr>
        )
      })}
    </tbody>
  </Table>
)

StudentsRoster.propTypes = {
  students: PropTypes.array.isRequired, // an array of student objects
  showCampusName: PropTypes.bool.isRequired // not sure if the ternaries will work...
}

export default StudentsRoster
