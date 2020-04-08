import React, {Component} from "react"

class EmployeeItem extends Component {

    render() {
        const {name, image} = this.props.employee

        return (
            <div className="employee-item" style={this.props.style} >
               <div className="card mb-3" style={this.props.style}>
            <div className="row no-gutters">
              <div className="col-md-4">
                <img alt={this.props.name} src={image} className="card-img"/>
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">Name: {name}</h5>
                  <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                </div>
              </div>
            </div>
          </div>
            </div>
        );
    }
}

export default EmployeeItem