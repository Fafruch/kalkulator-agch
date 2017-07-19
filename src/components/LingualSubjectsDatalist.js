import React from 'react'
import PropTypes from 'prop-types'

const LingualSubjectsDatalist = ({ subjectsType }) => (
  <datalist id={subjectsType}>
    <option value='Język angielski' />
    <option value='Język francuski' />
    <option value='Język hiszpański' />
    <option value='Język niemiecki' />
    <option value='Język rosyjski' />
    <option value='Język włoski' />
  </datalist>
)
LingualSubjectsDatalist.propTypes = {
  subjectsType: PropTypes.string.isRequired
}

export default LingualSubjectsDatalist
