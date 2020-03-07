import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getMenus, getRestaurant } from "../../actions/dishes";

export class Menus extends Component {
  static propTypes = {
    dishes: PropTypes.array.isRequired,
    restaurant: PropTypes.array.isRequired
    // getMenus: PropTypes.func.isRequired
  };

  componentDidMount() {
    this.props.getMenus();
    this.props.getRestaurant();
  }

  render() {
    return (
      <Fragment>
        <h2 className="text-center">Happy Hour Menus</h2>
        <div className="row">
          {this.props.restaurant.map(restaurant => (
            <div className="col-sm-6 card" key={restaurant.user}>
              <div className="card-body">
                <div className="dropdown">
                  <h4
                    className="dropdown-toggle"
                    href="#"
                    role="button"
                    id="dropdownMenuLink"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    {restaurant.restaurant}
                  </h4>

                  <div
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuLink"
                  >
                    <span className="dropdown-item">
                      Address: {restaurant.address}
                    </span>
                    <span className="dropdown-item">
                      Phone: {restaurant.phone}
                    </span>
                    <span className="dropdown-item">
                      Website: {restaurant.website}
                    </span>
                  </div>
                </div>
                <div style={{ maxHeight: "21em", overflow: "scroll" }}>
                  <img
                    src={
                      restaurant.pic !== ""
                        ? restaurant.pic
                        : "https://image.freepik.com/free-vector/restaurant-logo-template_1236-155.jpg"
                    }
                    className="card-img-top"
                    style={{ height: "15em" }}
                    alt="To be added"
                  ></img>
                  <p></p>
                  <table className="table">
                    <thead className="thead-dark">
                      <tr>
                        <th>Food or Drinks</th>
                        <th>Price</th>
                        <th>Time</th>
                      </tr>
                    </thead>
                    <tbody>
                      {this.props.dishes.map(dish =>
                        restaurant.user === dish.owner ? (
                          <tr key={dish.id}>
                            <td>{dish.name}</td>
                            <td>${dish.price}</td>
                            <td>{dish.time}</td>
                          </tr>
                        ) : (
                          <tr />
                        )
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  dishes: state.dishes.dishes,
  restaurant: state.dishes.restaurant
});

export default connect(mapStateToProps, { getMenus, getRestaurant })(Menus);
