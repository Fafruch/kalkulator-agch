import React from 'react'
import PropTypes from 'prop-types'

import Datalist from './Datalist'

const NameInput = ({ subject: { id, name, active }, subjectsType, onChange }) => {
  const handleChange = (event) => onChange({ id, name: event.target.value, subjectsType })

  return (
    <div>
      <input
        type='text'
        value={name}
        list={subjectsType}
        onChange={handleChange}
        className={active ? 'subject-active subject-input-name' : 'subject-not-active subject-input-name'}
      />
      <Datalist subjectsType={subjectsType} />
    </div>
  )
}
NameInput.propTypes = {
  subject: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    elementaryScore: PropTypes.number.isRequired,
    advancedScore: PropTypes.number.isRequired,
    maxScore: PropTypes.object.isRequired,
    active: PropTypes.bool.isRequired
  }).isRequired,
  subjectsType: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
}

export default NameInput
