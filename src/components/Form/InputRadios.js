import React, { PropTypes } from 'react'
import RadioOption from './RadioOption'

// Print RadioOption for each options.
function InputRadios({ options, field, ...rest }) {
  return (
    <div>
      {
        options.map(({ value, label }) => {
          const id = `${field.name}-${value}`
          return (
            <RadioOption
              id={id}
              key={id}
              field={field}
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
  field: PropTypes.object.isRequired,
  options: PropTypes.array.isRequired,
}

export default InputRadios
