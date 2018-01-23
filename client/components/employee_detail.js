import React from 'react';

const EmployeeDetail = (props) => {
  const emp = props.employeedetailprop;
  return (
    <div className="thumbnail">      
      <img src={emp.avatar} />
      <div className="caption">
        <h3>{emp.name}</h3>
        <ul className="list-group">
          <li className="list-group-item">Email: {emp.email} </li>
          <li className="list-group-item">Phone: {emp.phone}</li>
        </ul>
      </div>
    </div>
  );
};

export default EmployeeDetail;
