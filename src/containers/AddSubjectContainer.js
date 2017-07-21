import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { addSubject } from '../actions'
import { PRIMARY_SUBJECTS } from '../constants/SubjectTypes'

let AddSubjectContainer = ({ subjectsType, onAdd }) => (
  <button
    onClick={() => onAdd(subjectsType)}
    className={subjectsType === PRIMARY_SUBJECTS ? 'btn btn-outline-danger' : 'btn btn-outline-success'}
  >
    Dodaj {subjectsType === PRIMARY_SUBJECTS ? 'przedmiot główny' : 'język'}
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
