import React from 'react'
import { shallow } from 'enzyme'

import Datalist from '../../../components/Subjects/Datalist'

const setup = (setupProps = {}) => {
  const defaultProps = {
    subjectsType: 'primary'
  }
  const props = { ...defaultProps, ...setupProps }
  const wrapper = shallow(<Datalist {...props} />)

  return {
    props,
    wrapper
  }
}

describe('Datalist component', () => {
  test('should render', () => {
    const { wrapper } = setup()

    expect(wrapper).toMatchSnapshot()
  })

  test('should render datalist with id attribute of the subjectsType', () => {
    let { wrapper } = setup()

    expect(wrapper.prop('id')).toEqual('primary')

    ;({ wrapper } = setup({ subjectsType: 'lingual' }))

    expect(wrapper.prop('id')).toEqual('lingual')
  })
})
