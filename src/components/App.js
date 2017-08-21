import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'

import PageLayout from './PageLayout'

const App = ({ store }) => (
  <Provider store={store}>
    <PageLayout />
  </Provider>
)
App.propTypes = {
  store: PropTypes.object.isRequired
}

export default App
