import React from 'react'
import { shallow } from 'enzyme'

import Threshold from '../../../components/Calculator/Threshold'

const setup = (setupProps = {}) => {
  const defaultProps = {
    courseScore: 920,
    threshold: 914
  }
  const props = { ...defaultProps, ...setupProps }
  const wrapper = shallow(<Threshold {...props} />)

  return {
    props,
    wrapper
  }
}

describe('Threshold component', () => {
  test('should render', () => {
    const { wrapper } = setup()

    expect(wrapper).toMatchSnapshot()
  })

  test('should has proper class depending on the threshold value', () => {
    let { wrapper } = setup()

    expect(wrapper.is('.score-above')).toEqual(true)

    ;({ wrapper } = setup({ courseScore: 920, threshold: 1000 }))

    expect(wrapper.is('.score-under')).toEqual(true)
  })
})
