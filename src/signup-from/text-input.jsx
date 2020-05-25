import React from 'react'
import PropTypes from 'prop-types'

const TextInput = props => {
    return (
        <div className="form-group">
            <label>{props.label}</label>
            <input 
                type={props.type} 
                name={props.name}
                placeholder={props.placeholder} 
                value={props.value}
                className={props.error ? 'form-control is-invalid' : 'form-control'}
                onChange={props.handler}
            />
            <div className="invalid-feedback">{props.error}</div>
        </div>
    )
}

TextInput.propTypes = {
    label: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    handler: PropTypes.func.isRequired,
    error: PropTypes.string.isRequired
}
TextInput.defaultProps = {
    label: '',
    type: 'text',
    placeholder: '',
    error: ''
}
export default TextInput