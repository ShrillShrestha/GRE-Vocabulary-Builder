import React, { useState } from 'react';
import { AuthFormLogic } from './Auth';
import { SingUp as signUpApi } from '../../apis/authentication';
import { useContext } from 'react';
import { AuthContext } from '../../App';

const SignUp = () => {
  const { state, setState, handleInputChange } = AuthFormLogic({
    email: '',
    password: '',
    fname: '',
    lname: '',
    submitted: false,
  });

  const context = useContext(AuthContext);

  const onSubmit = (event) => {
    event.preventDefault();
    let { email, password, fname, lname } = state;
    let name = fname + ' ' + lname;

    setState({
      email: '',
      password: '',
      fname: '',
      lname: '',
      submitted: true,
    });

    signUpApi(name, email, password, context.dispatch);
  };

  return (
    <div className="SignUp">
      <h1 className="ui header">Create A New Account</h1>
      <form className="ui big form">
        <div className="field NameField" id="fname">
          <label htmlFor="fname">First Name</label>
          <input
            type="text"
            name="fname"
            value={state.fname}
            onChange={handleInputChange}
          />
        </div>
        <div className="field NameField" id="lname">
          <label htmlFor="lname">Last Name</label>
          <input
            type="text"
            name="lname"
            value={state.lname}
            onChange={handleInputChange}
          />
        </div>
        <div className="field">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            name="email"
            value={state.email}
            onChange={handleInputChange}
          />
        </div>
        <div className="field">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            value={state.password}
            onChange={handleInputChange}
          />
        </div>
        <div
          className="ui large teal right labeled icon button"
          id="LoginButton"
          onClick={onSubmit}
        >
          Signup
          <i className="checkmark icon"></i>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
