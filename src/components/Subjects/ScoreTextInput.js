import React from 'react'
import PropTypes from 'prop-types'

const ScoreTextInput = ({ subject: { id, elementaryScore, advancedScore }, examType, subjectsType, onChange }) => {
  const isElementary = examType === 'elementary'

  const handleChange = (event) => {
    const inputScore = +event.target.value > 100 ? 100 : +event.target.value

    if (!isNaN(inputScore)) {
      if (isElementary) elementaryScore = inputScore
      else advancedScore = inputScore

      onChange(id, elementaryScore, advancedScore, subjectsType)
    }
  }

  return (
    <input
      type='text'
      value={(isElementary ? elementaryScore : advancedScore) || ''}
      placeholder='Brak'
      onChange={handleChange}
      className='subject-input-text'
    />
  )
}
ScoreTextInput.propTypes = {
  subject: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    elementaryScore: PropTypes.number.isRequired,
    advancedScore: PropTypes.number.isRequired,
    maxScore: PropTypes.object.isRequired,
    active: PropTypes.bool.isRequired
  }).isRequired,
  examType: PropTypes.string.isRequired,
  subjectsType: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
}

export default ScoreTextInput
