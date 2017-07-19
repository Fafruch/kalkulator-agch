import React from 'react'
import PropTypes from 'prop-types'
import pointsCalculator from '../pointsCalculator'
import { primarySubjects } from '../constants/SubjectTypes'

const SubjectPicker = ({ subjects, subjectsType }) => {
  /* Filtruje na jeden z typow przedmiotow i odrzucam nieaktywne */
  let subjectArray = subjects.filter(subject => subject.active && (subject.type === subjectsType))
  if (subjectArray.length > 0) {
    /* Zmienna odpowiedzialna za przechowywanie najlepszego przedmiotu,
     na poczatku znajduje sie w niej pierwszy mozliwy przedmiot */
    let maxScoreSubject = subjectArray[0]
    /* Zmienna przechowuje obliczony wynik + rodzaj rownania (najlepszego przedmiotu) */
    let maxScoreObj = pointsCalculator(maxScoreSubject.elementaryScore, maxScoreSubject.advancedScore)
    /* Przechodze przez tablice przediotow w poszukiwaniu najbardziej wartosciowego */
    subjectArray.forEach((subject) => {
      let currentScoreObj = pointsCalculator(subject.elementaryScore, subject.advancedScore)
      if (currentScoreObj.computedScore > maxScoreObj.computedScore) {
        /* Zapisuje go do zmiennych */
        maxScoreSubject = subject
        maxScoreObj = currentScoreObj
      }
    })
    if (subjectsType === primarySubjects) {
      maxScoreObj.computedScore *= 4
    }
    return (
      <div>
        <p>
          Maksymalny wynik dla {subjectsType === primarySubjects ? 'przedmiotu głównego' : 'języka'} to
          &nbsp;<b>{maxScoreObj.computedScore}</b> punktów dla przedmiotu
          &nbsp;<b>{maxScoreSubject.name === '' ? 'przedmiotu bez nazwy' : maxScoreSubject.name}</b>
          &nbsp;obliczony zgodnie z
          {maxScoreObj.formula === 'A/B' ? ' formułami A lub B (bez znaczenia)' : ' formułą ' + maxScoreObj.formula}.
        </p>
      </div>
    )
  } else {
    return null
  }
}

SubjectPicker.propTypes = {
  subjects: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.string,
    elementaryScore: PropTypes.number.isRequired,
    advancedScore: PropTypes.number.isRequired,
    active: PropTypes.bool.isRequired
  }).isRequired).isRequired,
  subjectsType: PropTypes.string.isRequired
}

export default SubjectPicker
