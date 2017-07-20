import React from 'react'
import PropTypes from 'prop-types'

const MaxScore = ({ maxPrimaryScore, maxLingualScore }) => {
  let maxScore

  if (maxPrimaryScore === 0 && maxLingualScore === 0) {
    return (
      <div>
        Dodaj przedmiot żeby zobaczyć wynik!
      </div>
    )
  } else {
    maxScore = maxPrimaryScore + maxLingualScore
    return (
      <h5>
        Twój wynik wynosi <b>{maxScore}</b> pkt.
      </h5>
    )
  }
}
MaxScore.propTypes = {
  maxPrimaryScore: PropTypes.number.isRequired,
  maxLingualScore: PropTypes.number.isRequired
}

export default MaxScore
