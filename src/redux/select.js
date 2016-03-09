import filter from 'lodash/filter'
import reduce from 'lodash/reduce'
import set from 'lodash/set'

export function selectInfo(state) {
  reduce(
    filter(state, { additionalType: 'Fields' }),
    (res, cell) =>
      set(res, cell.dataFeedElement.fieldId, cell.dataFeedElement.value),
    {}
  )
}
