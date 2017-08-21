import { connect } from 'react-redux'
import SubjectList from '../components/Subjects/SubjectList'

const mapStateToProps = (state, ownProps) => ({
  subjects: state.subjects[ownProps.subjectsType]
})

const SubjectListContainer = connect(mapStateToProps)(SubjectList)

export default SubjectListContainer
