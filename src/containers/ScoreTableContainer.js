import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import ScoreTable from '../components/Calculator/ScoreTable'
import { toggleScoreTable } from '../actions/index'

const mapStateToProps = (state) => ({
  subjects: state.subjects
})

const mapDispatchToProps = (dispatch) => ({
  onToggleClick: bindActionCreators(toggleScoreTable, dispatch)
})

const ScoreTableContainer = connect(mapStateToProps, mapDispatchToProps)(ScoreTable)

export default ScoreTableContainer
