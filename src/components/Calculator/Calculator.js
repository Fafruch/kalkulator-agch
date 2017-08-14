import React from 'react'
import PropTypes from 'prop-types'

import BestSubject from './BestSubject'
import MaxScore from './MaxScore'
import ScoreTableContainer from '../../containers/ScoreTableContainer'
import { PRIMARY_SUBJECTS, LINGUAL_SUBJECTS } from '../../constants/SubjectTypes'

const Calculator = ({ subjects, maxScoreWrapper, isScoreTableOpened, onToggleClick }) => {
  const maxPrimaryScore = maxScoreWrapper.primary.maxScore.computedScore
  const maxLingualScore = maxScoreWrapper.lingual.maxScore.computedScore

  if (!subjects.primary.length && !subjects.lingual.length) return null
  return (
    <div className='m-4'>
      <h3>Wynik</h3>
      <hr />
      {!!maxPrimaryScore &&
      <BestSubject
        maxScoreWrapper={maxScoreWrapper}
        subjectType={PRIMARY_SUBJECTS}
      />}
      {!!maxLingualScore &&
      <BestSubject
        maxScoreWrapper={maxScoreWrapper}
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
  subjects: PropTypes.object.isRequired,
  maxScoreWrapper: PropTypes.object.isRequired,
  isScoreTableOpened: PropTypes.bool.isRequired,
  onToggleClick: PropTypes.func.isRequired
}

export default Calculator
