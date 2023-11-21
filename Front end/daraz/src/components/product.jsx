import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  setSelectedId = (id) => {
    this.props.selectedProduct(id);
  };

  render() {
    return (
      <Card>
        <Card.Header>Loyalty points - 10</Card.Header>
        <Card.Body>
          <Card.Title>{this.props.name}</Card.Title>
          <Card.Text>
            <div className="row">
              <div className="col-md-12 d-flex ">
                <div>Rs:</div>
                <div>{this.props.price}</div>
              </div>
            </div>
          </Card.Text>
          <Button
          onClick={() => this.setSelectedId(this.props.id)}
            variant="primary"
          >
            Buy
          </Button>
        </Card.Body>
      </Card>
    );
  }
}

export default Product;
