import React from 'react'
import PropTypes from 'prop-types'

import ScoreRangeInput from './ScoreRangeInput'
import ToggleSubject from './ToggleSubject'
import DeleteSubject from './DeleteSubject'
import ScoreTextInput from './ScoreTextInput'
import NameInput from './NameInput'

const Subject = ({ subject, subjectsType, subjectNumber, onChange, onToggleClick, onDelete }) => (
  <table className='table mb-0'>
    <tbody>
      <tr>
        <th>ID</th>
        <th>Przedmiot</th>
        <th>Wynik z matury podstawowej</th>
        <th>Wynik z matury rozszerzonej</th>
        <th>{/* {active ? 'Nie bierz pod uwagę': 'Bierz pod uwagę'} */}</th>
        <th>{/* Usuń {subjectsType === PRIMARY_SUBJECTS ? 'przedmiot' : 'język'} */}</th>
      </tr>
      <tr>
        <td>
          {subjectNumber}
        </td>
        <td>
          <NameInput subject={subject} subjectsType={subjectsType} onChange={onChange} />
        </td>
        <td>
          <ScoreRangeInput subject={subject} examType='elementary' subjectsType={subjectsType} onChange={onChange} />
          <ScoreTextInput subject={subject} examType='elementary' subjectsType={subjectsType} onChange={onChange} />
          { !!subject.elementaryScore && '%' }
        </td>
        <td>
          <ScoreRangeInput subject={subject} examType='advanced' subjectsType={subjectsType} onChange={onChange} />
          <ScoreTextInput subject={subject} examType='advanced' subjectsType={subjectsType} onChange={onChange} />
          { !!subject.advancedScore && '%' }
        </td>
        <td>
          <ToggleSubject
            id={subject.id}
            active={subject.active}
            subjectsType={subjectsType}
            onToggleClick={onToggleClick}
          />
        </td>
        <td>
          <DeleteSubject
            id={subject.id}
            subjectsType={subjectsType}
            onDelete={onDelete}
          />
        </td>
      </tr>
    </tbody>
  </table>
)

Subject.propTypes = {
  subject: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    elementaryScore: PropTypes.number.isRequired,
    advancedScore: PropTypes.number.isRequired,
    maxScore: PropTypes.shape({
      value: PropTypes.number.isRequired,
      formula: PropTypes.string.isRequired,
    }).isRequired,
    active: PropTypes.bool.isRequired
  }).isRequired,
  subjectsType: PropTypes.string.isRequired,
  subjectNumber: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
  onToggleClick: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
}

export default Subject
