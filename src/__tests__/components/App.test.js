import React from 'react'
import { createStore } from 'redux'
import { shallow } from 'enzyme'

import App from '../../App'
import rootReducer from '../../store/reducers'

const setup = (setupProps = {}) => {
  const defaultProps = { store: createStore(rootReducer) }
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
