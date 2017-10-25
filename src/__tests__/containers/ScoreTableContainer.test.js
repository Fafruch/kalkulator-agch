import React from 'react'
import { createStore } from 'redux'
import { shallow } from 'enzyme'

import rootReducer from '../../store/reducers'
import ScoreTableContainer from '../../containers/ScoreTableContainer'

const setup = (setupProps = {}) => {
  const defaultProps = { store: createStore(rootReducer) }
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
