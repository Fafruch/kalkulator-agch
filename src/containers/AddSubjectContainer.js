/**
 * Created by Fafruch on 17/07/2017.
 */

import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { addSubject } from '../actions'
import { primarySubjects } from '../constants/SubjectTypes'

let AddSubjectContainer = ({ dispatch, subjectsType }) => (
  <button onClick={() => dispatch(addSubject(subjectsType))}>
    Dodaj {subjectsType === primarySubjects ? 'przedmiot główny' : 'język'}
  </button>
)
AddSubjectContainer.propTypes = {
  subjectsType: PropTypes.string.isRequired
}

AddSubjectContainer = connect()(AddSubjectContainer)

export default AddSubjectContainer
