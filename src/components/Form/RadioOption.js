import React, { PropTypes } from 'react'

function RadioOption({ id, field, label, styles, type, value }) {
  const checked = field.value === value
  return (
    <span>
      <input type={type} id={id} {...field} value={value} checked={checked} />
      <label htmlFor={id} className={styles}><span className="radio-toggle" />{label}</label>
    </span>
  )
}
RadioOption.propTypes = {
  id: PropTypes.string.isRequired,
  field: PropTypes.object.isRequired,
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
