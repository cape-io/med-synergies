import React, { PropTypes } from 'react'

import Contact from './Contact'

function Result(props) {
  const {
    closeBox, contact, lead, learnMore, header, description, score, resultBox, color,
  } = props
  const { scoreTxt } = resultBox
  function clickOverlay(evt) {
    const targetId = evt.target.id
    if (targetId && targetId === 'results-overlay') {
      closeBox()
    }
    return true
  }
  function handleLearnMore() {
    window.location.href = learnMore.link
  }
  return (
    <div id="results-overlay" onClick={clickOverlay}>
      <div id="result-box">
        <div className="score-top">
          <div className="score-text">{scoreTxt}</div>
          <div className="center-trick">
            <div className="score-box" style={{ color: `#${color}` }}>{score}</div>
            <div className="score-words">
              <p>{ header }</p>
            </div>
          </div>
        </div>
        <div className="score-bottom">
          <h2>{ lead }</h2>
          <p>{ description }</p>
          <div className="action">
            <button className="orange" onClick={handleLearnMore}>{learnMore.button}</button>
            <Contact {...contact} />
          </div>
        </div>
      </div>
    </div>
  )
}

Result.propTypes = {
  closeBox: PropTypes.func.isRequired,
  color: PropTypes.string.isRequired,
  contact: PropTypes.object.isRequired,
  lead: PropTypes.array.isRequired,
  learnMore: PropTypes.object.isRequired,
  header: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  points: PropTypes.array.isRequired,
  score: PropTypes.string.isRequired,
  resultBox: PropTypes.object.isRequired,
}
Result.defaultProps = {}
export default Result
