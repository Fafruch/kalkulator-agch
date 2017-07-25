import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import SubjectList from '../components/Subjects/SubjectList'
import { removeSubject, toggleSubject, updateSubject } from '../actions'

const mapStateToProps = (state, ownProps) => ({
  subjects: state.subjects[ownProps.subjectsType]
})

const mapDispatchToProps = (dispatch) => bindActionCreators({
  onChange: updateSubject,
  onToggleClick: toggleSubject,
  onDelete: removeSubject,
}, dispatch)

const SubjectListContainer = connect(mapStateToProps, mapDispatchToProps)(SubjectList)

export default SubjectListContainer
