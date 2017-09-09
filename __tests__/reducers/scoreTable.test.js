import { toggleScoreTable } from '../../src/actions/index'
import scoreTable from '../../src/store/reducers/scoreTable'

describe('todos reducer', () => {
  it('should handle initial state', () => {
    expect(scoreTable(undefined, { type: '@@INIT' })).toEqual({ isOpened: false })
  })

  it('should handle TOGGLE_SCORE_TABLE', () => {
    expect(scoreTable({ isOpened: false }, toggleScoreTable())).toEqual({ isOpened: true })
  })
})
