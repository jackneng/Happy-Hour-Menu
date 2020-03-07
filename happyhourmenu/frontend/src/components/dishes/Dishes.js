import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getDishes, deleteDish } from "../../actions/dishes";

export class Dishes extends Component {
  static propTypes = {
    dishes: PropTypes.array.isRequired,
    getDishes: PropTypes.func.isRequired,
    deleteDish: PropTypes.func.isRequired
  };

  componentDidMount() {
    this.props.getDishes();
  }

  render() {
    return (
      <Fragment>
        <h2>Menu</h2>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Food or Drinks</th>
              <th>Price</th>
              <th>Time</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {this.props.dishes.map(dish => (
              <tr key={dish.id}>
                <td>{dish.name}</td>
                <td>${dish.price}</td>
                <td>{dish.time}</td>
                <td>
                  <button
                    onClick={this.props.deleteDish.bind(this, dish.id)}
                    className="btn btn-danger btn-sm"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  dishes: state.dishes.dishes
});

export default connect(mapStateToProps, { getDishes, deleteDish })(Dishes);
