import { createSelector } from 'reselect'
import filter from 'lodash/filter'
import map from 'lodash/map'
import orderBy from 'lodash/orderBy'
import reduce from 'lodash/reduce'
import set from 'lodash/set'
import trim from 'lodash/trim'

import { entitySelector } from './graph'
import { selectYear } from './modules/session'

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

function getOpt(label, value) {
  return { label, value }
}
function getOptions({ option1, option2, option3 }) {
  return [ getOpt(option1, 0), getOpt(option2, 1), getOpt(option3, 2) ]
}
export function selectQuestions(state) {
  const items = orderBy(filter(state, { additionalType: 'Questions' }), 'dataFeedElement.number')
  return map(items, ({ dataFeedElement, id }) => ({
    options: getOptions(dataFeedElement),
    id,
    text: trim(dataFeedElement.question),
  }))
}

export const questionSelector = createSelector(
  entitySelector,
  selectQuestions
)
