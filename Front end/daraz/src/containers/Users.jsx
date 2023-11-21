import React, { Component } from "react";
import { findUser } from "../utils/utils";
import Customer from "../components/Customer";
import Button from "react-bootstrap/Button";

class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
    };
  }

  componentDidMount() {
    this.getAllUsers();
  }

  filterCustomers(val) {}

  getAllUsers = () => {
    let email = localStorage.getItem("email");
    if (email !== null) {
      findUser()
        .then((response) => {
          this.setState({ users: response.data });
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      window.location.href = "/";
    }
  };
  handleLogout = () => {
    localStorage.clear();
    window.location.href = "/";
  };

  render() {
    const { users } = this.state;
    const filteredUsers = users.filter((user) => user.roleId === 2);
    return (
      <div>
        <div style={{ margin: "20px" }}>
          <Button onClick={this.handleLogout}>Log Out</Button>
        </div>
        <div>
          {filteredUsers?.map((res) => (
            <div key={res.customerId}>
              <Customer
                name={res.name}
                email={res.email}
                points={res.loyaltyPoints}
              />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Users;
