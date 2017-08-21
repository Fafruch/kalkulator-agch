import React from 'react'
import { shallow } from 'enzyme'

import createStore from '../src/store/createStore'
import App from '../src/components/App'

describe('App component', () => {
  test('should render', () => {
    const store = createStore(window.__INITIAL_STATE__)
    const app = shallow(<App store={store} />)

    expect(app).toMatchSnapshot()
  })
})
