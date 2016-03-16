import React, { PropTypes } from 'react'
import map from 'lodash/map'

import Question from './Question'
import Submit from './Form/SubmitButtons'

function Quiz({ canSubmit, onSubmit, score, submit, questions }) {
  return (
    <div className="main">
      <div className="container">
        <ol className="list-group">
          {
            map(questions, question => (
              <Question
                key={question.id}
                prefix={[ 'quiz', question.id ]}
                field={{}}
                {...question}
              />
            ))
          }
        </ol>
        <Submit
          text={submit}
          onSubmit={onSubmit}
          canSubmit={canSubmit}
        />
        <span>{score}</span>
      </div>
    </div>
  )
}

Quiz.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  canSubmit: PropTypes.bool,
  questions: PropTypes.array.isRequired,
  score: PropTypes.number,
  submit: PropTypes.string.isRequired,
}
Quiz.defaultProps = {}
export default Quiz
