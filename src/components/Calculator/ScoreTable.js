import React from 'react'
import PropTypes from 'prop-types'

import getCourseScore from '../../utils/getCourseScore'
import facultiesArray from '../../faculties.json'

const ScoreTable = ({ subjects }) => (
  <div>
    <br />
    <br />
    <table className='table table-bordered score-table'>
      <tbody>
        <tr>
          <th scope='row'>
            Wydział
          </th>
          <th scope='row'>
            Kierunek
          </th>
          {/* <th scope='row'>
            Przedmioty
          </th> */}
          <th scope='row'>
            Wynik
          </th>
        </tr>
        {facultiesArray.map((faculty) =>
          faculty.courses.map((course, courseIndex) =>
            <tr key={courseIndex}>
              {!courseIndex &&
              <td rowSpan={faculty.courses.length}>
                <strong>
                  {faculty.name}
                </strong>
              </td>}
              <td>
                {course.name}
              </td>
              {/* <td>
              {course.subjects.join(', ')}
            </td> */}
              <td>
                <strong>
                  {getCourseScore(course, faculty, subjects)}
                </strong>
              </td>
            </tr>
          )
        )
        }
      </tbody>
    </table>
  </div>
)
ScoreTable.propTypes = {
  subjects: PropTypes.shape({
    primary: PropTypes.array.isRequired,
    lingual: PropTypes.array.isRequired
  }).isRequired
}

export default ScoreTable
