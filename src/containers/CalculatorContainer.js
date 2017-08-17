import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Calculator from '../components/Calculator/Calculator'
import subjectsPicker from '../store/selectors/subjectsPicker'
import { toggleScoreTable } from '../actions/index'

const mapStateToProps = (state) => ({
  maxScoreWrapper: subjectsPicker(state.subjects),
  isScoreTableOpened: state.scoreTable.isOpened,
  isAnySubjectPresent: !!state.subjects.primary.length || !!state.subjects.lingual.length
})

const mapDispatchToProps = (dispatch) => ({
  onToggleClick: bindActionCreators(toggleScoreTable, dispatch)
})

const CalculatorContainer = connect(mapStateToProps, mapDispatchToProps)(Calculator)

export default CalculatorContainer
