import React from 'react'
import PropTypes from 'prop-types'

const MaxScore = ({ maxPrimaryScore, maxLingualScore }) => {
  const maxScore = maxPrimaryScore + maxLingualScore
  return (
    <div>
      <h3>
        <small> Twój maksymalny wynik wynosi&nbsp;</small> <b> {maxScore} </b> <small>&nbsp;pkt.</small>
      </h3>
      <br />
    </div>
  )
}
MaxScore.propTypes = {
  maxPrimaryScore: PropTypes.number.isRequired,
  maxLingualScore: PropTypes.number.isRequired
}

export default MaxScore
