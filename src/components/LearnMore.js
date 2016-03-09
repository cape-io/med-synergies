import React, { PropTypes } from 'react'

function Contact({ author, learnMore }) {
  return (
    <div className="learn-more" style={{ float: 'right' }}>
      <strong>{author}</strong><br />
      {learnMore.label + ' '}
      <a href={learnMore.link} style={{ textDecoration: 'underline' }}>{learnMore.button}</a>
    </div>
  )
}

Contact.propTypes = {
  author: PropTypes.string.isRequired,
  learnMore: PropTypes.object.isRequired,
}
Contact.defaultProps = {}

export default Contact
