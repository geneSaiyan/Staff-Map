import React from "react";

function SearchEmployees() {
  return (<div className="jumbotron jumbotron-fluid">
    <div className="container">
      <h1 className="display-4">Welcome to STAFF Map</h1>
      <p className="lead">Search for members of your staff by name.</p>
      <div className="input-group mb-3" >
        <input type="text" className="form-control" placeholder="Employee's Name" aria-label="Employeee's Name" aria-describedby="btnEmpSearch"/>
          <div className="input-group-append">
            <button className="btn btn-success" type="button" id="btnEmpSearch">Search</button>
          </div>
</div>
      </div>
    </div>);
}

export default SearchEmployees;
