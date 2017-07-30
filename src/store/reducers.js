import { combineReducers } from 'redux'

import subjects from './reducers/subjects'

export const makeRootReducer = (asyncReducers) => {
  return combineReducers({
    subjects,
    ...asyncReducers
  })
}

export default makeRootReducer
