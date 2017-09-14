import React from 'react'
import PropTypes from 'prop-types'
import { CSSTransitionGroup } from 'react-transition-group'

import SubjectContainer from '../../containers/SubjectContainer'

const SubjectList = ({ subjects, subjectsType }) => {
  return (
    <ul className='list-unstyled'>
      <CSSTransitionGroup transitionName='subject' transitionEnterTimeout={300} transitionLeaveTimeout={300}>
        {subjects.map((subject, i) =>
          <li key={subject.id} className={subject.active ? 'subject-active' : 'subject-not-active'}>
            <SubjectContainer
              subject={subject}
              subjectsType={subjectsType}
              subjectNumber={i + 1}
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
    maxScore: PropTypes.shape({
      value: PropTypes.number.isRequired,
      formula: PropTypes.string.isRequired,
    }).isRequired,
    active: PropTypes.bool.isRequired
  }).isRequired).isRequired,
  subjectsType: PropTypes.string.isRequired
}

export default SubjectList
