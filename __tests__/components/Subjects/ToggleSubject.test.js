import React from 'react'
import { shallow } from 'enzyme'

import ToggleSubject from '../../../src/components/Subjects/ToggleSubject'

const setup = (setupProps = {}) => {
  const defaultProps = {
    id: '0',
    active: true,
    subjectsType: 'primary',
    onToggleClick: jest.fn()
  }
  const props = { ...defaultProps, ...setupProps }
  const wrapper = shallow(<ToggleSubject {...props} />)

  return {
    props,
    wrapper
  }
}

describe('ToggleSubject component', () => {
  test('should render', () => {
    const { wrapper } = setup()

    expect(wrapper).toMatchSnapshot()
  })

  test('should render toggled-off icon when subject is not active', () => {
    const { wrapper } = setup({ active: false })

    expect(wrapper.prop('src')).toEqual('https://png.icons8.com/toggle-off/win10/96')
  })

  test('should have proper alt attribute based on activeness', () => {
    const { wrapper } = setup({ active: false })

    expect(wrapper.prop('alt')).toEqual('Bierz przedmiot pod uwagę')
  })

  test('should call onToggleClick when clicked on a button', () => {
    const { props, wrapper } = setup()

    wrapper.simulate('click')
    expect(props.onToggleClick).toBeCalled()
  })
})
