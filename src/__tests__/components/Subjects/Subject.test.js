import React from 'react'
import { shallow } from 'enzyme'

import Subject from '../../../components/Subjects/Subject'

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
    subjectNumber: 2,
    onChange: jest.fn(),
    onToggleClick: jest.fn(),
    onDelete: jest.fn()
  }
  const props = { ...defaultProps, ...setupProps }
  const wrapper = shallow(<Subject {...props} />)

  return {
    props,
    wrapper
  }
}

describe('Subject component', () => {
  test('should render', () => {
    const { wrapper } = setup()

    expect(wrapper).toMatchSnapshot()
  })
  test('should render % when the score is not 0', () => {
    let { wrapper } = setup()

    expect(wrapper.find('td').at(2).text()).toContain('%')

    ;({ wrapper } = setup({
      subject: {
        id: '0',
        name: 'Matematyka',
        elementaryScore: 0,
        advancedScore: 82,
        maxScore: {
          value: 182,
          formula: 'A/B'
        },
        active: true
      }
    }))

    expect(wrapper.find('td').at(2).text()).not.toContain('%')
  })
})
