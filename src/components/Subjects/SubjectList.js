import React from 'react'
import PropTypes from 'prop-types'
import Subject from './Subject'
import { CSSTransitionGroup } from 'react-transition-group'

const SubjectList = ({ subjects, onChange, onToggleClick, onDelete, subjectsType }) => {
  let i = 1
  return (
    <ul className='list-unstyled'>
      <CSSTransitionGroup transitionName='subject' transitionEnterTimeout={300} transitionLeaveTimeout={300}>
        {subjects.map(subject =>
          subject.type === subjectsType ?
            <li
              key={subject.id} // tylko dla iteracji, react tego potrzebuje
              className={subject.active ? 'subject-active' : 'subject-not-active'}
            >
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
                iterator={i++}
              />
            </li>
            : null
        )}
      </CSSTransitionGroup>
    </ul>
  )
}

SubjectList.propTypes = {
  subjects: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
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
