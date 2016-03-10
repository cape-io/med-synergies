import React, { PropTypes } from 'react'
import classnames from 'classnames'

import InputRadios from './Form/InputRadios'

function Question({ field, text, options, active, index }) {
  const { touched, error } = field
  const cssNames = classnames('clearfix', 'question', 'list-group-item', 'form-group', 'row', {
    active,
    'has-error': touched && error,
  })
  return (
    <li className={cssNames}>
      <div className="col-sm-7">
        <label htmlFor={field.name} >
          <span className="question-index">
            {index}
          </span>
          <span className="question-text">
            { text }
          </span>
        </label>
      </div>
      <InputRadios field={field} options={options} />
    </li>
  )
}

Question.propTypes = {
  field: PropTypes.object.isRequired,
  text: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  active: PropTypes.bool.isRequired,
  index: PropTypes.number.isRequired,
}
Question.defaultProps = {
  active: false,
}

export default Question
