import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import SubjectList from '../components/Subjects/SubjectList'
import { removeSubject, toggleSubject, updateSubject } from '../actions'

const mapStateToProps = (state) => ({
  subjects: state.subjects
})

const mapDispatchToProps = (dispatch) => bindActionCreators({
  onChange: updateSubject,
  onToggleClick: toggleSubject,
  onDelete: removeSubject,
}, dispatch)

const SubjectListContainer = connect(mapStateToProps, mapDispatchToProps)(SubjectList)

export default SubjectListContainer
