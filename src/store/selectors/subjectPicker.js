const subjectPicker = ({ primary, lingual }) => {
  let maxScoreWrapper = {
    primary: {},
    lingual: {}
  }

  let maxPrimaryScore = 0
  let maxLingualScore = 0

  let maxPrimarySubject = {
    name: '',
    maxScore: {
      computedScore: 0,
      formula: ''
    }
  }
  let maxLingualSubject = {
    name: '',
    maxScore: {
      computedScore: 0,
      formula: ''
    }
  }

  primary.forEach((subject) => {
    if (subject.maxScore.computedScore > maxPrimaryScore && subject.active) {
      maxPrimaryScore = subject.maxScore.computedScore
      maxPrimarySubject = subject
    }
  })

  lingual.forEach((subject) => {
    if (subject.maxScore.computedScore > maxLingualScore && subject.active) {
      maxLingualScore = subject.maxScore.computedScore
      maxLingualSubject = subject
    }
  })

  if (maxLingualSubject.maxScore.computedScore * 4 > maxPrimarySubject.maxScore.computedScore) {
    let maxPrimaryScore2 = maxLingualScore
    let maxLingualScore2 = 0
    let maxPrimarySubject2 = maxLingualSubject
    let maxLingualSubject2 = {
      name: '',
      maxScore: {
        computedScore: 0,
        formula: ''
      }
    }

    const newLingual = lingual.filter(subject => subject !== maxLingualSubject && subject.active)
    newLingual.forEach((subject) => {
      if (subject.maxScore.computedScore > maxLingualScore2) {
        maxLingualSubject2 = subject
        maxLingualScore2 = subject.maxScore.computedScore
      }
    })

    if (maxPrimaryScore * 4 + maxLingualScore < maxPrimaryScore2 * 4 + maxLingualScore2) {
      maxScoreWrapper = {
        primary: maxPrimarySubject2,
        lingual: maxLingualSubject2
      }
      return maxScoreWrapper
    }
  }

  maxScoreWrapper = {
    primary: maxPrimarySubject,
    lingual: maxLingualSubject
  }

  return maxScoreWrapper
}

export default subjectPicker
