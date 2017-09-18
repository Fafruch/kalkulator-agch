import React from 'react'
import { shallow } from 'enzyme'

import DeleteSubject from '../../../src/components/Subjects/DeleteSubject'

const setup = (setupProps = {}) => {
  const defaultProps = {
    id: '0',
    subjectsType: 'primary',
    onDelete: jest.fn()
  }
  const props = { ...defaultProps, ...setupProps }
  const wrapper = shallow(<DeleteSubject {...props} />)

  return {
    props,
    wrapper
  }
}

describe('DeleteSubject component', () => {
  test('should render', () => {
    const { wrapper } = setup()

    expect(wrapper).toMatchSnapshot()
  })

  test('should call onDelete when clicked on a button', () => {
    const { props, wrapper } = setup()

    wrapper.simulate('click')
    expect(props.onDelete).toBeCalled()
  })
})
