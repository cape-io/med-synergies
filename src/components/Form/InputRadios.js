import React, { PropTypes } from 'react'
import RadioOption from './RadioOption'

// Print RadioOption for each options.
function InputRadios({ options, id, ...rest }) {
  return (
    <div className="col-sm-5">
      {
        options.map(({ value, label }) => {
          const key = `${id}-${value}`
          return (
            <RadioOption
              id={key}
              key={key}
              value={value.toString()}
              label={label}
              {...rest}
            />
          )
        })
      }
    </div>
  )
}
InputRadios.propTypes = {
  id: PropTypes.string.isRequired,
  field: PropTypes.object.isRequired,
  options: PropTypes.array.isRequired,
}

export default InputRadios
