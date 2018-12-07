import React, {Component} from 'react'
import {reduxForm, Field} from 'redux-form'

class SignInForm extends Component {
    static defaultProps = {};

    static propTypes = {};

    state = {};

    render() {
        return (
            <div>
                <h2>Sign in</h2>
                <form action="">
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
})(SignInForm)
