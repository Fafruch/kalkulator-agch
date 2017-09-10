const getSubjectScore = (elementaryScore, advancedScore) => {
  const scoreObj = {
    value: 0,
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
    scoreObj.value = scoreA
    scoreObj.formula = 'A'
  } else if (scoreA === scoreB) {
    scoreObj.value = scoreA // or scoreB, it doesn't matter
    scoreObj.formula = 'A/B'
  } else {
    scoreObj.value = scoreB
    scoreObj.formula = 'B'
  }

  return scoreObj
}

export default getSubjectScore
