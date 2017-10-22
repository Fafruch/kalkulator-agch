import React from 'react'
import { createStore } from 'redux'
import { shallow } from 'enzyme'

import rootReducer from '../../store/reducers'
import AddSubjectContainer from '../../containers/AddSubjectContainer'

const setup = (setupProps = {}) => {
  const defaultProps = {
    subjectsType: 'primary',
    store: createStore(rootReducer)
  }
  const props = { ...defaultProps, ...setupProps }
  const wrapper = shallow(<AddSubjectContainer {...props} />)

  return {
    props,
    wrapper
  }
}

describe('AddSubjectContainer component', () => {
  test('should render', () => {
    const { wrapper } = setup()

    expect(wrapper).toMatchSnapshot()
  })
})
