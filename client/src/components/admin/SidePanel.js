import React, { Component } from "react";
import "../../css/SidePanel.css";
import "../../css/style.css";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import {Link} from 'react-router-dom';
import axios from 'axios';
import { MDBRow, MDBCol } from "mdbreact"; 
import Keys from '../config/Keys'

class SidePanel extends Component {
  constructor(props){
    super(props);
    
  }
  state={
    username:null,
    avatar:null
  }
  componentDidMount(){
    // console.log('side bar');
    if(!localStorage.getItem('token') || localStorage.getItem('token')=== undefined){
      this.props.history.push('/signup');
    }
    else{
      axios.get(Keys.URLS.BACKEND+'/user/'+localStorage.getItem('userID'))
     
      .then((data)=>{
        this.setState({
          username:data.data.local.username,
          avatar:data.data.profile.avatar
        });
         
      })
    }
   
  }
  render() {
    
    return (
      <div className="sidePanel">
        <section className="sidePanel-avatar row">
          <img src={this.state.avatar} alt="" className="col-md-8 sidePanel-avater-img" />

          <span className="col-md-12"> {this.state.username}</span>
        </section>
       

        <hr />

        <section className="sidePanel-category">
         <ul>
             <li id="sidePanel-list-addpost">
                <Link to="/admin/sendpost">  <span> ارسال پست جدید</span></Link>
               
                 <img src='/images/static/add-post.png'/>
             </li>
       
         
             <li id="sidePanel-list-managepost">
                 <div>
                     <Link to="/admin/managepost"><span> مدیریت پست</span></Link>
                 
                 <img src='/images/static/add-post.png'/>
                 </div>
          
             </li>
             </ul>
          



        </section>
      </div>
    );
  }
}
export default SidePanel;
