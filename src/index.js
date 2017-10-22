import React from 'react'
import ReactDOM from 'react-dom'

import './styles/index.css'
import App from './App'
import registerServiceWorker from './utils/registerServiceWorker'
import { createStore } from 'redux'
import rootReducer from './store/reducers'
import { loadState, saveState } from './utils/localStorage'

// Load store from localStorage
// ------------------------------------
window.__INITIAL_STATE__ = loadState()

// Store Initialization
// ------------------------------------
const store = createStore(
  rootReducer,
  window.__INITIAL_STATE__,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
)

// Render App
// ------------------------------------
ReactDOM.render(
  <App store={store} />,
  document.getElementById('root')
)

registerServiceWorker()

// Save state to localStorage when unloading page
// ------------------------------------
window.onbeforeunload = () => saveState(store.getState())
