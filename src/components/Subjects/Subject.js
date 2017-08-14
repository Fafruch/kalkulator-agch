import React from 'react'
import PropTypes from 'prop-types'

import ToggleSubject from './ToggleSubject'
import DeleteSubject from './DeleteSubject'
import Datalist from './Datalist'

const Subject = ({ id, name, elementaryScore, advancedScore, active,
                 onChange, onToggleClick, onDelete, subjectsType, iterator }) => {
  const formInput = {
    name,
    elementaryScoreRange: elementaryScore,
    elementaryScoreText: elementaryScore,
    advancedScoreRange: advancedScore,
    advancedScoreText: advancedScore
  }

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
              list={subjectsType}
              ref={node => { formInput.name = node }}
              defaultValue={name}
              onChange={() => onChange(id, formInput.name.value, elementaryScore, advancedScore, subjectsType)}
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
              ref={node => { formInput.elementaryScoreRange = node }}
              onChange={() => onChange(id, name, +formInput.elementaryScoreRange.value, advancedScore, subjectsType)}
              className='subject-input-range'
            />
            <input
              type='text'
              value={elementaryScore || ''}
              placeholder='Brak'
              ref={node => { formInput.elementaryScoreText = node }}
              onChange={() => {
                if (!isNaN(formInput.elementaryScoreText.value)) {
                  onChange(
                    id,
                    name,
                    +formInput.elementaryScoreText.value > 100 ? 100 : +formInput.elementaryScoreText.value,
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
              ref={node => { formInput.advancedScoreRange = node }}
              onChange={() => onChange(id, name, elementaryScore, +formInput.advancedScoreRange.value, subjectsType)}
              className='subject-input-range'
            />
            <input
              type='text'
              value={advancedScore || ''}
              placeholder='Brak'
              ref={node => { formInput.advancedScoreText = node }}
              onChange={() => {
                if (!isNaN(formInput.advancedScoreText.value)) {
                  onChange(
                    id,
                    name,
                    elementaryScore,
                    +formInput.advancedScoreText.value > 100 ? 100 : +formInput.advancedScoreText.value,
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
