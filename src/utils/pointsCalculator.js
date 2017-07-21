const pointsCalculator = (elementaryScore, advancedScore) => {
  const scoreObj = {
    computedScore: null,
    formula: null
  }

  const scoreA = elementaryScore + advancedScore
  let scoreB = 0

  if (advancedScore !== 0) {
    if (advancedScore <= 30) {
      scoreB = advancedScore
    } else if (advancedScore <= 80) {
      scoreB = advancedScore + (2 * (advancedScore - 30))
    } else {
      scoreB = advancedScore + 100
    }
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

  return scoreObj
}

export default pointsCalculator
