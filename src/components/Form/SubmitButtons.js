import React, { PropTypes } from 'react'

import Icon from '../Icon'

function SubmitButtons({ canSubmit, showReset, icon, text, resetForm, onSubmit }) {
  const resetText = 'Reset'
  return (
    <div className="form-group clearfix pb">
      <div className="col-sm-offset-7 col-sm-5">
        <button className="btn btn-success" onClick={onSubmit} disabled={!canSubmit}>
          { icon && <Icon symbol={ icon || 'check' } hidden /> }
          { ' ' }
          { text || 'Submit' }
        </button>
        {
          showReset && resetForm &&
          <button className="btn btn-warning" onClick={resetForm} style={{ marginLeft: 15 }}>
            { icon && <Icon symbol="remove" hidden /> }
            { ' ' }
            { resetText }
          </button>
        }
      </div>
    </div>
  )
}

SubmitButtons.propTypes = {
  icon: PropTypes.string,
  canSubmit: PropTypes.bool.isRequired,
  text: PropTypes.string,
  showReset: PropTypes.bool.isRequired,
  resetForm: PropTypes.func,
  onSubmit: PropTypes.func.isRequired,
}
SubmitButtons.defaultProps = {
  showReset: false,
}
export default SubmitButtons
