import React from 'react'
import { shallow } from 'enzyme'

import ScoreTableContainer from '../../src/containers/ScoreTableContainer'
import createStore from '../../src/store/createStore'

const setup = (setupProps = {}) => {
  const defaultProps = { store: createStore() }
  const props = { ...defaultProps, ...setupProps }
  const wrapper = shallow(<ScoreTableContainer {...props} />)

  return {
    props,
    wrapper
  }
}

describe('ScoreTableContainer component', () => {
  test('should render', () => {
    const { wrapper } = setup()

    expect(wrapper).toMatchSnapshot()
  })
})
