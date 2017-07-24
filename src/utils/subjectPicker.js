import getSubjectScore from './getSubjectScore'

const subjectPicker = (subjects, subjectsType) => {

  let maxScoreWrapper = {
    subject: {},
    computedScore: 0,
    formula: ''
  }

  const subjectsArray = subjects.filter(subject => subject.active && (subject.type === subjectsType))

  return subjectsArray.reduce((currentMaxWrapper, subject) => {
    const currentScoreObj = getSubjectScore(subject)

    return (currentScoreObj.computedScore > currentMaxWrapper.computedScore)
      ? { subject, ...currentScoreObj }
      : currentMaxWrapper
  }, maxScoreWrapper)
}

export default subjectPicker
