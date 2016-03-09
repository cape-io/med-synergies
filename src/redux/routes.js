import createRouter from 'location-info'
import { createSelector } from 'reselect'
import { selectActiveKeyDefault } from 'redux-history-sync'
import size from 'lodash/size'

// This takes a state object and returns current history slice and route information.
function isLoading(state) {
  return size(state.graph.entity) === 0
}
const router = createRouter()
const { addRoute, locationInfo } = router
addRoute('home', '/', { isLoading })

function routeSelector(history) {
  if (!history) return history
  return {
    history,
    // Location object gets sent to locationInfo
    route: locationInfo(history.location),
  }
}
// Pass in the state object and return some info about a "route".
export default createSelector(selectActiveKeyDefault, routeSelector)
