import React from 'react'
import PropTypes from 'prop-types'

import { PRIMARY_SUBJECTS } from '../../constants/SubjectTypes'

const Datalist = ({ subjectsType }) => {
  if (subjectsType === PRIMARY_SUBJECTS) {
    return (
      <datalist id={subjectsType}>
        <option value='Biologia' />
        <option value='Chemia' />
        <option value='Fizyka' />
        <option value='Geografia' />
        <option value='Informatyka' />
        <option value='Matematyka' />

        <option value='Filozofia' />
        <option value='Historia' />
        <option value='Historia sztuki' />
        <option value='Wiedza o społeczeństwie' />
        <option value='Język polski' />
      </datalist>
    )
  }
  return (
    <datalist id={subjectsType}>
      <option value='Język angielski' />
      <option value='Język francuski' />
      <option value='Język hiszpański' />
      <option value='Język niemiecki' />
      <option value='Język rosyjski' />
      <option value='Język włoski' />
    </datalist>
  )
}
Datalist.propTypes = {
  subjectsType: PropTypes.string.isRequired
}

export default Datalist
