import React from 'react'
import PropTypes from 'prop-types'

import { PRIMARY_SUBJECTS } from '../../constants/subjectTypes'

const BestSubject = ({ bestSubject: { name, maxScore }, subjectsType }) => (
  <div>
    <p>
      Maksymalny wynik dla {subjectsType === PRIMARY_SUBJECTS ? 'przedmiotu głównego' : 'języka'} to
      &nbsp;<b>{maxScore.value}</b> pkt. dla przedmiotu
      &nbsp;<b>{name || 'bez nazwy'}</b>
      &nbsp;obliczony zgodnie z formułą
      &nbsp;{maxScore.formula === 'A/B' ? 'A lub B' : maxScore.formula}.
    </p>
  </div>
)

BestSubject.propTypes = {
  bestSubject: PropTypes.object.isRequired,
  subjectsType: PropTypes.string.isRequired
}

export default BestSubject
