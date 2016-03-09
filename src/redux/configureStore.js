// Redux.
import { applyMiddleware, combineReducers, createStore, compose } from 'redux'
import merge from 'lodash/merge'

import {
  syncHistoryWithStore,
  historyMiddleware,
  getInitState,
} from 'redux-history-sync'

import DevTools from '../containers/DevTools'

// Socket.io linking
import io from 'socket.io-client'
import { middleware as createSocketMiddleware } from 'cape-redux-socket'
const location = process.env.SOCKET_LOC || ''
const socket = createSocketMiddleware(io(location))

import * as reducer from './reducer'

// Define the middeware we want to apply to the store.
const middleware = [
  historyMiddleware(window.history),
  socket,
]

// Configure and create Redux store.
// Allow the function to accept an initialState object.
export default function configureStore(initialState) {
  const calculatedState = {
    db: {
      currentYear: new Date().getFullYear(),
    },
    history: getInitState(window.location, window.document.title),
  }
  const initState = merge(initialState, calculatedState)
  const store = createStore(
    combineReducers(reducer),
    initState,
    compose(
      applyMiddleware(...middleware),
      // Logger must be last middleware in chain(#20).
      // applyMiddleware(createLogger()),
      DevTools.instrument()
    )
  )

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('./reducer', () => {
      const nextRootReducer = require('./reducer')
      store.replaceReducer(nextRootReducer)
    })
  }
  syncHistoryWithStore(store, window)

  return store
}
