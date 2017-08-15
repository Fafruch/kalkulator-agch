const subjectsPicker = ({ primary, lingual }) => {
  const maxScoreWrapper = {
    primary: {},
    lingual: {}
  }

  let maxPrimaryScore = 0
  let maxLingualScore = 0
  let maxPrimarySubject
  let maxLingualSubject
  let emptySubject = {
    name: '',
    max: {
      score: 0,
      formula: ''
    }
  }

  maxPrimarySubject = maxLingualSubject = emptySubject

  primary.forEach((subject) => {
    if (subject.max.score > maxPrimaryScore && subject.active) {
      maxPrimaryScore = subject.max.score
      maxPrimarySubject = subject
    }
  })

  lingual.forEach((subject) => {
    if (subject.max.score > maxLingualScore && subject.active) {
      maxLingualScore = subject.max.score
      maxLingualSubject = subject
    }
  })

  if (maxLingualSubject.max.score * 4 > maxPrimarySubject.max.score) {
    let maxPrimaryScore2 = maxLingualScore
    let maxLingualScore2 = 0
    let maxPrimarySubject2 = maxLingualSubject
    let maxLingualSubject2 = emptySubject

    const filteredLingual = lingual.filter(subject => subject !== maxLingualSubject && subject.active)

    filteredLingual.forEach((subject) => {
      if (subject.max.score > maxLingualScore2) {
        maxLingualSubject2 = subject
        maxLingualScore2 = subject.max.score
      }
    })

    if (maxPrimaryScore2 * 4 + maxLingualScore2 > maxPrimaryScore * 4 + maxLingualScore) {
      maxScoreWrapper.primary = maxPrimarySubject2
      maxScoreWrapper.lingual = maxLingualSubject2

      return maxScoreWrapper
    }
  }

  maxScoreWrapper.primary = maxPrimarySubject
  maxScoreWrapper.lingual = maxLingualSubject

  return maxScoreWrapper
}

export default subjectsPicker
