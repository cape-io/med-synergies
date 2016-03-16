import React, { PropTypes } from 'react'

function Header({ logo, title, intro, lead }) {
  return (
    <header>
      <div className="container">
        <div className="bar" style={{ height: 150 }}>
          <a href={logo.href} title={logo.alt}>
            <img src={logo.src} className="logo" alt={logo.alt} />
          </a>
          <h1 style={{ textTransform: 'uppercase' }}>{title}</h1>
        </div>
      </div>
    </header>
    <div className="leader" style={{ background: '#00aeef' }}>
      <div className="container">
        <h3 className="intro">{intro}</h3>
        <p style={{ marginTop: 20 }}>{lead}</p>
      </div>
    </div>
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
