import React from 'react'
import { shallow } from 'enzyme'

import BestSubject from '../../../components/Calculator/BestSubject'

const setup = (setupProps = {}) => {
  const defaultProps = {
    bestSubject: {
      name: '',
      maxScore: {
        value: 0,
        formula: ''
      }
    },
    subjectsType: 'primary'
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

  test('should render "języka" when subjectsType is "lingual"', () => {
    const { wrapper } = setup({ subjectsType: 'lingual' })

    expect(wrapper.contains('języka')).toEqual(true)
  })

  test('should render "A lub B" when formula is "A/B"', () => {
    const { wrapper } = setup({ bestSubject: { maxScore: { formula: 'A/B' } } })

    expect(wrapper.contains('A lub B')).toEqual(true)
  })
})
