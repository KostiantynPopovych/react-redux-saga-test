import React from 'react';
import { Field, reduxForm } from 'redux-form';

const validate = values => {
    const errors = {}

    if (!values.comment) {
        errors.comment = 'Required'
    }

    if (!values.username) {
      errors.username = 'Required'
    } else if (values.username.length > 15) {
      errors.username = 'Must be 15 characters or less'
    }

    if (!values.email) {
      errors.email = 'Required'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Invalid email address'
    }

    if (!values.phone) {
        errors.phone = 'Required'
      } else if (values.phone.length !== 12) {
        errors.phone = 'Must be 12 characters'
      } else if (parseInt(values.phone) < 0) {
        errors.phone = 'Must contains only numbers';
      }

    return errors
}

const warn = values => {
    const warnings = {}
    const UrkaineCode = 380;
    const fromUkraine = (values.phone && values.phone.length === 12) ? Number(values.phone.substring(0, 3)) === UrkaineCode : null;

    if (fromUkraine) {
      warnings.phone = 'Hello compatriot';
    }

    return warnings
}
  

const renderField = ({
    input,
    label,
    type,
    minValue,
    meta: { touched, error, warning },
  }) => (
    <div>
      <label>{label}</label>
      <div>
        <input {...input} placeholder={label} type={type} min={minValue} />
        {touched &&
          ((error && <span>{error}</span>) ||
            (warning && <span>{warning}</span>))}
      </div>
    </div>
  )
  

const CommentFrom = ({handleSubmit, pristine, reset, submitting, invalid}) => {
    const preventSubmit = event => {
        event.preventDefault();
        handleSubmit()
    }

  return (
    <form onSubmit={preventSubmit}>
      <Field name="comment"
             type="text"
             component={renderField}
             label="Comment" 
      />
      <Field
        name="username"
        type="text"
        component={renderField}
        label="Username"
      />
      <Field name="email" type="email" component={renderField} label="Email" />
      <Field name="phone" type="number" component={renderField} label="Phone" minValue="0" />
      <div>
        <button type="submit" disabled={submitting || invalid}>
          Submit
        </button>
        <button type="button" disabled={pristine || submitting} onClick={reset}>
          Clear Values
        </button>
      </div>
    </form>
  )
}

export default reduxForm({
  form: 'commentFrom',
  validate,
  warn
})(CommentFrom)