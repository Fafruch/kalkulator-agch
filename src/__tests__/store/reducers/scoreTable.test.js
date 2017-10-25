import scoreTable from '../../../store/reducers/scoreTable'
import { TOGGLE_SCORE_TABLE } from '../../../constants/actionTypes'

describe('scoreTable reducer', () => {
  it('should handle initial state', () => {
    expect(scoreTable(undefined, { type: '@@INIT' })).toEqual({ isOpened: false })
  })

  it('should handle TOGGLE_SCORE_TABLE', () => {
    expect(scoreTable({ isOpened: false }, { type: TOGGLE_SCORE_TABLE })).toEqual({ isOpened: true })
  })
})
