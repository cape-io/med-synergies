import { compose } from 'redux'
import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'
import map from 'lodash/map'
import Quiz from '../components/Quiz'
import { simpleRequired } from '../utils/formValidation'
import { handleSubmit } from '../redux/modules/quiz'

// Redux connections.

function mapStateToProps(state) {
  const { db: { questions, options, submit } } = state
  const fields = map(questions, 'id')

  return {
    fields,
    form: 'quiz',
    options,
    questions,
    submit,
    validate: simpleRequired(fields),
  }
}
const mapDispatchToProps = {
  onSubmit: handleSubmit,
}
export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  reduxForm()
)(Quiz)
