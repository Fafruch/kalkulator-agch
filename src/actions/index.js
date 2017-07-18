let nextSubjectId = 0

export const addSubject = (subjectsType) => ({
  type: 'ADD_SUBJECT',
  id: nextSubjectId++,
  subjectsType
})

export const updateSubject = (id, name, elementaryScore, advancedScore) => ({
  type: 'UPDATE_SUBJECT',
  id,
  name,
  elementaryScore,
  advancedScore
})

export const removeSubject = (id) => ({
  type: 'REMOVE_SUBJECT',
  id
})

export const toggleSubject = (id) => ({
  type: 'TOGGLE_SUBJECT',
  id
})
