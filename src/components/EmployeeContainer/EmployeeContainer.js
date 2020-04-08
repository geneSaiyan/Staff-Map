import React, {Component} from 'react'
import {TransitionMotion} from 'react-motion';
import EmployeeItem from '../EmployeeItem/EmployeeItem.js'


class EmployeeContainer extends Component {

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
                  <EmployeeItem key={key}  employee={data}/>
                )}
          </div>
            }
          </TransitionMotion>
            </div>
        );
    }
}

export default EmployeeContainer