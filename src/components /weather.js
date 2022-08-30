import React from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
class Weather extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      day1: NaN,

    };
  }
  requestDate = async () => {
    const url = `${process.env.REACT_APP_URL}weather?city_name=${this.props.city_name
      .split(" ")[0]
      .replace(/,/g, "")}&lat=${this.props.lat}&lot=${this.props.lot}`;
    try {
      const responseData = await axios.get(url);
      console.log(this.props.city_name
        .split(" ")[0].replace(/,/g, ""),responseData.data);
        
      this.setState({
        day1: responseData.data
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
        <p>
          {/* {this.state.day1&&this.state.day1[0].datetime} */}
          {/* this is conditional rendering */}
          {this.state.day1&&this.state.day1.map(item =>{
        return(
          <div>
           <p>DataTime:  {item.datetime} </p>
            <p>Description: {item.description}</p>
          </div>

        )
      })

      }
          
        </p>

        <Button variant="primary" type="submit" onClick={this.requestDate}>
          weather
        </Button>
      </>
    );
  }
}

export default Weather;
