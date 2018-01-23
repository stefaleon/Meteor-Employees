import React from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import { Employees } from '../../imports/collections/employees';
import EmployeeDetail from './employee_detail';

const EmployeeList = (props) => {

  console.log(props.employeesprop);

  return (
    <div>
      <div className="employeelist">
        {props.employeesprop
          .map( x => <EmployeeDetail key={x._id} employeedetailprop={x} />)}
      </div>
    </div>
  );
};

export default withTracker(() => {
  Meteor.subscribe('employees');
  return { employeesprop: Employees.find({}).fetch() }
})(EmployeeList);
