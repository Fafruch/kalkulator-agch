import React from 'react'
import { shallow } from 'enzyme'

import PageLayout from '../../components/PageLayout'
import Subjects from '../../components/Subjects'
import CalculatorContainer from '../../containers/CalculatorContainer'

const setup = (setupProps = {}) => {
  const defaultProps = {}
  const props = { ...defaultProps, ...setupProps }
  const wrapper = shallow(<PageLayout {...props} />)

  return {
    props,
    wrapper
  }
}

describe('PageLayout component', () => {
  test('should render', () => {
    const { wrapper } = setup()

    expect(wrapper).toMatchSnapshot()
  })
  test('should render two Subjects components', () => {
    const { wrapper } = setup()

    expect(wrapper.find(Subjects)).toHaveLength(2)
  })
  test('should render CalculatorContainer', () => {
    const { wrapper } = setup()

    expect(wrapper.find(CalculatorContainer)).toHaveLength(1)
  })
})
