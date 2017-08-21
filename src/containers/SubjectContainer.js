import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Subject from '../components/Subjects/Subject'
import { removeSubject, toggleSubject, updateSubjectName, updateSubjectScore } from '../actions'

const mapDispatchToProps = (dispatch) => bindActionCreators({
  onNameChange: updateSubjectName,
  onScoreChange: updateSubjectScore,
  onToggleClick: toggleSubject,
  onDelete: removeSubject,
}, dispatch)

const SubjectContainer = connect(null, mapDispatchToProps)(Subject)

export default SubjectContainer
