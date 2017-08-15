import React from 'react'
import PropTypes from 'prop-types'
import { CSSTransitionGroup } from 'react-transition-group'

import BestSubject from './BestSubject'
import MaxScore from './MaxScore'
import ScoreTableContainer from '../../containers/ScoreTableContainer'
import { PRIMARY_SUBJECTS, LINGUAL_SUBJECTS } from '../../constants/SubjectTypes'

const Calculator = ({ subjects, maxScoreWrapper, isScoreTableOpened, onToggleClick }) => {
  const maxPrimaryScore = maxScoreWrapper.primary.max.score
  const maxLingualScore = maxScoreWrapper.lingual.max.score

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
      <button
        className='btn btn-secondary'
        onClick={onToggleClick}
      >
        {isScoreTableOpened ? 'Ukryj tabelę wyników' : 'Pokaż tabelę wyników'}
      </button>
      <CSSTransitionGroup transitionName='scoreTable' transitionEnterTimeout={300} transitionLeaveTimeout={300}>
        {isScoreTableOpened
          ? <ScoreTableContainer key='1' />
          : <div key='2' />
        }
      </CSSTransitionGroup>
    </div>
  )
}

Calculator.propTypes = {
  subjects: PropTypes.shape({
    primary: PropTypes.array.isRequired,
    lingual: PropTypes.array.isRequired
  }).isRequired,
  maxScoreWrapper: PropTypes.shape({
    primary: PropTypes.object.isRequired,
    lingual: PropTypes.object.isRequired
  }).isRequired,
  isScoreTableOpened: PropTypes.bool.isRequired,
  onToggleClick: PropTypes.func.isRequired
}

export default Calculator
