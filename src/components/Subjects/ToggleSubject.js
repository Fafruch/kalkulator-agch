import React from 'react'
import PropTypes from 'prop-types'

const ToggleSubject = ({ id, active, subjectsType, onToggleClick }) => (
  <img
    src={active ? 'icons/toggle-on-96.png' : 'icons/toggle-off-96.png'}
    alt={active ? 'Nie bierz pod uwagę przedmiotu' : 'Bierz przedmiot pod uwagę'}
    onClick={() => onToggleClick(id, subjectsType)}
    className='subject-icon'
  />
)
ToggleSubject.propTypes = {
  id: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired,
  subjectsType: PropTypes.string.isRequired,
  onToggleClick: PropTypes.func.isRequired
}

export default ToggleSubject
