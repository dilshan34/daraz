import React, { Component } from 'react'

import Card from 'react-bootstrap/Card';

class Customer extends Component {
    state = {  } 
    render() { 
        return (
            <Card className="text-center">
            <Card.Header>{this.props.name}</Card.Header>
            <Card.Body>
              <Card.Title>{this.props.email}</Card.Title>
              <Card.Text>
              {this.props.points}
              </Card.Text>
             
            </Card.Body>
           
          </Card>
        );
    }
}
 
export default Customer;