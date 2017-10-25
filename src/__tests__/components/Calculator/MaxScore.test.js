import React from 'react'
import { shallow } from 'enzyme'

import MaxScore from '../../../components/Calculator/MaxScore'

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
    const { props, wrapper } = setup()

    expect(wrapper.find('b').text()).toEqual(` ${props.maxPrimaryScore * 4 + props.maxLingualScore} `)
  })
})
