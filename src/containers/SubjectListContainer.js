/**
 * Created by Fafruch on 14/07/2017.
 */

import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import SubjectList from '../components/SubjectList'
import { removeSubject, toggleSubject, updateSubject } from '../actions'

let SubjectListContainer = ({ subjectsType }) => (
  <SubjectList subjectsType={subjectsType} />
)
SubjectListContainer.propTypes = {
  subjectsType: PropTypes.string.isRequired
}

function mapStateToProps (state) {
  return { subjects: state.subjects }
}

function mapDispatchToProps (dispatch) {
  return {
    onChange: bindActionCreators(updateSubject, dispatch),
    onToggleClick: bindActionCreators(toggleSubject, dispatch),
    onDelete: bindActionCreators(removeSubject, dispatch)
  }
}

SubjectListContainer = connect(mapStateToProps, mapDispatchToProps)(SubjectList)

export default SubjectListContainer
