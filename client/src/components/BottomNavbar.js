import React, { Component } from "react";
import "../css/Navbar.css";
import { MDBCol, MDBRow, MDBBtn } from "mdbreact";
import { Link } from "react-router-dom";
import "../css/style.css";
import "../css/BottomNavbar.css";

class BottomNavbar extends Component {
 
  state = {
    categoryImage: "",
    categoryName:''
  };



  componentDidMount() {
   
  }

  render() {
    return (
      <div className="bottom-navbar">
        <MDBRow end> 

           <MDBCol md="5">
             <div className="bottom-navbar-describeSite">
            <img src="/images/static/2.png" alt=""/>
             <MDBCol><p>در این وبلاگ آموزش کامل زبان های برنامه نویسی ارائه داده می شود      </p></MDBCol>
             </div>
          </MDBCol>     

          <MDBCol>
            <p id="logo-text">وبلاگ من  </p>
          </MDBCol>

          <MDBCol md="2">
            <img src="/images/static/138.jpg" alt="" id="Logo" />
          </MDBCol>
          
         
             
           
        </MDBRow>
      </div>
    );
  }
}

export default BottomNavbar;
