import { connect } from 'react-redux'
import Calculator from '../components/Calculator'

function mapStateToProps (state) {
  return { subjects: state.subjects }
}

const CalculatorContainer = connect(mapStateToProps)(Calculator)

export default CalculatorContainer
