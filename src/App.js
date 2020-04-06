import React, { Component } from "react";
import SearchEmployees from "./components/SearchEmployees"
import Employees from "./components/Employees"
import employeesJSON from "./employees.json";


class App extends Component {


  render() {
  return (
    <div>
     <SearchEmployees></SearchEmployees>
     <Employees>

     </Employees>
    </div>
  );
  }
}

export default App;
