import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { addSubject } from '../actions'
import { primarySubjects } from '../constants/SubjectTypes'

let AddSubjectContainer = ({ dispatch, subjectsType }) => (
  <button
    onClick={() => dispatch(addSubject(subjectsType))}
    className={subjectsType === primarySubjects ? 'btn btn-outline-danger' : 'btn btn-outline-success'}
  >
    Dodaj {subjectsType === primarySubjects ? 'przedmiot główny' : 'język'}
  </button>
)
AddSubjectContainer.propTypes = {
  subjectsType: PropTypes.string.isRequired
}

AddSubjectContainer = connect()(AddSubjectContainer)

export default AddSubjectContainer
