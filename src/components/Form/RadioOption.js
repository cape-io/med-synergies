import React, { PropTypes } from 'react'

function RadioOption({ id, field, formEvent, label, styles, type, value }) {
  const checked = field.value === value
  return (
    <span>
      <input type={type} id={id} onChange={formEvent.onChange} value={value} checked={checked} />
      <label htmlFor={id} className={styles}><span className="radio-toggle" />{label}</label>
    </span>
  )
}
RadioOption.propTypes = {
  id: PropTypes.string.isRequired,
  field: PropTypes.object.isRequired,
  formEvent: PropTypes.object.isRequired,
  label: PropTypes.string.isRequired,
  styles: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
}
RadioOption.defaultProps = {
  type: 'radio',
  styles: '',
}
export default RadioOption
