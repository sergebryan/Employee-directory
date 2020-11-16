import React, { Component } from 'react';
import './App.css';
import Employee from './Component/Employee';
import Heading from './Component/Heading';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      employees: [],
      currEmployee: []
    };
    this.searchTrigger = this.searchTrigger.bind(this);
    this.viewAll = this.viewAll.bind(this);
    this.sortEmployeesA = this.sortEmployeesA.bind(this);
    this.sortEmployeesD = this.sortEmployeesD.bind(this);
    this.sortByText = this.sortByText.bind(this);
  }

  componentDidMount() {
    // fetch data
    fetch("https://randomuser.me/api/?results=30&nat=us")
      .then(res => res.json())
      .then(
        (result) => {
          console.log(result.results);
          let lst = result.results;
          this.setState({
            employees: lst,
            currEmployee: lst
          });
        },
        (error) => {
          console.log(error)
        }
      )
  }

  searchTrigger(){
    let val= document.getElementById("emp-inp").value.toLowerCase();
    if(val === ""){
      alert("Type something to search!")
    }else{
      // searching
      let pst =  this.state.employees;
      let lst =pst.filter(item=>(item.name.first.toLowerCase().includes(val) || item.name.last.toLowerCase().includes(val)));
      console.log(lst)
      this.setState({
        currEmployee: lst
      });
    }
  }

  viewAll(){
    let lst = this.state.employees;
      this.setState({
        currEmployee: lst
      });
  }

  sortByText(a, b, order = "ASC") {
    let aa = a.name.first+a.name.last;
    let bb = b.name.first+b.name.last;

    const diff = aa.toLowerCase().localeCompare(bb.toLowerCase());

    if (order === "ASC") {
        return diff;
    }

    return -1 * diff;
}
  sortEmployeesA(){
    let lst = this.state.employees;
    lst.sort((a,b)=>(this.sortByText(a,b, "ASC")) );
    this.setState({
      currEmployee: lst
    });
  }

  sortEmployeesD(){
    let lst = this.state.employees;
    lst.sort((a,b)=>(this.sortByText(a,b, "DSC")) );
    this.setState({
      currEmployee: lst
    });
  }

  render() {
    return (
      <>
        <Heading />
        
        <div className="employee-div">
          <div className="inner-div">
          <input type="text" id="emp-inp" placeholder="Search by Name"></input>
          <button onClick={this.searchTrigger}>Search Employee</button>
          <button onClick={this.viewAll}>See All Employee</button>
          <button onClick={this.sortEmployeesA}>Sort By Name (Asc)</button>
          <button onClick={this.sortEmployeesD}>Sort By Name (Dsc)</button>
            <table>
              <tr>
                <th>S No.</th>
                <th>Image</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Gender</th>
                <th>Age</th>
              </tr>
              {this.state.currEmployee.map((item, i) =>
                <Employee key={item.id.value} data={item} number={i} />
              )
              }
          </table>
          </div>
        </div>

      </>
    )
  }
}

export default App;