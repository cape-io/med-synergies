import React, { PropTypes } from 'react'

import Contact from './Contact'
import LearnMore from './LearnMore'

function Footer({ author, currentYear, contact, copyright, learnMore }) {
  const { email, phone, web, name, address } = contact

  const copyText = `${currentYear} ${copyright}`

  return (
    <footer className="footer">
      <div className="container">
        <LearnMore author={author} learnMore={learnMore} />
        <Contact email={email} phone={phone} web={web} />
        <div className="credits">
          <div className="name">{name}</div>
          <address className="address">{address}</address>
        </div>
        <div className="copyright">&copy; {copyText}</div>
      </div>
    </footer>
  )
}

Footer.propTypes = {
  author: PropTypes.string.isRequired,
  contact: PropTypes.object.isRequired,
  copyright: PropTypes.string.isRequired,
  currentYear: PropTypes.number.isRequired,
  learnMore: PropTypes.object.isRequired,
}
Footer.defaultProps = {}

export default Footer
