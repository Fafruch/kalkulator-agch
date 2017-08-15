const getCourseScore = ({ subjects: coursePrimary, faculty: courseFaculty }, { primary, lingual }) => {
  let maxPrimaryScore = 0
  let maxLingualScore = 0

  let maxLingualSubject = {}

  primary.forEach((subject) => {
    if (subject.max.score > maxPrimaryScore && subject.active && coursePrimary.indexOf(subject.name) !== -1) {
      maxPrimaryScore = subject.max.score
    }
  })

  lingual.forEach((subject) => {
    if (subject.max.score > maxLingualScore && subject.active) {
      maxLingualSubject = subject
      maxLingualScore = subject.max.score
    }
  })

  if (courseFaculty === 'Humanistyczny' && maxLingualScore * 4 > maxPrimaryScore) {
    let maxPrimaryScore2 = maxLingualScore
    let maxLingualScore2 = 0

    const filteredLingual = lingual.filter(subject => subject !== maxLingualSubject && subject.active)

    filteredLingual.forEach((subject) => {
      if (subject.max.score > maxLingualScore2) {
        maxLingualScore2 = subject.max.score
      }
    })

    if (maxPrimaryScore2 * 4 + maxLingualScore2 > maxPrimaryScore * 4 + maxLingualScore) {
      return maxPrimaryScore2 * 4 + maxLingualScore2
    }
  }

  return maxPrimaryScore * 4 + maxLingualScore
}

export default getCourseScore
