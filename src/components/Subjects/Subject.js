import React from 'react'
import PropTypes from 'prop-types'

import ToggleSubject from './ToggleSubject'
import DeleteSubject from './DeleteSubject'
import Datalist from './Datalist'

const Subject = ({ id, name, elementaryScore, advancedScore, active,
                 onChange, onToggleClick, onDelete, subjectsType, iterator }) => {
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
            <input
              type='text'
              value={name}
              list={subjectsType}
              onChange={(event) => onChange(id, event.target.value, elementaryScore, advancedScore, subjectsType)}
              className={active ? 'subject-active subject-input-name' : 'subject-not-active subject-input-name'}
            />

            <Datalist subjectsType={subjectsType} />
          </td>
          <td>
            <input
              type='range'
              value={elementaryScore}
              min='0'
              max='100'
              onChange={(event) => onChange(id, name, event.target.value, advancedScore, subjectsType)}
              className='subject-input-range'
            />
            <input
              type='text'
              value={elementaryScore || ''}
              placeholder='Brak'
              onChange={(event) => {
                const inputScore = event.target.value
                if (!isNaN(inputScore)) {
                  onChange(
                    id,
                    name,
                    +inputScore > 100 ? 100 : +inputScore,
                    advancedScore,
                    subjectsType
                  )
                }
              }}
              className='subject-input-text'
            />
            { elementaryScore ? '%' : null }
          </td>
          <td>
            <input
              type='range'
              value={advancedScore}
              min='0'
              max='100'
              onChange={(event) => onChange(id, name, elementaryScore, event.target.value, subjectsType)}
              className='subject-input-range'
            />
            <input
              type='text'
              value={advancedScore || ''}
              placeholder='Brak'
              onChange={(event) => {
                const inputScore = event.target.value
                if (!isNaN(inputScore)) {
                  onChange(
                    id,
                    name,
                    elementaryScore,
                    +inputScore > 100 ? 100 : +inputScore,
                    subjectsType
                  )
                }
              }}
              className='subject-input-text'
            />
            { advancedScore ? '%' : null }
          </td>
          <td>
            <ToggleSubject
              id={id}
              active={active}
              subjectsType={subjectsType}
              onToggleClick={onToggleClick}
            />
          </td>
          <td>
            <DeleteSubject
              id={id}
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
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  elementaryScore: PropTypes.number.isRequired,
  advancedScore: PropTypes.number.isRequired,
  active: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  onToggleClick: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  subjectsType: PropTypes.string.isRequired,
  iterator: PropTypes.number.isRequired
}

export default Subject
