import reduce from 'lodash/reduce'

const defaultState = {
  showResult: false,
  score: 0,
}

const SET_SCORE = 'quiz/SET_RESULT'
const CLOSE_BOX = 'quiz/CLOSE_BOX'

export default function reducer(state = defaultState, action) {
  switch (action.type) {
    case SET_SCORE:
      return { ...state, showResult: true, score: action.payload }
    case CLOSE_BOX:
      return { ...state, showResult: false }
    default:
      return state
  }
}

export function handleSubmit(data) {
  function reduceFunc(result, value) {
    return result + parseInt(value, 10)
  }
  return {
    type: SET_SCORE,
    payload: reduce(data, reduceFunc, 0),
  }
}

export function closeBox() {
  return {
    type: CLOSE_BOX,
  }
}
