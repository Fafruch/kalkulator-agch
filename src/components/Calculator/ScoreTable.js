import React from 'react'
import PropTypes from 'prop-types'

import getCourseScore from '../../utils/getCourseScore'

import coursesArray from '../../courses.json'
import thresholdsArray from '../../thresholds.json'

const ScoreTable = ({ subjects }) => {
  let coursesArrayScores = []

  coursesArray.forEach((course) => {
    coursesArrayScores.push(getCourseScore(course, subjects))
  })

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
                  {coursesArrayScores[i]}
                </strong>
              </td>
              <td>
                {coursesArrayScores[i] >= thresholdsArray[i]['2013']
                  ? <div className='score-under'>
                    {thresholdsArray[i]['2013']}
                  </div>
                  : <div className='score-above'>
                    {thresholdsArray[i]['2013']}
                  </div>
                }
              </td>
              <td>
                {coursesArrayScores[i] >= thresholdsArray[i]['2014']
                  ? <div className='score-under'>
                    {thresholdsArray[i]['2014']}
                  </div>
                  : <div className='score-above'>
                    {thresholdsArray[i]['2014']}
                  </div>
                }
              </td>
              <td>
                {coursesArrayScores[i] >= thresholdsArray[i]['2015']
                  ? <div className='score-under'>
                    {thresholdsArray[i]['2015']}
                  </div>
                  : <div className='score-above'>
                    {thresholdsArray[i]['2015']}
                  </div>
                }
              </td>
              <td>
                {coursesArrayScores[i] >= thresholdsArray[i]['2016']
                  ? <div className='score-under'>
                    {thresholdsArray[i]['2016']}
                  </div>
                  : <div className='score-above'>
                    {thresholdsArray[i]['2016']}
                  </div>
                }
              </td>
            </tr>
          )}
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
