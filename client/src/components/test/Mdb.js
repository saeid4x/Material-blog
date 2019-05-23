import React, { Component } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import './test.css';
import ButtomNavigation from '../BottomNavbar';
// import HambergerMenu from '../HambergerMenu';
import SidePanel from '../admin/SidePanel'
import SignUP from '../admin/Signup';
import Redux from './Redux';

class Mdb extends Component {


  componentDidMount(){
    console.log(localStorage.getItem('accessToken'));
  }
  render() {
    return (
      <div>
       <SignUP/>
       
      



       </div>
    );
  }
}
 export default Mdb;