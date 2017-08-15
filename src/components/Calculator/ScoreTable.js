import React from 'react'
import PropTypes from 'prop-types'

import getCourseScore from '../../utils/getCourseScore'

import coursesArray from '../../courses.json'

const ScoreTable = ({ subjects, onToggleClick }) => (
  <div>
    <button
      className='btn btn-secondary'
      onClick={onToggleClick}
    >
      Ukryj tabelę wyników
    </button>
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
        {coursesArray.map((course, i, coursesArray2) =>
          <tr key={i}>
            <td>
              <strong>
                {(i !== 0 && coursesArray2[i - 1].faculty === course.faculty) ? null : course.faculty }
              </strong>
            </td>
            <td>
              {course.name}
            </td>
            {/* <td>
              {course.subjects.join(', ')}
            </td> */}
            <td>
              <strong>
                {getCourseScore(course, subjects)}
              </strong>
            </td>
          </tr>
        )}
      </tbody>
    </table>
  </div>
)
ScoreTable.propTypes = {
  subjects: PropTypes.shape({
    primary: PropTypes.array.isRequired,
    lingual: PropTypes.array.isRequired
  }).isRequired,
  onToggleClick: PropTypes.func.isRequired
}

export default ScoreTable
