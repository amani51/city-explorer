import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
class CityForm extends React.Component{

  constructor(props){
    super(props);
    this.state={
      displayName:"",
      latitude:"",
      longitude:""
    }
  }
  getData= async (event)=>{
    event.preventDefault();
    let location=event.target.city.value;
    let urlLink=`https://us1.locationiq.com/v1/search?key=pk.beb608537885b07487c50d38dce0d845&q=${location}&format=json`
    let responseData = await axios.get(urlLink);
    // console.log(responseData.data[0])
    this.setState({
      displayName: responseData.data[0].display_name,
      latitude:responseData.data[0].lat,
      longitude:responseData.data[0].lon,
    })
  }

  render (){
    return (
      <>
       <Form onSubmit={this.getData}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="text" name="city" placeholder="Enter a location" />
      </Form.Group>
      <Button variant="primary" type="submit">
      Explore!
      </Button>
    </Form>
    <div>
      <p>
      display_name: {this.state.displayName}
      </p>
      <p>
      latitude: {this.state.latitude}
      </p>
      <p>
      longitude: {this.state.longitude}
      </p>
    </div>
      </>
    )
  }
}
export default CityForm