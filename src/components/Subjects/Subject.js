import React from 'react'
import PropTypes from 'prop-types'

import ScoreRangeInput from './ScoreRangeInput'
import ToggleSubject from './ToggleSubject'
import DeleteSubject from './DeleteSubject'
import ScoreTextInput from './ScoreTextInput'
import NameInput from './NameInput'

const Subject = ({ subject, onChange, onToggleClick, onDelete, subjectsType, iterator }) => {
  return (
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
            {iterator}
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
}

Subject.propTypes = {
  subject: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  onToggleClick: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  subjectsType: PropTypes.string.isRequired,
  iterator: PropTypes.number.isRequired
}

export default Subject
