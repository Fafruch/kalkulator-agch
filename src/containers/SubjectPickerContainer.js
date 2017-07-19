import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import SubjectPicker from '../components/SubjectPicker'

let SubjectPickerContainer = ({ subjectsType }) => (
  <SubjectPicker subjectsType={subjectsType} />
)
SubjectPickerContainer.propTypes = {
  subjectsType: PropTypes.string.isRequired
}

function mapStateToProps (state) {
  return { subjects: state.subjects }
}

SubjectPickerContainer = connect(mapStateToProps)(SubjectPicker)

export default SubjectPickerContainer
