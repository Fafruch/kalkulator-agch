import React from 'react'
import PropTypes from 'prop-types'
import { CSSTransitionGroup } from 'react-transition-group'

import Subject from './Subject'

const SubjectList = ({ subjects, onChange, onToggleClick, onDelete, subjectsType }) => {
  return (
    <ul className='list-unstyled'>
      <CSSTransitionGroup transitionName='subject' transitionEnterTimeout={300} transitionLeaveTimeout={300}>
        {subjects.map((subject, i) =>
          <li
            key={subject.id}
            className={subject.active ? 'subject-active' : 'subject-not-active'}
          >
            <Subject
              {...subject}
              onChange={onChange}
              onToggleClick={onToggleClick}
              onDelete={onDelete}
              subjectsType={subjectsType}
              iterator={i + 1}
            />
          </li>
        )}
      </CSSTransitionGroup>
    </ul>
  )
}

SubjectList.propTypes = {
  subjects: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
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
