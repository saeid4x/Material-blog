import React, { Component } from 'react';
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBContainer }
from 'mdbreact';
import { Link } from "react-router-dom";
import '../css/HambergerMenu.css';

class hamburgerMenuPage extends Component {
state = {
collapseID: ''
}

toggleCollapse = collapseID => () => {
  this.setState(prevState => ({ collapseID: (prevState.collapseID !== collapseID ? collapseID : '') }));
}

render() {
  return (
    <MDBContainer>
      <MDBNavbar color="bg-primary" style={{ marginTop: '20px' }} dark>
        <MDBContainer>
          <MDBNavbarBrand className="white-text">
            مدیریت مطالب
          </MDBNavbarBrand>
          <MDBNavbarToggler image="https://mdbootstrap.com/img/svg/hamburger3.svg?color=00FBD8" onClick={this.toggleCollapse('navbarCollapse11')} />
          <MDBCollapse id="navbarCollapse11" isOpen={this.state.collapseID} navbar>
            <MDBNavbarNav left>
              <MDBNavItem  >
                <Link to="/admin/sendpost"  className="hamberger-link">ارسال پست</Link>
              </MDBNavItem>
              <MDBNavItem >
                <Link to="/admin/managepost" className="hamberger-link" >مدیریت پست </Link>
              </MDBNavItem>
              <MDBNavItem>
                {/* <Link to="#!" className="hamberger-link">Profile</Link> */}
              </MDBNavItem>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
    </MDBContainer>
    );
  }
}

export default hamburgerMenuPage;