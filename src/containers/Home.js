import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import pick from 'lodash/pick'

import { homeProps } from '../redux/select'

import Header from '../components/Header'
import Footer from '../components/Footer'
import Quiz from './Quiz'
import Result from './Result'

function Home(props) {
  return (
    <div className="home">
      <Header {...pick(props, 'intro', 'logo', 'title', 'lead')} />
      <Quiz {...pick(props, 'submit')} />
      { props.showResult &&
        <Result {...pick(props, 'author', 'learnMore', 'contact', 'resultBox')} />
      }
      <Footer {...pick(props, 'author', 'currentYear', 'contact', 'copyright', 'learnMore')} />
    </div>
  )
}
Home.propTypes = {
  showResult: PropTypes.bool.isRequired,
}
export default connect(homeProps)(Home)
