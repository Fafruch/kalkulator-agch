import { TOGGLE_SCORE_TABLE } from '../../constants/ActionTypes'

const subjects = (state = { isOpened: false }, action) => {
  switch (action.type) {
    case TOGGLE_SCORE_TABLE:
      return {
        ...state,
        isOpened: !state.isOpened
      }
    default:
      return state
  }
}

export default subjects
