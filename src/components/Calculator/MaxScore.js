import React from 'react'
import PropTypes from 'prop-types'

const MaxScore = ({ maxPrimaryScore, maxLingualScore }) => {
  let maxScore
  maxScore = maxPrimaryScore + maxLingualScore
  return (
    <h5>
      Twój wynik wynosi <b>{maxScore}</b> pkt.
    </h5>
  )
}
MaxScore.propTypes = {
  maxPrimaryScore: PropTypes.number.isRequired,
  maxLingualScore: PropTypes.number.isRequired
}

export default MaxScore
