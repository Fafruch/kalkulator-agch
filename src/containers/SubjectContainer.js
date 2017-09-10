import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Subject from '../components/Subjects/Subject'
import { removeSubject, toggleSubject, updateSubject } from '../actions'

const mapDispatchToProps = (dispatch) => bindActionCreators({
  onChange: updateSubject,
  onToggleClick: toggleSubject,
  onDelete: removeSubject,
}, dispatch)

const SubjectContainer = connect(null, mapDispatchToProps)(Subject)

export default SubjectContainer
