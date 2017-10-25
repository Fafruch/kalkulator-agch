import React from 'react'
import { shallow } from 'enzyme'

import SubjectList from '../../../components/Subjects/SubjectList'

const setup = (setupProps = {}) => {
  const defaultProps = {
    subjects: [
      {
        id: '0',
        name: 'Matematyka',
        elementaryScore: 100,
        advancedScore: 82,
        maxScore: {
          value: 182,
          formula: 'A/B'
        },
        active: true
      }
    ],
    subjectsType: 'primary'
  }
  const props = { ...defaultProps, ...setupProps }
  const wrapper = shallow(<SubjectList {...props} />)

  return {
    props,
    wrapper
  }
}

describe('SubjectList component', () => {
  test('should render', () => {
    const { wrapper } = setup()

    expect(wrapper).toMatchSnapshot()
  })

  test('should render proper class when subject is not active', () => {
    const { wrapper } = setup({
      subjects: [
        {
          id: '0',
          name: 'Matematyka',
          elementaryScore: 100,
          advancedScore: 82,
          maxScore: {
            value: 182,
            formula: 'A/B'
          },
          active: false
        }
      ]
    })

    expect(wrapper.find('CSSTransitionGroup').shallow().find('li').is('.subject-not-active')).toEqual(true)
  })
})
