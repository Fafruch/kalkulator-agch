import { connect } from 'react-redux'

import Calculator from '../components/Calculator/Calculator'
import subjectPicker from '../store/selectors/subjectPicker'
import { PRIMARY_SUBJECTS, LINGUAL_SUBJECTS } from '../constants/SubjectTypes'

const mapStateToProps = (state) => ({
  maxPrimaryScoreWrapper: subjectPicker(state.subjects[PRIMARY_SUBJECTS], PRIMARY_SUBJECTS),
  maxLingualScoreWrapper: subjectPicker(state.subjects[LINGUAL_SUBJECTS], LINGUAL_SUBJECTS)
})

const CalculatorContainer = connect(mapStateToProps)(Calculator)

export default CalculatorContainer
