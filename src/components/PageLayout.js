/**
 * Created by Fafruch on 18/07/2017.
 */
import React from 'react'
import Header from '../components/Header'
import Introduction from '../components/Introduction'
import SubjectsContainer from '../containers/SubjectsContainer'
import Footer from '../components/Footer'
import { primarySubjects, lingualSubjects } from '../constants/SubjectTypes'

const PageLayout = () => (
  <div>
    <div className='container'>
      <Header />
      <Introduction />
      <SubjectsContainer subjectsType={primarySubjects} />
      <SubjectsContainer subjectsType={lingualSubjects} />
    </div>
    <div>
      <Footer />
    </div>
  </div>
)

export default PageLayout
