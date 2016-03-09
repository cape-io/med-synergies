import React, { PropTypes } from 'react'

function ContactEmail({ mailto }) {
  const onClick = (event) => {
    event.preventDefault()
    window.location.href = 'mailto:' + mailto
  }
  return (
    <div className="email">
      <button title={mailto} onClick={onClick}>
        {mailto}
      </button>
    </div>
  )
}

ContactEmail.propTypes = {
  mailto: PropTypes.string,
}
ContactEmail.defaultProps = {
}

export default ContactEmail
