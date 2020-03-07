import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addDish } from "../../actions/dishes";

export class Form extends Component {
  state = {
    name: "",
    price: "",
    time: ""
  };

  static propTypes = {
    addDish: PropTypes.func.isRequired
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  onSubmit = e => {
    e.preventDefault();
    const { name, price, time } = this.state;
    const dish = { name, price, time };
    this.props.addDish(dish);
    this.setState({
      name: "",
      price: "",
      time: ""
    });
  };

  render() {
    const { name, price, time } = this.state;
    return (
      <div className="card card-body mt-4 mb-4">
        <h2>Add Dish</h2>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Dish Name</label>
            <input
              className="form-control"
              type="text"
              name="name"
              onChange={this.onChange}
              value={name}
            />
          </div>
          <div className="form-group">
            <label>Price</label>
            <input
              className="form-control"
              type="text"
              name="price"
              onChange={this.onChange}
              value={price}
            />
          </div>
          <div className="form-group">
            <label>Time</label>
            <input
              className="form-control"
              type="text"
              name="time"
              onChange={this.onChange}
              value={time}
            />
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default connect(null, { addDish })(Form);
