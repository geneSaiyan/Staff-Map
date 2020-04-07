import React, { Component } from "react";
import SearchEmployees from "./components/SearchEmployees"
import Employees from "./components/Employees"
import employeesJSON from "./employees.json";


class App extends Component {

  state = {
    employeesJSON
  };
  

  render() {
  return (
    <div>
     <SearchEmployees></SearchEmployees>
     {this.state.employeesJSON.map(employee => (
          <Employees
            id={employee.id}
            key={employee.id}
            name={employee.name}
            image={employee.image}
            occupation={employee.occupation}
            location={employee.location}
          />
        ))}

    </div>
  );
  }
}

export default App;
