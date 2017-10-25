import React from 'react'
import { shallow } from 'enzyme'

import ScoreTextInput from '../../../components/Subjects/ScoreTextInput'

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
  const wrapper = shallow(<ScoreTextInput {...props} />)

  return {
    props,
    wrapper
  }
}

describe('ScoreTextInput component', () => {
  test('should render', () => {
    const { wrapper } = setup()

    expect(wrapper).toMatchSnapshot()
  })

  test('should handle score change', () => {
    let { props, wrapper } = setup()

    wrapper.find('input').simulate('change', { target: { value: '10' } })
    expect(props.onChange).toBeCalledWith({
      id: '0',
      elementaryScore: 10,
      advancedScore: 82,
      subjectsType: 'primary'
    });

    ({ props, wrapper } = setup({ examType: 'advanced' }))

    wrapper.find('input').simulate('change', { target: { value: '820' } })
    expect(props.onChange).toBeCalledWith({
      id: '0',
      elementaryScore: 100,
      advancedScore: 100,
      subjectsType: 'primary'
    });

    ({ props, wrapper } = setup())

    wrapper.find('input').simulate('change', { target: { value: '1e' } })
    expect(props.onChange).not.toBeCalled()
  })

  test('should render \'\' when score is 0', () => {
    const { wrapper } = setup({ subject: { id: '0', elementaryScore: 0, advancedScore: 82, active: true } })

    expect(wrapper.find('input').text()).toEqual('')
  })
})
