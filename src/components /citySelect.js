import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Ratio from "react-bootstrap/Ratio";
import axios from "axios";
import Weather from "./weather";
class CityForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayName: "",
      latitude: "",
      longitude: "",
      errorFlag: false,
      mapFlag: false,
    };
  }
  getData = async (event) => {
    event.preventDefault();
    let location = event.target.city.value;
    console.log(location);
    let urlLink = `https://us1.locationiq.com/v1/search?key=pk.beb608537885b07487c50d38dce0d845&q=${location}&format=json`;
   

    try {
      let responseData = await axios.get(urlLink);
      console.log(responseData.data);
      this.setState({
        displayName: responseData.data[0].display_name,
        latitude: responseData.data[0].lat,
        longitude: responseData.data[0].lon,
        errorFlag: false,
        mapFlag: true,
      });
      // console.log(this.state.displayName)
    } catch {
      this.setState({
        errorFlag: true,
        mapFlag: false,
      });
    }
     console.log(this.state.displayName)
  };

  render() {
    return (
      <>
        <Form onSubmit={this.getData}>
          <Form.Group
            className="mb-3"
            controlId="formBasicEmail"
            style={{
              width: "30%",
              display: "flex",
              justifyContent: "center",
              "margin-top": "1rem",
            }}
          >
            <Form.Control
              type="text"
              name="city"
              placeholder="Enter a location"
            />
            <Form.Control.Feedback type="invalid">
              Please provide a valid city.
            </Form.Control.Feedback>
          </Form.Group>
          <Button variant="primary" type="submit">
            Explore!
          </Button>
        </Form>
        <div>
          <p>display_name: {this.state.displayName}</p>
          <p>latitude: {this.state.latitude}</p>
          <p>longitude: {this.state.longitude}</p>
          {this.state.mapFlag && (
            <div style={{ width: 660, height: "auto" }}>
              <Ratio aspectRatio="16x9">
                <img
                  src={`https://maps.locationiq.com/v3/staticmap?key=pk.7aedc85ff3620b0d3b6865ccab5efd25&center=${this.state.latitude},${this.state.longitude}`}
                ></img>
              </Ratio>
            </div>
          )}
        </div>
        {this.state.errorFlag && <p>Location is not available! </p>}
        <Weather city_name={this.state.displayName} lat={this.state.latitude} lot={this.state.longitude} />
      </>
    );
  }
}
export default CityForm;
