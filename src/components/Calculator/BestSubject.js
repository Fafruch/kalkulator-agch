import React from 'react'
import PropTypes from 'prop-types'

import { PRIMARY_SUBJECTS } from '../../constants/SubjectTypes'

const BestSubject = ({ bestSubject: { name, max }, subjectType }) => {

  return (
    <div>
      <p>
        Maksymalny wynik dla {subjectType === PRIMARY_SUBJECTS ? 'przedmiotu głównego' : 'języka'} to
        &nbsp;<b>{max.score}</b> pkt. dla przedmiotu
        &nbsp;<b>{name || 'bez nazwy'}</b>
        &nbsp;obliczony zgodnie z formułą
        &nbsp;{max.formula === 'A/B' ? 'A lub B' : max.formula}.
      </p>
    </div>
  )
}

BestSubject.propTypes = {
  bestSubject: PropTypes.object.isRequired,
  subjectType: PropTypes.string.isRequired
}

export default BestSubject
