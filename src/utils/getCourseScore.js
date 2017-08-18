const getCourseScore = ({ subjects: coursePrimary, faculty: courseFaculty }, { primary, lingual }) => {
  const primaryArray = primary.filter(subject => coursePrimary.indexOf(subject.name) !== -1 && subject.active)
  const lingualArray = lingual.filter(subject => subject.active)

  let maxPrimarySubject = _findBestSubject(primaryArray)
  let maxLingualSubject = _findBestSubject(lingualArray)

  if (courseFaculty === 'Humanistyczny' && maxLingualSubject.max.score * 4 > maxPrimarySubject.max.score) { // This one
    const filteredLingualArray = lingualArray.filter(subject => subject !== maxLingualSubject) // is for humane formula
                                                                                         // if it passes we remove it
    let maxPrimarySubject2 = maxLingualSubject                                           // from lingual subjects and
    let maxLingualSubject2 = _findBestSubject(filteredLingualArray)                      // treat as primary, then look
                                                                                         // for new best lingual.
    if (maxPrimarySubject2.max.score * 4 + maxLingualSubject2.max.score >
      maxPrimarySubject.max.score * 4 + maxLingualSubject.max.score) {                   // If the score is better
      return maxPrimarySubject2.max.score * 4 + maxLingualSubject2.max.score             // we return this score
    }
  }

  return maxPrimarySubject.max.score * 4 + maxLingualSubject.max.score                   // else we return regular one
}

const _findBestSubject = (subjectsArray) => {
  let bestSubject = { max: { score: 0 } }

  subjectsArray.forEach((subject) => {
    if (subject.max.score > bestSubject.max.score) bestSubject = subject
  })

  return bestSubject
}

export default getCourseScore
