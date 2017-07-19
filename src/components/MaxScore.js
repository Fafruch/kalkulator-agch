import React from 'react'
import PropTypes from 'prop-types'

const MaxScore = ({ maxPrimaryScoreWrapper, maxLingualScoreWrapper }) => {
  let maxScore
  let maxPrimaryScore
  let maxLingualScore

  if (maxPrimaryScoreWrapper === null) {
    maxPrimaryScore = 0
  } else {
    maxPrimaryScore = maxPrimaryScoreWrapper.computedScore
  }

  if (maxLingualScoreWrapper === null) {
    maxLingualScore = 0
  } else {
    maxLingualScore = maxLingualScoreWrapper.computedScore
  }

  maxScore = maxPrimaryScore + maxLingualScore

  return (
    <h5>
      Twój wynik wynosi <b>{maxScore}</b> punktów.
    </h5>
  )
}
MaxScore.propTypes = {
  maxPrimaryScoreWrapper: PropTypes.any.isRequired,
  maxLingualScoreWrapper: PropTypes.any.isRequired
}

export default MaxScore
