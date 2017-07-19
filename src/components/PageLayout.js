import React from 'react'
import Header from '../components/Header'
import Introduction from '../components/Introduction'
import SubjectsContainer from '../containers/SubjectsContainer'
import SubjectPickerContainer from '../containers/SubjectPickerContainer'
import Footer from '../components/Footer'
import { primarySubjects, lingualSubjects } from '../constants/SubjectTypes'

const PageLayout = () => (
  <div>
    <div className='container'>
      <Header />
      <Introduction />
      <SubjectsContainer subjectsType={primarySubjects} />
      <SubjectsContainer subjectsType={lingualSubjects} />
      <div className='m-4'>
        <h3>Wynik</h3>
        <hr />
        <SubjectPickerContainer subjectsType={primarySubjects} />
        <SubjectPickerContainer subjectsType={lingualSubjects} />
        {/* <Calculator /> */}
      </div>
    </div>
    <div>
      <Footer />
    </div>
  </div>
)

export default PageLayout
