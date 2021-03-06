import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import routeSelector from '../redux/routes'

import Router from './Router'

class App extends Component {
  render() {
    const { route } = this.props
    return (
      <div>
        <Router route={route} />
      </div>
    )
  }
}

App.propTypes = {
  history: PropTypes.object.isRequired,
  route: PropTypes.object.isRequired,
}

export default connect(routeSelector)(App)
