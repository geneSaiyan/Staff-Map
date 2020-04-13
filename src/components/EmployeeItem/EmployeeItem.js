import React, { Component } from "react";

var styles = {
  cardHeight: {
    height: "auto",
    width: "22rem"
  }
};

class EmployeeItem extends Component {

  render() {
    const { name, occupation, phone, email, image } = this.props.employee

    return (

      <div className="col-4">
        <div class="card" style={styles.cardHeight}>
          <img alt={this.props.name} src={image} class="card-img-top" />
          <div class="card-body">
            <h5 class="card-title">{name} - {occupation}</h5>
            <p class="card-text">Phone: {phone}</p>
            <p class="card-text">Email: {email}</p>
          </div>
        </div>
      </div>


    );
  }
}

export default EmployeeItem