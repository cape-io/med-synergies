import { connect } from 'react-redux'
import Quiz from '../components/Quiz'
import { handleSubmit } from '../redux/modules/quiz'
import { canSubmit, questionSelector, quizScore } from '../redux/select'
// Redux connections.

function mapStateToProps(state) {
  return {
    canSubmit: canSubmit(state),
    score: quizScore(state),
    questions: questionSelector(state),
  }
}
const mapDispatchToProps = {
  onSubmit: handleSubmit,
}

export default connect(mapStateToProps, mapDispatchToProps)(Quiz)
