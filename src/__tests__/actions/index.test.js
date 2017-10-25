import { addSubject, updateSubject, toggleSubject, removeSubject, toggleScoreTable } from '../../actions/index'

describe('in action creators: ', () => {
  describe('addSubject', () => {
    it('should prepare proper action to dispatch', () => {
      expect(addSubject('primary')).toEqual({
        type: 'ADD_SUBJECT',
        payload: {
          id: expect.any(String),
          subjectsType: 'primary'
        }
      })
    })
  })
  describe('updateSubject', () => {
    it('should prepare proper action to dispatch when is given a new name', () => {
      expect(updateSubject({ id: '0', subjectsType: 'primary', name: 'Fizyka' })).toEqual({
        type: 'UPDATE_SUBJECT',
        payload: {
          id: '0',
          subjectsType: 'primary',
          updatedProperties: {
            name: 'Fizyka'
          }
        }
      })
    })

    it('should prepare proper action to dispatch when is given new scores', () => {
      expect(updateSubject({ id: '0', subjectsType: 'primary', elementaryScore: 0, advancedScore: 95 })).toEqual({
        type: 'UPDATE_SUBJECT',
        payload: {
          id: '0',
          subjectsType: 'primary',
          updatedProperties: {
            elementaryScore: 0,
            advancedScore: 95,
            maxScore: {
              value: 195,
              formula: 'B'
            }
          }
        }
      })
    })
  })

  describe('toggleSubject', () => {
    it('should prepare proper action to dispatch', () => {
      expect(toggleSubject('0', 'primary')).toEqual({
        type: 'TOGGLE_SUBJECT',
        payload: {
          id: '0',
          subjectsType: 'primary'
        }
      })
    })
  })

  describe('removeSubject', () => {
    it('should prepare proper action to dispatch', () => {
      expect(removeSubject('0', 'primary')).toEqual({
        type: 'REMOVE_SUBJECT',
        payload: {
          id: '0',
          subjectsType: 'primary'
        }
      })
    })
  })

  describe('removeScoreTable', () => {
    it('should prepare proper action to dispatch', () => {
      expect(toggleScoreTable()).toEqual({
        type: 'TOGGLE_SCORE_TABLE'
      })
    })
  })
})
