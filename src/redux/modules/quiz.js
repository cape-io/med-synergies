import isFunction from 'lodash/isFunction'
import noop from 'lodash/noop'
import createAction from '../createAction'

const defaultState = {
  showResult: false,
}

const CLOSE_BOX = 'quiz/CLOSE_BOX'
export const closeBox = createAction(CLOSE_BOX, noop)

const OPEN_BOX = 'quiz/OPEN_BOX'
export const handleSubmit = createAction(OPEN_BOX, noop)

const reducers = {
  [CLOSE_BOX]: () => defaultState,
  [OPEN_BOX]: () => ({ showResult: true }),
}

export default function reducer(state = defaultState, action) {
  if (!action.type || !isFunction(reducers[action.type])) return state
  return reducers[action.type]()
}

export function selectShowResult(state) {
  return state.quiz.showResult
}
