import React from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Employees } from '../../imports/collections/employees'

const EmployeeList = (props) => {

  console.log(props.employeesprop);

  return (
    <div>
      <div className="employeelist">
        Employee List
      </div>
    </div>
  );
};

export default createContainer(() => {
  Meteor.subscribe('employees');
  return { employeesprop: Employees.find({}).fetch() }
}, EmployeeList);
