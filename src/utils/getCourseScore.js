const getCourseScore = ({ subjects: coursePrimary }, { name: courseFaculty }, { primary, lingual }) => {
  const primaryArray = primary.filter(subject => coursePrimary.indexOf(subject.name) !== -1 && subject.active)
  const lingualArray = lingual.filter(subject => subject.active)

  const bestPrimary = _findBestSubject(primaryArray)
  const bestLingual = _findBestSubject(lingualArray)

  const maxScore = bestPrimary.maxScore.value * 4 + bestLingual.maxScore.value

  // This one is for humane formula only, if the best lingual score is better than primary score, we remove it
  // from lingual subjects and treat as primary, then look for new (second) best lingual.
  // If the lingual * 4 + second best lingual is better than primary * 4 + lingual, we got the highest possible score,
  // else we return primary * 4 + lingual as it's better

  if (courseFaculty === 'Humanistyczny' && bestLingual.maxScore.value * 4 > bestPrimary.maxScore.value) {
    const filteredLingualArray = lingualArray.filter(subject => subject !== bestLingual)

    const bestLingualAsPrimary = bestLingual
    const secondBestLingual = _findBestSubject(filteredLingualArray)

    const humaneMaxScore = bestLingualAsPrimary.maxScore.value * 4 + secondBestLingual.maxScore.value

    if (humaneMaxScore > maxScore) {
      return humaneMaxScore
    }
  }

  return maxScore
}

const _findBestSubject = (subjectsArray) => {
  let bestSubject = { maxScore: { value: 0 } }

  subjectsArray.forEach((subject) => {
    if (subject.maxScore.value > bestSubject.maxScore.value) bestSubject = subject
  })

  return bestSubject
}

export default getCourseScore
