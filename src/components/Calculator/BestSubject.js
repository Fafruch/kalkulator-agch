import React from 'react'
import PropTypes from 'prop-types'

import { PRIMARY_SUBJECTS } from '../../constants/SubjectTypes'

const BestSubject = ({ maxScoreWrapper, subjectType }) => {
  if (!maxScoreWrapper) return null
  return (
    <div>
      <p>
        Maksymalny wynik dla {subjectType === PRIMARY_SUBJECTS ? 'przedmiotu głównego' : 'języka'} to
        &nbsp;<b>{maxScoreWrapper.computedScore}</b> pkt. dla przedmiotu
        &nbsp;<b>{maxScoreWrapper.subject.name === '' ? 'bez nazwy' : maxScoreWrapper.subject.name}</b>
        &nbsp;obliczony zgodnie z formułą
        &nbsp;{maxScoreWrapper.formula === 'A/B' ? 'A lub B' : maxScoreWrapper.formula}.
      </p>
    </div>
  )
}
BestSubject.propTypes = {
  maxScoreWrapper: PropTypes.object,
  subjectType: PropTypes.string.isRequired
}

export default BestSubject
