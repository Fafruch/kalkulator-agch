import { connect } from 'react-redux'

import ScoreTable from '../components/Calculator/ScoreTable'

const mapStateToProps = (state) => ({
  subjects: state.subjects
})

const ScoreTableContainer = connect(mapStateToProps)(ScoreTable)

export default ScoreTableContainer
