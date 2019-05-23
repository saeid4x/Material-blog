import React, { Component } from "react";
import { Card } from "@material-ui/core";
import { Button } from "@material-ui/core/Button";
import { MDBRow, MDBCol } from "mdbreact";
import "../../css/signup.css";
import Navbar from "../Navbar";
import Keys from "../config/Keys";
import axios from 'axios';
import {Link} from 'react-router-dom';
import GoogleLogin from 'react-google-login';
// import axios from 'axios'
class Signup extends Component {
  

  constructor(props){
    super(props); 
      // this.changeHandle=this.changeHandle.bind(this);
      // this.submitHandle=this.submitHandle.bind(this);
    

  }

  componentDidMount(){
     
    axios.get(Keys.URLS.BACKEND+'/auth/google/redirect')
    .then((res)=>res.json())
    .then((token)=>{
      if(token){
        console.log(token);
      }else{
        console.log('token not found');
      }
     
    }).catch((err)=>{console.log('err',err)});
    

  }
 
  state={
    username:'',
    password:'',
    email:'',
    userID:''
  }
  usernameHandle=(e)=>{
    this.setState({username:e.target.value})
   
  }
  passwordHandle=(e)=>{
    this.setState({password:e.target.value})
   
  }
  emailHandle=(e)=>{
    this.setState({email:e.target.value})
  }

  submitHandle=(e)=>{
    e.preventDefault();
    // axios.post(keys.URLS.BACKEND)
    var t=Keys.URLS.BACKEND;
    axios.post(Keys.URLS.BACKEND+'/auth/signup',this.state)   
    
      .then((res)=>{         
        //user successfully Registered
        console.log('res.data='+res.data);
        this.setState({
          userID:res.data.userID
        });
        console.log(res.data.token)
        var userInfo={
          token:res.data.tokan,
          userID:res.data.userID
        }
        
        localStorage.setItem('userID',this.state.userID);
        localStorage.setItem('token',res.data.token);
       
        window.history.pushState('','','/user/'+this.state.userID+'/dashboard');
    window.location.reload();

       
        // res.redirect('/users/dashboard')
     
      })
      .catch((err)=>{
        console.log(err);
      })
      
  }
  googleResponse(res){
    console.log('google response=',res)
  }
  render() {
    return (
      <div>
        <Navbar />
        <div className="signup-wrapper ">
        {/* action={`${Keys.urls.backendUrl}/admin/signup`} */}
          <form onSubmit={this.submitHandle} >
            <Card className="purple">
              <div className="sendpost-title">ثبت نام در سایت</div>
              <hr />
              <MDBRow>
                <MDBCol md="12">
                  <span>نام کاربری</span> 
                  <br />
                </MDBCol>
                <MDBCol md="5" className="offset-md-5">
                  <input type="text" name="username" onChange={this.usernameHandle} />
                </MDBCol>
                <MDBCol md="12">
                  <span> ایمیل</span>
                </MDBCol>
                <MDBCol md="5" className="offset-md-5">
                  <input type="text" name="email"  onChange={this.emailHandle}/>
                </MDBCol>
                <MDBCol md="12">
                  <span> کلمه عبور</span>
                </MDBCol>
                <MDBCol md="5" className="offset-md-5">
                  <input type="password" name="password"  onChange={this.passwordHandle} />
                </MDBCol>
                {/* <MDBCol md="12">
                        <span> تکرار کلمه عبور</span>
                    </MDBCol>
                    <MDBCol  md="5" className="offset-md-5">
                       <input type="password" name="password" />
                    </MDBCol> */}
              </MDBRow>
              {/* <Button   variant="outlined" color="secondary" >ثبت نام</Button> */}
              <MDBCol md="12">
                <a href={`${Keys.URLS.BACKEND}/auth/google`}>
                  <img
                    src="/images/static/signup-google.PNG"
                    className="signup-google-image"
                    alt=""
                  />
                </a>
                <GoogleLogin
                    clientId={Keys.google.ClientID}
                    buttonText="Sign Up With Google"
                    onFailure={this.googleResponse}
                    onSuccess={this.googleResponse}
                    
                />
                <input type="submit" value="ثبت نام" />
              </MDBCol>
            </Card>
          </form>
        </div>
      </div>
    );
  }
}
export default Signup;
