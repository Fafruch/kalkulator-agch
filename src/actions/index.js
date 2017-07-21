import { v4 } from 'uuid'

import { ADD_SUBJECT, REMOVE_SUBJECT, TOGGLE_SUBJECT, UPDATE_SUBJECT } from '../constants/ActionTypes'

export const addSubject = (subjectsType) => ({
  type: ADD_SUBJECT,
  payload: {
    id: v4(),
    subjectsType
  }
})

export const updateSubject = (id, name, elementaryScore, advancedScore) => ({
  type: UPDATE_SUBJECT,
  payload: {
    id,
    name,
    elementaryScore,
    advancedScore
  }
})

export const removeSubject = (id) => ({
  type: REMOVE_SUBJECT,
  payload: {
    id
  }
})

export const toggleSubject = (id) => ({
  type: TOGGLE_SUBJECT,
  payload: {
    id
  }
})
