import React from 'react'
import PropTypes from 'prop-types'

const ScoreRangeInput = ({ subject: { id, elementaryScore, advancedScore }, examType, subjectsType, onChange }) => {
  const isElementary = examType === 'elementary'

  const handleChange = (event) => {
    const inputScore = +event.target.value

    if (isElementary) elementaryScore = inputScore
    else advancedScore = inputScore

    onChange(id, elementaryScore, advancedScore, subjectsType)
  }

  return (
    <input
      type='range'
      value={isElementary ? elementaryScore : advancedScore}
      min='0'
      max='100'
      onChange={handleChange}
      className='subject-input-range'
    />
  )
}
ScoreRangeInput.propTypes = {
  subject: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    elementaryScore: PropTypes.number.isRequired,
    advancedScore: PropTypes.number.isRequired,
    max: PropTypes.object.isRequired,
    active: PropTypes.bool.isRequired
  }).isRequired,
  examType: PropTypes.string.isRequired,
  subjectsType: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
}

export default ScoreRangeInput
