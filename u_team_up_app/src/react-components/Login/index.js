import React from "react";

import { withRouter } from 'react-router-dom';
import "./styles.css";

class Login extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            username: "",
            password: "",
            users: [ // TODO: FETCH
                {username:"user", password:"user", uid:"1"},
                {username:"user2", password:"user2", uid:"2"},
                {username:"admin", password:"admin", uid:"3"}
            ],
        }

        this.loginCallback = this.props.loginCallback

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit(e) {
        e.preventDefault();

        const { username, password } = this.state;
        const matchUsers = this.state.users.filter(u => u.username === username);

        if (matchUsers.length === 0) {
            alert('Username does not exist')
        } else {
            if (matchUsers[0].password === password) { // TODO: UPLOAD  
                var identity = {
                  type: 'user',
                  username: matchUsers[0].username,
                  uid: matchUsers[0].uid, // TODO: what will be the id?
                };
                  
                if (matchUsers[0].password === "admin") {
                  var identity = {
                    type: 'admin',
                    username: matchUsers[0].username,
                    uid: matchUsers[0].uid, // TODO: what will be the id?
                  };
                }

                this.loginCallback(identity);

                this.props.history.goBack();
            } else {
                alert('Wrong password');
            }
        }
    }

    render() {
        return (
            <div>
            <title>UTeamUp Login</title>
            <div className="login__content">
              <h1>UTeamUp!</h1>
              <form className="login" method="post" onSubmit={this.handleSubmit}>

              <label className="login__label">Username</label>
              <br />
              <input
                  className="login__input"
                  type="text"
                  name="username"
                  value={this.state.username}
                  onChange={this.handleChange}
              />
              <br /><br />

              <label className="login__label">Password</label>
              <br />
              <input
                  className="login__input"
                  type="password"
                  name="password"
                  value={this.state.password}
                  onChange={this.handleChange}
              />
              <br /><br />

              <button
                  className="login__button"
                  type="submit"
                  >
                  Login
              </button>

              </form>
              <p>Don't have an account?</p>
              <p>Click to <a href="./../SignUp">SignUp</a>!</p>
            </div>
            </div>
    );
    }
}

export default withRouter(Login);
