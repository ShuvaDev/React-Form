import React from 'react'
import SignupForm from './signup-from/'

class Test extends React.Component {
    state = {
        users: []
    }
    createUser = user => {
        user.id = new Date().getTime().toString()
        this.setState({users: [...this.state.users, user]})
    }
    render() {
        return (
            <div className='container'>
                <SignupForm 
                    createUser = {this.createUser}
                />
                <div className="offset-3">
                    <h2 className='ml-4 mt-4'>Register User List</h2>
                    <ul className="list-group list-group-flush">
                        {this.state.users.map(user => (
                            <li key={user.id} className='list-group-item'>
                                <h4>
                                    <span className='text-dark'>Name: </span>
                                    <span className='text-danger'>{user.name}</span>
                                    <span className='text-dark'> Email: </span>
                                    <span className='text-danger'>{user.email}</span>
                                </h4>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        )
    }
}
export default Test