import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import { Table } from 'react-bootstrap'
// ** Rendered by AllStudents & SingleCampus(<--via Students)  ** //
// Returns a table of students w/ name(<--linked), email, and campus(<--linked)
const StudentTable = props => (
  <Table striped bordered responsive hover>
    <thead>
      <tr>
        <th>NAME</th>
        <th>EMAIL</th>
        {props.showCampusName && <th>CAMPUS</th>}
      </tr>
    </thead>
    <tbody>
      { props.students.map(student => (
            <tr key={student.id}>
              <td>
                <Link to={`/students/${student.id}`}>
                  {student.name}
                </Link>
              </td>
              <td>{student.email}</td>
              { props.showCampusName &&
                <td>
                  <Link to={`/campuses/${student.campus_id}`}>
                    {student.campusName}
                  </Link>
                </td> }
            </tr>
        )) }
    </tbody>
  </Table>
)

StudentTable.propTypes = {
  students: PropTypes.array.isRequired, // an array of student objects
  showCampusName: PropTypes.bool.isRequired
}

export default StudentTable
