import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import { Table } from 'react-bootstrap'
// ** Rendered by AllStudents & SingleCampus(<--via Students)  ** //
// Returns a table of students w/ name(<--linked), email, and campus(<--linked)
const StudentTable = (props) => (
  <Table striped={true} bordered={true} responsive={true} hover={true}>
    <thead>
      <tr>
        <th>NAME</th>
        <th>EMAIL</th>
        {props.showCampusName && <th>CAMPUS</th>}
      </tr>
    </thead>
    <tbody>
      { props.students.map(student => {
          const campus = props.campuses[student.campusId - 1]
          return (
            <tr key={student.id}>
              <td>
                <Link to={`/students/${student.id}`} onClick={() => props.handleClick(student, 'student')}>
                  {student.name}
                </Link>
              </td>
              <td>{student.email}</td>
              {
                props.showCampusName &&
                <td>
                  <Link to={`/campuses/${student.campusId}`} onClick={() => props.handleClick(campus, 'campus')}>
                    {student.campusName}
                  </Link>
                </td>
              }
            </tr>
          )
       })
     }
    </tbody>
  </Table>
)

StudentTable.propTypes = {
  campuses: PropTypes.array.isRequired,
  students: PropTypes.array.isRequired, // an array of student objects
  showCampusName: PropTypes.bool,
  handleClick: PropTypes.func.isRequired
}

export default StudentTable
