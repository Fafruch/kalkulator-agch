import React from 'react'
import { shallow } from 'enzyme'

import Introduction from '../../components/Introduction'

const setup = (setupProps = {}) => {
  const defaultProps = { }
  const props = { ...defaultProps, ...setupProps }
  const wrapper = shallow(<Introduction {...props} />)

  return {
    props,
    wrapper
  }
}

describe('Introduction component', () => {
  test('should render', () => {
    const { wrapper } = setup()

    expect(wrapper).toMatchSnapshot()
  })
})
