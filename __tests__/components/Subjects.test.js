import React from 'react'
import { shallow } from 'enzyme'

import Subjects from '../../src/components/Subjects'

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

  test('should render proper headline based on subjectsType prop', () => {
    const { wrapper } = setup({ subjectsType: 'lingual' })

    expect(wrapper.find('h2').text()).toEqual('Języki ')
  })
})
