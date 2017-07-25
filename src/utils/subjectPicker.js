import getSubjectScore from './getSubjectScore'

const subjectPicker = (subjects, subjectsType) => {

  let maxScoreWrapper = {
    subject: {},
    computedScore: 0,
    formula: '',
    isEmpty: false
  }

  const subjectsArray = subjects.filter(subject => subject.active && (subject.type === subjectsType))

  if (!subjectsArray.length) {
    maxScoreWrapper = { ...maxScoreWrapper, isEmpty: true }
    return maxScoreWrapper
  }

  return subjectsArray.reduce((currentMaxWrapper, subject) => {
    const currentScoreObj = getSubjectScore(subject)

    return (currentScoreObj.computedScore > currentMaxWrapper.computedScore)
      ? { subject, ...currentScoreObj, isEmpty: false }
      : currentMaxWrapper
  }, maxScoreWrapper)
}

export default subjectPicker
