import React from 'react'
import { shallow } from 'enzyme'

import AddSubject from '../../../src/components/Subjects/AddSubject'

const setup = (setupProps = {}) => {
  const defaultProps = {
    subjectsType: 'primary',
    onAdd: jest.fn()
  }
  const props = { ...defaultProps, ...setupProps }
  const wrapper = shallow(<AddSubject {...props} />)

  return {
    props,
    wrapper
  }
}

describe('AddSubject component', () => {
  test('should render', () => {
    const { wrapper } = setup()

    expect(wrapper).toMatchSnapshot()
  })

  test('should render green button when subjectsType is lingual', () => {
    const { wrapper } = setup({ subjectsType: 'lingual' })

    expect(wrapper.is('.btn btn-outline-success')).toEqual(true)
  })

  test('should call onAdd when clicked on a button', () => {
    const { props, wrapper } = setup()

    wrapper.simulate('click')
    expect(props.onAdd).toBeCalled()
  })
})
