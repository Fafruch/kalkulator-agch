import { v4 } from 'uuid'

import { ADD_SUBJECT, REMOVE_SUBJECT, TOGGLE_SUBJECT, UPDATE_SUBJECT } from '../constants/ActionTypes'

export const addSubject = (subjectsType) => ({
  type: ADD_SUBJECT,
  payload: {
    id: v4(),
    subjectsType
  }
})

export const updateSubject = (id, whatsUpdated, newValue, subjectsType) => ({
  type: UPDATE_SUBJECT,
  payload: {
    id,
    whatsUpdated,
    newValue,
    subjectsType
  }
})

export const removeSubject = (id, subjectsType) => ({
  type: REMOVE_SUBJECT,
  payload: {
    id,
    subjectsType
  }
})

export const toggleSubject = (id, subjectsType) => ({
  type: TOGGLE_SUBJECT,
  payload: {
    id,
    subjectsType
  }
})
