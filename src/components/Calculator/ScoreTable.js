import React from 'react'
import PropTypes from 'prop-types'

import Threshold from './Threshold'
import getCourseScore from '../../utils/getCourseScore'
import facultiesArray from '../../faculties.json'
import thresholdsArray from '../../thresholds.json'

const thresholdsYearsArray = [2013, 2014, 2015, 2016]

const ScoreTable = ({ subjects }) => (
  <table className='table table-bordered score-table'>
    <tbody>

      <tr>
        <th colSpan='3' />
        <th colSpan={thresholdsYearsArray.length} className='thresholds-title'>
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
        <th scope='row'>
          Wynik
        </th>
        {thresholdsYearsArray.map((year, yearIndex) => <th key={yearIndex}>{year}</th>)}
      </tr>

      {facultiesArray.map((faculty, facultyIndex) =>
        faculty.courses.map((course, courseIndex) => {
          const courseScore = getCourseScore(course, faculty, subjects)
          const threshold = thresholdsArray[facultyIndex].courses[courseIndex]

          return (
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
              <td className='score'>
                <strong>
                  {courseScore}
                </strong>
              </td>
              {thresholdsYearsArray.map((year, yearIndex) =>
                <td key={yearIndex} className='threshold'>
                  <Threshold courseScore={courseScore} threshold={threshold[year]} />
                </td>
              )}
            </tr>
          )
        })
      )}
    </tbody>
  </table>
)
ScoreTable.propTypes = {
  subjects: PropTypes.shape({
    primary: PropTypes.array.isRequired,
    lingual: PropTypes.array.isRequired
  }).isRequired
}

export default ScoreTable
