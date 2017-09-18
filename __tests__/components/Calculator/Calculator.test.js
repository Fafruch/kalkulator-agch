import React from 'react'
import { shallow } from 'enzyme'

import Calculator from '../../../src/components/Calculator/Calculator'

const setup = (setupProps = {}) => {
  const defaultProps = {
    maxScoreWrapper: { primary: { maxScore: { value: 182 } }, lingual: { maxScore: { value: 192 } } },
    isScoreTableOpened: false,
    isAnySubjectPresent: false,
    onToggleClick: jest.fn()
  }
  const props = { ...defaultProps, ...setupProps }
  const wrapper = shallow(<Calculator {...props} />)

  return {
    props,
    wrapper
  }
}

describe('Calculator component', () => {
  test('should render', () => {
    const { wrapper } = setup()

    expect(wrapper).toMatchSnapshot()
  })

  test('should render content when isAnySubjectPresent is true', () => {
    const { wrapper } = setup({ isAnySubjectPresent: true })

    expect(wrapper).toMatchSnapshot()
  })

  test('should call onToggleClick when clicked on a button', () => {
    const { props, wrapper } = setup({ isAnySubjectPresent: true })

    wrapper.find('button').simulate('click')
    expect(props.onToggleClick).toBeCalled()
  })

  test('should render the scoreTable when isScoreTableOpened is true', () => {
    const { wrapper } = setup({ isAnySubjectPresent: true, isScoreTableOpened: true })

    expect(wrapper).toMatchSnapshot()
  })

  test('should render button with corresponding name when scoreTable is opened', () => {
    let { wrapper } = setup({ isAnySubjectPresent: true, isScoreTableOpened: false })

    expect(wrapper.find('button').text()).toEqual('Pokaż tabelę wyników')

    ;({ wrapper } = setup({ isAnySubjectPresent: true, isScoreTableOpened: true }))

    expect(wrapper.find('button').text()).toEqual('Ukryj tabelę wyników')
  })
})
