import React from 'react'
import { connect } from 'react-redux'
import pick from 'lodash/pick'

import { infoSelector } from '../redux/select'

import Header from '../components/Header'
import Footer from '../components/Footer'
import Quiz from './Quiz'
function Home(props) {
  return (
    <div className="home">
      <Header {...pick(props, 'intro', 'logo', 'title', 'lead')} />
      <Quiz />
      <Footer {...pick(props, 'author', 'currentYear', 'contact', 'copyright', 'learnMore')} />
    </div>
  )
}

export default connect(infoSelector)(Home)
