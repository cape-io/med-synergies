import React, { PropTypes } from 'react'
import classnames from 'classnames'
import { connectField } from 'redux-field'

import InputRadios from './Form/InputRadios'

function Question({ form, formEvent, text, options, active, id, index }) {
  const cssNames = classnames('clearfix', 'question', 'list-group-item', 'form-group', 'row', {
    active,
    'has-error': form.hasError,
  })
  return (
    <li className={cssNames}>
      <div className="col-sm-6">
        <label htmlFor={id} >
          <span className="question-index">
            {index}
          </span>
          <span className="question-text">
            { text }
          </span>
        </label>
      </div>
      <InputRadios field={form} formEvent={formEvent} id={id} options={options} />
    </li>
  )
}

Question.propTypes = {
  form: PropTypes.object.isRequired,
  formEvent: PropTypes.object.isRequired,
  id: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  active: PropTypes.bool.isRequired,
  index: PropTypes.number.isRequired,
}
Question.defaultProps = {
  active: false,
}

export default connectField()(Question)
