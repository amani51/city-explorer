import React from "react";
import Row from "react-bootstrap/Row";
import WeatherDay from "./WeatherDay";

class Weather extends React.Component {
  render() {
    return (
      <>
        <h2>Weather</h2>
          <p>
            <Row xs={1} md={4} className="g-4">
              {this.props.day1 &&
                this.props.day1.map((item) => {
                  return (
                    <WeatherDay datetime={item.datetime} description={item.description}/>
                  );
                })}
            </Row>
          </p>
      </>
    );
  }
}

export default Weather;
