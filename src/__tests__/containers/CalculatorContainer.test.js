import React from 'react'
import { createStore } from 'redux'
import { shallow } from 'enzyme'

import rootReducer from '../../store/reducers'
import CalculatorContainer from '../../containers/CalculatorContainer'

const setup = (setupProps = {}) => {
  const defaultProps = { store: createStore(rootReducer) }
  const props = { ...defaultProps, ...setupProps }
  const wrapper = shallow(<CalculatorContainer {...props} />)

  return {
    props,
    wrapper
  }
}

describe('CalculatorContainer component', () => {
  test('should render', () => {
    const { wrapper } = setup()

    expect(wrapper).toMatchSnapshot()
  })
})
