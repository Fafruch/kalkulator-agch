/**
 * Created by Fafruch on 18/07/2017.
 */
import React from 'react'
import Header from '../components/Header'
import SubjectsContainer from '../containers/SubjectsContainer'
import Footer from '../components/Footer'

const PageLayout = () => (
  <div>
    <Header />
    <SubjectsContainer subjectsType='Główne' />
    <SubjectsContainer subjectsType='Językowe' />
    <Footer />
  </div>
)

export default PageLayout
