import { connect } from 'react-redux'
import Result from '../components/Result'
import find from 'lodash/find'
import { closeBox } from '../redux/modules/quiz'

// Result box.

function mapStateToProps(state) {
  const {
    db: { author, contact, learnMore, scores, resultBox, options, questions },
    quiz: { score },
  } = state
  // Find the correct info based on the score vaue.
  const props = find(scores, (info) => info.min <= score)
  // Highest score.
  const highScore = options[0].value * questions.length
  const scoreStr = (Math.round((score / highScore) * 100)).toString() + '%'
  // Need to decide what color the percent text should be.
  return {
    author,
    learnMore,
    ...props,
    contact,
    resultBox,
    score: scoreStr,
  }
}
const mapDispatchToProps = {
  closeBox,
}

export default connect(mapStateToProps, mapDispatchToProps)(Result)
