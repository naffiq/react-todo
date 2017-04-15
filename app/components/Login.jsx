import React, { Component } from 'react';
import * as Redux from 'react-redux';

import * as actions from 'actions';

export class Login extends Component {
  onLogin = () => {
   const {dispatch} = this.props;

   dispatch(actions.startLogin());
  };

  render() {
    return (
      <div>
        <h1 className="page-title">Todo app</h1>

        <div className="row">
          <div className="medium-6 large-5 small-11 small-centered column">
            <div className="callout callout-auth">
              <h2>Login</h2>
              <p>
                Login with Twitter account below.
              </p>
              <button className="button" onClick={this.onLogin}>
                Login with Twitter
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Redux.connect()(Login);