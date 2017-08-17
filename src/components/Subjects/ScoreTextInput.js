import React from 'react'
import PropTypes from 'prop-types'

const ScoreTextInput = ({ subject: { id, elementaryScore, advancedScore }, examType, subjectsType, onChange }) => (
  <input
    type='text'
    value={(examType === 'elementary' ? elementaryScore : advancedScore) || ''}
    placeholder='Brak'
    onChange={(event) => {
      const inputScore = event.target.value
      if (!isNaN(inputScore)) {
        onChange(
          id,
          examType === 'elementary' ? 'elementaryScore' : 'advancedScore',
          +inputScore > 100 ? 100 : +inputScore,
          subjectsType
        )
      }
    }}
    className='subject-input-text'
  />
)
ScoreTextInput.propTypes = {
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

export default ScoreTextInput
