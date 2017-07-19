import React from 'react'
import PropTypes from 'prop-types'
import BestSubject from './BestSubject'
import MaxScore from './MaxScore'
import subjectPicker from '../utils/subjectPicker'
import { primarySubjects, lingualSubjects } from '../constants/SubjectTypes'

const Calculator = ({ subjects }) => {
  let maxPrimaryScoreWrapper = subjectPicker(subjects, primarySubjects)
  let maxLingualScoreWrapper = subjectPicker(subjects, lingualSubjects)

  return (
    <div>
      <BestSubject
        maxScoreWrapper={maxPrimaryScoreWrapper}
        subjectType={primarySubjects} />
      <BestSubject
        maxScoreWrapper={maxLingualScoreWrapper}
        subjectType={lingualSubjects} />
      <MaxScore
        maxPrimaryScoreWrapper={maxPrimaryScoreWrapper}
        maxLingualScoreWrapper={maxLingualScoreWrapper} />
    </div>
  )
}

Calculator.propTypes = {
  subjects: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.string,
    elementaryScore: PropTypes.number.isRequired,
    advancedScore: PropTypes.number.isRequired,
    active: PropTypes.bool.isRequired
  }).isRequired).isRequired
}

export default Calculator
