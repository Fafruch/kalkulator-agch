import React from 'react'
import { shallow } from 'enzyme'

import AddSubjectContainer from '../../src/containers/AddSubjectContainer'
import createStore from '../../src/store/createStore'

const setup = (setupProps = {}) => {
  const defaultProps = {
    subjectsType: 'primary',
    store: createStore()
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
