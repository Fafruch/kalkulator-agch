const subjectsPicker = ({ primary, lingual }) => {
  const maxScoreWrapper = {}
  const primaryArray = primary.filter(subject => subject.active)
  const lingualArray = lingual.filter(subject => subject.active)

  let maxPrimarySubject = _findBestSubject(primaryArray)
  let maxLingualSubject = _findBestSubject(lingualArray)

  if (maxLingualSubject.max.score * 4 > maxPrimarySubject.max.score) {               // This one is for humane formula
    const filteredLingualArray = lingual.filter(subject => subject !== maxLingualSubject) // if it passes we remove it
                                                                                     // from lingual subjects and treat
    let maxPrimarySubject2 = maxLingualSubject                                       // as primary, then look for new
    let maxLingualSubject2 = _findBestSubject(filteredLingualArray)                  // best lingual.

    if (maxPrimarySubject2.max.score * 4 + maxLingualSubject2.max.score >            // If the score is better
      maxPrimarySubject.max.score * 4 + maxLingualSubject.max.score) {               // we return this subject
      maxScoreWrapper.primary = maxPrimarySubject2
      maxScoreWrapper.lingual = maxLingualSubject2

      return maxScoreWrapper
    }
  }

  maxScoreWrapper.primary = maxPrimarySubject
  maxScoreWrapper.lingual = maxLingualSubject

  return maxScoreWrapper                                                             // else we return regular one
}

const _findBestSubject = (subjectsArray) => {
  let bestSubject = {
    name: '',
    max: {
      score: 0,
      formula: ''
    }
  }

  subjectsArray.forEach((subject) => {
    if (subject.max.score > bestSubject.max.score) bestSubject = subject
  })

  return bestSubject
}

export default subjectsPicker
