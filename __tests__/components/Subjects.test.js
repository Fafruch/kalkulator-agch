import React from 'react'
import { shallow } from 'enzyme'

import Subjects from '../../src/components/Subjects'
import { PRIMARY_SUBJECTS } from '../../src/constants/SubjectTypes'

const setup = (setupProps = {}) => {
  const defaultProps = { subjectsType: 'primary' }
  const props = { ...defaultProps, ...setupProps }
  const wrapper = shallow(<Subjects {...props} />)

  return {
    props,
    wrapper
  }
}

describe('Subjects component', () => {
  test('should render', () => {
    const { wrapper } = setup()

    expect(wrapper).toMatchSnapshot()
  })

  test('should use subjectsType prop', () => {
    const { wrapper } = setup({ subjectsType: PRIMARY_SUBJECTS })

    expect(wrapper.instance().props.subjectsType).toEqual('primary')
  })
})
