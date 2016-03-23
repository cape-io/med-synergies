import { createSelector } from 'reselect'
import every from 'lodash/every'
import filter from 'lodash/filter'
import find from 'lodash/find'
import isNumber from 'lodash/isNumber'
import map from 'lodash/map'
import mapValues from 'lodash/mapValues'
import orderBy from 'lodash/orderBy'
import reduce from 'lodash/reduce'
import set from 'lodash/set'
import sum from 'lodash/sum'
import trim from 'lodash/trim'
import values from 'lodash/values'
import { selectForm } from 'redux-field'

import { entitySelector } from './graph'
import { selectYear } from './modules/session'
import { selectShowResult } from './modules/quiz'

export function selectInfo(state, currentYear) {
  const items = filter(state, { additionalType: 'Fields' })
  const info = reduce(
    items,
    (res, cell) =>
      set(res, cell.dataFeedElement.fieldId, cell.dataFeedElement.value),
    {}
  )
  info.currentYear = currentYear
  // console.log(info)
  return info
}

export const infoSelector = createSelector(
  entitySelector,
  selectYear,
  selectInfo
)
export const homeProps = createSelector(
  infoSelector,
  selectShowResult,
  (info, showResult) => ({ ...info, showResult })
)
function getOpt(label, value) {
  return { label, value }
}
function getOptions({ option1, option2, option3 }) {
  return [ getOpt(option1, 4), getOpt(option2, 2), getOpt(option3, 1) ]
}
export function selectQuestions(state) {
  const items = orderBy(filter(state, { additionalType: 'Questions' }), 'dataFeedElement.number')
  return map(items, ({ dataFeedElement, id }, index) => ({
    options: getOptions(dataFeedElement),
    id,
    index: index + 1,
    text: trim(dataFeedElement.question),
  }))
}

export const questionSelector = createSelector(
  entitySelector,
  selectQuestions
)
function selectQuiz(state) {
  return selectForm(state).quiz || {}
}
export const quizValues = createSelector(
  selectQuiz,
  quiz => mapValues(quiz, field => parseInt(field.value, 10))
)
export const canSubmit = createSelector(
  questionSelector,
  quizValues,
  (questions, quiz) => every(questions, ({ id }) => isNumber(quiz[id]))
)
export const highScore = createSelector(
  questionSelector,
  items => items[0] && items[0].options[0].value * items.length || 100,
)
export const quizScore = createSelector(
  quizValues,
  highScore,
  (quiz, highest) => (Math.round((sum(values(quiz)) / highest) * 100))
)
function selectScores(state) {
  const items = orderBy(filter(state, { additionalType: 'Scores' }), 'dataFeedElement.min', 'desc')
  return map(items, ({ dataFeedElement }) =>
    ({ ...dataFeedElement, min: parseInt(dataFeedElement.min, 10) }))
}
export const scoresSelector = createSelector(
  entitySelector,
  selectScores
)
export const scoreInfo = createSelector(
  scoresSelector,
  quizScore,
  (scores, score) => find(scores, info => info.min <= score)
)

export const resultProps = createSelector(
  scoreInfo,
  quizScore,
  (info, score) => ({ ...info, score })
)
