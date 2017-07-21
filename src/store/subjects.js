const subjects = (state = [], action) => {
  switch (action.type) {
    case 'ADD_SUBJECT':
      return [
        ...state,
        {
          id: action.payload.id,
          name: '',
          type: action.payload.subjectsType,
          elementaryScore: 0,
          advancedScore: 0,
          active: true
        }
      ]
    case 'TOGGLE_SUBJECT':
      return state.map(
        subject => (subject.id === action.payload.id) ? {
          ...subject,
          active: !subject.active
        }
        : subject
      )
    case 'REMOVE_SUBJECT':
      return state.filter(
        subject => subject.id !== action.payload.id
      )
    case 'UPDATE_SUBJECT':
      return state.map(
        subject => (subject.id === action.payload.id) ? {
          id: action.payload.id,
          name: action.payload.name,
          type: subject.type,
          elementaryScore: action.payload.elementaryScore,
          advancedScore: action.payload.advancedScore,
          active: subject.active
        }
        : subject
      )
    default:
      return state
  }
}

export default subjects
