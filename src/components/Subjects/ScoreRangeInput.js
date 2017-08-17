import React from 'react'
import PropTypes from 'prop-types'

const ScoreRangeInput = ({ subject: { id, elementaryScore, advancedScore }, examType, subjectsType, onChange }) => (
  <input
    type='range'
    value={examType === 'elementary' ? elementaryScore : advancedScore}
    min='0'
    max='100'
    onChange={(event) => onChange(
      id,
      examType === 'elementary' ? 'elementaryScore' : 'advancedScore',
      +event.target.value,
      subjectsType)}
    className='subject-input-range'
  />
)
ScoreRangeInput.propTypes = {
  subject: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    elementaryScore: PropTypes.number.isRequired,
    advancedScore: PropTypes.number.isRequired,
    active: PropTypes.bool.isRequired
  }).isRequired,
  examType: PropTypes.string.isRequired,
  subjectsType: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
}

export default ScoreRangeInput
