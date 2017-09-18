import React from 'react'
import { shallow } from 'enzyme'

import ScoreTable from '../../../src/components/Calculator/ScoreTable'

const setup = (setupProps = {}) => {
  const defaultProps = {
    subjects: { primary: [], lingual: [] }
  }
  const props = { ...defaultProps, ...setupProps }
  const wrapper = shallow(<ScoreTable {...props} />)

  return {
    props,
    wrapper
  }
}

describe('ScoreTable component', () => {
  test('should render', () => {
    const { wrapper } = setup()

    expect(wrapper).toMatchSnapshot()
  })
})
