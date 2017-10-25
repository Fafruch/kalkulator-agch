import React from 'react'
import { shallow } from 'enzyme'

import Header from '../../components/Header'

const setup = (setupProps = {}) => {
  const defaultProps = {}
  const props = { ...defaultProps, ...setupProps }
  const wrapper = shallow(<Header {...props} />)

  return {
    props,
    wrapper
  }
}

describe('Header component', () => {
  test('should render', () => {
    const { wrapper } = setup()

    expect(wrapper).toMatchSnapshot()
  })
})
