import React from 'react'
import PropTypes from 'prop-types'

const DeleteSubject = ({ id, subjectsType, onDelete }) => (
  <img
    src='https://png.icons8.com/delete-bin/ios7/100'
    alt='Usuń przedmiot'
    onClick={() => onDelete(id, subjectsType)}
    className='subject-icon'
  />
)
DeleteSubject.propTypes = {
  id: PropTypes.string.isRequired,
  subjectsType: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired
}

export default DeleteSubject
