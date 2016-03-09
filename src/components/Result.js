import React, { PropTypes } from 'react'
import map from 'lodash/map'

import Contact from './Contact'

function Result({ author, closeBox, contact, lead, learnMore, header, points, score, resultBox, color }) {
  const { scoreTxt, submit } = resultBox
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
            <div className="score-box" style={{ color: '#' + color }}>{score}</div>
            <div className="score-words">
              <p><strong>{lead[0]}</strong> {lead[1]}</p>
              <p>{resultBox.lead} <strong>{author + '.'}</strong></p>
            </div>
          </div>
        </div>
        <div className="score-bottom">
          <h2>{header + ':'}</h2>
          <ul>
            {
              map(points, (point, index) => <li key={index}>{point}</li>)
            }
          </ul>
          <div className="action">
            <div className="action-box">
              <label>{learnMore.label}</label>
              <button onClick={handleLearnMore}>{learnMore.button}</button>
            </div>
            <Contact {...contact} />
          </div>
        </div>
      </div>
    </div>
  )
}

Result.propTypes = {
  author: PropTypes.string.isRequired,
  closeBox: PropTypes.func.isRequired,
  color: PropTypes.string.isRequired,
  contact: PropTypes.object.isRequired,
  lead: PropTypes.array.isRequired,
  learnMore: PropTypes.object.isRequired,
  header: PropTypes.string.isRequired,
  points: PropTypes.array.isRequired,
  score: PropTypes.string.isRequired,
  resultBox: PropTypes.object.isRequired,
}
Result.defaultProps = {}
export default Result
