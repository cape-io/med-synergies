import React, { PropTypes } from 'react'

function RadioOption({ id, field, formEvent, label, styles, type, value }) {
  const checked = field.value === value
  return (
    <div className="col-sm-4">
      <input type={type} id={id} onChange={formEvent.onChange} value={value} checked={checked} />
      <label htmlFor={id} className={styles} style={{ textTransform: 'uppercase' }}>
        <span className="radio-toggle" />
        <span className="radio-label">{label}</span>
      </label>
    </div>
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
  styles: 'clearfix',
}
export default RadioOption
