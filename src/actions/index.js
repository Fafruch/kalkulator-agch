import { v4 } from 'uuid'

import { ADD_SUBJECT, REMOVE_SUBJECT, TOGGLE_SUBJECT,
  UPDATE_SUBJECT, TOGGLE_SCORE_TABLE } from '../constants/actionTypes'
import getSubjectScore from '../utils/getSubjectScore'

export const addSubject = (subjectsType) => ({
  type: ADD_SUBJECT,
  payload: {
    id: v4(),
    subjectsType
  }
})

export const updateSubject = ({ id, subjectsType, ...updatedProperties }) => {
  if (typeof updatedProperties.elementaryScore !== 'undefined' &&
    typeof updatedProperties.advancedScore !== 'undefined') {
    updatedProperties.maxScore = getSubjectScore(updatedProperties.elementaryScore, updatedProperties.advancedScore)
  }

  return {
    type: UPDATE_SUBJECT,
    payload: {
      id,
      subjectsType,
      updatedProperties
    }
  }
}

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
  type: TOGGLE_SCORE_TABLE
})
