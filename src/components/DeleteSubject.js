/**
 * Created by Fafruch on 18/07/2017.
 */

import React from 'react'
import PropTypes from 'prop-types'

const DeleteSubject = ({ id, onDelete }) => (
  <img
    src='https://png.icons8.com/delete-bin/ios7/100'
    alt='Usuń przedmiot'
    onClick={() => onDelete(id)}
    className='subject-icon'
  />
)
DeleteSubject.propTypes = {
  id: PropTypes.number.isRequired,
  onDelete: PropTypes.func.isRequired
}

export default DeleteSubject
