import React from 'react'
import PropTypes from 'prop-types'
import TextInput from './text-input'

const Form = ({values, agreement, handleChange, handleCheckbox, handleSubmit, errors}) => {
    return (
        <form onSubmit={handleSubmit} className='p-5 shadow-lg mb-3'>
            <TextInput 
                label='Enter name'
                name="name" 
                placeholder='Mr. John' 
                value={values.name}
                handler={handleChange}
                error={errors.name}
            />

            <TextInput
                label='Enter email'
                type="email" 
                name="email" 
                placeholder='test@test.com' 
                value={values.email}
                handler={handleChange}
                error={errors.email}
            />

            <TextInput 
                label='Enter password'
                type="password" 
                name="password" 
                placeholder='********' 
                value={values.password}
                handler={handleChange}
                error={errors.password}
            />

            <div className='form-group'>   
                <p className='mb-1'>Select Gender</p>
                <label className='mr-3'>
                    <input type="radio"  name="gender" onChange={handleChange} value='Male'/>
                    <span className="ml-1">Male</span>
                </label>
                <label className='mr-3'>
                    <input type="radio" name="gender" onChange={handleChange} value='Female'/>
                    <span className="ml-1">Female</span>
                </label>
                <label className='mr-3'>
                    <input type="radio" name="gender" onChange={handleChange} value='Other'/>
                    <span className="ml-1">Other</span>
                </label>
                <div style={{color: '#dc3545',fontSize: '80%'}}>{errors.gender && errors.gender}</div>
            </div>

            <div>
                <input 
                    type="checkbox" 
                    name="agreement"
                    checked={agreement}
                    onChange={handleCheckbox}
                /> I agree with all terms and condition.
            </div>
            <button className="btn btn-primary mt-3" disabled={!agreement}>Create User</button>
        </form>
    )
}
Form.propTypes = {
    values: PropTypes.object.isRequired,
    agreement: PropTypes.bool.isRequired,
    handleChange: PropTypes.func.isRequired,
    handleCheckbox: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired
}
export default Form