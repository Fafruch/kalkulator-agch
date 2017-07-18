/**
 * Created by Fafruch on 17/07/2017.
 */

import React from 'react'
import PropTypes from 'prop-types'
import Subject from './Subject'

const SubjectList = ({ subjects, onChange, onToggleClick, onDelete, subjectsType }) => (
  <ul>
    {subjects.map(subject =>
      subject.type === subjectsType ?
        <li key={subject.id}> {/* tylko dla iteracji, react tego potrzebuje */}
          <Subject
            id={subject.id}
            name={subject.name}
            elementaryScore={subject.elementaryScore}
            advancedScore={subject.advancedScore}
            active={subject.active}
            onChange={onChange}
            onToggleClick={onToggleClick}
            onDelete={onDelete}
            subjectsType={subjectsType}
          />
        </li>
        : null
    )}
  </ul>
)

SubjectList.propTypes = {
  subjects: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.string,
    elementaryScore: PropTypes.number.isRequired,
    advancedScore: PropTypes.number.isRequired,
    active: PropTypes.bool.isRequired
  }).isRequired).isRequired,
  onChange: PropTypes.func.isRequired,
  onToggleClick: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  subjectsType: PropTypes.string.isRequired
}

export default SubjectList
