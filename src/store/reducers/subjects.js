import { ADD_SUBJECT, TOGGLE_SUBJECT, REMOVE_SUBJECT, UPDATE_SUBJECT } from '../../constants/ActionTypes'

const subjects = (state = { primary: [], lingual: [] }, action) => {
  switch (action.type) {
    case ADD_SUBJECT:
      return {
        ...state,
        [action.payload.subjectsType]: [
          ...state[action.payload.subjectsType],
          {
            id: action.payload.id,
            name: '',
            elementaryScore: 0,
            advancedScore: 0,
            active: true
          }
        ]
      }
    case TOGGLE_SUBJECT:
      return {
        ...state,
        [action.payload.subjectsType]: state[action.payload.subjectsType].map(
          subject => (subject.id === action.payload.id)
            ? {
              ...subject,
              active: !subject.active
            }
            : subject
        )
      }
    case REMOVE_SUBJECT:
      return {
        ...state,
        [action.payload.subjectsType]: state[action.payload.subjectsType].filter(
          subject => subject.id !== action.payload.id
        )
      }
    case UPDATE_SUBJECT:
      return {
        ...state,
        [action.payload.subjectsType]: state[action.payload.subjectsType].map(
          subject => (subject.id === action.payload.id)
            ? {
              ...subject,
              name: action.payload.name,
              elementaryScore: action.payload.elementaryScore,
              advancedScore: action.payload.advancedScore,
              maxScore: getSubjectScore({
                elementaryScore: action.payload.elementaryScore,
                advancedScore: action.payload.advancedScore
              }, action.payload.subjectsType)
            }
            : subject
        )
      }
    default:
      return state
  }
}

export default subjects
