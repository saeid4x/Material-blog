import React, { Component } from "react";
import "../css/Navbar.css";
import { MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem ,MDBCol,MDBRow,MDBBtn} from "mdbreact";
import {Link} from 'react-router-dom';
import '../css/style.css';
class Navbar extends Component {
  render() {
    return (
      <div className="mynav fixed-top">
        <MDBRow end> 
          <MDBCol md="2"><Link to="/contact-me">  <span className="mynav-text-menu pt-md-3 pl-md-5 ml-md-3">تماس با من </span></Link> </MDBCol>
          <MDBCol md="2">  <Link to="/contact-me">  <span className="mynav-text-menu pt-md-3 pl-md-5 ml-md-3">درباره من </span></Link> </MDBCol>
          
        <MDBCol md="2">
          <MDBDropdown className="my-dropdown">
              <MDBDropdownToggle caret color="secondary">
                مطالب سایت  
              </MDBDropdownToggle>
              
              <MDBDropdownMenu basic>
                <MDBDropdownItem ></MDBDropdownItem>
                

              <Link to='/cat/programming' className="dropdown-text"> <MDBDropdownItem>برنامه نویسی</MDBDropdownItem> </Link>
              <Link to='/cat/mobile-programming' className="dropdown-text"> <MDBDropdownItem>برنامه نویسی موبایل</MDBDropdownItem> </Link>
              <Link to='/cat/database' className="dropdown-text"> <MDBDropdownItem>پایگاه داده </MDBDropdownItem> </Link>
              <Link to='/cat/graphic' className="dropdown-text"> <MDBDropdownItem>گرافیک </MDBDropdownItem> </Link>
              <Link to='/cat/animation' className="dropdown-text"> <MDBDropdownItem>انیمیشن</MDBDropdownItem> </Link>
              <Link to='/cat/general' className="dropdown-text"> <MDBDropdownItem>عمومی </MDBDropdownItem> </Link>
              
                <MDBDropdownItem divider   />  
              <Link to='/cat/' className="dropdown-text"> <MDBDropdownItem>سایر</MDBDropdownItem> </Link>
 
              </MDBDropdownMenu>
            </MDBDropdown>             
    </MDBCol> 
    <MDBCol className="mynav-brand" md="2"><span className="ml-md-4 "><a href="http://127.0.0.1:3000/homepage">وبلاگ من  </a></span> </MDBCol>
    </MDBRow>


    
       
      </div>
    );
  }
}

export default Navbar;
