import React from 'react'
import { createStore } from 'redux'
import { shallow } from 'enzyme'

import rootReducer from '../../store/reducers'
import SubjectContainer from '../../containers/SubjectContainer'

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
    store: createStore(rootReducer)
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
