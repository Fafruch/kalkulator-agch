import React from 'react'
import { shallow } from 'enzyme'

import ScoreRangeInput from '../../../components/Subjects/ScoreRangeInput'

const setup = (setupProps = {}) => {
  const defaultProps = {
    subject: {
      id: '0',
      elementaryScore: 100,
      advancedScore: 82,
      active: true
    },
    examType: 'elementary',
    subjectsType: 'primary',
    onChange: jest.fn()
  }
  const props = { ...defaultProps, ...setupProps }
  const wrapper = shallow(<ScoreRangeInput {...props} />)

  return {
    props,
    wrapper
  }
}

describe('ScoreRangeInput component', () => {
  test('should render', () => {
    const { wrapper } = setup()

    expect(wrapper).toMatchSnapshot()
  })

  test('should handle score change', () => {
    let { props, wrapper } = setup()

    wrapper.find('input').simulate('change', { target: { value: '10' } })
    expect(props.onChange).toBeCalledWith({ id: '0', elementaryScore: 10, advancedScore: 82, subjectsType: 'primary' })

    ;({ props, wrapper } = setup({ examType: 'advanced' }))

    wrapper.find('input').simulate('change', { target: { value: '8' } })
    expect(props.onChange).toBeCalledWith({ id: '0', elementaryScore: 100, advancedScore: 8, subjectsType: 'primary' })
  })
})
