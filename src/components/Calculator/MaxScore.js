import React from 'react'
import PropTypes from 'prop-types'
import FormulasInfo from './FormulasInfo'

const MaxScore = ({ maxPrimaryScore, maxLingualScore }) => {
  let maxScore
  maxScore = maxPrimaryScore + maxLingualScore
  return (
    <div>
      <h5>
        Twój wynik wynosi <b>{maxScore}</b> pkt.
      </h5>
      <br />
      <FormulasInfo />
    </div>
  )
}
MaxScore.propTypes = {
  maxPrimaryScore: PropTypes.number.isRequired,
  maxLingualScore: PropTypes.number.isRequired
}

export default MaxScore
