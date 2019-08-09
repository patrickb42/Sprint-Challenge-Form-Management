import React from 'react';
import Axios from 'axios';
import { Form, Field, withFormik } from 'formik';
import * as Yup from 'yup';

const Signup = () => {
  return (
    <Form>
      <Field type="text" name="username" placeholder="Username"/>
      <Field type="password" name="password" placeholder="Password"/>
      <button type="submit">Signup</button>
    </Form>
  );
}

export default withFormik({
  mapPropsToValues({ username, password }){
    return {
      username: username || '',
      password: password || '',
    };
  },

  validationSchema: Yup.object().shape({
    username: Yup.string()
      .max(255, "Your name isn't that long")
      .required(),
    password: Yup.string()
      .min(8, 'Password must be at least 8 characters long')
      .required(),
  }),

  handleSubmit(values, { setStatus }) {
    (async () => {
      setStatus(await Axios.post('http://localhost:5000/api/register', values));
    })();
  }
})(Signup);
