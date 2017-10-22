import { ADD_SUBJECT, TOGGLE_SUBJECT, REMOVE_SUBJECT, UPDATE_SUBJECT } from '../../constants/actionTypes'

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
            maxScore: {
              value: 0,
              formula: ''
            },
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
              ...action.payload.updatedProperties
            }
            : subject
        )
      }
    default:
      return state
  }
}

export default subjects
