const subjects = (state = [], action) => {
  switch (action.type) {
    case 'ADD_SUBJECT':
      return [
        ...state,
        {
          id: action.id,
          name: '',
          type: action.subjectsType,
          elementaryScore: 0,
          advancedScore: 0,
          active: true
        }
      ]
    case 'TOGGLE_SUBJECT':
      return state.map(
        subject => (subject.id === action.id) ? {
          id: subject.id,
          name: subject.name,
          type: subject.type,
          elementaryScore: subject.elementaryScore,
          advancedScore: subject.advancedScore,
          active: !subject.active
        }
        : subject
      )
    case 'REMOVE_SUBJECT':
      return state.filter(
        subject => subject.id !== action.id
      )
    case 'UPDATE_SUBJECT':
      return state.map(
        subject => (subject.id === action.id) ? {
          id: action.id,
          name: action.name,
          type: subject.type,
          elementaryScore: action.elementaryScore,
          advancedScore: action.advancedScore,
          active: subject.active
        }
        : subject
      )
    default:
      return state
  }
}

export default subjects
