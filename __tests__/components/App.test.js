import React from 'react'
import { shallow } from 'enzyme'

import App from '../../src/components/App'
import createStore from '../../src/store/createStore'

const setup = (setupProps = {}) => {
  const defaultProps = { store: createStore() }
  const props = { ...defaultProps, ...setupProps }
  const wrapper = shallow(<App {...props} />)

  return {
    props,
    wrapper
  }
}

describe('App component', () => {
  test('should render', () => {
    const { wrapper } = setup()

    expect(wrapper).toMatchSnapshot()
  })
})
