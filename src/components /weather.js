import React from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
class Weather extends React.Component {
  constructor(props) {
    super(props);
    this.sate = {
      day: [],

    };
  }
  requestDate = async () => {
    const url = `http://localhost:3000/weather?city_name=${this.props.city_name
      .split(" ")[0]
      .replace(/,/g, "")}&lat=${this.props.lat}&lot=${this.props.lot}`;
    try {
      const responseData = await axios.get(url);
      console.log(responseData.data);
      this.setState({
        day: responseData.data[0],
      });
    } catch {
      console.log("error");
    }
    
  };

  render() {
    return (
      <>
        <h2>Weather {this.requestDate}</h2>
        <Button variant="primary" type="submit" onClick={this.requestDate}>
          weather
        </Button>
      </>
    );
  }
}

export default Weather;
