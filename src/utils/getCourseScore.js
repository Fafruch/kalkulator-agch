const getCourseScore = ({ subjects: courseSubjects, faculty: courseFaculty }, { primary, lingual }) => {
  let maxPrimaryScore = 0
  let maxLingualScore = 0

  let maxLingualSubject = null

  primary.forEach((subject) => {
    if (subject.maxScore.computedScore > maxPrimaryScore &&
      subject.active &&
      courseSubjects.indexOf(subject.name) !== -1) {
      maxPrimaryScore = subject.maxScore.computedScore
    }
  })

  lingual.forEach((subject) => {
    if (subject.maxScore.computedScore > maxLingualScore && subject.active) {
      maxLingualSubject = subject
      maxLingualScore = subject.maxScore.computedScore
    }
  })

  if (courseFaculty === 'Humanistyczny' && maxLingualScore * 4 > maxPrimaryScore) {
    maxLingualScore = 0

    const newLingual = lingual.filter(subject => subject !== maxLingualSubject && subject.active)

    newLingual.forEach((subject) => {
      if (subject.maxScore.computedScore > maxLingualScore) {
        maxLingualSubject = subject
        maxLingualScore = subject.maxScore.computedScore
      }
    })
  }

  return maxPrimaryScore * 4 + maxLingualScore
}

export default getCourseScore
