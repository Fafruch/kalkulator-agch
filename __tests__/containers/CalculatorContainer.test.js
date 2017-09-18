import React from 'react'
import { shallow } from 'enzyme'

import CalculatorContainer from '../../src/containers/CalculatorContainer'
import createStore from '../../src/store/createStore'

const setup = (setupProps = {}) => {
  const defaultProps = { store: createStore() }
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
