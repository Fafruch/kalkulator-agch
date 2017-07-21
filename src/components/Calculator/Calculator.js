import React from 'react'
import PropTypes from 'prop-types'

import BestSubject from './BestSubject'
import MaxScore from './MaxScore'
import subjectPicker from '/utils/subjectPicker'
import { PRIMARY_SUBJECTS, LINGUAL_SUBJECTS } from '/constants/SubjectTypes'

const Calculator = ({ subjects }) => {
  const maxPrimaryScoreWrapper = subjectPicker(subjects, PRIMARY_SUBJECTS)
  const maxLingualScoreWrapper = subjectPicker(subjects, LINGUAL_SUBJECTS)
  let maxPrimaryScore
  let maxLingualScore

  if (!maxPrimaryScoreWrapper) maxPrimaryScore = 0
  else maxPrimaryScore = maxPrimaryScoreWrapper.computedScore

  if (!maxLingualScoreWrapper) maxLingualScore = 0
  else maxLingualScore = maxLingualScoreWrapper.computedScore

  if (!maxPrimaryScoreWrapper && maxLingualScoreWrapper) return null
  return (
    <div className='m-4'>
      <h3>Wynik</h3>
      <hr />
      <BestSubject
        maxScoreWrapper={maxPrimaryScoreWrapper}
        subjectType={PRIMARY_SUBJECTS}
      />
      <BestSubject
        maxScoreWrapper={maxLingualScoreWrapper}
        subjectType={LINGUAL_SUBJECTS}
      />
      <br />
      <MaxScore
        maxPrimaryScore={maxPrimaryScore}
        maxLingualScore={maxLingualScore}
      />
    </div>
  )
}

Calculator.propTypes = {
  subjects: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.string,
    elementaryScore: PropTypes.number.isRequired,
    advancedScore: PropTypes.number.isRequired,
    active: PropTypes.bool.isRequired
  }).isRequired).isRequired
}

export default Calculator
