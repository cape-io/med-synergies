import React from 'react'
import { connect } from 'react-redux'
import pick from 'lodash/pick'

import { infoSelector } from '../redux/select'

import Footer from '../components/Footer'

function Home(props) {
  return (
    <div className="home">
      <h2>Hello</h2>
      <Footer {...pick(props, 'author', 'currentYear', 'contact', 'copyright', 'learnMore')} />
    </div>
  )
}

export default connect(infoSelector)(Home)
