/**
 * Created by Fafruch on 17/07/2017.
 */

import React from 'react'
import { connect } from 'react-redux'
import { addSubject } from '../actions'
import PropTypes from 'prop-types'

let AddSubjectContainer = ({ dispatch, subjectsType }) => (
  <button onClick={() => dispatch(addSubject(subjectsType))}>
    Dodaj {subjectsType === 'Główne' ? 'przedmiot główny' : 'język'}
  </button>
)
AddSubjectContainer.propTypes = {
  subjectsType: PropTypes.string.isRequired
}

AddSubjectContainer = connect()(AddSubjectContainer)

export default AddSubjectContainer
