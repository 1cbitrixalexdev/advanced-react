import React from 'react'

function ErrorField(props) {
    const {input, type, meta: {error, touched}} = props,
        errorText = touched && error && <div style={{color: 'red'}}>{error}</div>

    return (
        <div>
            <label>{input.name.replace(/^\w/, c => c.toUpperCase())}</label>
            <input {...input} type={type} />
            {errorText}
        </div>
    );
}

ErrorField.propTypes = {};
ErrorField.defaultProps = {};

export default ErrorField;
