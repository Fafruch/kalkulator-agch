import pointsCalculator from './pointsCalculator'
import { primarySubjects } from '../constants/SubjectTypes'

const subjectPickerUtil = (subjects, subjectsType) => {

  // Filtruje przedmioty do danych przez subjectsType i aktywnych
  let subjectsArray = subjects.filter(subject => subject.active && (subject.type === subjectsType))

  if (subjectsArray.length === 0) {
    return null
  } else {

    let maxScoreWrapper = {
      subject: null,
      computedScore: null,
      formula: null
    }

    // Zmienna odpowiedzialna za przechowywanie najlepszego przedmiotu,
    // na poczatku znajduje sie w niej pierwszy mozliwy przedmiot
    let maxScoreSubject = subjectsArray[0]

    // Zmienna przechowuje obliczony wynik + rodzaj rownania (najlepszego przedmiotu)
    let maxScoreObj = pointsCalculator(maxScoreSubject.elementaryScore, maxScoreSubject.advancedScore)

    // Przechodze przez tablice przediotow w poszukiwaniu najbardziej wartosciowego
    subjectsArray.forEach((subject) => {
      let currentScoreObj = pointsCalculator(subject.elementaryScore, subject.advancedScore)

      if (currentScoreObj.computedScore > maxScoreObj.computedScore) {
        // Zapisuje go do zmiennych
        maxScoreSubject = subject
        maxScoreObj = currentScoreObj
      }
    })
    // Przepisuje do wrappera przedmiot, jego punkty oraz wzor zgodnie z ktorym zostal wyliczony maksymalny wynik
    maxScoreWrapper.subject = maxScoreSubject

    if (subjectsType === primarySubjects) {
      maxScoreWrapper.computedScore = maxScoreObj.computedScore * 4
    } else {
      maxScoreWrapper.computedScore = maxScoreObj.computedScore
    }

    maxScoreWrapper.formula = maxScoreObj.formula

    return maxScoreWrapper
  }
}

export default subjectPickerUtil
