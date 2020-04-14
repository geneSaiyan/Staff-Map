import React, { Component } from "react";
import { withRouter } from "react-router-dom";

var styles = {
  cardHeight: {
    height: "auto",
    width: "22rem",
    "margin-bottom": "1%"
  },
  imageHeight: {
    height: "200px"
  }
};

class EmployeeItem extends Component {

  render() {
    const { name, occupation, phone, email, image } = this.props.employee

    return (

      <div className="col-4">
        <div class="card" style={styles.cardHeight}>
          <img alt={this.props.name} src={image} style={styles.imageHeight} class="card-img-top" />
          <div class="card-body">
            <h5 class="card-title">{name} - {occupation}</h5>
            <p class="card-text test">Phone: {phone}</p>
            <p class="card-text">Email: {email}</p>
          </div> 
        </div>
      </div>


    );
  }
}

export default EmployeeItem