import React from 'react'
import PropTypes from 'prop-types'

import { PRIMARY_SUBJECTS } from '../../constants/SubjectTypes'

const BestSubject = ({ maxScoreWrapper, subjectType }) => {
  const subject = subjectType === PRIMARY_SUBJECTS ? maxScoreWrapper.primary : maxScoreWrapper.lingual
  return (
    <div>
      <p>
        Maksymalny wynik dla {subjectType === PRIMARY_SUBJECTS ? 'przedmiotu głównego' : 'języka'} to
        &nbsp;<b>{subject.max.score}</b> pkt. dla przedmiotu
        &nbsp;<b>{subject.name || 'bez nazwy'}</b>
        &nbsp;obliczony zgodnie z formułą
        &nbsp;{subject.max.formula === 'A/B' ? 'A lub B' : subject.max.formula}.
      </p>
    </div>
  )
}

BestSubject.propTypes = {
  maxScoreWrapper: PropTypes.object.isRequired,
  subjectType: PropTypes.string.isRequired
}

export default BestSubject
