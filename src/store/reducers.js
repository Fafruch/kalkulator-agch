import { combineReducers } from 'redux'

import subjects from './reducers/subjects'
import scoreTable from './reducers/scoreTable'

export const rootReducer = combineReducers({
  subjects,
  scoreTable,
})

export default rootReducer
