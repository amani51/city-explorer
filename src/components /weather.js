import React from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
class Weather extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      day1: NaN,
      movies: NaN,
    };
  }
  requestDate = async () => {
    const url = `${
      process.env.REACT_APP_URL
    }weather?city_name=${this.props.city_name
      .split(" ")[0]
      .replace(/,/g, "")}&lat=${this.props.lat}&lot=${this.props.lot}`;
    try {
      const responseData = await axios.get(url);
      console.log(
        this.props.city_name.split(" ")[0].replace(/,/g, ""),
        responseData.data
      );

      this.setState({
        day1: responseData.data,
      });
    } catch {
      console.log("error");
    }
    // http://localhost:3003/movies?city_name=Paris
    const moviesURL = `${
      process.env.REACT_APP_URL
    }movies?city_name=${this.props.city_name.split(" ")[0].replace(/,/g, "")}`;
    try {
      const responseData = await axios.get(moviesURL);
      console.log(
        this.props.city_name.split(" ")[0].replace(/,/g, ""),
        responseData.data
      );

      this.setState({
        movies: responseData.data,
      });
    } catch {
      console.log("error");
    }
    // console.log("day1",this.state.day1)
  };

  render() {
    return (
      <>
        <h2>Weather {this.requestDate}</h2>
        <Button variant="primary" type="submit" onClick={this.requestDate}>
          weather
        </Button>
        <p>
          {/* {this.state.day1&&this.state.day1[0].datetime} */}
          {/* this is conditional rendering */}
          {this.state.day1 &&
            this.state.day1.map((item) => {
              return (
                <ul >
                  <li >DataTime: {item.datetime} </li>
                  <li>Description: {item.description}</li>
                </ul>
              );
            })}
        </p>
        <p>
          {/* {this.state.day1&&this.state.day1[0].datetime} */}
          {/* this is conditional rendering */}
          <Row xs={1} md={4} className="g-4">
            {this.state.movies &&
              this.state.movies.map((item) => {
                return (
                  <Col>
                    <Card>
                      <Card.Img variant="top" src={item.poster_path} />
                      <Card.Body>
                        <Card.Title>{item.title}</Card.Title>
                        <Card.Text>
                          {item.overview}
                          <ul>
                            <li>Average votes: {item.vote_average}</li>
                            <li>Total votes: {item.vote_count}</li>
                            <li>Popularity: {item.popularity}</li>
                            <li>Released on: {item.release_date}</li>
                          </ul>
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                );
              })}
          </Row>
        </p>
      </>
    );
  }
}

export default Weather;
