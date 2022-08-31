import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
class Movie extends React.Component {
  render() {
    return (
      <>
        <Col>
          <Card>
            <Card.Img variant="top" src={this.props.poster_path} />
            <Card.Body>
              <Card.Title>{this.props.title}</Card.Title>
              <Card.Text>
                {this.props.overview}
                <ul>
                  <li>Average votes: {this.props.vote_average}</li>
                  <li>Total votes: {this.props.vote_count}</li>
                  <li>Popularity: {this.props.popularity}</li>
                  <li>Released on: {this.props.release_date}</li>
                </ul>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </>
    );
  }
}

export default Movie;
