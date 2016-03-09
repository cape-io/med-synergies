import React, { PropTypes } from 'react'

function Header({ logo, title, intro, lead }) {
  return (
    <header>
      <div className="bar">
        <a href={logo.href} title={logo.alt}>
          <img src={logo.src} className="logo" alt={logo.alt} />
        </a>
        <h1>{title}</h1>
      </div>
      <div className="lead">
        <p className="intro">{intro}</p>
        <p className="lead">{lead}</p>
      </div>
    </header>
  )
}

Header.propTypes = {
  intro: PropTypes.string.isRequired,
  lead: PropTypes.string.isRequired,
  logo: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
}
Header.defaultProps = {}
export default Header
