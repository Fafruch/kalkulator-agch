import { combineReducers } from 'redux'

import subjects from './reducers/subjects'
import scoreTable from './reducers/scoreTable'

export const makeRootReducer = (asyncReducers) => {
  return combineReducers({
    subjects,
    scoreTable,
    ...asyncReducers
  })
}

export default makeRootReducer
