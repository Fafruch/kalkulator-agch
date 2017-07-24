import React from 'react'
import PropTypes from 'prop-types'

import { PRIMARY_SUBJECTS } from '../../constants/SubjectTypes'

const AddSubject = ({ subjectsType, onAdd }) => (
  <button
    onClick={() => onAdd(subjectsType)}
    className={subjectsType === PRIMARY_SUBJECTS ? 'btn btn-outline-danger' : 'btn btn-outline-success'}
  >
    Dodaj {subjectsType === PRIMARY_SUBJECTS ? 'przedmiot główny' : 'język'}
  </button>
)
AddSubject.propTypes = {
  subjectsType: PropTypes.string.isRequired,
  onAdd: PropTypes.func.isRequired
}

export default AddSubject
