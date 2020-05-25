import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Form from './form'

class SignupForm extends Component {
    state = {
        values: {
            name: '',
            email: '',
            password: '',
            gender: ''
        },
        agreement: false,
        errors: {}
    }

    handleChange = event => {
        this.setState({values: {...this.state.values, [event.target.name]: event.target.value}})
    }
    handleCheckbox = event => {
        this.setState({agreement: event.target.checked})
    }
    handleSubmit = event => {
        event.preventDefault()
        let {errors, isValid} = this.validator()
        if(isValid) {
            event.target.reset()
            console.log(this.state.values)
            this.props.createUser(this.state.values)

            this.setState({values: {name:'',email:'',password:'',gender:''}, agreement: false, errors:{}})
        } else {
            this.setState({errors})
        }
    }
    validator = () => {
        let errors = {}
        const {name, email, password, gender} = this.state.values
        if(!name) {
            errors.name = 'Please provide your name'
        }
        if(!email) {
            errors.email = 'Please provide your email'
        }
        if(!password) {
            errors.password = 'Please provide your password'
        }
        if(!gender) {
            errors.gender = 'Please provide your gender'
        }
        return {
            errors,
            isValid: Object.keys(errors).length === 0
        }
    }
    render() {
        return (
            <div style={{width: '500px'}} className='m-auto pt-5'>
                <h3 className='text-danger text-center' style={{fontFamily: 'fira code'}}>Signup Form</h3><hr/>
                <Form 
                    values={this.state.values}
                    agreement={this.state.agreement}
                    handleChange={this.handleChange}
                    handleCheckbox={this.handleCheckbox}
                    handleSubmit={this.handleSubmit}
                    errors={this.state.errors}
                />
            </div>
        )
    }
}
SignupForm.propTypes = {
    createUser: PropTypes.func.isRequired
}
export default SignupForm