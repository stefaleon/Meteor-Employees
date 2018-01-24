import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import { Employees } from '../../imports/collections/employees';
import EmployeeDetail from './employee_detail';

const PER_PAGE = 10;

class EmployeeList extends Component {
  componentWillMount() {
    this.page = 1;
  }

  handleClick() {
    Meteor.subscribe('employees', PER_PAGE*(this.page + 1));
    this.page += 1;
  }

  render() {
    console.log(this.props.employeesprop);

    return (
      <div>
        <div className="employeelist">
          {this.props.employeesprop
            .map( x => <EmployeeDetail key={x._id} employeedetailprop={x} />)}
          <button
            onClick={this.handleClick.bind(this)}
            className="btn btn-primary btn-block">
            Load More
          </button>
        </div>
      </div>
    );
  }
}

export default withTracker(() => {
  Meteor.subscribe('employees', PER_PAGE);
  return { employeesprop: Employees.find({}).fetch() }
})(EmployeeList);
