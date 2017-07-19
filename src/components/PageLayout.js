/**
 * Created by Fafruch on 18/07/2017.
 */
import React from 'react'
import Header from '../components/Header'
import SubjectsContainer from '../containers/SubjectsContainer'
import Footer from '../components/Footer'
import { primarySubjects, lingualSubjects } from '../constants/SubjectTypes'

const PageLayout = () => (
  <div className='container'>
    <Header />
    <SubjectsContainer subjectsType={primarySubjects} />
    <SubjectsContainer subjectsType={lingualSubjects} />
    <Footer />
  </div>
)

export default PageLayout
