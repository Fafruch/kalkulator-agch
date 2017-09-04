const subjectsPicker = ({ primary, lingual }) => {
  const maxScoreWrapper = {}
  const primaryArray = primary.filter(subject => subject.active)
  const lingualArray = lingual.filter(subject => subject.active)

  let maxPrimarySubject = _findBestSubject(primaryArray)
  let maxLingualSubject = _findBestSubject(lingualArray)

  // This one is for humane formula only, if the best lingual score is better than primary score, we remove it
  // from lingual subjects and treat as primary, then look for new (second) best lingual.
  // If the lingual * 4 + second best lingual is better than primary * 4 + lingual, we got the highest possible score,
  // else we return wrapper with regular primary and lingual as they provide better score

  if (maxLingualSubject.maxScore.value * 4 > maxPrimarySubject.maxScore.value) {
    const filteredLingualArray = lingual.filter(subject => subject !== maxLingualSubject)

    let maxPrimarySubject2 = maxLingualSubject
    let maxLingualSubject2 = _findBestSubject(filteredLingualArray)

    if (maxPrimarySubject2.maxScore.value * 4 + maxLingualSubject2.maxScore.value >
      maxPrimarySubject.maxScore.value * 4 + maxLingualSubject.maxScore.value) {
      maxScoreWrapper.primary = maxPrimarySubject2
      maxScoreWrapper.lingual = maxLingualSubject2

      return maxScoreWrapper
    }
  }

  maxScoreWrapper.primary = maxPrimarySubject
  maxScoreWrapper.lingual = maxLingualSubject

  return maxScoreWrapper
}

const _findBestSubject = (subjectsArray) => {
  let bestSubject = {
    name: '',
    maxScore: {
      value: 0,
      formula: ''
    }
  }

  subjectsArray.forEach((subject) => {
    if (subject.maxScore.value > bestSubject.maxScore.value) bestSubject = subject
  })

  return bestSubject
}

export default subjectsPicker
