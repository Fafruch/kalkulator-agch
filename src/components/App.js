import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'

import PageLayout from './PageLayout'

class App extends React.Component {
  static propTypes = {
    store: PropTypes.object.isRequired,
  }
  render () {
    return (
      <Provider store={this.props.store}>
        <PageLayout />
      </Provider>
    )
  }
}

export default App
