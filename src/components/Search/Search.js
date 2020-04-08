import React, { Component } from 'react'
import EmployeeContainer from '../EmployeeContainer/EmployeeContainer.js'

class Search extends Component {

    onChange = (e) => this.props.onSearch(e)

    render() {
        return (

            <div>
                <div className="jumbotron jumbotron-fluid">
                    <div className="container">
                        <h1 className="display-4">Welcome to STAFF Map</h1>
                        <p className="lead">Search for members of your staff by name.</p>
                        <input type="text" onChange={this.onChange} placeholder="Search by Name" className="form-control" id="empName" aria-describedby="employee name" />

                    </div>
                </div>
                <EmployeeContainer employeeData={this.props.employeeData} />
            </div>
        );
    }
}

export default Search