import React from 'react'
import { shallow } from 'enzyme'

import MaxScore from '../../../src/components/Calculator/MaxScore'

const setup = (setupProps = {}) => {
  const defaultProps = {
    maxPrimaryScore: 182,
    maxLingualScore: 192
  }
  const props = { ...defaultProps, ...setupProps }
  const wrapper = shallow(<MaxScore {...props} />)

  return {
    props,
    wrapper
  }
}

describe('MaxScore component', () => {
  test('should render', () => {
    const { wrapper } = setup()

    expect(wrapper).toMatchSnapshot()
  })

  test('should render total maxScore', () => {
    const { wrapper } = setup()

    expect(wrapper.find('b').text()).toEqual(` ${182 * 4 + 192} `)
  })
})
