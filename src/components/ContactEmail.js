import React, { PropTypes } from 'react'
import radium from 'radium'

import { color } from './style'

const style = {
  button: {
    ':hover': {
      color: color.green,
      textDecoration: 'underline',
    },
  },
}

function ContactEmail({ mailto }) {
  const onClick = (event) => {
    event.preventDefault()
    window.location.href = `mailto:${mailto}`
  }
  return (
    <div className="email">
      <button title={mailto} onClick={onClick} style={style.button}>
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

export default radium(ContactEmail)
