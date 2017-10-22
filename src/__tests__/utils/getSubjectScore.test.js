import getSubjectScore from '../../utils/getSubjectScore'

describe('getSubjectScore', () => {
  it('should return object', () => {
    expect(typeof getSubjectScore()).toBe('object')
  })

  const input = [
    {
      elementaryScore: 0,
      advancedScore: 0
    },
    {
      elementaryScore: 0,
      advancedScore: 95
    },
    {
      elementaryScore: 100,
      advancedScore: 0
    },
    {
      elementaryScore: 50,
      advancedScore: 60
    },
    {
      elementaryScore: 100,
      advancedScore: 80
    },
    {
      elementaryScore: 100,
      advancedScore: 100
    }
  ]

  const output = [
    {
      value: 0,
      formula: 'A/B'
    },
    {
      value: 195,
      formula: 'B'
    },
    {
      value: 100,
      formula: 'A'
    },
    {
      value: 120,
      formula: 'B'
    },
    {
      value: 180,
      formula: 'A/B'
    },
    {
      value: 200,
      formula: 'A/B'
    }
  ]

  input.forEach((test, i) => {
    it(`should return { value: ${output[i].value}, formula: ${output[i].formula} } 
    for ${test.elementaryScore} and ${test.advancedScore}`, () => {
      expect(getSubjectScore(test.elementaryScore, test.advancedScore)).toEqual(output[i])
    })
  })
})
