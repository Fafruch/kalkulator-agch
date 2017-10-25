import React from 'react'
import PropTypes from 'prop-types'
import { CSSTransitionGroup } from 'react-transition-group'

import BestSubject from './BestSubject'
import MaxScore from './MaxScore'
import ScoreTableContainer from '../../containers/ScoreTableContainer'
import { PRIMARY_SUBJECTS, LINGUAL_SUBJECTS } from '../../constants/subjectTypes'

const Calculator = ({ maxScoreWrapper, isScoreTableOpened, isAnySubjectPresent, onToggleClick }) => {
  const maxPrimaryScore = maxScoreWrapper.primary.maxScore.value
  const maxLingualScore = maxScoreWrapper.lingual.maxScore.value

  if (isAnySubjectPresent) {
    return (
      <div className='m-4'>
        <h3>Wynik</h3>
        <hr />
        {!!maxPrimaryScore &&
        <BestSubject
          bestSubject={maxScoreWrapper.primary}
          subjectsType={PRIMARY_SUBJECTS}
        />}
        {!!maxLingualScore &&
        <BestSubject
          bestSubject={maxScoreWrapper.lingual}
          subjectsType={LINGUAL_SUBJECTS}
        />}
        <br />
        <MaxScore
          maxPrimaryScore={maxPrimaryScore}
          maxLingualScore={maxLingualScore}
        />
        <br />
        <button
          className='btn btn-secondary'
          onClick={onToggleClick}
        >
          {isScoreTableOpened ? 'Ukryj tabelę wyników' : 'Pokaż tabelę wyników'}
        </button>
        <CSSTransitionGroup transitionName='scoreTable' transitionEnterTimeout={300} transitionLeaveTimeout={300}>
          {isScoreTableOpened && <ScoreTableContainer />}
        </CSSTransitionGroup>
      </div>
    )
  }
  return null
}

Calculator.propTypes = {
  maxScoreWrapper: PropTypes.shape({
    primary: PropTypes.object.isRequired,
    lingual: PropTypes.object.isRequired
  }).isRequired,
  isScoreTableOpened: PropTypes.bool.isRequired,
  isAnySubjectPresent: PropTypes.bool.isRequired,
  onToggleClick: PropTypes.func.isRequired
}

export default Calculator
