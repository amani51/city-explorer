import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components /header";
import Main from "./components /main";
import Footer from "./components /footer";

class App extends React.Component{
  render (){
    return (
      <body>
      <Header/>
      <Main/>
      <Footer/>
      </body>
    )
  }
}

export default App