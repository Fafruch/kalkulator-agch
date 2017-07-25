import getSubjectScore from '../../utils/getSubjectScore'

const subjectPicker = (subjects, subjectsType) => {

  const subjectsArray = subjects.filter(subject => subject.active)

  const maxScoreWrapper = {
    subject: {},
    computedScore: 0,
    formula: '',
    isEmpty: !subjectsArray.length
  }

  return subjectsArray.reduce((currentMaxWrapper, subject) => {
    const currentScoreObj = getSubjectScore(subject, subjectsType)

    return (currentScoreObj.computedScore > currentMaxWrapper.computedScore)
      ? { subject, ...currentScoreObj, isEmpty: false }
      : currentMaxWrapper
  }, maxScoreWrapper)
}

export default subjectPicker
