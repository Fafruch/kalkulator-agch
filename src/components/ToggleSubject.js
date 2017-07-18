/**
 * Created by Fafruch on 17/07/2017.
 */

import React from 'react'
import PropTypes from 'prop-types'

const ToggleSubject = ({ id, active, onToggleClick }) => (
  <img
    src={active ? 'https://png.icons8.com/toggle-on/win10/96' : 'https://png.icons8.com/toggle-off/win10/96'}
    alt={active ? 'Nie bierz pod uwagę przedmiotu' : 'Bierz przedmiot pod uwagę'}
    style={{ width: 32, height: 32 }}
    onClick={() => onToggleClick(id)}
  />
)
ToggleSubject.propTypes = {
  id: PropTypes.number.isRequired,
  active: PropTypes.bool.isRequired,
  onToggleClick: PropTypes.func.isRequired
}

export default ToggleSubject
