import React from 'react'
import { shallow } from 'enzyme'

import Footer from '../../src/components/Footer'

const setup = (setupProps = {}) => {
  const defaultProps = {}
  const props = { ...defaultProps, ...setupProps }
  const wrapper = shallow(<Footer {...props} />)

  return {
    props,
    wrapper
  }
}

describe('Footer component', () => {
  test('should render', () => {
    const { wrapper } = setup()

    expect(wrapper).toMatchSnapshot()
  })
})
