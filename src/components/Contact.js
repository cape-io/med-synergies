import React, { PropTypes } from 'react'
import ContactEmail from './ContactEmail'

function Contact({ email, phone, web }) {
  const link = `http://${web}`
  return (
    <div className="contact">
      <ContactEmail mailto={email} />
      <phone>{phone}</phone>
      <div className="web"><a href={link}>{web}</a></div>
    </div>
  )
}

Contact.propTypes = {
  email: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  web: PropTypes.string.isRequired,
}
Contact.defaultProps = {}

export default Contact
