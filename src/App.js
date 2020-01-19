import React from 'react';
import './App.css';

function App() {
  return (
    <div className="app">
      <div className="form-wrapper"> 
        <h1>Create Account</h1>
        <form /*onSubmit={this.handleSubmit}*/ noValidate>
          <div className="firstName">
            <label htmlFor = "firstName">First Name</label>
            <input type="text"
              name="firstName"
              className="firstName"
              placeholder="First Name"
              noValidate
             // onChange={this.handleChange}
            />
          </div>
          <div className="lastName">
            <label htmlFor = "lastName">Last Name</label>
            <input type="text"
              name="lastName"
              className="lastName"
              placeholder="Last Name"
              noValidate
             // onChange={this.handleChange}
            />
          </div>
          <div className="email">
            <label htmlFor = "email">Email</label>
            <input type="email"
              name="email"
              className="email"
              placeholder="Email"
              noValidate
             // onChange={this.handleChange}
            />
          </div>
          <div className="password">
            <label htmlFor = "password">Password</label>
            <input type="password"
              name="password"
              className="password"
              placeholder="Password"
              noValidate
             // onChange={this.handleChange}
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
