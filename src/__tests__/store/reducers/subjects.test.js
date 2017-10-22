import subjects from '../../../store/reducers/subjects'
import { ADD_SUBJECT, UPDATE_SUBJECT, TOGGLE_SUBJECT, REMOVE_SUBJECT } from '../../../constants/actionTypes'

describe('subjects reducer', () => {
  it('should handle initial state', () => {
    expect(subjects(undefined, { type: '@@INIT' })).toEqual({ primary: [], lingual: [] })
  })

  it('should handle ADD_SUBJECT', () => {
    expect(
      subjects(
        { primary: [], lingual: [] },
        {
          type: ADD_SUBJECT,
          payload: {
            id: '0',
            subjectsType: 'primary'
          }
        }
      )
    ).toEqual({
      primary: [
        {
          id: '0',
          name: '',
          elementaryScore: 0,
          advancedScore: 0,
          maxScore: {
            value: 0,
            formula: ''
          },
          active: true
        }
      ],
      lingual: []
    })
  })

  expect(
    subjects(
      { primary: [], lingual: [] },
      {
        type: ADD_SUBJECT,
        payload: {
          id: '1',
          subjectsType: 'lingual'
        }
      }
    )
  ).toEqual({
    primary: [],
    lingual: [
      {
        id: '1',
        name: '',
        elementaryScore: 0,
        advancedScore: 0,
        maxScore: {
          value: 0,
          formula: ''
        },
        active: true
      }
    ]
  })

  it('should handle UDPATE_SUBJECT', () => {
    expect(
      subjects(
        {
          primary: [
            {
              id: '0',
              name: 'Matematyka',
              elementaryScore: 100,
              advancedScore: 82,
              maxScore: {
                value: 182,
                formula: 'A/B'
              },
              active: true
            }
          ],
          lingual: []
        },
        {
          type: UPDATE_SUBJECT,
          payload: {
            id: '0',
            subjectsType: 'primary',
            updatedProperties: {
              name: 'Fizyka'
            }
          }
        }
      )
    ).toEqual({
      primary: [
        {
          id: '0',
          name: 'Fizyka',
          elementaryScore: 100,
          advancedScore: 82,
          maxScore: {
            value: 182,
            formula: 'A/B'
          },
          active: true
        }
      ],
      lingual: []
    })

    expect(
      subjects(
        {
          primary: [
            {
              id: '0',
              name: 'Matematyka',
              elementaryScore: 100,
              advancedScore: 82,
              maxScore: {
                value: 182,
                formula: 'A/B'
              },
              active: true
            }
          ],
          lingual: []
        },
        {
          type: UPDATE_SUBJECT,
          payload: {
            id: '0',
            subjectsType: 'primary',
            updatedProperties: {
              elementaryScore: 100,
              advancedScore: 92,
              maxScore: {
                value: 192,
                formula: 'A/B'
              }
            }
          }
        }
      )
    ).toEqual({
      primary: [
        {
          id: '0',
          name: 'Matematyka',
          elementaryScore: 100,
          advancedScore: 92,
          maxScore: {
            value: 192,
            formula: 'A/B'
          },
          active: true
        }
      ],
      lingual: []
    })
  })

  expect(
    subjects(
      {
        primary: [
          {
            id: '0',
            name: 'Matematyka',
            elementaryScore: 100,
            advancedScore: 82,
            maxScore: {
              value: 182,
              formula: 'A/B'
            },
            active: true
          }
        ],
        lingual: []
      },
      {
        type: UPDATE_SUBJECT,
        payload: {
          id: '42',
          subjectsType: 'primary',
          updatedProperties: {
            name: 'Biologia'
          }
        }
      }
    )
  ).toEqual({
    primary: [
      {
        id: '0',
        name: 'Matematyka',
        elementaryScore: 100,
        advancedScore: 82,
        maxScore: {
          value: 182,
          formula: 'A/B'
        },
        active: true
      }
    ],
    lingual: []
  })

  it('should handle TOGGLE_SUBJECT', () => {
    expect(
      subjects(
        {
          primary: [
            {
              id: '0',
              name: 'Matematyka',
              elementaryScore: 100,
              advancedScore: 82,
              maxScore: {
                value: 182,
                formula: 'A/B'
              },
              active: true
            }
          ],
          lingual: []
        },
        {
          type: TOGGLE_SUBJECT,
          payload: {
            id: '0',
            subjectsType: 'primary'
          }
        }
      )
    ).toEqual({
      primary: [
        {
          id: '0',
          name: 'Matematyka',
          elementaryScore: 100,
          advancedScore: 82,
          maxScore: {
            value: 182,
            formula: 'A/B'
          },
          active: false
        }
      ],
      lingual: []
    })
  })

  expect(
    subjects(
      {
        primary: [
          {
            id: '0',
            name: 'Matematyka',
            elementaryScore: 100,
            advancedScore: 82,
            maxScore: {
              value: 182,
              formula: 'A/B'
            },
            active: true
          }
        ],
        lingual: []
      },
      {
        type: TOGGLE_SUBJECT,
        payload: {
          id: '42',
          subjectsType: 'primary'
        }
      }
    )
  ).toEqual({
    primary: [
      {
        id: '0',
        name: 'Matematyka',
        elementaryScore: 100,
        advancedScore: 82,
        maxScore: {
          value: 182,
          formula: 'A/B'
        },
        active: true
      }
    ],
    lingual: []
  })

  it('should handle REMOVE_SUBJECT', () => {
    expect(
      subjects(
        {
          primary: [
            {
              id: '0',
              name: 'Matematyka',
              elementaryScore: 100,
              advancedScore: 82,
              maxScore: {
                value: 182,
                formula: 'A/B'
              },
              active: true
            }
          ],
          lingual: []
        },
        {
          type: REMOVE_SUBJECT,
          payload: {
            id: '0',
            subjectsType: 'primary'
          }
        }
      )
    ).toEqual({
      primary: [],
      lingual: []
    })
  })
})
