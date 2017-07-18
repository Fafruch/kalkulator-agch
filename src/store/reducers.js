import { combineReducers } from 'redux'
import subjects from './subjects'

export const makeRootReducer = (asyncReducers) => {
  return combineReducers({
    subjects,
    ...asyncReducers
  })
}

export const injectReducer = (store, { key, reducer }) => {
  if (Object.hasOwnProperty.call(store.asyncReducers, key)) return

  store.asyncReducers[key] = reducer
  store.replaceReducer(makeRootReducer(store.asyncReducers))
}

export default makeRootReducer
