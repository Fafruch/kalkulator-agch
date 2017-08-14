import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Calculator from '../components/Calculator/Calculator'
import subjectPicker from '../store/selectors/subjectPicker'
import { toggleScoreTable } from '../actions/index'
import { PRIMARY_SUBJECTS, LINGUAL_SUBJECTS } from '../constants/SubjectTypes'

const mapStateToProps = (state) => ({
  maxPrimaryScoreWrapper: subjectPicker(state.subjects[PRIMARY_SUBJECTS], PRIMARY_SUBJECTS),
  maxLingualScoreWrapper: subjectPicker(state.subjects[LINGUAL_SUBJECTS], LINGUAL_SUBJECTS),
  isScoreTableOpened: state.scoreTable.isOpened
})

const mapDispatchToProps = (dispatch) => ({
  onToggleClick: bindActionCreators(toggleScoreTable, dispatch)
})

const CalculatorContainer = connect(mapStateToProps, mapDispatchToProps)(Calculator)

export default CalculatorContainer
