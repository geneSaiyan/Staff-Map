import React, {Component} from 'react'
import {TransitionMotion, spring, presets} from 'react-motion';
import EmployeeListItem from '../EmployeeListItem/EmployeeListItem.js'


class EmployeeList extends Component {

    //Function used to render the employees from the employeejson file
    getEmployeeList = () => {
        return this.props.employeeData.map(employee => ({...employee}));
    };

    //Function used to render the employees returned from the search by the user
    getSearchList = () => {
        const {employeeData} = this.props;
    
        return employeeData.map((employee, i) => {
        return {
            ...employee
        };
        });
    };

    render() {
        return (
            <div className="container-fluid">
            <TransitionMotion
            defaultStyles={this.getEmployeeList()}
            styles={this.getSearchList()}>
            {styles =>
            <div>
                {styles.map(({key, data}) =>
                  <EmployeeListItem key={key}  employee={data}/>
                )}
          </div>
            }
          </TransitionMotion>
            </div>
        );
    }
}

export default EmployeeList