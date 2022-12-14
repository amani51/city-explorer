import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from "axios";
import Weather from "./weather";
import Movies from "./movies";
import Card from "react-bootstrap/Card";
class CityForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      city_name: "",
      lat: "",
      lot: "",
      errorFlag: false,
      mapFlag: false,
      day1: NaN,
      movies: NaN,
      moviesFlag:false,
      weatherFlag:false,
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
        city_name: responseData.data[0].display_name,
        lat: responseData.data[0].lat,
        lot: responseData.data[0].lon,
        errorFlag: false,
        mapFlag: true,
      });
      if (this.state.day1!=NaN){
        this.setState({
          weatherFlag:true,
        })
      }
      if (this.state.movies!=NaN){
        this.setState({
          moviesFlag:true,
        })
      }

    } catch {
      this.setState({
        errorFlag: true,
        mapFlag: false,
      });
    }
    console.log(this.state.city_name);
    const url = `${
      process.env.REACT_APP_URL
    }weather?city_name=${this.state.city_name
      .split(" ")[0]
      .replace(/,/g, "")}&lat=${this.state.lat}&lot=${this.state.lot}`;
    try {
      const responseData = await axios.get(url);
      console.log(
        this.state.city_name.split(" ")[0].replace(/,/g, ""),
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
    }movies?city_name=${this.state.city_name.split(" ")[0].replace(/,/g, "")}`;
    try {
      const responseData = await axios.get(moviesURL);
      console.log(
        this.state.city_name.split(" ")[0].replace(/,/g, ""),
        responseData.data
      );

      this.setState({
        movies: responseData.data,
      });
    } catch {
      console.log("error");
    }
  };

  render() {
    return (
      <>
        <Form onSubmit={(event)=>{this.getData(event)}} style={{width:"80%",display:"flex",justifyContent:"center","margin-top":"2rem"}}>
          <Form.Group
            className="mb-3"
            controlId="formBasicEmail"
            style={{
              width: "30%",
              display: "flex",
              justifyContent: "center",
              "margin-top": "1rem",
            }}
          ></Form.Group>
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
          </Form.Group>
          <Button variant="primary" type="submit" style={{
              width: "8%",
              display: "flex",
              justifyContent: "center",
              "margin-top": "1rem",
              height:"2.5rem",
              backgroundColor:"grey",color:"pink",borderColor:"gray"
            }}>
            Explore!
          </Button>
        </Form>
        <div style={{ width: "30rem","background-color":"rgba(223, 206, 218, 0.7)",display:"flex",justifyContent:"center", marginLeft:"29rem",marginBottom:"7rem"}} >
          <Card >
            <Card.Img
              variant="top"
              src={`https://maps.locationiq.com/v3/staticmap?key=pk.7aedc85ff3620b0d3b6865ccab5efd25&center=${this.state.lat},${this.state.lot}`}
            />
            <Card.Body style={{textAlign:"center","align-self":"center","padding-top":"1rem",backgroundColor:"whitesmoke",width:"100%"}}>
              <Card.Title>{this.state.city_name.split(" ")[0].replace(/,/g, "")}</Card.Title>
              <Card.Text>
                <p>latitude: {this.state.lat}</p>
                <p>longitude: {this.state.lot}</p>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        {this.state.errorFlag && <p>Location is not available! </p>}
        {this.state.weatherFlag && (
          <Weather day1={this.state.day1} />
        )}
        {this.state.moviesFlag && (
          <Movies movies={this.state.movies} />
        )}
      </>
    );
  }
}
export default CityForm;
