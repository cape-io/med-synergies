import { createSelector } from 'reselect'
import filter from 'lodash/filter'
import reduce from 'lodash/reduce'
import set from 'lodash/set'

import { entitySelector } from './graph'
import { selectYear } from './modules/session'

export function selectInfo(state, currentYear) {
  const fields = filter(state, { additionalType: 'Fields' })
  const info = reduce(
    fields,
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
