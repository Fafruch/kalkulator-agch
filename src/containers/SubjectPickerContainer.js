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

function mapStateToProps (state, ownProps) {
  return { subjects: state.subjects.filter(subject => subject.active && (subject.type === ownProps.subjectsType)) }
}

SubjectPickerContainer = connect(mapStateToProps)(SubjectPicker)

export default SubjectPickerContainer
