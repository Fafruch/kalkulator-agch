import React from 'react'
import PropTypes from 'prop-types'

const Threshold = ({ faculty, i, year }) => (
  <div className={faculty.coursesScore[i] >= faculty.thresholds[i][year]
    ? 'score-under'
    : 'score-above'}
  >
    {faculty.thresholds[i][year]}
  </div>
)

Threshold.propTypes = {
  faculty: PropTypes.shape({
    coursesScore: PropTypes.array.isRequired,
    thresholds: PropTypes.array.isRequired
  }).isRequired,
  i: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired
}

export default Threshold
