import React from 'react'
import PropTypes from 'prop-types'

import Threshold from './Threshold'
import getCourseScore from '../../utils/getCourseScore'
import facultiesArray from '../../faculties.json'
import thresholdsArray from '../../thresholds.json'

const setupFacultiesArray = (subjects) => {
  let i = 0

  facultiesArray.forEach((faculty) => {
    faculty.coursesScore = []
    faculty.thresholds = []
    faculty.courses.forEach((course) => {
      faculty.coursesScore.push(getCourseScore(course, faculty, subjects))
      faculty.thresholds.push(thresholdsArray[i++])
    })
  })
}

const ScoreTable = ({ subjects }) => {
  setupFacultiesArray(subjects)

  return (
    <div>
      <br />
      <br />
      <table className='table table-bordered score-table'>
        <tbody>

          <tr>
            <th />
            <th />
            <th />
            <th colSpan='4' className='thresholds-title'>
              Progi z zeszłych lat
            </th>
          </tr>

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
            <th>
              2013
            </th>
            <th>
              2014
            </th>
            <th>
              2015
            </th>
            <th>
              2016
            </th>
          </tr>

          {facultiesArray.map((faculty) =>
            faculty.courses.map((course, i) =>
              <tr key={i}>
                {i
                  ? <td style={{ display: 'none' }} />
                  : <td rowSpan={faculty.courses.length}>
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
                    {faculty.coursesScore[i]}
                  </strong>
                </td>
                <td>
                  <Threshold faculty={faculty} i={i} year={2013} />
                </td>
                <td>
                  <Threshold faculty={faculty} i={i} year={2014} />
                </td>
                <td>
                  <Threshold faculty={faculty} i={i} year={2015} />
                </td>
                <td>
                  <Threshold faculty={faculty} i={i} year={2016} />
                </td>
              </tr>
            )
          )
          }
        </tbody>
      </table>
    </div>
  )
}
ScoreTable.propTypes = {
  subjects: PropTypes.shape({
    primary: PropTypes.array.isRequired,
    lingual: PropTypes.array.isRequired
  }).isRequired
}

export default ScoreTable
