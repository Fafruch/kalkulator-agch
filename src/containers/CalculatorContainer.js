import { connect } from 'react-redux'

import Calculator from '../components/Calculator/Calculator'

const mapStateToProps = (state) => ({
  subjects: state.subjects
})

const CalculatorContainer = connect(mapStateToProps)(Calculator)

export default CalculatorContainer
