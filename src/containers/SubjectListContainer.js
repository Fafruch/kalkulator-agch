import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import SubjectList from '../components/Subjects/SubjectList'
import { removeSubject, toggleSubject, updateSubject } from '../actions'

let SubjectListContainer = ({ subjectsType }) => (
  <SubjectList subjectsType={subjectsType} />
)
SubjectListContainer.propTypes = {
  subjectsType: PropTypes.string.isRequired
}

const mapStateToProps = (state) => ({
  subjects: state.subjects
})

const mapDispatchToProps = (dispatch) => bindActionCreators({
  onChange: updateSubject,
  onToggleClick: toggleSubject,
  onDelete: removeSubject,
}, dispatch)

SubjectListContainer = connect(mapStateToProps, mapDispatchToProps)(SubjectList)

export default SubjectListContainer
