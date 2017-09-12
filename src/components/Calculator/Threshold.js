import React from 'react'
import PropTypes from 'prop-types'

const Threshold = ({ courseScore, threshold }) => (
  <div className={courseScore >= threshold
    ? 'score-above'
    : 'score-under'}
  >
    {threshold}
  </div>
)

Threshold.propTypes = {
  courseScore: PropTypes.number.isRequired,
  threshold: PropTypes.number
}

export default Threshold
