import React, {Component} from 'react'
import employeeList from './employeeList.json';
import Search from './components/Search/Search.js'



const filterEmployee = (searchText, maxResults) => {
  return employeeList.filter((employee) => {
    if (employee.data.name.toLowerCase().includes(searchText.toLowerCase())) {
      return true;
    }
    return false;
  }).slice(0, maxResults);
}

var maxResults = 4;

class App extends Component {


      state = {
            selectedEmployee: employeeList[0].data,
            filteredEmployee: filterEmployee('', maxResults)
        }
    

    onSearch = (event) => {
        this.setState({
            filteredEmployee: filterEmployee(event.target.value, maxResults)
        });
    }

    onEmployeeClick = (employee) => {
        this.setState({
            selectedEmployee: {name: employee.name, info: employee.info, contact: employee.contact}
        });
    }

    render() {
        return (
            <div>
 <Search onSearch={this.onSearch} employeeData={this.state.filteredEmployee} />
            </div>
           
        );
    }
}

export default App;

