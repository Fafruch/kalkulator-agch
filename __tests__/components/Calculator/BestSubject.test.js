import React from 'react'
import { shallow } from 'enzyme'

import BestSubject from '../../../src/components/Calculator/BestSubject'

const setup = (setupProps = {}) => {
  const defaultProps = {
    bestSubject: {
      name: '',
      maxScore: {
        value: 0,
        formula: ''
      }
    },
    subjectType: 'primary'
  }
  const props = { ...defaultProps, ...setupProps }
  const wrapper = shallow(<BestSubject {...props} />)

  return {
    props,
    wrapper
  }
}

describe('BestSubject component', () => {
  test('should render', () => {
    const { wrapper } = setup()

    expect(wrapper).toMatchSnapshot()
  })

  test('should render "bez nazwy" when no subject name provided', () => {
    const { wrapper } = setup()

    expect(wrapper.find('b').at(1).text()).toEqual('bez nazwy')
  })
})
