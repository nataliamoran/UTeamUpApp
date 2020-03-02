import React from "react";
import "./styles.css";
import { withRouter } from 'react-router-dom';


class Signup extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            uid: "4",
            username: "",
            university: "",
            email: "",
            password: "",
            confirmedPassword: ""
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.loginCallback = this.props.loginCallback;
    }

    handleSubmit(e) {
        const {password, confirmedPassword} = this.state
        if (password !== confirmedPassword) {
            alert('Passwords do not match')
        } else {
            var identity = {
              type: 'user',
              username: this.state.username,
              uid: this.state.uid,
            };

            this.loginCallback(identity);
            this.props.history.goBack();
        }


        e.preventDefault();
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        return (
            <div>
                <div className="signup__content">
                  <h1>Create an account</h1>

                  <form className="signup" method="post" onSubmit={this.handleSubmit}>
                    <label className="signup__label">Username</label>
                    <br />
                    <input
                        className="signup__input"
                        type="text"
                        name="username"
                        value={this.state.username}
                        onChange={this.handleChange}
                    />
                    <br /><br />

                    <label className="signup__label">University</label>
                    <br />
                    <input
                        className="signup__input"
                        type="text"
                        name="university"
                        value={this.state.university}
                        onChange={this.handleChange}
                    />
                    <br /><br />

                    <label className="signup__label">University Email</label>
                    <br />
                    <input
                        className="signup__input"
                        type="email"
                        name="email"
                        value={this.state.email}
                        onChange={this.handleChange}
                    />
                    <br /><br />

                    <label className="signup__label">Password</label>
                    <br />
                    <input
                        className="signup__input"
                        type="password"
                        name="password"
                        value={this.state.password}
                        onChange={this.handleChange}
                    />
                    <br /><br />

                    <label className="signup__label">Confirm Password</label>
                    <br />
                    <input
                        className="signup__input"
                        type="password"
                        name="confirmedPassword"
                        value={this.state.confirmedPassword}
                        onChange={this.handleChange}
                    />
                    <br /><br />
                    <br /><br />

                    <button
                        className="signup__button"
                        type="submit"
                        >
                        SignUp
                    </button>
                  </form>
                </div>
            </div>
    );
    }
}

export default withRouter(Signup);
