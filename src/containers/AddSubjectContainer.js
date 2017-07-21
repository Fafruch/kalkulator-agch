import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { addSubject } from '../actions'
import { primarySubjects } from '../constants/SubjectTypes'

let AddSubjectContainer = ({ subjectsType, onAdd }) => (
  <button
    onClick={() => onAdd(subjectsType)}
    className={subjectsType === primarySubjects ? 'btn btn-outline-danger' : 'btn btn-outline-success'}
  >
    Dodaj {subjectsType === primarySubjects ? 'przedmiot główny' : 'język'}
  </button>
)
AddSubjectContainer.propTypes = {
  subjectsType: PropTypes.string.isRequired,
  onAdd: PropTypes.func.isRequired
}

const mapDispatchToProps = (dispatch) => ({
  onAdd: bindActionCreators(addSubject, dispatch)
})

AddSubjectContainer = connect(null, mapDispatchToProps)(AddSubjectContainer)

export default AddSubjectContainer
