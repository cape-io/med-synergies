import { connect } from 'react-redux'
// import Quiz from '../components/Quiz'
import Quiz from '../components/Loading'
import { handleSubmit } from '../redux/modules/quiz'
import { questionSelector } from '../redux/select'
// Redux connections.

function mapStateToProps(state) {
  console.log(questionSelector(state))
  return {}
}
const mapDispatchToProps = {
  onSubmit: handleSubmit,
}

export default connect(mapStateToProps, mapDispatchToProps)(Quiz)
