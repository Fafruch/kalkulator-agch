import subjectsPicker from '../../../src/store/selectors/subjectsPicker'

describe('subjectsPicker', () => {
  it('should return object', () => {
    expect(typeof subjectsPicker({ primary: [], lingual: [] })).toBe('object')
  })

  describe('for author\'s scores', () => {
    const input = {
      primary: [
        { name: 'Matematyka', maxScore: { value: 182, formula: 'A/B' }, active: true },
        { name: 'Fizyka', maxScore: { value: 159, formula: 'B' }, active: true },
        { name: 'Informatyka', maxScore: { value: 126, formula: 'A/B' }, active: true }
      ],
      lingual: [
        { name: 'Język angielski', maxScore: { value: 192, formula: 'A/B' }, active: true }
      ]
    }

    const output = {
      primary: {
        name: 'Matematyka',
        maxScore: {
          value: 182,
          formula: 'A/B'
        },
        active: true
      },
      lingual: {
        name: 'Język angielski',
        maxScore: {
          value: 192,
          formula: 'A/B'
        },
        active: true
      }
    }

    it('should return correct maxScoreWrapper', () => {
      expect(subjectsPicker(input)).toEqual(output)
    })
  })

  describe('for mocked humane scores', () => {
    const input = {
      primary: [],
      lingual: [
        { name: 'Język angielski', maxScore: { value: 192, formula: 'A/B' }, active: true },
        { name: 'Język francuski', maxScore: { value: 200, formula: 'A/B' }, active: true }
      ]
    }

    const output = {
      primary: { name: 'Język francuski', maxScore: { value: 200, formula: 'A/B' }, active: true },
      lingual: { name: 'Język angielski', maxScore: { value: 192, formula: 'A/B' }, active: true }
    }

    it('should return correct maxScoreWrapper', () => {
      expect(subjectsPicker(input)).toEqual(output)
    })
  })

  describe('for mocked humane scores with second best subject not active', () => {
    const input = {
      primary: [],
      lingual: [
        { name: 'Język angielski', maxScore: { value: 192, formula: 'A/B' }, active: false },
        { name: 'Język francuski', maxScore: { value: 200, formula: 'A/B' }, active: true }
      ]
    }

    const output = {
      primary: { name: 'Język francuski', maxScore: { value: 200, formula: 'A/B' }, active: true },
      lingual: { name: '', maxScore: { value: 0, formula: '' } }
    }

    it('should return correct maxScoreWrapper with best subject and one empty subject', () => {
      expect(subjectsPicker(input)).toEqual(output)
    })
  })

  describe('for no scores', () => {
    const input = {
      primary: [],
      lingual: []
    }

    const output = {
      primary: {
        name: '',
        maxScore: {
          value: 0,
          formula: ''
        }
      },
      lingual: {
        name: '',
        maxScore: {
          value: 0,
          formula: ''
        }
      }
    }

    it('should return correct maxScoreWrapper with empty subjects', () => {
      expect(subjectsPicker(input)).toEqual(output)
    })
  })
})
