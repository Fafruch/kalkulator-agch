import React from 'react'
import { shallow } from 'enzyme'

import SubjectListContainer from '../../src/containers/SubjectListContainer'
import createStore from '../../src/store/createStore'

const setup = (setupProps = {}) => {
  const defaultProps = {
    subjectsType: 'primary',
    store: createStore()
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
