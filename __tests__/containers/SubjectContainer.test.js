import React from 'react'
import { shallow } from 'enzyme'

import SubjectContainer from '../../src/containers/SubjectContainer'
import createStore from '../../src/store/createStore'

const setup = (setupProps = {}) => {
  const defaultProps = {
    subject: {},
    subjectsType: 'primary',
    subjectNumber: 0,
    store: createStore()
  }
  const props = { ...defaultProps, ...setupProps }
  const wrapper = shallow(<SubjectContainer {...props} />)

  return {
    props,
    wrapper
  }
}

describe('SubjectContainer component', () => {
  test('should render', () => {
    const { wrapper } = setup()

    expect(wrapper).toMatchSnapshot()
  })
})
