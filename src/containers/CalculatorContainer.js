import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Calculator from '../components/Calculator/Calculator'
import subjectPicker from '../store/selectors/subjectsPicker'
import { toggleScoreTable } from '../actions/index'

const mapStateToProps = (state) => ({
  subjects: state.subjects,
  maxScoreWrapper: subjectPicker(state.subjects),
  isScoreTableOpened: state.scoreTable.isOpened
})

const mapDispatchToProps = (dispatch) => ({
  onToggleClick: bindActionCreators(toggleScoreTable, dispatch)
})

const CalculatorContainer = connect(mapStateToProps, mapDispatchToProps)(Calculator)

export default CalculatorContainer
