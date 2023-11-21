import React, { Component } from "react";
import { findUser, addCustomer } from "../utils/utils";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      name: "",
      errorMessage: "",
      empEmail: "",
    };
  }

  findUserByEmail = () => {
    let email = this.state.email;
    findUser(email)
      .then((response) => {
        if (response.data.length !== 0 && response.data[0].roleId === 2) {
          console.log("Authenticated:", response.data[0].customerId);
          localStorage.setItem("email", response.data[0].email);
          window.location.href = "/home";
        } else if (
          response.data.length !== 0 &&
          response.data[0].roleId === 1
        ) {
          localStorage.setItem("email", response.data[0].email);
          window.location.href = "/users";
        } else {
          alert("User not found");
          console.log("User not found");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  addCustomer = () => {
    let value = {
      name: this.state.name,
      email: this.state.empEmail,
      loyaltyPoints: 0,
      roleId: 2,
    };
    if (this.state.name.trim() !== "" && this.state.empEmail.trim() !== "") {
      console.log(this.state.name, "=======");
      addCustomer(value)
        .then((response) => {
          this.setState({ empEmail: "", name: "" });
          alert("User Added Successfully");
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      alert("Try Again");
    }
  };

  render() {
    const { email, name, empEmail } = this.state;

    return (
      <div>
        <div className="row">
          <div className="col-md-6 bg-light" style={{ padding: "50px" }}>
            <h2>Login</h2>
            <Form>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => this.setState({ email: e.target.value })}
                />
              </Form.Group>
            </Form>
            <Button onClick={this.findUserByEmail} variant="success">
              LogIn
            </Button>
          </div>
          <div className="col-md-6 bg-light">
            <h1>Sign Up</h1>
            <Form>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Name"
                  value={name}
                  onChange={(e) => this.setState({ name: e.target.value })}
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter your email"
                  value={empEmail}
                  onChange={(e) => this.setState({ empEmail: e.target.value })}
                />
              </Form.Group>
            </Form>
            <Button onClick={this.addCustomer} variant="success">
              Sign Up
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

// export default withRouter(Login);
export default Login;
