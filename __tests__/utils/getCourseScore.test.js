import getCourseScore from '../../src/utils/getCourseScore'

describe('getCourseScore', () => {
  it('should return number', () => {
    expect(typeof getCourseScore(
      { subjects: [] },
      { name: '' },
      { primary: [], lingual: [] }
    )).toBe('number')
  })

  describe('for author\'s scores', () => {
    const scores = {
      primary: [
        { name: 'Matematyka', maxScore: { value: 182, formula: 'A/B' }, active: true },
        { name: 'Fizyka', maxScore: { value: 159, formula: 'B' }, active: true },
        { name: 'Informatyka', maxScore: { value: 126, formula: 'A/B' }, active: true }
      ],
      lingual: [
        { name: 'Język angielski', maxScore: { value: 192, formula: 'A/B' }, active: true }
      ]
    }

    const input = [
      [
        { name: 'Informatyka', subjects: ['Matematyka', 'Fizyka', 'Informatyka'] },
        { name: 'Informatyki, Elektroniki i Telekomunikacji' },
        scores
      ],
      [
        {
          name: 'Socjologia',
          subjects: [
            'Matematyka',
            'Fizyka',
            'Chemia',
            'Informatyka',
            'Biologia',
            'Geografia',
            'Filozofia',
            'Historia',
            'Historia sztuki',
            'Język obcy nowożytny (inny niż uwzględniany w składniku J)',
            'Język polski',
            'Wiedza o społeczeństwie'
          ]
        },
        { name: 'Humanistyczny' },
        scores
      ],
    ]

    const output = [
      920,
      920
    ]

    input.forEach((test, i) => {
      it(`should return correct courseScore for ${test[0].name} which is ${output[i]}`, () => {
        expect(getCourseScore(...input[i])).toEqual(output[i])
      })
    })
  })

  describe('for mocked humane scores', () => {
    const scores = {
      primary: [],
      lingual: [
        { name: 'Język angielski', maxScore: { value: 192, formula: 'A/B' }, active: true },
        { name: 'Język francuski', maxScore: { value: 200, formula: 'A/B' }, active: true }
      ]
    }

    const input = [
      [
        { name: 'Informatyka', subjects: ['Matematyka', 'Fizyka', 'Informatyka'] },
        { name: 'Informatyki, Elektroniki i Telekomunikacji' },
        scores
      ],
      [
        {
          name: 'Socjologia',
          subjects: [
            'Matematyka',
            'Fizyka',
            'Chemia',
            'Informatyka',
            'Biologia',
            'Geografia',
            'Filozofia',
            'Historia',
            'Historia sztuki',
            'Język obcy nowożytny (inny niż uwzględniany w składniku J)',
            'Język polski',
            'Wiedza o społeczeństwie'
          ]
        },
        { name: 'Humanistyczny' },
        scores
      ],
    ]

    const output = [
      200,
      992
    ]

    input.forEach((test, i) => {
      it(`should return correct courseScore for ${test[0].name} which is ${output[i]}`, () => {
        expect(getCourseScore(...input[i])).toEqual(output[i])
      })
    })
  })

  describe('for mocked humane scores with second best subject not active', () => {
    const scores = {
      primary: [],
      lingual: [
        { name: 'Język angielski', maxScore: { value: 192, formula: 'A/B' }, active: false },
        { name: 'Język francuski', maxScore: { value: 200, formula: 'A/B' }, active: true }
      ]
    }

    const input = [
      [
        { name: 'Informatyka', subjects: ['Matematyka', 'Fizyka', 'Informatyka'] },
        { name: 'Informatyki, Elektroniki i Telekomunikacji' },
        scores
      ],
      [
        {
          name: 'Socjologia',
          subjects: [
            'Matematyka',
            'Fizyka',
            'Chemia',
            'Informatyka',
            'Biologia',
            'Geografia',
            'Filozofia',
            'Historia',
            'Historia sztuki',
            'Język obcy nowożytny (inny niż uwzględniany w składniku J)',
            'Język polski',
            'Wiedza o społeczeństwie'
          ]
        },
        { name: 'Humanistyczny' },
        scores
      ],
    ]

    const output = [200, 800]

    input.forEach((test, i) => {
      it(`should return correct courseScore for ${test[0].name} which is ${output[i]}`, () => {
        expect(getCourseScore(...input[i])).toEqual(output[i])
      })
    })
  })

  describe('for no scores', () => {
    const scores = {
      primary: [],
      lingual: []
    }

    const input = [
      [
        { name: 'Informatyka', subjects: ['Matematyka', 'Fizyka', 'Informatyka'] },
        { name: 'Informatyki, Elektroniki i Telekomunikacji' },
        scores
      ]
    ]

    const output = [
      0
    ]

    input.forEach((test, i) => {
      it(`should return 0 for ${test[0].name}`, () => {
        expect(getCourseScore(...input[i])).toEqual(output[i])
      })
    })
  })
})
