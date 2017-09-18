import React from 'react'
import { shallow } from 'enzyme'

import NameInput from '../../../src/components/Subjects/NameInput'

const setup = (setupProps = {}) => {
  const defaultProps = {
    subject: {
      id: '0',
      name: 'Matematyka',
      active: true
    },
    subjectsType: 'primary',
    onChange: jest.fn()
  }
  const props = { ...defaultProps, ...setupProps }
  const wrapper = shallow(<NameInput {...props} />)

  return {
    props,
    wrapper
  }
}

describe('NameInput component', () => {
  test('should render', () => {
    const { wrapper } = setup()

    expect(wrapper).toMatchSnapshot()
  })

  test('should render proper input\'s class based on activeness of the subject', () => {
    const { wrapper } = setup({ subject: { id: '0', name: 'Matematyka', active: false } })

    expect(wrapper.find('input').is('.subject-not-active subject-input-name')).toEqual(true)
  })

  test('should handle name change', () => {
    const { props, wrapper } = setup()

    wrapper.find('input').simulate('change', { target: { value: 'Matematyk' } })

    expect(props.onChange).toBeCalledWith({ id: '0', name: 'Matematyk', subjectsType: 'primary' })
  })
})
