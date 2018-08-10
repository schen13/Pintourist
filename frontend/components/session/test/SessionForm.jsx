// From Erik Rasmussen's redux forms tutorial

import React from 'react';
import { reduxForm, Field } from 'redux-form';
import isValidEmail from 'sane-email-validation';

const createRenderer = render => ({ input, meta, placeholder }) => (
  <div
    className={[
      meta.error && meta.touched ? 'session-error' : '',
      meta.active ? 'active' : ''
    ].join(' ')}
  >
    {render(input, placeholder)}
    {meta.error &&
      meta.touched &&
      <span className="error-message">
        {meta.error}
      </span>
    }
  </div>
);

const RenderInput = createRenderer((input, placeholder) =>
  <input {...input} className="session-input" placeholder={placeholder} />
);

const RenderPassword = createRenderer((input, placeholder) =>
  <input {...input} type="password" className="session-input" placeholder={placeholder} />
);

// field validations
const required = value => value ? undefined : 'Required';
const uniqueUsername = usernames => value =>
  value && usernames[value] ? 'Username is already taken' : undefined;
const uniqueEmail = emails => value =>
  value && emails[value] ? 'Email is already taken' : undefined;
const validEmail = value =>
  value && !isValidEmail(value) ? 'Invalid Email' : undefined;

let SessionForm = ({ usernames, emails, handleSubmit, submitting, processForm, formType }) => {
  const ensureUniqueUsername = uniqueUsername(usernames);
  const ensureUniqueEmail = uniqueEmail(emails);

  return (
    <div className="session-form-container">
      <img src={window.logoURL} alt="logo" />
      <h3>Welcome to Pintourist</h3>
      <h4>Find new places to visit</h4>
      <form className="session-form" onSubmit={handleSubmit(processForm)}>
        <Field
          name="fname"
          placeholder="First Name"
          component={RenderInput}
          validate={[required]}
        />
        <Field
          name="lname"
          placeholder="Last Name"
          component={RenderInput}
          validate={[required]}
        />
        <Field
          name="email"
          placeholder="Email"
          component={RenderInput}
          validate={[required, ensureUniqueEmail, validEmail]}
        />
        <Field
          name="username"
          placeholder="Username"
          component={RenderInput}
          validate={[required, ensureUniqueUsername]}
        />
        <Field
          name="password"
          placeholder="Password"
          component={RenderPassword}
          validate={[required]}
        />
        <button
          className="session-submit"
          type="submit"
          value={formType}
          disabled={submitting}
        />
      </form>
    </div>

  );
};

SessionForm = reduxForm({
  form: 'session',
  destroyOnUnmount: false,
})(SessionForm);

export default SessionForm;

