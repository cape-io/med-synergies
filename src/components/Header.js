import React, { PropTypes } from 'react'
import { color } from './style'
// import radium from 'radium'
const style = {
  bar: {
    minHeight: 150,
  },
  leader: {
    base: {
      background: color.blueLight,
    },
    p: {
      marginTop: 20,
    },
  },
  title: {
    textTransform: 'uppercase',
  },
}

function Header({ logo, title, intro, lead }) {
  return (
    <header>
      <div className="container">
        <div className="bar" style={style.bar}>
          <a href={logo.href} title={logo.alt}>
            <img src={logo.src} className="logo" alt={logo.alt} />
          </a>
          <h1 style={style.title}>{title}</h1>
        </div>
      </div>
      <div className="leader" style={style.leader.base}>
        <div className="container">
          <h3 className="intro">{intro}</h3>
          <p style={style.leader.p} >{lead}</p>
        </div>
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
