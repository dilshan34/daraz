import React, { Component } from "react";
import NavBar from "./Nav";
import {
  getProducts,
  findUser,
  purchaseProduct,
  redeemPoints,
} from "../utils/utils";
import Product from "../components/product";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      products: [],
      selectedProduct: null,
      redeemPoints: "",
      totalPoints: 0,
    };
  }

  componentDidMount() {
    this.getUser();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.user !== this.state.user) {
      console.log("componentDidUpdate");
      this.setState({ totalPoints: this.state.user[0].loyaltyPoints });
    }
  }

  getUser = () => {
    let email = localStorage.getItem("email");
    if (email !== null) {
      findUser(email)
        .then((response) => {
          if (response.data.length !== 0) {
            this.getProducts();
            this.setState({
              user: response.data,
              totalPoints: response.data[0].loyaltyPoints,
            });
          } else {
            alert("User not found");
            console.log("User not found");
          }
        })
        .catch((error) => {
          console.error(error);
        });
    } else {
      window.location.href = "/";
    }
  };

  getProducts = () => {
    getProducts()
      .then((response) => {
        this.setState({ products: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  selectedProduct = (res) => {
    //console.log(res);
    let req = {
      customerId: this.state.user[0].customerId,
      productId: res,
      points: 10,
    };
    purchaseProduct(req)
      .then((response) => {
        alert("Product Buy Successfully !!");
        this.getUser();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  redeemPoints = () => {
    let value = {
      customerId: this.state.user[0].customerId,
      loyaltyPoints: parseInt(this.state.redeemPoints),
    };
    if (this.state.redeemPoints.trim() !== "") {
      redeemPoints(value)
        .then((response) => {
          console.log(response.status);

          this.setState({ redeemPoints: "" });
          alert("Points Redeem Successfully !!");
          this.getUser();
        })
        .catch((error) => {
          alert("Points not enough to Redeem !!");
          console.log(error);
        });
    }else{
      alert("Try again")
    }
  };

  render() {
    return (
      <div>
        <div>
          <NavBar />
        </div>
        <div className="row">
          <div className="col-md-8 bg-light">
            {this.state.products.map((res) => (
              //   <div>{res.name}</div>
              <div>
                <Product
                  selectedProduct={(res) => this.selectedProduct(res)}
                  name={res.name}
                  price={res.price}
                  id={res.id}
                />
              </div>
            ))}
          </div>
          <div className="col-md-4 ">
            <div>
              <Card style={{ width: "18rem" }}>
                <Card.Body>
                  <Card.Title style={{ fontSize: "20px" }}>
                    Total Points
                  </Card.Title>
                  <Card.Text>{this.state.totalPoints}</Card.Text>
                </Card.Body>
              </Card>
            </div>
            <div style={{ padding: "10px" }}>
              <Row>
                <Col>
                  <Form.Control
                    size="lg"
                    type="number"
                    value={this.state.redeemPoints}
                    placeholder="Enter Redeem Points"
                    onChange={(e) =>
                      this.setState({ redeemPoints: e.target.value })
                    }
                  />
                </Col>
              </Row>
              <br />
              <Button variant="success" onClick={this.redeemPoints}>
                Redeem Points
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
