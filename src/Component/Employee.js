import React, { Component } from 'react';
class Employee extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (

        <tr>
          <td className="employee-item">{this.props.number+1}</td>
          <td className="employee-item"><img src={this.props.data.picture.thumbnail}></img></td>
          <td className="employee-item">{this.props.data.name.title} {this.props.data.name.first} {this.props.data.name.last}</td>
          <td className="employee-item">{this.props.data.email}</td>
          <td className="employee-item">{this.props.data.phone}</td>
          <td className="employee-item">{this.props.data.gender}</td>
          <td className="employee-item">{this.props.data.dob.age}</td>
        </tr>
    )
  }
}

export default Employee;