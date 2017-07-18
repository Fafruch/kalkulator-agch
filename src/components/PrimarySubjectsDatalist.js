/**
 * Created by Fafruch on 18/07/2017.
 */

import React from 'react'
import PropTypes from 'prop-types'

const PrimarySubjectsDatalist = ({ subjectsType }) => (
  <datalist id={subjectsType}>
    <option value='Biologia' />
    <option value='Chemia' />
    <option value='Fizyka' />
    <option value='Geografia' />
    <option value='Informatyka' />
    <option value='Matematyka' />
  </datalist>
)
PrimarySubjectsDatalist.propTypes = {
  subjectsType: PropTypes.string.isRequired
}

export default PrimarySubjectsDatalist
