import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { register } from "../../actions/auth";
import { createMessage } from "../../actions/messages";

export class Register extends Component {
  state = {
    username: "",
    restaurant: "",
    address: "",
    phone: "",
    website: "",
    email: "",
    password: "",
    password2: ""
  };

  static propTypes = {
    register: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool
  };

  onSubmit = e => {
    e.preventDefault();
    const {
      username,
      email,
      password,
      password2,
      restaurant,
      address,
      phone,
      website
    } = this.state;
    if (password !== password2) {
      this.props.createMessage({ passwordsNotMatch: "Passwords do not match" });
    } else if (isNaN(phone)) {
      this.props.createMessage({ invalidPhone: "Invalid Phone Number" });
    } else {
      const newUser = {
        username,
        password,
        email,
        restacc: {
          restaurant,
          address,
          phone,
          website
        }
      };
      this.props.register(newUser);
    }
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    if (this.props.isAuthenticated) {
      return <Redirect to="/" />;
    }
    const {
      username,
      email,
      password,
      password2,
      restaurant,
      address,
      phone,
      website
    } = this.state;

    return (
      <div className="col-md-6 m-auto">
        <div className="card card-body mt-5">
          <h2 className="text-center">Register</h2>
          <form onSubmit={this.onSubmit}>
            <div className="form-group">
              <label>Username</label>
              <input
                type="text"
                className="form-control"
                name="username"
                onChange={this.onChange}
                value={username}
              />
            </div>
            <div className="form-group">
              <label>Restaurant Name</label>
              <input
                type="text"
                className="form-control"
                name="restaurant"
                onChange={this.onChange}
                value={restaurant}
              />
            </div>
            <div className="form-group">
              <label>Restaurant Address</label>
              <input
                type="text"
                className="form-control"
                name="address"
                onChange={this.onChange}
                value={address}
              />
            </div>
            <div className="form-group">
              <label>Restaurant Phone</label>
              <input
                type="text"
                className="form-control"
                name="phone"
                onChange={this.onChange}
                value={phone}
              />
            </div>
            <div className="form-group">
              <label>Restaurant Website</label>
              <input
                type="text"
                className="form-control"
                name="website"
                onChange={this.onChange}
                value={website}
              />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                className="form-control"
                name="email"
                onChange={this.onChange}
                value={email}
              />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                name="password"
                onChange={this.onChange}
                value={password}
              />
            </div>
            <div className="form-group">
              <label>Confirm Password</label>
              <input
                type="password"
                className="form-control"
                name="password2"
                onChange={this.onChange}
                value={password2}
              />
            </div>
            <div className="form-group">
              <button type="submit" className="btn btn-primary">
                Register
              </button>
            </div>
            <p>
              Already have an account? <Link to="/login">Login</Link>
            </p>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { register, createMessage })(Register);
