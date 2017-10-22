import React from 'react'
import { createStore } from 'redux'
import { shallow } from 'enzyme'

import rootReducer from '../../store/reducers'
import SubjectListContainer from '../../containers/SubjectListContainer'

const setup = (setupProps = {}) => {
  const defaultProps = {
    subjectsType: 'primary',
    store: createStore(rootReducer)
  }
  const props = { ...defaultProps, ...setupProps }
  const wrapper = shallow(<SubjectListContainer {...props} />)

  return {
    props,
    wrapper
  }
}

describe('SubjectListContainer component', () => {
  test('should render', () => {
    const { wrapper } = setup()

    expect(wrapper).toMatchSnapshot()
  })
})
