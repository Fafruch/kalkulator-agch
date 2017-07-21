import React from 'react'

import Header from '../components/Header'
import Introduction from '../components/Introduction'
import Subjects from './Subjects'
import CalculatorContainer from '../containers/CalculatorContainer'
import Footer from '../components/Footer'
import { PRIMARY_SUBJECTS, LINGUAL_SUBJECTS } from '../constants/SubjectTypes'

const PageLayout = () => (
  <div>
    <div className='container'>
      <Header />
      <Introduction />
      <Subjects subjectsType={PRIMARY_SUBJECTS} />
      <Subjects subjectsType={LINGUAL_SUBJECTS} />
      <CalculatorContainer />
    </div>
    <div>
      <Footer />
    </div>
  </div>
)

export default PageLayout
