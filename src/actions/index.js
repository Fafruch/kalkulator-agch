import { v4 } from 'uuid'

import { ADD_SUBJECT, REMOVE_SUBJECT, TOGGLE_SUBJECT, UPDATE_SUBJECT_NAME, UPDATE_SUBJECT_SCORE,
  TOGGLE_SCORE_TABLE } from '../constants/ActionTypes'
import getSubjectScore from '../utils/getSubjectScore'

export const addSubject = (subjectsType) => ({
  type: ADD_SUBJECT,
  payload: {
    id: v4(),
    subjectsType
  }
})

export const updateSubjectName = (id, name, subjectsType) => ({
  type: UPDATE_SUBJECT_NAME,
  payload: {
    id,
    name,
    subjectsType
  }
})
export const updateSubjectScore = (id, elementaryScore, advancedScore, subjectsType) => ({
  type: UPDATE_SUBJECT_SCORE,
  payload: {
    id,
    elementaryScore,
    advancedScore,
    maxScore: getSubjectScore(elementaryScore, advancedScore),
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

export const toggleScoreTable = () => ({
  type: TOGGLE_SCORE_TABLE,
  payload: {}
})
