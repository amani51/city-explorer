import React from "react";


class Header extends React.Component{
  render (){
    return (
      <>
      <header style={{height:"100px",display:"flex",justifyContent:"center", "margin-top":"3rem"}}>
       <h1 style={{ border:"3px solid white","border-radius":"15px",textAlign:"center",padding:"1rem","align-self":"center",backgroundColor:"grey",color:"pink", width:"30%",borderColor:"gray"}}> City Explorer </h1> 
      </header>
      </>
    )
  }
}

export default Header