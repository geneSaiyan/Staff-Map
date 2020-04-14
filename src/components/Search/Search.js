import React, { Component } from 'react'
import EmployeeContainer from '../EmployeeContainer/EmployeeContainer.js'

class Search extends Component {

    onChange = (e) => this.props.onSearch(e)

    render() {
        return (

            <div>
                <div className="jumbotron jumbotron-fluid search-background">
                    <div className="container">
                        <h1 style={{color: "gold"}}><i>Welcome to STAFF Map</i></h1>
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