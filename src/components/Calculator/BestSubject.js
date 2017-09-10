import React from 'react'
import PropTypes from 'prop-types'

import { PRIMARY_SUBJECTS } from '../../constants/SubjectTypes'

const BestSubject = ({ bestSubject: { name, maxScore }, subjectType }) => (
  <div>
    <p>
      Maksymalny wynik dla {subjectType === PRIMARY_SUBJECTS ? 'przedmiotu głównego' : 'języka'} to
      &nbsp;<b>{maxScore.value}</b> pkt. dla przedmiotu
      &nbsp;<b>{name || 'bez nazwy'}</b>
      &nbsp;obliczony zgodnie z formułą
      &nbsp;{maxScore.formula === 'A/B' ? 'A lub B' : maxScore.formula}.
    </p>
  </div>
)

BestSubject.propTypes = {
  bestSubject: PropTypes.object.isRequired,
  subjectType: PropTypes.string.isRequired
}

export default BestSubject
