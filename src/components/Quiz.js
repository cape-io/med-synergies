import React, { PropTypes } from 'react'
import map from 'lodash/map'

import Question from './Question'
import Submit from './Form/SubmitButtons'

function Quiz({ questions, submit, invalid, handleSubmit, pristine }) {
  return (
    <div className="main">
      <ol className="list-group">
        {
          map(questions, question => (
            <Question
              key={question.id}
              field={{}}
              {...question}
            />
          ))
        }
      </ol>
      <Submit
        text={submit}
        handleSubmit={handleSubmit}
        invalid={invalid}
        pristine={pristine}
      />
    </div>
  )
}

Quiz.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  invalid: PropTypes.bool,
  options: PropTypes.array.isRequired,
  pristine: PropTypes.bool,
  questions: PropTypes.array.isRequired,
  submit: PropTypes.string.isRequired,
}
Quiz.defaultProps = {}
export default Quiz
