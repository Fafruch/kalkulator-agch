import { PRIMARY_SUBJECTS } from '../constants/SubjectTypes'

const getSubjectScore = ({ elementaryScore, advancedScore }, subjectsType) => {
  const scoreObj = {
    computedScore: 0,
    formula: ''
  }

  const scoreA = elementaryScore + advancedScore
  let scoreB = 0

  if (advancedScore <= 30) {
    scoreB = advancedScore
  } else if (advancedScore <= 80) {
    scoreB = advancedScore + (2 * (advancedScore - 30))
  } else {
    scoreB = advancedScore + 100
  }

  if (scoreA > scoreB) {
    scoreObj.computedScore = scoreA
    scoreObj.formula = 'A'
  } else if (scoreA === scoreB) {
    scoreObj.computedScore = scoreA // moze byc tez scoreB, bez znaczenia
    scoreObj.formula = 'A/B'
  } else {
    scoreObj.computedScore = scoreB
    scoreObj.formula = 'B'
  }

  if (subjectsType === PRIMARY_SUBJECTS) scoreObj.computedScore *= 4

  return scoreObj
}

export default getSubjectScore
