import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { addSubject } from '../actions'
import AddSubject from '../components/Subjects/AddSubject'

const mapDispatchToProps = (dispatch) => ({
  onAdd: bindActionCreators(addSubject, dispatch)
})

const AddSubjectContainer = connect(null, mapDispatchToProps)(AddSubject)

export default AddSubjectContainer
