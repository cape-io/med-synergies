import React, { PropTypes } from 'react'
import classnames from 'classnames'

import InputRadios from './Form/InputRadios'

function Question({ field, text, options, active, index }) {
  const { touched, error } = field
  const cssNames = classnames('clearfix', 'question', 'list-group-item', 'form-group', {
    active,
    'has-error': touched && error,
  })
  return (
    <li className={cssNames}>
      <label htmlFor={field.name} className="col-sm-7">
        <span className="question-index">
          {index}
        </span>
        <span className="question-text">
          { text }
        </span>
      </label>
      <InputRadios field={field} options={options} />
    </li>
  )
}

Question.propTypes = {
  text: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  active: PropTypes.bool.isRequired,
  index: PropTypes.number.isRequired,
}
Question.defaultProps = {
  active: false,
}

export default Question
