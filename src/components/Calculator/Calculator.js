import React from 'react'
import PropTypes from 'prop-types'

import BestSubject from './BestSubject'
import MaxScore from './MaxScore'
import ScoreTableContainer from '../../containers/ScoreTableContainer'
import { PRIMARY_SUBJECTS, LINGUAL_SUBJECTS } from '../../constants/SubjectTypes'

const Calculator = ({ maxPrimaryScoreWrapper, maxLingualScoreWrapper, isScoreTableOpened, onToggleClick }) => {
  const maxPrimaryScore = maxPrimaryScoreWrapper.computedScore
  const maxLingualScore = maxLingualScoreWrapper.computedScore

  if (maxPrimaryScoreWrapper.isEmpty && maxLingualScoreWrapper.isEmpty) return null
  return (
    <div className='m-4'>
      <h3>Wynik</h3>
      <hr />
      {!!maxPrimaryScore &&
      <BestSubject
        maxScoreWrapper={maxPrimaryScoreWrapper}
        subjectType={PRIMARY_SUBJECTS}
      />}
      {!!maxLingualScore &&
      <BestSubject
        maxScoreWrapper={maxLingualScoreWrapper}
        subjectType={LINGUAL_SUBJECTS}
      />}
      <br />
      <MaxScore
        maxPrimaryScore={maxPrimaryScore}
        maxLingualScore={maxLingualScore}
      />
      <br />
      {isScoreTableOpened
        ? <ScoreTableContainer />
        : <button
          className='btn btn-secondary'
          onClick={onToggleClick}
        >
          Pokaż tabelę wyników
        </button>
      }
    </div>
  )
}

Calculator.propTypes = {
  maxPrimaryScoreWrapper: PropTypes.shape({
    subject: PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      elementaryScore: PropTypes.number,
      advancedScore: PropTypes.number,
      active: PropTypes.bool
    }).isRequired,
    computedScore: PropTypes.number.isRequired,
    formula: PropTypes.string.isRequired,
    isEmpty: PropTypes.bool.isRequired
  }).isRequired,
  maxLingualScoreWrapper: PropTypes.shape({
    subject: PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      elementaryScore: PropTypes.number,
      advancedScore: PropTypes.number,
      active: PropTypes.bool
    }).isRequired,
    computedScore: PropTypes.number.isRequired,
    formula: PropTypes.string.isRequired,
    isEmpty: PropTypes.bool.isRequired
  }).isRequired,
  isScoreTableOpened: PropTypes.bool.isRequired,
  onToggleClick: PropTypes.func.isRequired
}

export default Calculator
