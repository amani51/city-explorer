import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";

class WeatherDay extends React.Component {
  render() {
    return (
      <>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>DataTime: {this.props.datetime}</Card.Title>
              <Card.Text>Description: {this.props.description}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </>
    );
  }
}

export default WeatherDay;
