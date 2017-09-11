import React from 'react'
import { shallow } from 'enzyme'

import SubjectContainer from '../../src/containers/SubjectContainer'
import createStore from '../../src/store/createStore'

const setup = (setupProps = {}) => {
  const defaultProps = {
    subject: {
      id: '0',
      name: 'Matematyka',
      elementaryScore: 100,
      advancedScore: 82,
      maxScore: {
        value: 182,
        formula: 'A/B'
      },
      active: true
    },
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
