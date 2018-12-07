import React, {Component} from 'react'
import {reduxForm, Field} from 'redux-form'

class SignUpForm extends Component {
    static defaultProps = {};

    static propTypes = {};

    state = {};

    render() {
        const {handleSubmit} = this.props

        return (
            <div>
                <h2>Sign up</h2>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="email">Email</label>
                        <Field name="email" component="input"/>
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <Field name="password" component="input" type="password"/>
                    </div>
                    <div>
                        <input type="submit"/>
                    </div>
                </form>
            </div>
        );
    }
}

export default reduxForm({
    form: 'auth'
})(SignUpForm)
