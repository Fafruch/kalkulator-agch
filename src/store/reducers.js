import { combineReducers } from 'redux'

import subjects from './subjects'

export const makeRootReducer = (asyncReducers) => {
  return combineReducers({
    subjects,
    ...asyncReducers
  })
}

export default makeRootReducer
