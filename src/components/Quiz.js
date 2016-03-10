import React, { PropTypes } from 'react'
import map from 'lodash/map'

import Question from './Question'
import Submit from './Form/SubmitButtons'

function Quiz({ questions, options, submit, invalid, fields, handleSubmit, pristine }) {
  return (
    <div className="main">
      <ol className="list-group">
        {
          map(questions, (question, index) => (
            <Question
              key={question.id}
              text={question.text}
              options={options}
              field={fields[question.id]}
              index={index + 1}
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
  fields: PropTypes.object.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  invalid: PropTypes.bool.isRequired,
  options: PropTypes.array.isRequired,
  pristine: PropTypes.bool.isRequired,
  questions: PropTypes.array.isRequired,
  submit: PropTypes.string.isRequired,
}
Quiz.defaultProps = {}
export default Quiz
