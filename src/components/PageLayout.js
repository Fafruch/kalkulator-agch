import React from 'react'
import Header from '../components/Header'
import Introduction from '../components/Introduction'
import SubjectsContainer from '../containers/SubjectsContainer'
import CalculatorContainer from '../containers/CalculatorContainer'
import Footer from '../components/Footer'
import { primarySubjects, lingualSubjects } from '../constants/SubjectTypes'

const PageLayout = () => (
  <div>
    <div className='container'>
      <Header />
      <Introduction />
      <SubjectsContainer subjectsType={primarySubjects} />
      <SubjectsContainer subjectsType={lingualSubjects} />
        <CalculatorContainer />
    </div>
    <div>
      <Footer />
    </div>
  </div>
)

export default PageLayout
