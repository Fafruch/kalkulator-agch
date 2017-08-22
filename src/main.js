import React from 'react'
import ReactDOM from 'react-dom'

import createStore from './store/createStore'
import './styles/main.scss'
import { loadState, saveState } from './utils/localStorage'

// Load store from localStorage
// ------------------------------------
window.__INITIAL_STATE__ = loadState()

// Store Initialization
// ------------------------------------
const store = createStore(window.__INITIAL_STATE__)

// Render Setup
// ------------------------------------
const MOUNT_NODE = document.getElementById('root')

let render = () => {
  const App = require('./components/App').default

  ReactDOM.render(
    <App store={store} />,
    MOUNT_NODE
  )
}

// Development Tools
// ------------------------------------
if (__DEV__) {
  if (module.hot) {
    const renderApp = render
    const renderError = (error) => {
      const RedBox = require('redbox-react').default

      ReactDOM.render(<RedBox error={error} />, MOUNT_NODE)
    }

    render = () => {
      try {
        renderApp()
      } catch (e) {
        console.error(e)
        renderError(e)
      }
    }

    // Setup hot module replacement
    module.hot.accept([
      './components/App'
    ], () =>
      setImmediate(() => {
        ReactDOM.unmountComponentAtNode(MOUNT_NODE)
        render()
      })
    )
  }
}

 // Save state to localStorage when unloading page
// ------------------------------------
window.onbeforeunload = () => saveState(store.getState())

// Let's Go!
// ------------------------------------
if (!__TEST__) render()
