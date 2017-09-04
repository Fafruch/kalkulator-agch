const getCourseScore = ({ subjects: coursePrimary, faculty: courseFaculty }, { primary, lingual }) => {
  const primaryArray = primary.filter(subject => coursePrimary.indexOf(subject.name) !== -1 && subject.active)
  const lingualArray = lingual.filter(subject => subject.active)

  let maxPrimarySubject = _findBestSubject(primaryArray)
  let maxLingualSubject = _findBestSubject(lingualArray)

  // This one is for humane formula only, if the best lingual score is better than primary score, we remove it
  // from lingual subjects and treat as primary, then look for new (second) best lingual.
  // If the lingual * 4 + second best lingual is better than primary * 4 + lingual, we got the highest possible score,
  // else we return primary * 4 + lingual as it's better

  if (courseFaculty === 'Humanistyczny' && maxLingualSubject.maxScore.value * 4 > maxPrimarySubject.maxScore.value) {
    const filteredLingualArray = lingualArray.filter(subject => subject !== maxLingualSubject)

    let maxPrimarySubject2 = maxLingualSubject
    let maxLingualSubject2 = _findBestSubject(filteredLingualArray)

    if (maxPrimarySubject2.maxScore.value * 4 + maxLingualSubject2.maxScore.value >
      maxPrimarySubject.maxScore.value * 4 + maxLingualSubject.maxScore.value) {
      return maxPrimarySubject2.maxScore.value * 4 + maxLingualSubject2.maxScore.value
    }
  }

  return maxPrimarySubject.maxScore.value * 4 + maxLingualSubject.maxScore.value
}

const _findBestSubject = (subjectsArray) => {
  let bestSubject = { maxScore: { value: 0 } }

  subjectsArray.forEach((subject) => {
    if (subject.maxScore.value > bestSubject.maxScore.value) bestSubject = subject
  })

  return bestSubject
}

export default getCourseScore
